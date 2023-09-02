'use client'

import React from 'react'
import Link from "next/link";

const DashCard = ({name,src}) => {
    return (
        <div className="card-sit square mb-4 mx-auto align-items-center" style={{gridTemplateColumns:'1fr auto',maxWidth:'450px'}}>
            <div className="product-content flex-fill justify-content-center">
                <h5 className='mb-1 mt-0' style={{lineHeight:'1'}}>{name}</h5>
                <p style={{maxWidth:'200px',overflow:'hidden',fontSize:'13px'}}>السلام عليكم</p>
                <div className="card-info justify-content-between mt-2">
                    <Link href="/dashboard/messages/1" className="py-1 px-4 rounded-2 btn_ btn-2">اضافت رد</Link>
                </div>
            </div>
            <div className="product-img ms-auto" style={{width:'60px',height:'60px',objectFit:'cover'}}>
                <img className='rounded-2' src={src} alt="icon filter" />
            </div>
        </div>
    )
}

export default DashCard
