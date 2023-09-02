import NavCategory from '@/Components/Uitily/NavCategory';
import SingleProduct from '@/Components/Product/SingleProduct';
import Sidebar from '@/Components/Uitily/Sidebar';
import Link from 'next/link';

const SingleProductPage = ({params}) => {

  return (
    <div>
        <NavCategory />
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <Sidebar>
                <Link href="tel:0201025715377" className="py-2 px-5 rounded-main bg_primary btn_ btn-3 mb-2 py-3 w-100 flex-center text-center">
                  <img src="./images/icons/call.svg" width='25' className='mx-2' alt="icon call" />
                  <div style={{minWidth:'50px'}}>إتصل الأن</div>
                </Link>
                <Link href="https://wa.me/0201025715377" className="py-2 px-5 rounded-main bg_success btn_ btn-3 mb-2 py-3 w-100 flex-center text-center">
                  <img src="./images/icons/whatsapp.svg" width='25' className='mx-2' alt="icon whatsapp" />
                  <div style={{minWidth:'50px'}}>واتساب</div>
                </Link>
                <Link href="1/chat" className="py-2 px-5 rounded-main bg_primary btn_ btn-3 mb-2 py-3 w-100 flex-center text-center">
                  <img src="./images/icons/message-2.svg" width='25' className='mx-2' alt="icon message" />
                  <div style={{minWidth:'50px'}}>رساله</div>
                </Link>
              </Sidebar>
            </div>
            <div className="col-lg-9">
              <SingleProduct />
            </div>
          </div>
        </div>
    </div>
  )
}

export default SingleProductPage
