import Link from "next/link";
import bgAuth from "@/public/images/bg-auth.jpg";

const RegisterPage = () => {
  return (
    <div
      className="auth-pages"
      style={{backgroundImage:`url(${bgAuth.src})`,backgroundSize:'cover',height:'100vh'}}
    >
      <div className="container py-5">
        <div className="row py-5 d-flex justify-content-center align-items-center h-100">
          <div className="col-md-7 col-lg-5 col-xl-4 d-flex flex-column ">
            <h2 className="mx-auto title-login fontMedium">انشاء حساب</h2>
            <p className="mx-auto fontMedium text-secondary">
              ادخل البيانات وقم بأنشاء حسابك جديد
            </p>

            <div className="mt-5">
              <input
                placeholder="اسم المستخدم"
                type="text"
                className="user-input mb-3 w-100 rounded-3 fontMedium"
              />
              <input
                placeholder="رقم الجوال"
                type="text"
                className="user-input mb-3 w-100 rounded-3 fontMedium"
              />
              <input
                placeholder="كلمه السر"
                type="password"
                className="user-input mb-3 w-100 rounded-3 fontMedium"
              />
              <input
                placeholder="تاكيد كلمة السر"
                type="password"
                className="user-input w-100 rounded-3 fontMedium"
              />
            </div>

            <div className="flex-center mt-5">
              <button class="btn_ btn-4 rounded-2 fontMedium" type="submit">
                انشاء حساب
              </button>
            </div>

            <label className="mx-auto mt-4">
              هل لديك حساب ؟
              <Link href="/login" className="text-primary">
                اضغط هنا
              </Link>
            </label>

            <label className="mx-auto my-3">
              <Link
                href="/dashboard/messages"
                style={{ textDecoration: "none" }}
              >
                <span
                  style={{ cursor: "pointer" }}
                  className="text-primary mx-3"
                >
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

export default RegisterPage;
