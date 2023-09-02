import React from 'react'
import Link from "next/link";

const Card = () => {
  return (
    <div className="card-sit square mb-4">
        <div className="product-content">
            <h2>للبيع طابعه و سكانر ماركة كانون</h2>
            <p>
                عندي طابعة ماركة كانو محتاج ابيعها ومتواجد للفحصعندي طابعة ماركة
                كانو محتاج ابيعها ومتواجد للفحصعندي طابعة ماركة كانو محتاج ومتواجد
                للفحص
            </p>
            <div className="card-info justify-content-between">
                <div className="flex-center">
                <div className="item border-end px-3">
                    <img
                    className="mx-2 mb-1"
                    src="./images/icons/user.svg"
                    alt="icon user"
                    />
                    فهد المطيري
                </div>
                <div className="item border-end px-3">
                    <img
                    className="mx-2 mb-1"
                    src="./images/icons/location.svg"
                    alt="icon location"
                    />
                    الرياض
                </div>
                <div className="item border-end px-3">
                    <img
                    className="mx-2 mb-1"
                    src="./images/icons/clock.svg"
                    alt="icon clock"
                    />
                    منذ يومين
                </div>
                <div className="item px-3">
                    <img
                    className="mx-2 mb-1"
                    src="./images/icons/message.svg"
                    alt="icon message"
                    />
                    2
                </div>
                </div>

                <Link href="/1" className="py-2 px-5 rounded-5 btn_ btn-2">
                التفاصيل
                </Link>
            </div>
        </div>
        <div className="product-img">
            <img src="./images/product.jpg" loading='lazy' alt="icon filter" />
        </div>
    </div>
  )
}

export default Card
