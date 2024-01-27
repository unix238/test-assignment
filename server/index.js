import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import axios from "axios";
import Product from "./product.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/get", async (req, res) => {
  try {
    const products = await Product.find({});
    return res.status(200).json(products);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "Server error" });
  }
});

const loadProducts = async () => {
  const graphqlQuery = `query {
    products(first: 10) {
      edges {
        node {
          id
          bodyHtml
          images(first: 1) {
            nodes {
              src
            }
          }
        }
      }
    }
  }`;

  try {
    const request = await axios.post(
      process.env.REQUEST_URL,
      {
        query: graphqlQuery,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Access-Token": process.env.ACCESS_TOKEN,
        },
      }
    );
    const data = request?.data?.data?.products?.edges;
    data.forEach(async (item) => {
      const { id, bodyHtml } = item?.node;
      const images = item?.node.images?.nodes?.map((image) => image.src);

      const condidate = await Product.findOne({ id });
      if (condidate) {
        condidate.bodyHtml = bodyHtml;
        condidate.images = images;
        await condidate.save();
        return;
      }
      const newProduct = await Product.create({
        id,
        bodyHtml,
        images,
      });
      await newProduct.save();
    });
  } catch (e) {
    console.log("error fetching products", e);
  }
};

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    app.listen(3000, () => {
      loadProducts();
      console.log("listening on port 3000");
    });
  } catch (e) {
    console.log(e);
  }
};

start();
// PS: Я бы мог декомпозировать код на модули, но в рамках тестового задания считаю что это не нужно.
