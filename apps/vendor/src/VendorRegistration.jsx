import Navbar from "./components/Navbar"

export default function VendorRegistration() {
    return (
        <div className="min-h-screen bg-[#f8f9fb] flex flex-col font-sans">
            <Navbar />

            <div className="flex-1 flex items-center justify-center p-4 sm:p-8 lg:p-12">
                <div className="max-w-[1100px] w-full bg-white rounded-[2rem] shadow-sm overflow-hidden flex flex-col md:flex-row border border-gray-100">

                    {/* Left Form Side */}
                    <div className="w-full md:w-[50%] p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
                        <h1 className="text-[2.75rem] font-black text-gray-900 leading-[1.1] mb-2 tracking-tight">
                            Become a Vendor at SHOP.CO
                        </h1>
                        <p className="text-gray-500 font-medium mb-10 text-[15px]">
                            Create an account to start selling.
                        </p>

                        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="block text-[13px] font-bold text-gray-800 mb-2">CNIC no</label>
                                <input
                                    type="text"
                                    placeholder="Enter your CNIC no"
                                    className="w-full px-4 py-3.5 rounded-2xl border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-colors bg-transparent"
                                />
                            </div>
                            <div>
                                <label className="block text-[13px] font-bold text-gray-800 mb-2">Store name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your store name"
                                    className="w-full px-4 py-3.5 rounded-2xl border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-colors bg-transparent"
                                />
                            </div>
                            <div>
                                <label className="block text-[13px] font-bold text-gray-800 mb-2">Address</label>
                                <input
                                    type="text"
                                    placeholder="Enter your address"
                                    className="w-full px-4 py-3.5 rounded-2xl border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-colors bg-transparent"
                                />
                            </div>
                            <div>
                                <label className="block text-[13px] font-bold text-gray-800 mb-2">Bank Account ID</label>
                                <input
                                    type="text"
                                    placeholder="Enter your Bank Account ID"
                                    className="w-full px-4 py-3.5 rounded-2xl border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-colors bg-transparent"
                                />
                            </div>

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-4 rounded-full transition-all active:scale-[0.99] flex items-center justify-center text-[15px]"
                                >
                                    Apply
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Right Image Side */}
                    <div className="w-full md:w-[50%] relative min-h-[400px] md:min-h-[600px]">
                        <img
                            src="/vendor-bg.png"
                            alt="Vendor Storefront"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        {/* Overlay to ensure text readability like the original screenshot */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                        <div className="absolute bottom-12 left-10 right-10 text-white">
                            <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold tracking-wider uppercase mb-4 border border-white/20">
                                Vendor Network
                            </span>
                            <h2 className="text-4xl font-extrabold leading-tight mb-2">
                                Discover the extraordinary
                            </h2>
                            <p className="text-white/80 font-medium">
                                Join our exclusive community of sellers.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
