import 'bootstrap/dist/css/bootstrap.rtl.css';
import '@/public/styles/style.scss'
import NavBarLogin from '@/Components/Uitily/NavBarLogin';
import Footer from '@/Components/Uitily/Footer';
import { Suspense } from 'react';
import loading from './loading';


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body>
        <NavBarLogin />
          <Suspense fallback={<loading />}>
            {children}
          </Suspense>
        <Footer />
      </body>
    </html>
  )
}