"use client";

import React from "react";
import { Row, Col } from "react-bootstrap";
import AdminAllProductsCard from "./DashAllProductsCard";
import DashBreadcrumb from "../Uitily/DashBreadcrumb";

const DashAllProducts = () => {
  return (
    <Row className="justify-content-start">
      <Col>

        <div className="square mb-3">
          <div aria-label="breadcrumb">
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item active" aria-current="page">الاعلانات</li>
            </ol>
          </div>
        </div>

        <AdminAllProductsCard />
        <AdminAllProductsCard />
        <AdminAllProductsCard />
        
      </Col>
    </Row>
  );
};

export default DashAllProducts;
