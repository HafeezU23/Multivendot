import Navbar from "./components/Navbar"
import { UploadCloud, ImagePlus, ChevronDown, Check } from "lucide-react"
import { useState } from "react"

export default function UploadProduct() {
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("");
    const categories = ["Garments", "Electronics", "Cosmetics", "Accessories", "Toys"];

    return (
        <div className="min-h-screen bg-[#f8f9fb] flex flex-col font-sans pb-12">
            <Navbar />

            <div className="flex-1 max-w-[1200px] w-full mx-auto p-4 sm:p-6 lg:p-8 mt-6">
                <div className="mb-8">
                    <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
                        Edit Product
                    </h1>
                    <p className="text-gray-500 mt-2 font-medium">
                        Fill in the details below to edit your Product
                    </p>
                </div>

                <form className="flex flex-col lg:flex-row gap-8" onSubmit={(e) => e.preventDefault()}>

                    {/* Left Column: Details & Pricing */}
                    <div className="flex-1 space-y-6">

                        {/* Basic Information Card */}
                        <div className="bg-white p-6 sm:p-8 rounded-[1.5rem] shadow-sm border border-gray-100">
                            <h2 className="text-xl font-extrabold text-gray-800 mb-6">Basic Information</h2>

                            <div className="space-y-5">
                                <div>
                                    <label className="block text-[13px] font-bold text-gray-800 mb-2">Product Title *</label>
                                    <input
                                        type="text"
                                        placeholder="Use a brief title"
                                        required
                                        className="w-full px-4 py-3.5 rounded-2xl border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-colors bg-transparent"
                                    />
                                </div>

                                <div>
                                    <label className="block text-[13px] font-bold text-gray-800 mb-2">Introduction *</label>
                                    <input
                                        type="text"
                                        placeholder="Briefly describe your product"
                                        required
                                        className="w-full px-4 py-3.5 rounded-2xl border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-colors bg-transparent"
                                    />
                                </div>

                                <div>
                                    <label className="block text-[13px] font-bold text-gray-800 mb-2">Description *</label>
                                    <textarea
                                        placeholder="Complete Details of product"
                                        rows="5"
                                        required
                                        className="w-full px-4 py-3.5 rounded-2xl border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-colors bg-transparent resize-y"
                                    ></textarea>
                                </div>
                            </div>
                        </div>

                        {/* Pricing & Category Card */}
                        <div className="bg-white p-6 sm:p-8 rounded-[1.5rem] shadow-sm border border-gray-100">
                            <h2 className="text-xl font-extrabold text-gray-800 mb-6">Pricing & Category</h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-[13px] font-bold text-gray-800 mb-2">Price *</label>
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold">$</span>
                                        <input
                                            type="number"
                                            placeholder="0.00"
                                            step="0.01"
                                            required
                                            className="w-full pl-8 pr-4 py-3.5 rounded-2xl border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-colors bg-transparent"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-[13px] font-bold text-gray-800 mb-2">Category *</label>
                                    <div className="relative">
                                        <div
                                            onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                                            className={`w-full px-4 py-3.5 rounded-2xl border ${isCategoryOpen ? 'border-black ring-1 ring-black' : 'border-gray-300'} bg-white text-gray-900 cursor-pointer flex justify-between items-center transition-all`}
                                        >
                                            <span className={selectedCategory ? 'text-gray-900 font-medium' : 'text-gray-400'}>
                                                {selectedCategory || "Select a category"}
                                            </span>
                                            <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isCategoryOpen ? 'rotate-180' : ''}`} />
                                        </div>

                                        {/* Dropdown Menu */}
                                        <div className={`absolute z-10 w-full mb-2 bottom-full bg-white border border-gray-100 rounded-2xl shadow-[0_-8px_30px_rgb(0,0,0,0.12)] overflow-hidden transition-all duration-200 origin-bottom ${isCategoryOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-95 pointer-events-none'}`}>
                                            <div className="py-2">
                                                {categories.map((cat) => (
                                                    <div
                                                        key={cat}
                                                        onClick={() => {
                                                            setSelectedCategory(cat);
                                                            setIsCategoryOpen(false);
                                                        }}
                                                        className={`px-4 py-3 hover:bg-gray-50 cursor-pointer flex items-center justify-between text-[14px] transition-colors ${selectedCategory === cat ? 'text-black font-bold bg-gray-50/50' : 'text-gray-600 font-medium'}`}
                                                    >
                                                        {cat}
                                                        {selectedCategory === cat && <Check className="w-4 h-4 text-black" />}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        {/* Hidden input to ensure it gets submitted natively if needed */}
                                        <input type="hidden" name="category" value={selectedCategory} required />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Media & Submit */}
                    <div className="w-full lg:w-[400px] flex flex-col space-y-6">

                        <div className="bg-white p-6 sm:p-8 rounded-[1.5rem] shadow-sm border border-gray-100 flex-1">
                            <h2 className="text-xl font-extrabold text-gray-800 mb-2">Product Media</h2>
                            <p className="text-gray-500 text-[13px] mb-6">Upload photos to showcase your product.</p>

                            <div className="space-y-6">
                                {/* Cover Image Upload */}
                                <div>
                                    <label className="block text-[13px] font-bold text-gray-800 mb-2">Cover Image *</label>
                                    <label className="relative flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-300 rounded-2xl cursor-pointer hover:border-black hover:bg-gray-50 transition-colors bg-[#fbfbfc]">
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <UploadCloud className="w-10 h-10 text-gray-400 mb-3" />
                                            <p className="mb-2 text-sm text-gray-700 font-semibold">Click to upload main image</p>
                                            <p className="text-xs text-gray-500">SVG, PNG, JPG (MAX. 800x400px)</p>
                                        </div>
                                        <input type="file" className="hidden" accept="image/*" required />
                                    </label>
                                </div>

                                {/* Additional Images Upload */}
                                <div>
                                    <label className="block text-[13px] font-bold text-gray-800 mb-2">Additional Images <span className="text-gray-400 font-normal">(Optional)</span></label>
                                    <label className="relative flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-2xl cursor-pointer hover:border-black hover:bg-gray-50 transition-colors bg-[#fbfbfc]">
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <ImagePlus className="w-8 h-8 text-gray-400 mb-2" />
                                            <p className="text-xs text-gray-700 font-semibold">Add more images</p>
                                        </div>
                                        <input type="file" className="hidden" accept="image/*" multiple />
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="bg-white p-6 rounded-[1.5rem] shadow-sm border border-gray-100 sticky top-4">
                            <button
                                type="submit"
                                className="w-full bg-black hover:bg-gray-900 text-white font-bold py-4 rounded-full transition-all active:scale-[0.99] flex items-center justify-center text-[15px] shadow-md hover:shadow-lg"
                            >
                                <UploadCloud className="w-5 h-5 mr-2" />
                                Update Product
                            </button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
}
