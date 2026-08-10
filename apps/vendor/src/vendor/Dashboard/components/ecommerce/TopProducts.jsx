import { Table, TableBody, TableCell, TableHeader, TableRow } from "../ui/table";
import Badge from "../ui/badge/Badge";

const tableData = [{
    id: 1,
    name: "MacBook Pro 13”",
    placedOrders: 152,
    image: "/images/product/product-01.jpg"
}, {
    id: 2,
    name: "Apple Watch Ultra",
    placedOrders: 84,
    image: "/images/product/product-02.jpg"
}, {
    id: 3,
    name: "iPhone 15 Pro Max",
    placedOrders: 321,
    image: "/images/product/product-03.jpg"
}, {
    id: 4,
    name: "iPad Pro 3rd Gen",
    placedOrders: 115,
    image: "/images/product/product-04.jpg"
}, {
    id: 5,
    name: "AirPods Pro",
    placedOrders: 420,
    image: "/images/product/product-05.jpg"
}];

export default function TopProducts() {
    return (
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
            <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                        Top Products
                    </h3>
                </div>
            </div>
            
            <div className="max-w-full overflow-x-auto overflow-y-auto max-h-[400px] scroll-smooth pr-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-200 [&::-webkit-scrollbar-thumb]:rounded-full dark:[&::-webkit-scrollbar-thumb]:bg-gray-700">
                
                {/* Desktop Table View */}
                <div className="hidden sm:block">
                    <Table>
                        {/* Table Header */}
                        <TableHeader className="border-gray-100 dark:border-gray-800 border-y">
                            <TableRow>
                                <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                    Products
                                </TableCell>
                                <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                    Placed Orders
                                </TableCell>
                                <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                    Action
                                </TableCell>
                            </TableRow>
                        </TableHeader>

                        {/* Table Body */}
                        <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
                            {tableData.map(product => (
                                <TableRow key={product.id} className="">
                                    <TableCell className="py-3">
                                        <div className="flex items-center gap-3">
                                            <div className="h-[50px] w-[50px] overflow-hidden rounded-md border border-gray-100 dark:border-gray-800">
                                                <img src={product.image} className="h-full w-full object-cover p-1 bg-white" alt={product.name} />
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                                                    {product.name}
                                                </p>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                        <span className="font-semibold text-gray-800 dark:text-gray-200">{product.placedOrders}</span> Orders
                                    </TableCell>
                                    <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                        <Badge size="sm" color="success">
                                            <button onClick={() => { console.log("See in Store Clicked") }}>
                                                See in Store
                                            </button>
                                        </Badge>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

                {/* Mobile List View */}
                <div className="block sm:hidden flex-col gap-4">
                    {tableData.map((product, index) => (
                        <div key={product.id} className={`flex flex-col py-4 gap-4 ${index !== tableData.length - 1 ? 'border-b border-gray-100 dark:border-gray-800' : ''}`}>
                            <div className="flex items-center justify-between gap-3">
                                <div className="flex items-center gap-3 min-w-0">
                                    <div className="h-[50px] w-[50px] overflow-hidden rounded-md border border-gray-100 dark:border-gray-800 flex-shrink-0">
                                        <img src={product.image} className="h-full w-full object-cover p-1 bg-white" alt={product.name} />
                                    </div>
                                    <div className="flex flex-col min-w-0 flex-1">
                                        <p className="font-medium text-gray-800 text-sm dark:text-white/90 truncate">
                                            {product.name}
                                        </p>
                                        <div className="flex items-center gap-2 mt-1">
                                            <span className="text-gray-500 text-xs dark:text-gray-400">
                                                Placed: <span className="font-semibold text-gray-800 dark:text-gray-200">{product.placedOrders}</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-shrink-0">
                                    <Badge size="sm" color="success">
                                        <button onClick={() => { console.log("See in Store Clicked") }}>
                                            See in Store
                                        </button>
                                    </Badge>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}