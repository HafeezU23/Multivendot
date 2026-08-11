import Badge from "../ui/badge/Badge";

const pendingProducts = [
  { id: 1, name: "Wireless Headphones", date: "12 Oct 2026", price: "$49.99", image: "/images/product/product-01.jpg" },
  { id: 2, name: "Smart Watch Series 8", date: "11 Oct 2026", price: "$199.00", image: "/images/product/product-02.jpg" },
  { id: 3, name: "Gaming Mouse RGB", date: "10 Oct 2026", price: "$29.50", image: "/images/product/product-03.jpg" },
  { id: 4, name: "Mechanical Keyboard", date: "09 Oct 2026", price: "$89.99", image: "/images/product/product-04.jpg" },
  { id: 5, name: "4K Web Camera", date: "08 Oct 2026", price: "$59.99", image: "/images/product/product-05.jpg" },
  { id: 6, name: "Bluetooth Speaker", date: "07 Oct 2026", price: "$39.99", image: "/images/product/product-01.jpg" },
 { id: 8, name: "Wireless Charger", date: "05 Oct 2026", price: "$19.99", image: "/images/product/product-03.jpg" },
];

export default function PendingProducts() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900 sm:px-6 sm:pt-6 h-full flex flex-col">
      <div className="flex justify-between pb-4 border-b border-gray-200 dark:border-gray-800 flex-shrink-0">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Pending Products
          </h3>
          <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
            Awaiting admin approval
          </p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto mt-4 space-y-6 pr-2 custom-scrollbar">
        {pendingProducts.map((product) => (
          <div key={product.id} className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100 dark:bg-gray-800">
               <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-0">
               <h4 className="text-sm font-medium text-gray-800 dark:text-white/90 truncate">{product.name}</h4>
               <p className="text-xs text-gray-500 dark:text-gray-400">{product.date} • {product.price}</p>
            </div>
            <div className="text-right flex-shrink-0">
               <Badge color="warning">Pending</Badge>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}