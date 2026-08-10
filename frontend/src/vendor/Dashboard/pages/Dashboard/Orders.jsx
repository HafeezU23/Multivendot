import OrderMetrices from "../../components/orders/OrderMetrices";
import OrderApproval from "../../components/orders/OrderApproval";
import PageMeta from "../../components/common/PageMeta";
import OrderList from "../../components/orders/OrderList";
import OrderRefund from "../../components/orders/OrderRefund";
import OrderReviews from "../../components/orders/OrderReviews";

export default function Orders() {
  return (
    <>
      <PageMeta title="Vendor DashBoard" description="This is Vendor DashBoard Page" />
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        
        {/* Left Column (Desktop) / Main Column (Mobile) */}
        <div className="col-span-12 space-y-6 xl:col-span-7">
          <OrderMetrices />
          
          {/* Mobile-only OrderApproval positioned between Metrics and Refund */}
          <div className="block xl:hidden">
            <OrderApproval />
          </div>

          <OrderRefund />
        </div>

        {/* Right Column (Desktop only) */}
        <div className="col-span-12 space-y-6 xl:col-span-5 hidden xl:block">
          <OrderApproval />
        </div>

        {/* Full Width Sections below */}
        <div className="col-span-12">
          <OrderList />
        </div>

        <div className="col-span-12">
          <OrderReviews />
        </div>

      </div>
    </>
  );
}