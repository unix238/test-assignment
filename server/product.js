import mongoose from "mongoose";

const schema = new mongoose.Schema({
  id: String,
  bodyHtml: String,
  images: Array,
});

export default mongoose.model("Product", schema);
