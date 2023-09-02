"use clinte";

import React from "react";

const DashBreadcrumb = () => {
  return (
    <div className="square mb-3">
      <div aria-label="breadcrumb">
        <ol class="breadcrumb mb-0">
          <li class="breadcrumb-item"><a href="#">الاعلانات</a></li>
          <li class="breadcrumb-item active" aria-current="page">Library</li>
        </ol>
      </div>
    </div>
  );
};

export default DashBreadcrumb;
