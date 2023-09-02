"use client";

import React, { useState } from "react";
import Card from "./Card";

const AllProducts = () => {

  const [statusCard, setStatusCard] = useState("");

  return (
    <>
      <div className="sort-porduct d-flex my-4 py-3 px-2 square">
        <div className="item px-2" onClick={(e) => setStatusCard("")}>
          <img src="./images/icons/big-card.png" width={20} height={20} alt="icon logo" />
        </div>
        <div className="item px-2" onClick={(e) => setStatusCard("small-cards")}>
          <img src="./images/icons/small-card.png" width={20} height={20} alt="icon logo" />
        </div>
      </div>
      <div className={`all-products ${statusCard} py-3 pt-0`}>
        <Card />
        <Card />
        <Card />
      </div>        
    </>
  );
};
  
export default AllProducts;
