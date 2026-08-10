import React, { useState, useMemo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams, Link } from 'react-router';
import { selectAllProducts } from '../../../redux/features/productSlice';
import Product from '../components/Product';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

const CATEGORIES = ['Electronics', 'Fashion & Apparel', 'Home & Kitchen', 'Health & Beauty', 'Sports & Outdoors', 'Toys'];
const AVAILABILITY = ['In Stock', 'Out of Stock', 'Pre-order'];
const COLORS = ['Red', 'Blue', 'Green', 'Yellow', 'Black', 'White', 'Purple', 'Orange', 'Pink', 'Brown'];
const SIZES = ['XX-Small', 'X-Small', 'Small', 'Medium', 'Large', 'X-Large', 'XX-Large', '3X-Large', '4X-Large'];

// Electronics Filters
const STORAGE_OPTIONS = ['128GB', '256GB', '512GB', '1TB', 'None'];
const RAM_OPTIONS = ['4GB', '8GB', '16GB', '32GB', 'None'];
const CONDITIONS = ['New', 'Used', 'Refurbished'];

// Fashion Filters
const GENDERS = ['Men', 'Women', 'Kids', 'Unisex'];
const MATERIALS_FASHION = ['Cotton', 'Denim', 'Leather', 'Wool', 'Fleece', 'Canvas', 'Polyester'];

// Home & Kitchen Filters
const HK_PRODUCT_TYPES = ['Coffee Maker', 'Mug', 'Kettle', 'Cutting Board', 'Knife', 'Towel', 'Planter', 'Candle', 'Cookware'];
const HK_MATERIALS = ['Ceramic', 'Stainless Steel', 'Wood', 'Steel', 'Microfiber', 'Soy Wax', 'Cast Iron'];
const HK_SIZES = ['1L', '12oz', '34oz', 'Large', '8 inch', 'Set of 4', 'Medium', '8oz', '10 inch'];

// Health & Beauty Filters
const HB_PRODUCT_TYPES = ['Cleanser', 'Serum', 'Lotion', 'Makeup', 'Oil', 'Oral Care', 'Mask', 'Shampoo', 'Scrub', 'Fragrance'];
const SKIN_HAIR_TYPES = ['All', 'Dry', 'Oily'];
const CONCERNS = ['None', 'Hydration', 'Anti-Aging', 'Acne', 'Exfoliation'];
const HB_SIZES = ['0.2oz', '1oz', '1.7oz', '2oz', '4oz', '8oz', '12oz', '16oz', 'Set of 4'];

// Sports & Outdoors Filters
const SPORT_TYPES = ['Yoga', 'Cycling', 'Fitness', 'Camping', 'Running'];
const SO_PRODUCT_TYPES = ['Equipment', 'Accessory'];

// Toys Filters
const AGE_GROUPS = ['0-2 Years', '3-5 Years', '6-8 Years', '9-12 Years'];
const TOY_TYPES = ['Building', 'Action', 'Electronic', 'Plush'];
const TOY_GENDERS = ['Boys', 'Girls', 'Unisex'];
const EDUCATIONAL = ['Yes', 'No'];

const COLOR_MAP = {
  Red: '#ef4444', Blue: '#3b82f6', Green: '#22c55e', Yellow: '#eab308',
  Black: '#000000', White: '#ffffff', Purple: '#a855f7', Orange: '#f97316', Pink: '#ec4899', Brown: '#92400e'
};

