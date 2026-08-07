import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: "p_1001", title: "Wireless Noise-Cancelling Headphones", description: "Premium over-ear headphones with active noise cancellation.", price: 249.99,
      images: ["https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=800&q=80"],
      category: "Electronics", brand: "SoundMakers", stock: 45, rating: 4.8, reviewCount: 124,
      vendor: { vendorId: "v_055", storeName: "Tech Haven", rating: 4.9 },
      variants: [{ id: "var_1", type: "Color", value: "Black", priceModifier: 0, stock: 30 }]
    },
    {
      id: "p_1002", title: "Minimalist Mechanical Keyboard", description: "Tenkeyless mechanical keyboard with tactile switches.", price: 129.00,
      images: ["https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=800&q=80"],
      category: "Electronics", brand: "Keychron", stock: 15, rating: 4.7, reviewCount: 89,
      vendor: { vendorId: "v_055", storeName: "Tech Haven", rating: 4.9 }, variants: []
    },
    {
      id: "p_1003", title: "Ergonomic Wireless Mouse", description: "Designed for all-day comfort with customizable buttons.", price: 79.99,
      images: ["https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80"],
      category: "Electronics", brand: "LogiTech", stock: 60, rating: 4.6, reviewCount: 210,
      vendor: { vendorId: "v_055", storeName: "Tech Haven", rating: 4.9 }, variants: []
    },
    {
      id: "p_1004", title: "4K Ultra HD Webcam", description: "Crystal clear video for streaming and professional meetings.", price: 199.50,
      images: ["https://images.unsplash.com/photo-1628102491629-778571d893a3?auto=format&fit=crop&w=800&q=80"],
      category: "Electronics", brand: "Visionary", stock: 25, rating: 4.4, reviewCount: 56,
      vendor: { vendorId: "v_055", storeName: "Tech Haven", rating: 4.9 }, variants: []
    },
    {
      id: "p_1005", title: "Portable Power Bank 20000mAh", description: "Fast-charging power bank with dual USB-C ports.", price: 49.99,
      images: ["https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=800&q=80"],
      category: "Electronics", brand: "ChargePro", stock: 100, rating: 4.8, reviewCount: 340,
      vendor: { vendorId: "v_055", storeName: "Tech Haven", rating: 4.9 }, variants: []
    },
    {
      id: "p_1006", title: "Bluetooth Bookshelf Speakers", description: "Rich, room-filling sound with wood grain finish.", price: 149.99,
      images: ["https://images.unsplash.com/photo-1608223652683-f38fdfeb734e?auto=format&fit=crop&w=800&q=80"],
      category: "Electronics", brand: "AudioEngine", stock: 12, rating: 4.9, reviewCount: 77,
      vendor: { vendorId: "v_055", storeName: "Tech Haven", rating: 4.9 }, variants: []
    },
    {
      id: "p_1007", title: "True Wireless Earbuds", description: "Compact earbuds with sweat resistance and touch controls.", price: 89.00,
      images: ["https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80"],
      category: "Electronics", brand: "SoundMakers", stock: 85, rating: 4.3, reviewCount: 412,
      vendor: { vendorId: "v_055", storeName: "Tech Haven", rating: 4.9 }, variants: []
    },
    {
      id: "p_1008", title: "Smart Home Hub Display", description: "Control your smart home devices from one central touchscreen.", price: 129.99,
      images: ["https://images.unsplash.com/photo-1558089687-f282ffcbc126?auto=format&fit=crop&w=800&q=80"],
      category: "Electronics", brand: "HomeSync", stock: 30, rating: 4.5, reviewCount: 128,
      vendor: { vendorId: "v_055", storeName: "Tech Haven", rating: 4.9 }, variants: []
    },
    {
      id: "p_1009", title: "USB-C Braided Cable 6ft", description: "Durable braided cable for fast charging and data transfer.", price: 14.99,
      images: ["https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?auto=format&fit=crop&w=800&q=80"],
      category: "Electronics", brand: "ChargePro", stock: 300, rating: 4.7, reviewCount: 890,
      vendor: { vendorId: "v_055", storeName: "Tech Haven", rating: 4.9 }, variants: []
    },
    {
      id: "p_1010", title: "Smartphone Gimbal Stabilizer", description: "Shoot smooth, cinematic video with your smartphone.", price: 99.00,
      images: ["https://images.unsplash.com/photo-1574768395581-22461d849880?auto=format&fit=crop&w=800&q=80"],
      category: "Electronics", brand: "Visionary", stock: 22, rating: 4.6, reviewCount: 65,
      vendor: { vendorId: "v_055", storeName: "Tech Haven", rating: 4.9 }, variants: []
    },
  
    // --- APPAREL (Vendor: Sustainable Basics) ---
    {
      id: "p_2001", title: "Organic Cotton Crewneck T-Shirt", description: "Breathable, 100% organic cotton t-shirt for everyday wear.", price: 24.00,
      images: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80"],
      category: "Apparel", brand: "EcoThread", stock: 120, rating: 4.5, reviewCount: 89,
      vendor: { vendorId: "v_012", storeName: "Sustainable Basics", rating: 4.7 },
      variants: [{ id: "var_3", type: "Size", value: "M", priceModifier: 0, stock: 50 }]
    },
    {
      id: "p_2002", title: "Classic Denim Jacket", description: "Vintage wash denim jacket with a relaxed fit.", price: 79.50,
      images: ["https://images.unsplash.com/photo-1601333144130-8c1f12369685?auto=format&fit=crop&w=800&q=80"],
      category: "Apparel", brand: "UrbanWear", stock: 40, rating: 4.8, reviewCount: 156,
      vendor: { vendorId: "v_012", storeName: "Sustainable Basics", rating: 4.7 }, variants: []
    },
    {
      id: "p_2003", title: "Minimalist Leather Sneakers", description: "Clean white sneakers made from sustainable vegan leather.", price: 110.00,
      images: ["https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80"],
      category: "Apparel", brand: "StepRight", stock: 65, rating: 4.6, reviewCount: 302,
      vendor: { vendorId: "v_012", storeName: "Sustainable Basics", rating: 4.7 }, variants: []
    },
    {
      id: "p_2004", title: "Merino Wool Beanie", description: "Warm and itch-free ribbed beanie for winter.", price: 28.00,
      images: ["https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=800&q=80"],
      category: "Apparel", brand: "EcoThread", stock: 80, rating: 4.9, reviewCount: 45,
      vendor: { vendorId: "v_012", storeName: "Sustainable Basics", rating: 4.7 }, variants: []
    },
    {
      id: "p_2005", title: "Slim Fit Chino Pants", description: "Versatile stretch chinos suitable for work or weekend.", price: 54.00,
      images: ["https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80"],
      category: "Apparel", brand: "UrbanWear", stock: 55, rating: 4.4, reviewCount: 112,
      vendor: { vendorId: "v_012", storeName: "Sustainable Basics", rating: 4.7 }, variants: []
    },
    {
      id: "p_2006", title: "Oversized Pullover Hoodie", description: "Ultra-soft fleece hoodie with drop shoulders.", price: 65.00,
      images: ["https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80"],
      category: "Apparel", brand: "LoungeCo", stock: 90, rating: 4.7, reviewCount: 220,
      vendor: { vendorId: "v_012", storeName: "Sustainable Basics", rating: 4.7 }, variants: []
    },
    {
      id: "p_2007", title: "Polarized Aviator Sunglasses", description: "Lightweight metal frame sunglasses with UV protection.", price: 45.00,
      images: ["https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80"],
      category: "Apparel", brand: "ShadeTech", stock: 35, rating: 4.5, reviewCount: 88,
      vendor: { vendorId: "v_012", storeName: "Sustainable Basics", rating: 4.7 }, variants: []
    },
    {
      id: "p_2008", title: "Canvas Tote Bag", description: "Heavy-duty cotton canvas tote for groceries and essentials.", price: 18.00,
      images: ["https://images.unsplash.com/photo-1597633244018-80e9bd51a24d?auto=format&fit=crop&w=800&q=80"],
      category: "Apparel", brand: "EcoThread", stock: 200, rating: 4.8, reviewCount: 150,
      vendor: { vendorId: "v_012", storeName: "Sustainable Basics", rating: 4.7 }, variants: []
    },
    {
      id: "p_2009", title: "Athletic Running Shorts", description: "Quick-dry shorts with built-in liner and zip pockets.", price: 34.99,
      images: ["https://images.unsplash.com/photo-1563102377-f2662c5b364e?auto=format&fit=crop&w=800&q=80"],
      category: "Apparel", brand: "ActiveLife", stock: 75, rating: 4.6, reviewCount: 95,
      vendor: { vendorId: "v_012", storeName: "Sustainable Basics", rating: 4.7 }, variants: []
    },
    {
      id: "p_2010", title: "Woven Braided Belt", description: "Elastic woven belt with a genuine leather trim.", price: 22.50,
      images: ["https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=800&q=80"],
      category: "Apparel", brand: "UrbanWear", stock: 45, rating: 4.3, reviewCount: 42,
      vendor: { vendorId: "v_012", storeName: "Sustainable Basics", rating: 4.7 }, variants: []
    },
  
    // --- HOME & KITCHEN (Vendor: The Daily Grind) ---
    {
      id: "p_3001", title: "Artisan Pour-Over Coffee Kit", description: "Complete coffee set including a ceramic dripper and glass carafe.", price: 45.50,
      images: ["https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80"],
      category: "Home & Kitchen", brand: "BrewMaster", stock: 18, rating: 4.2, reviewCount: 34,
      vendor: { vendorId: "v_089", storeName: "The Daily Grind", rating: 4.9 }, variants: []
    },
    {
      id: "p_3002", title: "Matte Ceramic Coffee Mug", description: "12oz handmade ceramic mug with a smooth matte finish.", price: 16.00,
      images: ["https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=800&q=80"],
      category: "Home & Kitchen", brand: "ClayWorks", stock: 110, rating: 4.9, reviewCount: 205,
      vendor: { vendorId: "v_089", storeName: "The Daily Grind", rating: 4.9 }, variants: []
    },
    {
      id: "p_3003", title: "Stainless Steel French Press", description: "Double-walled insulated French press for hot coffee.", price: 39.99,
      images: ["https://images.unsplash.com/photo-1585494156145-1c60a4fe952b?auto=format&fit=crop&w=800&q=80"],
      category: "Home & Kitchen", brand: "BrewMaster", stock: 40, rating: 4.7, reviewCount: 188,
      vendor: { vendorId: "v_089", storeName: "The Daily Grind", rating: 4.9 }, variants: []
    },
    {
      id: "p_3004", title: "Electric Gooseneck Kettle", description: "Variable temperature kettle for precise pour-over brewing.", price: 89.00,
      images: ["https://images.unsplash.com/photo-1596200234139-67d1db0e0c3b?auto=format&fit=crop&w=800&q=80"],
      category: "Home & Kitchen", brand: "BrewMaster", stock: 25, rating: 4.8, reviewCount: 142,
      vendor: { vendorId: "v_089", storeName: "The Daily Grind", rating: 4.9 }, variants: []
    },
    {
      id: "p_3005", title: "Acacia Wood Cutting Board", description: "Thick, edge-grain wooden cutting board with juice groove.", price: 55.00,
      images: ["https://images.unsplash.com/photo-1592173167123-1d07c0828551?auto=format&fit=crop&w=800&q=80"],
      category: "Home & Kitchen", brand: "ChefPrep", stock: 30, rating: 4.6, reviewCount: 76,
      vendor: { vendorId: "v_089", storeName: "The Daily Grind", rating: 4.9 }, variants: []
    },
    {
      id: "p_3006", title: "Japanese Steel Chef Knife", description: "8-inch professional chef knife with a carbon steel core.", price: 119.99,
      images: ["https://images.unsplash.com/photo-1593457195977-9a8449c25603?auto=format&fit=crop&w=800&q=80"],
      category: "Home & Kitchen", brand: "BladePro", stock: 15, rating: 4.9, reviewCount: 310,
      vendor: { vendorId: "v_089", storeName: "The Daily Grind", rating: 4.9 }, variants: []
    },
    {
      id: "p_3007", title: "Waffle Weave Kitchen Towels", description: "Set of 4 ultra-absorbent microfiber kitchen towels.", price: 22.00,
      images: ["https://images.unsplash.com/photo-1584346045952-6b94db2200dc?auto=format&fit=crop&w=800&q=80"],
      category: "Home & Kitchen", brand: "HomeLinens", stock: 150, rating: 4.5, reviewCount: 65,
      vendor: { vendorId: "v_089", storeName: "The Daily Grind", rating: 4.9 }, variants: []
    },
    {
      id: "p_3008", title: "Ceramic Planter Pot", description: "Minimalist indoor plant pot with wooden stand.", price: 34.50,
      images: ["https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80"],
      category: "Home & Kitchen", brand: "BotanyCo", stock: 45, rating: 4.7, reviewCount: 104,
      vendor: { vendorId: "v_089", storeName: "The Daily Grind", rating: 4.9 }, variants: []
    },
    {
      id: "p_3009", title: "Scented Soy Candle", description: "Lavender and vanilla hand-poured soy wax candle.", price: 24.00,
      images: ["https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80"],
      category: "Home & Kitchen", brand: "Lumina", stock: 80, rating: 4.8, reviewCount: 220,
      vendor: { vendorId: "v_089", storeName: "The Daily Grind", rating: 4.9 }, variants: []
    },
    {
      id: "p_3010", title: "Cast Iron Skillet", description: "10-inch pre-seasoned cast iron skillet for versatile cooking.", price: 42.99,
      images: ["https://images.unsplash.com/photo-1587391963959-fb7c6d669df7?auto=format&fit=crop&w=800&q=80"],
      category: "Home & Kitchen", brand: "ChefPrep", stock: 60, rating: 4.6, reviewCount: 540,
      vendor: { vendorId: "v_089", storeName: "The Daily Grind", rating: 4.9 }, variants: []
    },
  
    // --- HEALTH & BEAUTY (Vendor: Glow Up Beauty) ---
    {
      id: "p_4001", title: "Hydrating Facial Cleanser", description: "Gentle daily cleanser with hyaluronic acid and ceramides.", price: 18.00,
      images: ["https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80"],
      category: "Health & Beauty", brand: "PureSkin", stock: 140, rating: 4.7, reviewCount: 315,
      vendor: { vendorId: "v_077", storeName: "Glow Up Beauty", rating: 4.8 }, variants: []
    },
    {
      id: "p_4002", title: "Vitamin C Brightening Serum", description: "Antioxidant serum to even skin tone and boost radiance.", price: 34.00,
      images: ["https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80"],
      category: "Health & Beauty", brand: "GlowLab", stock: 75, rating: 4.5, reviewCount: 280,
      vendor: { vendorId: "v_077", storeName: "Glow Up Beauty", rating: 4.8 }, variants: []
    },
    {
      id: "p_4003", title: "Nourishing Body Lotion", description: "Rich shea butter lotion for dry and sensitive skin.", price: 22.50,
      images: ["https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=800&q=80"],
      category: "Health & Beauty", brand: "PureSkin", stock: 90, rating: 4.6, reviewCount: 150,
      vendor: { vendorId: "v_077", storeName: "Glow Up Beauty", rating: 4.8 }, variants: []
    },
    {
      id: "p_4004", title: "Matte Liquid Lipstick", description: "Long-lasting, transfer-proof red matte lipstick.", price: 16.00,
      images: ["https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80"],
      category: "Health & Beauty", brand: "Aura", stock: 65, rating: 4.4, reviewCount: 410,
      vendor: { vendorId: "v_077", storeName: "Glow Up Beauty", rating: 4.8 }, variants: []
    },
    {
      id: "p_4005", title: "Organic Rosehip Oil", description: "100% pure cold-pressed oil for face, hair, and nails.", price: 28.00,
      images: ["https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?auto=format&fit=crop&w=800&q=80"],
      category: "Health & Beauty", brand: "BotanyCo", stock: 50, rating: 4.8, reviewCount: 195,
      vendor: { vendorId: "v_077", storeName: "Glow Up Beauty", rating: 4.8 }, variants: []
    },
    {
      id: "p_4006", title: "Bamboo Toothbrush Set", description: "Eco-friendly pack of 4 biodegradable bamboo toothbrushes.", price: 12.00,
      images: ["https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=800&q=80"],
      category: "Health & Beauty", brand: "EcoThread", stock: 200, rating: 4.9, reviewCount: 88,
      vendor: { vendorId: "v_077", storeName: "Glow Up Beauty", rating: 4.8 }, variants: []
    },
    {
      id: "p_4007", title: "Charcoal Face Mask", description: "Purifying clay mask to unclog pores and detoxify skin.", price: 26.50,
      images: ["https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=800&q=80"],
      category: "Health & Beauty", brand: "GlowLab", stock: 45, rating: 4.3, reviewCount: 134,
      vendor: { vendorId: "v_077", storeName: "Glow Up Beauty", rating: 4.8 }, variants: []
    },
    {
      id: "p_4008", title: "Sulfate-Free Shampoo", description: "Gentle lathering shampoo for color-treated hair.", price: 20.00,
      images: ["https://images.unsplash.com/photo-1631730486784-5456119f69ae?auto=format&fit=crop&w=800&q=80"],
      category: "Health & Beauty", brand: "StrandCare", stock: 110, rating: 4.5, reviewCount: 220,
      vendor: { vendorId: "v_077", storeName: "Glow Up Beauty", rating: 4.8 }, variants: []
    },
    {
      id: "p_4009", title: "Exfoliating Body Scrub", description: "Sugar and coffee body scrub for smooth, glowing skin.", price: 19.99,
      images: ["https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?auto=format&fit=crop&w=800&q=80"],
      category: "Health & Beauty", brand: "PureSkin", stock: 80, rating: 4.6, reviewCount: 167,
      vendor: { vendorId: "v_077", storeName: "Glow Up Beauty", rating: 4.8 }, variants: []
    },
    {
      id: "p_4010", title: "Signature Eau de Parfum", description: "Fresh floral fragrance with notes of jasmine and sandalwood.", price: 85.00,
      images: ["https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80"],
      category: "Health & Beauty", brand: "Aura", stock: 30, rating: 4.7, reviewCount: 432,
      vendor: { vendorId: "v_077", storeName: "Glow Up Beauty", rating: 4.8 }, variants: []
    },
  
    // --- SPORTS & OUTDOORS (Vendor: Active Life) ---
    {
      id: "p_5001", title: "Non-Slip Yoga Mat", description: "Thick, eco-friendly TPE yoga mat with alignment lines.", price: 35.00,
      images: ["https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=800&q=80"],
      category: "Sports & Outdoors", brand: "ZenFit", stock: 120, rating: 4.8, reviewCount: 512,
      vendor: { vendorId: "v_044", storeName: "Active Life", rating: 4.6 }, variants: []
    },
    {
      id: "p_5002", title: "Insulated Water Bottle", description: "Stainless steel 32oz bottle keeps drinks cold for 24 hours.", price: 25.00,
      images: ["https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80"],
      category: "Sports & Outdoors", brand: "HydroCore", stock: 250, rating: 4.9, reviewCount: 890,
      vendor: { vendorId: "v_044", storeName: "Active Life", rating: 4.6 }, variants: []
    },
    {
      id: "p_5003", title: "Adjustable Dumbbell Set", description: "Space-saving dumbbells adjusting from 5 to 52.5 lbs.", price: 199.99,
      images: ["https://images.unsplash.com/photo-1638096338562-b9415c898b1f?auto=format&fit=crop&w=800&q=80"],
      category: "Sports & Outdoors", brand: "IronTech", stock: 15, rating: 4.7, reviewCount: 320,
      vendor: { vendorId: "v_044", storeName: "Active Life", rating: 4.6 }, variants: []
    },
    {
      id: "p_5004", title: "Resistance Band Kit", description: "Set of 5 color-coded bands with handles and door anchor.", price: 29.99,
      images: ["https://images.unsplash.com/photo-1598289431512-b97b0917affc?auto=format&fit=crop&w=800&q=80"],
      category: "Sports & Outdoors", brand: "FitGear", stock: 85, rating: 4.5, reviewCount: 215,
      vendor: { vendorId: "v_044", storeName: "Active Life", rating: 4.6 }, variants: []
    },
    {
      id: "p_5005", title: "Lightweight Backpacking Tent", description: "2-person, 3-season tent for hiking and camping.", price: 145.00,
      images: ["https://images.unsplash.com/photo-1525811902638-1530c504ca82?auto=format&fit=crop&w=800&q=80"],
      category: "Sports & Outdoors", brand: "TrailBlaze", stock: 20, rating: 4.6, reviewCount: 98,
      vendor: { vendorId: "v_044", storeName: "Active Life", rating: 4.6 }, variants: []
    },
    {
      id: "p_5006", title: "Mummy Sleeping Bag", description: "Compact sleeping bag rated for 20-degree weather.", price: 75.00,
      images: ["https://images.unsplash.com/photo-1559815077-d46a815a513f?auto=format&fit=crop&w=800&q=80"],
      category: "Sports & Outdoors", brand: "TrailBlaze", stock: 35, rating: 4.4, reviewCount: 75,
      vendor: { vendorId: "v_044", storeName: "Active Life", rating: 4.6 }, variants: []
    },
    {
      id: "p_5007", title: "LED Headlamp", description: "Rechargeable waterproof headlamp for running and camping.", price: 22.99,
      images: ["https://images.unsplash.com/photo-1587848698186-b489a2dc1b94?auto=format&fit=crop&w=800&q=80"],
      category: "Sports & Outdoors", brand: "Lumina", stock: 150, rating: 4.7, reviewCount: 420,
      vendor: { vendorId: "v_044", storeName: "Active Life", rating: 4.6 }, variants: []
    },
    {
      id: "p_5008", title: "Speed Jump Rope", description: "Adjustable steel wire jump rope with ball bearings.", price: 14.50,
      images: ["https://images.unsplash.com/photo-1517344884509-a0c97ea112a4?auto=format&fit=crop&w=800&q=80"],
      category: "Sports & Outdoors", brand: "FitGear", stock: 200, rating: 4.8, reviewCount: 180,
      vendor: { vendorId: "v_044", storeName: "Active Life", rating: 4.6 }, variants: []
    },
    {
      id: "p_5009", title: "Foam Roller", description: "High-density foam roller for deep tissue massage and recovery.", price: 19.99,
      images: ["https://images.unsplash.com/photo-1596356453261-0d265eb26d2e?auto=format&fit=crop&w=800&q=80"],
      category: "Sports & Outdoors", brand: "ZenFit", stock: 60, rating: 4.5, reviewCount: 155,
      vendor: { vendorId: "v_044", storeName: "Active Life", rating: 4.6 }, variants: []
    },
    {
      id: "p_5010", title: "Hiking Backpack 50L", description: "Durable pack with internal frame and rain cover.", price: 110.00,
      images: ["https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&w=800&q=80"],
      category: "Sports & Outdoors", brand: "TrailBlaze", stock: 28, rating: 4.7, reviewCount: 210,
      vendor: { vendorId: "v_044", storeName: "Active Life", rating: 4.6 }, variants: []
    }
  ]
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // You can add more product-related reducers here (e.g. setProducts, addProduct)
  },
});

export const selectAllProducts = (state) => state.products.items;

export default productSlice.reducer;
