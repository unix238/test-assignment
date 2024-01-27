import { useEffect } from "react";
import {
  fetchProductsFailure,
  fetchProductsRequest,
  fetchProductsSuccess,
} from "../../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import cl from "./Main.module.css";
import { Canvas } from "../../components/UI/Canvas/Canvas";
import { useNavigate } from "react-router-dom";

export const Main = () => {
  const products = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProductsRequest());
    fetch("http://localhost:3000/get")
      .then((response) => response.json())
      .then((data) => dispatch(fetchProductsSuccess(data)))
      .catch((error) => dispatch(fetchProductsFailure(error.message)));
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className='wrapper'>
      <div className={cl["product-list-container"]}>
        {products.map((product) => (
          <div
            key={product.id}
            className={cl["product-card"]}
            onClick={() => {
              navigate("/product", { state: { product } });
            }}
          >
            <div className={cl["image"]}>
              <Canvas
                url={product.images[0]}
                canvasId={`canvas-${product.id}`}
              />
            </div>
            <div
              className='title'
              dangerouslySetInnerHTML={{
                __html: product.bodyHtml.split("Latching Switches")[0],
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