const FilterAccordion = ({ title, options, selectedList, setter }) => {
  const [isOpen, setIsOpen] = useState(true);
  
  const toggleSelection = (item) => {
    if (selectedList.includes(item)) {
      setter(selectedList.filter(i => i !== item));
    } else {
      setter([...selectedList, item]);
    }
  };

  return (
    <div className="border-t border-gray-200 py-5">
      <div className="flex justify-between items-center mb-4 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <h4 className="font-bold text-lg">{title}</h4>
        <svg className={`w-4 h-4 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path></svg>
      </div>
      {isOpen && (
        <ul className="space-y-3 text-gray-600 max-h-60 overflow-y-auto pr-2">
          {options.map(opt => (
            <li key={opt} className="flex justify-between items-center cursor-pointer hover:text-black" onClick={() => toggleSelection(opt)}>
              <span className={selectedList.includes(opt) ? 'font-bold text-black' : ''}>{opt}</span>
              <div className={`w-4 h-4 rounded border ${selectedList.includes(opt) ? 'bg-black border-black text-white flex items-center justify-center' : 'border-gray-300'}`}>
                {selectedList.includes(opt) && <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const ProductCategoryPage = () => {
  const [searchParams] = useSearchParams();
  const filterParam = searchParams.get('filter'); 
  const categoryParam = searchParams.get('category');
  const searchParam = searchParams.get('search');
  
  const allProducts = useSelector(selectAllProducts);

  const availableBrands = useMemo(() => {
    const brands = new Set(allProducts.map(p => p.brand));
    return Array.from(brands).sort();
  }, [allProducts]);

  // UI States
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState(filterParam === 'new-arrivals' ? 'newest' : 'popular');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Global Filters
  const [selectedCategories, setSelectedCategories] = useState(categoryParam ? [categoryParam] : []);
  const [maxPrice, setMaxPrice] = useState(1500);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedAvailability, setSelectedAvailability] = useState([]);

  // Electronics Filters
  const [selectedStorage, setSelectedStorage] = useState([]);
  const [selectedRAM, setSelectedRAM] = useState([]);
  const [selectedCondition, setSelectedCondition] = useState([]);

  // Fashion Filters
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedMaterialsFashion, setSelectedMaterialsFashion] = useState([]);
  const [selectedGenders, setSelectedGenders] = useState([]);

  // Home & Kitchen Filters
  const [selectedHKProductTypes, setSelectedHKProductTypes] = useState([]);
  const [selectedHKMaterials, setSelectedHKMaterials] = useState([]);
  const [selectedHKSizes, setSelectedHKSizes] = useState([]);

  // Health & Beauty Filters
  const [selectedHBProductTypes, setSelectedHBProductTypes] = useState([]);
  const [selectedSkinHair, setSelectedSkinHair] = useState([]);
  const [selectedConcerns, setSelectedConcerns] = useState([]);
  const [selectedHBSizes, setSelectedHBSizes] = useState([]);

  // Sports Filters
  const [selectedSportTypes, setSelectedSportTypes] = useState([]);
  const [selectedSOProductTypes, setSelectedSOProductTypes] = useState([]);

  // Toys Filters
  const [selectedAgeGroups, setSelectedAgeGroups] = useState([]);
  const [selectedToyTypes, setSelectedToyTypes] = useState([]);
  const [selectedToyGenders, setSelectedToyGenders] = useState([]);
  const [selectedEducational, setSelectedEducational] = useState([]);

  useEffect(() => {
    if (categoryParam) setSelectedCategories([categoryParam]);
  }, [categoryParam]);

  useEffect(() => {
    setCurrentPage(1);
  }, [
    selectedCategories, maxPrice, selectedBrands, selectedAvailability,
    selectedStorage, selectedRAM, selectedCondition,
    selectedColors, selectedSizes, selectedMaterialsFashion, selectedGenders,
    selectedHKProductTypes, selectedHKMaterials, selectedHKSizes,
    selectedHBProductTypes, selectedSkinHair, selectedConcerns, selectedHBSizes,
    selectedSportTypes, selectedSOProductTypes,
    selectedAgeGroups, selectedToyTypes, selectedToyGenders, selectedEducational,
    sortBy, filterParam
  ]);

  const filteredProducts = useMemo(() => {
    let result = allProducts;

    // Search Query (Global Search) 
  
    if (searchParam) {
      const searchTerms = searchParam.toLowerCase().split(/\s+/).filter(Boolean);
      
      const getVariants = (word) => {
        const variants = [word];
        if (word.length > 3) {
          if (word.endsWith('ies')) variants.push(word.slice(0, -3) + 'y');
          else if (word.endsWith('es')) variants.push(word.slice(0, -2));
          else if (word.endsWith('s') && !word.endsWith('ss')) variants.push(word.slice(0, -1));
        }
        return variants;
      };

      result = result.filter(p => {
        const searchableText = [
          p.title,
          p.description,
          p.category,
          p.brand,
          p.vendor?.storeName
        ].filter(Boolean).join(' ').toLowerCase();
        
        return searchTerms.every(term => {
          const variants = getVariants(term);
          return variants.some(v => searchableText.includes(v));
        });
      });
    }

    // Header Links (New Arrivals / Top Selling)
    if (filterParam === 'new-arrivals') {
      result = result.filter(p => new Date(p.dateAdded) > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000));
    } else if (filterParam === 'sale') {
      // Mock logic: assume some products are on sale if they have a discount
      result = result.filter(p => p.discount > 0 || (p.price < 50)); 
    } else if (filterParam === 'top-selling') {
      result = result.filter(p => p.salesCount > 100);
    }

    // Global
    if (selectedCategories.length > 0) result = result.filter(p => selectedCategories.includes(p.category));
    if (selectedBrands.length > 0) result = result.filter(p => selectedBrands.includes(p.brand));
    if (selectedAvailability.length > 0) result = result.filter(p => selectedAvailability.includes(p.availability));
    result = result.filter(p => p.price <= maxPrice);

    // Electronics
    if (selectedStorage.length > 0) result = result.filter(p => selectedStorage.includes(p.storage));
    if (selectedRAM.length > 0) result = result.filter(p => selectedRAM.includes(p.ram));
    if (selectedCondition.length > 0) result = result.filter(p => selectedCondition.includes(p.condition));

    // Fashion
    if (selectedColors.length > 0) result = result.filter(p => selectedColors.some(c => p.color?.includes(c)));
    if (selectedSizes.length > 0) result = result.filter(p => selectedSizes.some(s => p.size?.includes(s)));
    if (selectedMaterialsFashion.length > 0) result = result.filter(p => selectedMaterialsFashion.includes(p.material));
    if (selectedGenders.length > 0) result = result.filter(p => selectedGenders.includes(p.gender));

    // Home & Kitchen
    if (selectedHKProductTypes.length > 0) result = result.filter(p => selectedHKProductTypes.includes(p.productType));
    if (selectedHKMaterials.length > 0) result = result.filter(p => selectedHKMaterials.includes(p.material));
    if (selectedHKSizes.length > 0) result = result.filter(p => selectedHKSizes.includes(p.sizeCapacity));

    // Health & Beauty
    if (selectedHBProductTypes.length > 0) result = result.filter(p => selectedHBProductTypes.includes(p.productType));
    if (selectedSkinHair.length > 0) result = result.filter(p => selectedSkinHair.includes(p.skinHairType));
    if (selectedConcerns.length > 0) result = result.filter(p => selectedConcerns.includes(p.concern));
    if (selectedHBSizes.length > 0) result = result.filter(p => selectedHBSizes.includes(p.sizeQuantity));

    // Sports & Outdoors
    if (selectedSportTypes.length > 0) result = result.filter(p => selectedSportTypes.includes(p.sportType));
    if (selectedSOProductTypes.length > 0) result = result.filter(p => selectedSOProductTypes.includes(p.productType));

    // Toys
    if (selectedAgeGroups.length > 0) result = result.filter(p => selectedAgeGroups.includes(p.ageGroup));
    if (selectedToyTypes.length > 0) result = result.filter(p => selectedToyTypes.includes(p.toyType));
    if (selectedToyGenders.length > 0) result = result.filter(p => selectedToyGenders.includes(p.genderAudience));
    if (selectedEducational.length > 0) result = result.filter(p => selectedEducational.includes(p.educational));

    // Sort
    if (sortBy === 'newest') result.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
    else if (sortBy === 'popular') result.sort((a, b) => b.salesCount - a.salesCount);
    else if (sortBy === 'price-low-high') result.sort((a, b) => a.price - b.price);
    else if (sortBy === 'price-high-low') result.sort((a, b) => b.price - a.price);

    return result;
  }, [
    allProducts, filterParam, searchParam, selectedCategories, maxPrice, selectedBrands, selectedAvailability,
    selectedStorage, selectedRAM, selectedCondition, selectedColors, selectedSizes, selectedMaterialsFashion, selectedGenders,
    selectedHKProductTypes, selectedHKMaterials, selectedHKSizes, selectedHBProductTypes, selectedSkinHair, selectedConcerns, selectedHBSizes,
    selectedSportTypes, selectedSOProductTypes, selectedAgeGroups, selectedToyTypes, selectedToyGenders, selectedEducational, sortBy
  ]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo(0, 0);
    }
  };

  const toggleSelection = (setter, list, item) => {
    if (list.includes(item)) setter(list.filter(i => i !== item));
    else setter([...list, item]);
  };

  const getPageTitle = () => {
    if (searchParam) return `Search Results for "${searchParam}"`;
    if (filterParam === 'new-arrivals') return 'New Arrivals';
    if (filterParam === 'sale') return 'On Sale';
    if (filterParam === 'top-selling') return 'Top Selling';
    if (selectedCategories.length === 1) return selectedCategories[0];
    return 'All Products';
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans flex flex-col">
      <Navbar />
      
      <div className="max-w-[1400px] mx-auto w-full px-4 md:px-10 lg:px-20 py-6 grow">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6 flex gap-2 items-center">
          <Link to="/" className="hover:text-black">Home</Link>
          <span>&gt;</span>
          <span className="text-black capitalize">{getPageTitle()}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          
          {/* Sidebar Overlay */}
          {isFilterOpen && (
            <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setIsFilterOpen(false)} />
          )}

          {/* Sidebar */}
          <aside className={`w-[280px] md:w-full lg:w-1/4 bg-white md:rounded-2xl md:border md:border-gray-200 p-6 h-full md:h-fit fixed md:static inset-y-0 left-0 z-50 transform transition-transform duration-300 overflow-y-auto ${isFilterOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'} md:block`}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Filters</h3>
              <button className="md:hidden cursor-pointer" onClick={() => setIsFilterOpen(false)}>
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
              <svg className="hidden md:block w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
            </div>
            
            {/* Global: Categories */}
            <FilterAccordion title="Categories" options={CATEGORIES} selectedList={selectedCategories} setter={setSelectedCategories} />

            {/* Global: Price */}
            <div className="border-t border-gray-200 py-5">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-bold text-lg">Price Range</h4>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path></svg>
              </div>
              <div>
                <input type="range" min="0" max="1500" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} className="w-full accent-black" />
                <div className="flex justify-between mt-2 text-sm font-medium">
                  <span>$0</span>
                  <span>${maxPrice}</span>
                </div>
              </div>
            </div>

            {/* Global: Brands */}
            <FilterAccordion title="Brand" options={availableBrands} selectedList={selectedBrands} setter={setSelectedBrands} />

            {/* Global: Availability */}
            <FilterAccordion title="Availability" options={AVAILABILITY} selectedList={selectedAvailability} setter={setSelectedAvailability} />

            {/* --- CATEGORY SPECIFIC FILTERS --- */}

            {selectedCategories.includes('Electronics') && (
              <>
                <FilterAccordion title="Storage" options={STORAGE_OPTIONS} selectedList={selectedStorage} setter={setSelectedStorage} />
                <FilterAccordion title="RAM" options={RAM_OPTIONS} selectedList={selectedRAM} setter={setSelectedRAM} />
                <FilterAccordion title="Condition" options={CONDITIONS} selectedList={selectedCondition} setter={setSelectedCondition} />
              </>
            )}

            {selectedCategories.includes('Fashion & Apparel') && (
              <>
                <div className="border-t border-gray-200 py-5">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-bold text-lg">Colors</h4>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {COLORS.map(color => {
                      const isSelected = selectedColors.includes(color);
                      return (
                        <button key={color} onClick={() => toggleSelection(setSelectedColors, selectedColors, color)} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center focus:outline-none cursor-pointer" style={{ backgroundColor: COLOR_MAP[color] }} title={color}>
                          {isSelected && <svg className={`w-5 h-5 ${color === 'White' || color === 'Yellow' ? 'text-black' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="border-t border-gray-200 py-5">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-bold text-lg">Size</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {SIZES.map(size => {
                      const isSelected = selectedSizes.includes(size);
                      return (
                        <button key={size} onClick={() => toggleSelection(setSelectedSizes, selectedSizes, size)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${isSelected ? 'bg-black text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                          {size}
                        </button>
                      )
                    })}
                  </div>
                </div>

                <FilterAccordion title="Material" options={MATERIALS_FASHION} selectedList={selectedMaterialsFashion} setter={setSelectedMaterialsFashion} />
                <FilterAccordion title="Gender" options={GENDERS} selectedList={selectedGenders} setter={setSelectedGenders} />
              </>
            )}

            {selectedCategories.includes('Home & Kitchen') && (
              <>
                <FilterAccordion title="Product Type" options={HK_PRODUCT_TYPES} selectedList={selectedHKProductTypes} setter={setSelectedHKProductTypes} />
                <FilterAccordion title="Material" options={HK_MATERIALS} selectedList={selectedHKMaterials} setter={setSelectedHKMaterials} />
                <FilterAccordion title="Size / Capacity" options={HK_SIZES} selectedList={selectedHKSizes} setter={setSelectedHKSizes} />
              </>
            )}

            {selectedCategories.includes('Health & Beauty') && (
              <>
                <FilterAccordion title="Product Type" options={HB_PRODUCT_TYPES} selectedList={selectedHBProductTypes} setter={setSelectedHBProductTypes} />
                <FilterAccordion title="Skin / Hair Type" options={SKIN_HAIR_TYPES} selectedList={selectedSkinHair} setter={setSelectedSkinHair} />
                <FilterAccordion title="Concern" options={CONCERNS} selectedList={selectedConcerns} setter={setSelectedConcerns} />
                <FilterAccordion title="Size / Quantity" options={HB_SIZES} selectedList={selectedHBSizes} setter={setSelectedHBSizes} />
              </>
            )}

            {selectedCategories.includes('Sports & Outdoors') && (
              <>
                <FilterAccordion title="Sport Type" options={SPORT_TYPES} selectedList={selectedSportTypes} setter={setSelectedSportTypes} />
                <FilterAccordion title="Product Type" options={SO_PRODUCT_TYPES} selectedList={selectedSOProductTypes} setter={setSelectedSOProductTypes} />
              </>
            )}

            {selectedCategories.includes('Toys') && (
              <>
                <FilterAccordion title="Age Group" options={AGE_GROUPS} selectedList={selectedAgeGroups} setter={setSelectedAgeGroups} />
                <FilterAccordion title="Toy Type" options={TOY_TYPES} selectedList={selectedToyTypes} setter={setSelectedToyTypes} />
                <FilterAccordion title="Gender / Audience" options={TOY_GENDERS} selectedList={selectedToyGenders} setter={setSelectedToyGenders} />
                <FilterAccordion title="Educational" options={EDUCATIONAL} selectedList={selectedEducational} setter={setSelectedEducational} />
              </>
            )}

            <button onClick={() => setIsFilterOpen(false)} className="w-full bg-black text-white rounded-full py-4 font-medium mt-4 hover:bg-gray-800 transition-colors md:hidden cursor-pointer">
              Apply Filter
            </button>
          </aside>

          {/* Main Content */}
          <main className="w-full lg:w-3/4">
            <div className="flex flex-col sm:flex-row justify-between items-baseline sm:items-center mb-8 gap-4">
              <h1 className="text-3xl font-black">{getPageTitle()}</h1>
              
              <div className="flex flex-col sm:flex-row items-baseline sm:items-center gap-2 sm:gap-4 text-sm text-gray-500">
                <span>Showing {(currentPage - 1) * itemsPerPage + 1}-{Math.min(currentPage * itemsPerPage, filteredProducts.length)} of {filteredProducts.length} Products</span>
                <div className="flex items-center gap-2 mt-2 sm:mt-0">
                  <button onClick={() => setIsFilterOpen(true)} className="md:hidden flex items-center gap-1 bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-full text-black font-medium transition-colors cursor-pointer">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                    Filters
                  </button>
                  <span>Sort by:</span>
                  <select className="font-medium text-black bg-transparent border-none focus:ring-0 outline-none cursor-pointer" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="popular">Most Popular</option>
                    <option value="newest">Newest Arrivals</option>
                    <option value="price-low-high">Price: Low to High</option>
                    <option value="price-high-low">Price: High to Low</option>
                  </select>
                </div>
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <h2 className="text-2xl font-bold mb-2">No products found</h2>
                <p className="text-gray-500">Try adjusting your filters to find what you're looking for.</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {paginatedProducts.map(product => (
                    <Product key={product.id} product={product} />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center gap-2 mt-12 border-t border-gray-200 pt-8">
                    <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="flex items-center gap-1 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 transition-colors cursor-pointer text-sm font-medium">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                      Previous
                    </button>
                    
                    <div className="items-center gap-1 hidden sm:flex">
                      {[...Array(totalPages)].map((_, i) => (
                        <button key={i} onClick={() => handlePageChange(i + 1)} className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors cursor-pointer ${currentPage === i + 1 ? 'bg-black text-white' : 'hover:bg-gray-100 text-gray-700'}`}>
                          {i + 1}
                        </button>
                      ))}
                    </div>
                    <span className="sm:hidden text-sm font-medium">Page {currentPage} of {totalPages}</span>
                    
                    <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className="flex items-center gap-1 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 transition-colors cursor-pointer text-sm font-medium">
                      Next
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </button>
                  </div>
                )}
              </>
            )}
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductCategoryPage;
