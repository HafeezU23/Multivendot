import StoreMetrices from "../../components/vendorStore/StoreMetrices";
import MonthlySalesChart from "../../components/ecommerce/MonthlySalesChart";
import AllProducts from "../../components/vendorStore/AllProducts";
import PendingProducts from "../../components/vendorStore/PendingProducts";
import DemographicCard from "../../components/ecommerce/DemographicCard";
import PageMeta from "../../components/common/PageMeta";
import StockHandler from "../../components/vendorStore/StockHandler";
import TopProducts from "../../components/ecommerce/TopProducts";
export default function Home() {
  return <>
    <PageMeta title="Vendor DashBoard" description="This is Vendor DashBoard Page" />
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12 space-y-6 xl:col-span-7">
        <StoreMetrices />

        <MonthlySalesChart />
      </div>

      <div className="col-span-12 xl:col-span-5 xl:relative min-h-[100px] xl:min-h-0">
         <div className="xl:absolute xl:inset-0 h-full">
           <PendingProducts /> 
         </div>
      </div>

      <div className="col-span-12">
        <AllProducts />
      </div>

      <div className="col-span-12 xl:col-span-7">
        <StockHandler />
      </div>

      <div className="col-span-12 xl:col-span-5">
        <TopProducts />
      </div>

      
    </div>
  </>;
}