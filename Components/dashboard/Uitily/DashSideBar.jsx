'use client'

import React from "react";
import DashSideBarItem from "./DashSideBarItem";
import Sidebar from '../../Uitily/Sidebar';

const DashSideBar = () => {

    const sideBardata = [
        {
            name: 'message',
            title: 'الرسائل و الطلبات',
            path: "/dashboard/messages"
        },
        {
            name: 'ads',
            title: "الاعلانات",
            childrens: [
                {
                    title: 'اداره الاعلانات',
                    path: "/dashboard/ads",
                },
                {
                    title: 'اضف اعلان',
                    path: "/dashboard/ads/add"
                },
            ]
        },
        {
            name: 'profile',
            title: 'اعدادات الحساب',
            path: "/dashboard/profile"
        },
    ];

    return (
        <Sidebar className='mb-4'>
            <div className="sidebar">
                <div className="d-flex flex-column">
                    <ul className="px-0 mb-0">
                    { sideBardata.map((item, index) => <DashSideBarItem key={index} item={item} />) }
                    </ul>
                </div>
            </div>
        </Sidebar>
    );
};

export default DashSideBar;
