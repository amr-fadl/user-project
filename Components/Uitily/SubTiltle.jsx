import React from 'react'
import Link from "next/link";

const SubTiltle = ({ title, btntitle, pathText }) => {
    return (
        <div className="d-flex justify-content-between pt-4">
            <div className="sub-tile">{title}</div>
            {btntitle ? (
                <Link href={`${pathText}`} style={{ textDecoration: 'none' }}>
                    <div className="shopping-now">{btntitle}</div>
                </Link>
            ) : null}
        </div>
    )
}

export default SubTiltle
