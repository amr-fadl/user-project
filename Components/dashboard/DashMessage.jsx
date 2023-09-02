import React from 'react'
import DashCard from './Uitily/DashCard'
import man1 from '@/public/images/man-1.png'
import man2 from '@/public/images/man-2.png'
import man3 from '@/public/images/man-3.jpg'

const DashMessage = () => { 
  return (
    <div className='row'>
      <div className="col-lg-6 col-xl-4">
        <DashCard name='محمد ابراهيم' src={man1.src}/>
      </div>
      <div className="col-lg-6 col-xl-4">
        <DashCard name='علي محمد' src={man2.src}/>
      </div>
      <div className="col-lg-6 col-xl-4">
        <DashCard name='احمد سيد' src={man3.src}/>
      </div>
      <div className="col-lg-6 col-xl-4">
        <DashCard name='علي محمد' src={man2.src}/>
      </div>
      <div className="col-lg-6 col-xl-4">
        <DashCard name='احمد سيد' src={man3.src}/>
      </div>
      <div className="col-lg-6 col-xl-4">
        <DashCard name='محمد ابراهيم' src={man1.src}/>
      </div>
      <div className="col-lg-6 col-xl-4">
        <DashCard name='محمد ابراهيم' src={man1.src}/>
      </div>
      <div className="col-lg-6 col-xl-4">
        <DashCard name='علي محمد' src={man2.src}/>
      </div>
      <div className="col-lg-6 col-xl-4">
        <DashCard name='احمد سيد' src={man3.src}/>
      </div>
    </div>
  )
}

export default DashMessage