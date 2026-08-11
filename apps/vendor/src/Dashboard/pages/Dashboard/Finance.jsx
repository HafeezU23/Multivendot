import PageMeta from "../../components/common/PageMeta";
import FinanceMetrics from "../../components/finance/FinanceMetrics";
import PaymentHistory from "../../components/finance/PaymentHistory";


export default function Finance() {
  return (
    <>
      <PageMeta title="Vendor DashBoard - Finance" description="Manage your earnings and payments" />
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        
        {/* Top Left: Finance Metrics */}
        <div className="col-span-12 xl:col-span-7">
          <FinanceMetrics />
        </div>
        

        {/* Full Width: Payment History List */}
        <div className="col-span-12">
          <PaymentHistory />
        </div>

      </div>
    </>
  );
}
