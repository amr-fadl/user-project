"use client";

import React from "react";
import img from "@/public/images/product/1.jpg";
import Link from "next/link";

const DashAllProductsCard = () => {

  return (
    <div className="card-sit square mb-4">
      <div className="product-content">
        <div className="d-flex gap-3 mb-3">
          <Link href="/dashboard/ads/edit" class="btn btn-outline-primary">تعديل</Link>
          <button type="button" class="btn btn-outline-danger">حذف</button>
        </div>
        <h2>للبيع طابعه و سكانر ماركة كانون</h2>
        <p>
          عندي طابعة ماركة كانو محتاج ابيعها ومتواجد للفحصعندي طابعة ماركة كانو
          محتاج ابيعها ومتواجد للفحصعندي طابعة ماركة كانو محتاج ومتواجد للفحص
        </p>
      </div>
      <div className="product-img">
        <img src={img.src} alt="icon filter" />
      </div>
    </div>
  );
};

export default DashAllProductsCard;
