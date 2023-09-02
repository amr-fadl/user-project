'use client'

import React, { useState,useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Multiselect from 'multiselect-react-dropdown'
import DropzoneComponent from './DashDropzoneComponent';


const DashAddProduct = () => {

    // Multi images
    const [images,setImages] = useState([]);

    // values state
    const [name,setName] = useState('');
    const [desc,setDesc] = useState('');
    const [price,setPrice] = useState('');
    const [discount,setDiscount] = useState('');
    const [qty,setQty] = useState('');
    const [allCat,setAllCat] = useState([]);
    const [cat,setCat] = useState();
    const [subCat,setSubCat] = useState([]);
    const [subCatOption,setSubCatOption] = useState([]);
    const [brandId,setBrandId] = useState('');
    const [colors,setColors] = useState([]);
    const [showColor,setShowColor] = useState(false);

    const onSelect = () => {}
    const onRemove = () => {}
    const onChangeCat = () => {}

    const [errors, setErrors] = useState({});
    const validate = () => {
        let errors = {};
        let isValid = true;

        if (images.length < 3) {
            errors.images = 'يجب تحميل 3 صور على الأقل';
            isValid = false;
        }

        if (!name) {
            errors.name = 'يرجى إدخال اسم المنتج';
            isValid = false;
        }

        if (!desc) {
            errors.desc = 'يرجى إدخال وصف المنتج';
            isValid = false;
        }

        if (!price) {
            errors.price = 'يرجى إدخال سعر المنتج';
            isValid = false;
        }

        if (!discount) {
            errors.discount = 'يرجى إدخال خصم المنتج';
            isValid = false;
        }

        if (!qty) {
            errors.qty = 'يرجى إدخال الكمية';
            isValid = false;
        }

        if (!cat) {
            errors.cat = 'يرجى اختيار التصنيف';
            isValid = false;
        }

        if (!brandId) {
            errors.brandId = 'يرجى اختيار الماركة';
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    return (
        <div>
            <Row className="justify-content-start mb-5">
                <Col sm="8">
                    <div className="square mb-3">
                        <div aria-label="breadcrumb">
                            <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item" aria-current="page"> <a href='/dashboard/ads'>الاعلانات</a> </li>
                            <li class="breadcrumb-item active" aria-current="page">اضافه اعلان جديد</li>
                            </ol>
                        </div>
                    </div>

                    <div className="text-form pb-2 mt-5" style={{color:'#666'}}>صور الاعلان</div>
                    <div>
                        <DropzoneComponent
                            setImages={setImages}
                            changeImages={() => setErrors({ ...errors, images: '' })}
                        />
                        {errors.images && (
                            <p className="text-danger mb-0">{errors.images}</p>
                        )}
                    </div>

                    <input
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value)
                            setErrors({ ...errors, name: '' })
                        }}
                        type="text"
                        className="input-form d-block mt-3 px-3 py-2  form-control"
                        placeholder="اسم الاعلان"
                    />
                    {errors.name && (
                        <p className="text-danger mb-0">{errors.name}</p>
                    )}

                    <textarea
                        value={desc}
                        onChange={(e) => {
                            setDesc(e.target.value)
                            setErrors({ ...errors, desc: '' })
                        }}
                        className="input-form-area p-2 mt-3 form-control"
                        rows="4"
                        cols="50"
                        placeholder="وصف الاعلان"
                    />
                    {errors.desc && (
                        <p className="text-danger mb-0">{errors.desc}</p>
                    )}

                    <input
                        value={price}
                        onChange={(e) => {
                            setPrice(e.target.value)
                            setErrors({ ...errors, price: '' })
                        }}
                        type="number"
                        className="input-form d-block text-start mt-3 px-3 py-2 form-control"
                        placeholder="السعر"
                        style={{direction:'rtl'}}
                    />
                    {errors.price && (
                        <p className="text-danger mb-0">{errors.price}</p>
                    )}

                    <select class="form-select mt-3 px-2 py-2 form-control"                         
                        multiple={false}
                        style={{color:'#666'}}
                        value={cat}
                        onChange={(e) => {
                            onChangeCat(e)
                            setErrors({ ...errors, cat: '' })
                        }}>
                        <option selected disabled>التصنيف</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    {errors.cat && (
                        <p className="text-danger mb-0">{errors.cat}</p>
                    )}

                    <Multiselect
                        className="mt-3 text-start p-0 div-form-control"
                        placeholder="التصنيف الفرعي"
                        options={subCatOption}
                        onSelect={onSelect}
                        onRemove={onRemove}
                        displayValue="name"
                        style={{ color: "red" }}
                    />
                    {errors.subCat && (
                        <p className="text-danger mb-0">{errors.subCat}</p>
                    )}

                </Col>
                <Col sm="8" className="d-flex justify-content-start mt-4">
                    <button class="btn_ btn-4 rounded-2 fontMedium" type="submit" onClick={(e) => {
                        if (validate()) {
                            handelSubmit(e);
                        }
                    }}>اضافة اعلان</button>
                </Col>
            </Row>
        </div>
    )
}

export default DashAddProduct
