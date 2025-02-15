const { createClient } = require("@sanity/client");
require("dotenv").config(); // Ensures environment variables are loaded

// Configure Sanity Client using environment variables
const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || "",
  dataset: process.env.SANITY_DATASET || "production",
  useCdn: false,
  apiVersion: process.env.SANITY_API_VERSION || "2025-01-19",
  token: process.env.SANITY_AUTH_TOKEN || "",
});

// Define the Our Products data
const ourProducts = [
  {
    _type: "ourProduct",
    id: 2001,
    name: "Modern Pink Chair",
    price: 89.99,
    originalPrice: 30.0, // Ensure original price exists
    description: "Elegant pink chair for a modern touch in any room.",
    category: "chairs",
    badge: "Sale",
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
    _type: "ourProduct",
    id: 2002,
    name: "Classic Wooden Chair",
    price: 79.99,
    originalPrice: 79.99, // Ensuring originalPrice exists
    description: "Stylish wooden chair with a vintage feel.",
    category: "chairs",
    badge: "New",
    nameStyle: "text-lg font-medium",
    priceStyle: "text-black font-medium",
    cartColor: "bg-[#f0f2f3]",
    iconColor: "text-black",
    image: {
      _type: "image",
      asset: {
        _ref: "image-b97163242639e313b89933fa49a23996bbeda88d-312x312-png",
        _type: "reference",
      },
    },
  },
  {
    _type: "ourProduct",
    id: 2003,
    name: "Galaxy Sofa",
    price: 499.99,
    originalPrice: 499.99,
    description: "A luxurious sofa with a modern touch.",
    category: "furniture",
    badge: "New",
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
    _type: "ourProduct",
    id: 2004,
    name: "White Elegant Sofa",
    price: 599.99,
    originalPrice: 599.99,
    description: "Elegant white sofa for stylish interiors.",
    category: "sofas",
    badge: "New",
    nameStyle: "text-lg font-[400] text-[#007580]",
    priceStyle: "text-[#000000] font-[400]",
    cartColor: "bg-[#029fae]",
    iconColor: "text-white",
    image: {
      _type: "image",
      asset: {
        _ref: "image-0a41b310439e66f03f52cc05d587bd2aba294614-800x800-webp",
        _type: "reference",
      },
    },
  },
  {
    _type: "ourProduct",
    id: 2005,
    name: "Rustic Plank Table",
    price: 299.99,
    originalPrice: 299.99,
    description: "A solid wooden table with a rustic and elegant design.",
    category: "tables",
    badge: "New",
    nameStyle: "text-lg font-[400] text-[#007580]",
    priceStyle: "text-[#000000] font-[400]",
    cartColor: "bg-[#029fae]",
    iconColor: "text-white",
    image: {
      _type: "image",
      asset: {
        _ref: "image-752d924d53edd46f6add44ff5b2d157816f57c45-259x194-jpg",
        _type: "reference",
      },
    },
  },
  {
    _type: "ourProduct",
    id: 2006,
    name: "Minimalist Front Table",
    price: 199.99,
    originalPrice: 259.99,
    description: "A sleek and modern front table for stylish interiors.",
    category: "tables",
    badge: "Sale",
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
  {
    _type: "ourProduct",
    id: 2007,
    name: "Couple Bed",
    price: 799.99,
    originalPrice: 999.99,
    description: "A spacious and stylish bed perfect for couples.",
    category: "beds",
    badge: "Sale",
    nameStyle: "text-lg font-medium",
    priceStyle: "text-black font-medium",
    cartColor: "bg-[#f0f2f3]",
    iconColor: "text-black",
    image: {
      _type: "image",
      asset: {
        _ref: "image-ef2cb34175a45e8d6f62e80e5a87c3919306c4a3-259x194-jpg",
        _type: "reference",
      },
    },
  },
  {
    _type: "ourProduct",
    id: 2008,
    name: "Modern Bed",
    price: 849.99,
    originalPrice: 849.99,
    description: "Minimalist modern bed with a sleek finish.",
    category: "beds",
    badge: "",
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
];

// Function to upload Our Products data
const uploadData = async () => {
  try {
    for (const product of ourProducts) {
      const response = await client.create(product);
      console.log(`✅ Successfully uploaded: ${response._id}`);
    }
  } catch (error) {
    console.error("❌ Error uploading data:", error);
  }
};

// Run the upload function
uploadData();
