import AdminSideBar from "../../Components/dashboard/Uitily/DashSideBar"
import { Suspense } from 'react';
import Loading from "../loading";

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <section className="min-vh-100">
      <div className='container'>
          <div className="row">
              <div className="col-md-4 col-lg-3">
                  <AdminSideBar />
              </div>
              <div className="col-sm-8 col-md-9 pt-4">
                <Suspense fallback={<Loading />}>
                  {children}
                </Suspense>
              </div>
          </div>
      </div>
    </section>
  )
}