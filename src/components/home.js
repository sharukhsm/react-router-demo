import React from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>home</div>
      <button onClick={() => navigate("order-summary")}>Buy now</button>
    </>
  );
};
