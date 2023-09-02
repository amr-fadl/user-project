"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import Image from "next/image";
import Link from "next/link";

import MessageIcon from '@/public/images/icons/message.svg'
import StarIcon from '@/public/images/icons/star.svg'

import { FormControl } from "react-bootstrap";
import RateItem from "../Rate/RateItem";

const SingleProduct = () => {

  const [activeTab, setActiveTab] = useState('one');

  return (
    <div className="single-product square mt-4 d-block">

      <div className="title-product my-4 mx-3">
        <h2 className="color_primary fontBold">
          للبيع طابعه و سكانر ماركة كانون
        </h2>
      </div>

      <div className="card-info justify-content-between py-4 bg_main mb-4">
        <div className="flex-center h6 mb-0">
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
      </div>

      <Swiper
        dir="rtl"
        spaceBetween={30}
        centeredSlides={true}
        rewind={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="h-auto align-self-stretch">
          <div className="flex-center h-100 w-100">
            <Image src="/images/product/1.jpg" width={400} height={400} loading="lazy" alt="image product"/>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-auto align-self-stretch">
          <div className="flex-center h-100 w-100">
            <Image src="/images/product/2.jpg" width={400} height={400} loading="lazy" alt="image product"/>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-auto align-self-stretch">
          <div className="flex-center h-100 w-100">
            <Image src="/images/product/3.jpg" width={400} height={400} loading="lazy" alt="image product"/>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-auto align-self-stretch">
          <div className="flex-center h-100 w-100">
            <Image src="/images/product/4.jpg" width={400} height={400} loading="lazy" alt="image product"/>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-auto align-self-stretch">
          <div className="flex-center h-100 w-100">
            <Image src="/images/product/5.jpg" width={400} height={400} loading="lazy" alt="image product"/>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="desc mt-5">
        <p>
          عندي طابعة ماركة كانو محتاج ابيعها ومتواجد للفحص والمعاينة قبل عمليــة الشــراء عندي طابعة ماركة كانو محتاج ابيعها ومتواجد
          للفحص والمعاينة قبل عمليــة الشــراء عندي طابعة ماركة كانو محتاج ابيعها ومتواجد للفحص والمعاينة قبل عمليــة الشــراء عندي
          طابعة ماركة كانو محتاج ابيعها ومتواجد للفحص والمعاينة قبل عمليــة الشــراء عندي طابعة ماركة كانو محتاج ابيعها ومتواجد للفحص
          والمعاينة قبل عمليــة الشــراء عندي طابعة ماركة كانو محتاج ابيعها ومتواجد للفحص والمعاينة قبل عمليــة الشــراء عندي طابعة ماركة
          كانو محتاج ابيعها ومتواجد للفحص والمعاينة قبل عمليــة الشــراء عندي طابعة ماركة كانو محتاج ابيعها ومتواجد للفحص والمعاينة قبل
          عمليــة الشــراءعندي طابعة ماركة كانو محتاج ابيعها ومتواجد للفحص والمعاينة قبل عمليــة الشــراء عندي طابعة ماركة كانو محتاج
          ابيعها ومتواجد للفحص والمعاينة قبل عمليــة الشــراء عندي طابعة ماركة كانو محتاج ابيعها ومتواجد للفحص والمعاينة قبل عمليــة
          الشــراء عندي طابعة ماركة كانو محتاج ابيعها ومتواجد للفحص والمعاينة قبل عمليــة الشــراء عندي طابعة ماركة كانو محتاج ابيعها
          ومتواجد للفحص والمعاينة قبل عمليــة الشــراء عندي طابعة ماركة كانو محتاج ابيعها ومتواجد للفحص والمعاينة قبل عمليــة الشــراء
          عندي طابعة ماركة كانو محتاج ابيعها ومتواجد للفحص والمعاينة قبل عمليــة الشــراء عندي طابعة ماركة كانو محتاج ابيعها ومتواجد
          للفحص والمعاينة قبل عمليــة الشــراء
        </p>
      </div>

      <div className="square">
        <div className="bg_main rounded-3 flex-center p-3 gap-3 text-secondary">
          <div className="rounded-circle flex-center bg_primary" style={{minHeight:'70px',minWidth:'70px'}}>
            <Image src="/images/icons/safety.svg" width={30} height={30} alt="image product"/>
          </div>
          <p>
            يحذر "مستخدم" من التعامل خارج التطبيق وينصح بشدة بالتعامل عبر الرسائل الخاصة فقط والتعامل يداً بيد والحذر من الوسطاء والتأكد أن
            الحساب البنكي يعود لنفس الشخص صاحب السلعة .
          </p>
        </div>
      </div>

      <div className="comments mb-3">

        <div className="square bg_main">
          <div className="bg_main rounded-3 px-3 text-secondary text-center">
            <div className="tabs d-flex">
                <div onClick={() => setActiveTab('one')} className={'tab flex-center gap-3 w-50 py-4 border-end border-2 ' + (activeTab == 'one' ? 'active' : '')}>
                  <MessageIcon width={30} height={30}/>
                  الردود <span>( 0 )</span>
                </div>
                <div onClick={() => setActiveTab('two')} className={"tab flex-center gap-3 w-50 py-3 " + (activeTab == 'two' ? 'active' : '')}>
                  <StarIcon width={30} height={30}/>
                  التقيمات <span>( 0 )</span>
                </div>
            </div>
          </div>
        </div>

        {
          activeTab == 'one' ? (
            <div className="comments-content px-3">
              <div className="no-comments flex-center flex-column gap-4 py-5">
                <img src="./images/icons/face.svg" width='150' className='mx-2' alt="icon message" />
                <div>عفواً لا يوجد ردود على هذا الإعلان لعرضها</div>
              </div>
              <div className="send-bar position-relative">
                <FormControl
                  // value={searchWord}
                  // onChange={onChangeSearch}
                  type="search"
                  placeholder="اضف رداً جديداً"
                  className="me-2 w-100 py-2 fs-2 text-black text-opacity-25"
                  aria-label="Search"
                />
                <button className="icon-search">
                  <img width='35' src="./images/icons/send.svg" alt="icon search" />
                </button>
              </div>
            </div>
          ) : (
            <RateItem />
          )
        }
        
      </div>

      <div className="square">
        <div className="bg_main rounded-3 p-3 text-secondary text-center">
          <h4 className="fontBold color_primary mb-2 mt-2">
          هل لديك منتج مماثل؟
          </h4>
          <p className='mb-3'>
          إذا لديك منتج مشابهة، يمكنك بيعه الآن.
          </p>
          <Link href="/1" className="py-2 px-5 rounded-main bg_primary btn_ btn-3 mb-2 py-3 w-100 flex-center text-center">
            <img src="./images/icons/plus.svg" width='25' className='mx-2' alt="icon message" />
            <div style={{minWidth:'50px'}}>إنشئ إعلان مشابه</div>
          </Link>
        </div>
      </div>
      
    </div>
  );
};

export default SingleProduct;
