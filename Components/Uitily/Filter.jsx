"use client"

import React from 'react'

const SideFilter = () => {

    return (
        <div className="text-center">
            <div className='item border-bottom py-3 cursor-pointer'>
                المنطقة
            </div>
            <div className='item border-bottom py-3 cursor-pointer'>
                المدينة
            </div>
            <div className='item border-bottom py-3 cursor-pointer'>
                القريب
            </div>
            <div className='item py-3 cursor-pointer'>
                <img className='mx-2 mb-1' width='17' src="./images/icons/filter.svg" alt="icon filter" />
                الفلتر
            </div>
        </div>
    )
}

export default SideFilter
