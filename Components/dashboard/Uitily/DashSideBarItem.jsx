"use client";

import React ,{ useEffect, useState } from "react"
import Link from "next/link";
import { ArrowDownIcon } from "../../icons/Icons";
import { usePathname } from 'next/navigation'


function DashSideBarItem({item}){
    const location = usePathname()
    const [open, setOpen] = useState(false)

    useEffect(() => {
        setOpen(false)
    },[location])

    if(item.childrens){
        console.log(location.includes(item.name),item.name);
        return (
            <li className={`list-menu ${ open || location.includes(item.name) ? 'active' : ''}`}>
                <div className="title-list-menu admin-side-text d-flex justify-content-between"  onClick={() => setOpen(!open)}>
                    {item.title}
                    <ArrowDownIcon height='15'/>
                </div>
                <div className="child-list-menu">
                    <ul className="px-3">
                        { item.childrens.map((child, index) => <DashSideBarItem key={index} item={child} />) }
                    </ul>
                </div>
            </li>
        )
    }else{
        return (
            <li className={`list-menu ${location == item.path ? 'active' : ''}`}>
                <Link href={item.path} style={{ textDecoration: "none" }} >
                    <div className="admin-side-text">
                        {item.title}
                    </div>
                </Link>
            </li>
        )
    }
}

export default DashSideBarItem
