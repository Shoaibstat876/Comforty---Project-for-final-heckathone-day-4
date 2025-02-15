const { createClient } = require("@sanity/client");
require("dotenv").config();
 // Ensures environment variables are loaded

// Configure Sanity Client using environment variables
const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || "",
  dataset: process.env.SANITY_DATASET || "production",
  useCdn: false,
  apiVersion: process.env.SANITY_API_VERSION || "2025-01-19",
  token: process.env.SANITY_AUTH_TOKEN || "",
});


// Define the featured products data
const featuredProducts = [
  {
    _type: "featuredProduct",
    id: 1001,
    name: "Modern Pink Chair",
    price: 89.99,
    originalPrice: 30.0, // ✅ Ensure this always exists
    description: "Elegant pink chair for a modern touch in any room.",
    category: "chairs",
    badge: "Sale", // ✅ Explicitly set badge
    nameStyle: "text-lg font-medium",
    priceStyle: "text-black font-medium",
    cartColor: "bg-[#f0f2f3]",
    iconColor: "text-black",
    image: {
      _type: "image",
      asset: {
        _ref: "image-1f4317694c776f84c609782154e7dad0f3c2297a-312x312-png",
        _type: "reference",
      },
    },
  },
  {
    _type: "featuredProduct",
    id: 1002,
    name: "Galaxy Sofa",
    price: 499.99,
    originalPrice: 499.99, // ✅ Set `originalPrice` even if there's no discount
    description: "A luxurious sofa with a modern touch.",
    category: "furniture",
    badge: "New", // ✅ Explicitly set badge
    nameStyle: "text-lg font-[400] text-[#007580]",
    priceStyle: "text-[#000000] font-[400]",
    cartColor: "bg-[#029fae]",
    iconColor: "text-white",
    image: {
      _type: "image",
      asset: {
        _ref: "image-591d705db86307ef1097899323afeab8e3acc0c2-225x225-jpg",
        _type: "reference",
      },
    },
  },
  {
    _type: "featuredProduct",
    id: 1003,
    name: "Modern Bed",
    price: 849.99,
    originalPrice: 849.99, // ✅ Ensuring originalPrice exists
    description: "Minimalist modern bed with a sleek finish.",
    category: "beds",
    badge: "", // ✅ Default to empty string if no badge
    nameStyle: "text-lg font-[400] text-[#000000]",
    priceStyle: "text-[#000000] font-[400]",
    cartColor: "bg-[#f0f2f3]",
    iconColor: "text-black",
    image: {
      _type: "image",
      asset: {
        _ref: "image-061cd331e28bbc694107dac8800e9f4033574696-275x183-jpg",
        _type: "reference",
      },
    },
  },
  {
    _type: "featuredProduct",
    id: 1004,
    name: "Minimalist Front Table",
    price: 199.99,
    originalPrice: 259.99,
    description: "A sleek and modern front table for stylish interiors.",
    category: "tables",
    badge: "Sale", // ✅ Explicitly set badge
    nameStyle: "text-lg font-medium",
    priceStyle: "text-black font-medium",
    cartColor: "bg-[#f0f2f3]",
    iconColor: "text-black",
    image: {
      _type: "image",
      asset: {
        _ref: "image-7b8a7a0a127794be51be15574d7c53ef23fbe88f-273x184-jpg",
        _type: "reference",
      },
    },
  },
];

// Function to upload data to Sanity
const uploadData = async () => {
  try {
    for (const product of featuredProducts) {
      const response = await client.create(product);
      console.log(`✅ Successfully uploaded: ${response._id}`);
    }
  } catch (error) {
    console.error("❌ Error uploading data:", error);
  }
};

// Run the upload function
uploadData();
