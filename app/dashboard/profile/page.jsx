const page = () => {
  return (
    <>
        <div className="square mb-3">
            <div aria-label="breadcrumb">
                <ol class="breadcrumb mb-0">
                <li class="breadcrumb-item active" aria-current="page">اعدادات الحساب</li>
                </ol>
            </div>
        </div>
        <div className='square pb-5 pt-4'>
            <div style={{maxWidth:'450px'}}>
                <p className="mx-auto fontMedium text-secondary">يمكنك تعديل بيانات حسابك</p>
                <div className="mt-3">
                    <input
                        placeholder="اسم المستخدم"
                        type="text"
                        className="input-form d-block mt-3 px-3 py-2 form-control"
                    />
                    <input
                        placeholder="رقم الجوال"
                        type="text"
                        className="input-form d-block mt-3 px-3 py-2 form-control"
                    />
                    <input
                        placeholder="كلمه السر"
                        type="password"
                        className="input-form d-block mt-3 px-3 py-2 form-control"
                    />
                </div>

                <div className="mt-5">
                    <button class="btn_ btn-4 rounded-2 fontMedium" type="submit">تعديل الحساب</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default page
