import { useEffect } from "react";

export const Canvas = ({ url, canvasId, width, height }) => {
  const drawImageOnCanvas = (url) => {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.crossOrigin = "anonymous"; // Allow cross-origin image loading

    img.onload = function () {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
    console.log(url);

    img.src = url;
  };

  useEffect(() => {
    drawImageOnCanvas(url);
  }, []);

  return <canvas id={canvasId}></canvas>;
};
