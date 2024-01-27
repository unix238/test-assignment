import React from "react";
import { useLocation } from "react-router-dom";
import { Canvas } from "../../components/UI/Canvas/Canvas";

export const Product = () => {
  const location = useLocation();
  const product = location.state.product;

  return (
    <div className='wrapper'>
      <Canvas url={product.images[0]} canvasId={`name-${product.id}`} />
      <div className='title'>
        <div dangerouslySetInnerHTML={{ __html: product.bodyHtml }} />
      </div>
    </div>
  );
};
