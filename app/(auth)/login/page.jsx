import Link from "next/link";
import bgAuth from '@/public/images/bg-auth.jpg'

const LoginPage = () => {
  return (
    <div className="auth-pages" style={{backgroundImage:`url(${bgAuth.src})`,backgroundSize:'cover',height:'100vh'}}>
      <div className="container py-5">
        <div className="row py-5 d-flex justify-content-center align-items-center h-100">
          <div className="col-md-7 col-lg-5 col-xl-4 d-flex flex-column ">

            <h2 className="mx-auto title-login fontMedium">تسجيل الدخول</h2>
            <p className="mx-auto fontMedium text-secondary">
              أدخل التفاصيل الخاصة بك لتسجيل الدخول إلى حسابك:
            </p>

            <div className="mt-5">
              <input
                placeholder="الايميل"
                type="text"
                className="user-input mb-3 w-100 rounded-3 fontMedium"
              />
              <input
                placeholder="كلمه السر"
                type="password"
                className="user-input w-100 rounded-3 fontMedium"
              />
            </div>

            <div class="form-group d-flex flex-wrap justify-content-between align-items-center mt-3">
              <div class="flex-center">
                <label class="checkbox m-0 text-muted hover-primary">
                  <input type="checkbox" /><span className='me-2'></span>تذكرنى
                </label>
              </div>
              <Link href="/" id="kt_login_forgot" class="text-muted hover-primary">نسيت كلمة المرور؟</Link>
            </div>

            <div className="flex-center mt-5">
              <button class="btn_ btn-4 rounded-2 fontMedium" type="submit">تسجيل الدخول</button>
            </div>

            <label className="mx-auto mt-4">
              ليس لديك حساب ؟
              <Link href="/register" className="text-primary">اضغط هنا</Link>
            </label>

            <label className="mx-auto my-3">
              <Link href="/dashboard/messages" style={{ textDecoration: "none" }}>
                <span style={{ cursor: "pointer" }} className="text-primary mx-3">
                  الدخول مستخدم
                </span>
              </Link>
            </label>

          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
