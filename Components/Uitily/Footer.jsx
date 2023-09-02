"use client"

import Link from 'next/link';
import React from 'react'
import { Container, Col ,Row} from "react-bootstrap";

import { LogoIcon, GooglePlayIcon, AppleStoreIcon } from '../icons/Icons'

const Footer = () => {
    return (
        <footer className="footer pt-5">
            <Container className="">
                <Row className="d-flex justify-content-between align-items-center">
                    <Col sm="4">
                        <LogoIcon width={150} className='mx-auto mb-3 d-flex flex-center'/>
                        <p className='text-center desc-footer'>
                            ابحث عن أي سلع معروضة من أصحابها القريبة منك أو بيع أي
                            غرض عندك بأسرع وقت وتصفح العروض في اقسام السيارات
                            ,والجوالات والأجهزة والعقارات والعديد من الأقسام
                        </p>
                    </Col>
                    <Col sm="3">
                        <h2 className='fontMedium mb-4'>صفحات مهمة</h2>
                        <Link href='/' className='text-white d-block mb-3'>
                            من نحن
                        </Link>
                        <Link href='/' className='text-white d-block mb-3'>
                            اتصل بنا
                        </Link>
                        <Link href='/' className='text-white d-block mb-3'>
                            سياسية الخصوصية
                        </Link>
                    </Col>
                    <Col sm="4" className='text-center'>
                        <p className='fontMedium mb-2'> 
                            حمل التطبيق الخاص
                        </p>
                        <p className='fontMedium mb-4'> 
                            الموقع من جوجل بلاى واب ستوري          
                        </p>
                        <div className="flex-center pt-1 store-icons">
                            <Link href='/' className='text-white d-block mb-3 scale-hover-img w-50'>
                                <AppleStoreIcon width={150} className='logo-footer mx-auto d-block' alt='apple store Icon'/>
                            </Link>
                            <Link href='/' className='text-white d-block mb-3 scale-hover-img w-50'>
                                <GooglePlayIcon width={150} className='logo-footer mx-auto d-block' alt='aoogl sPlay Icon'/>
                            </Link>
                        </div>
                    </Col>
                    <Col className='mt-4 col-12'>
                        <p className='text-center py-4 border-top m-auto'>جميع الحقوق محفوظة لدي</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
