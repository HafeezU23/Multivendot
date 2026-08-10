import PageMeta from "../../components/common/PageMeta";
import DispatchedOrders from "../../components/delivery/DispatchedOrders";
import DeliveryTrack from "../../components/delivery/DeliveryTrack";
import DeliveryComplain from "../../components/delivery/DeliveryComplain";

export default function Delivery() {
  return (
    <>
      <PageMeta title="Vendor DashBoard - Logistics & Delivery" description="Manage logistics and deliveries" />
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        
        {/* Top Full-Width Section */}
        <div className="col-span-12">
          <DeliveryTrack />
        </div>

        {/* Bottom Left Column */}
        <div className="col-span-12 space-y-6 xl:col-span-7">
          <DispatchedOrders />
        </div>
        
        {/* Bottom Right Column */}
        <div className="col-span-12 space-y-6 xl:col-span-5">
          <DeliveryComplain />
        </div>

      </div>
    </>
  );
}