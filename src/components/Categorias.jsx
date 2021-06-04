import React from "react";
import "../assets/styles/components/Categorias.scss";
const Categorias = ({ children }) => (
  <div className="categories">
    <h3 className="categories__title">Mi lista</h3>
    {children}
  </div>
);
export default Categorias;
