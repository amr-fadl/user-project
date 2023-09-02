import AllProducts from "@/Components/Product/AllProducts";
import NavCategory from "@/Components/Uitily/NavCategory";
import SideFilter from "@/Components/Uitily/Filter";
import Sidebar from "@/Components/Uitily/Sidebar";

export default function Home() {
  return (
    <main>
      <NavCategory />

      <div className="container">
        <div className="row">
          <div className="col-12">
          </div>
          <div className="col-lg-3">
            <Sidebar>
              <SideFilter />
            </Sidebar>
          </div>
          <div className="col-lg-9">
            <AllProducts />
          </div>
        </div>
      </div>
    </main>
  )
}
