"use client";

import React from "react";
import { Container, Row, Col, FormControl } from "react-bootstrap";   

const NavCategory = () => {
  return (
    <div className="nav-category py-3">
      <Container>
        <Row>   
          <Col>
            <div className="all-category d-flex">
              <div className="item">
                <img src="./images/icons/all.svg" width={30} height={30} alt="icon all" />
                <p className="mt-1">الكل</p>
              </div>
              <div className="item">
                <img src="./images/icons/estate.svg" width={30} height={30} alt="icon estate" />
                <p className="mt-1">العقارات</p>
              </div>
              <div className="item">
                <img src="./images/icons/cars.svg" width={30} height={30} alt="icon cars" />
                <p className="mt-1">السيارات</p>
              </div>
              <div className="item">
                <img src="./images/icons/devices.svg" width={30} height={30} alt="icon devices" />
                <p className="mt-1">الأجهزة</p>
              </div>
            </div>
          </Col>
          <Col lg="3">
            <div className="search-bar position-relative">
              <FormControl
                // value={searchWord}
                // onChange={onChangeSearch}
                type="search"
                placeholder="ابحث..."
                className="me-2 w-100"
                aria-label="Search"
              />
              <button className="icon-search">
                <img src="./images/icons/search.svg" width={17} alt="icon search" />
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavCategory;
