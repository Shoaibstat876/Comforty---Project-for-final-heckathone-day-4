const { createClient } = require("@sanity/client");
require("dotenv").config();

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || "",
  dataset: process.env.SANITY_DATASET || "production",
  useCdn: false,
  apiVersion: process.env.SANITY_API_VERSION || "2025-01-19",
  token: process.env.SANITY_AUTH_TOKEN || "",
});

const topCategories = [
    {
      _type: "topCategory",
      id: 5001,
      name: "Wing Chair",
      products: 3648,
      image: {
        _type: "image",
        asset: {
          _ref: "image-f40b361972654e9fb0560291fbce42805022170b-424x424-png",
          _type: "reference",
        },
      },
    },
    {
      _type: "topCategory",
      id: 5002,
      name: "Wooden Chair",
      products: 157,
      image: {
        _type: "image",
        asset: {
          _ref: "image-b97163242639e313b89933fa49a23996bbeda88d-312x312-png",
          _type: "reference",
        },
      },
    },
    {
      _type: "topCategory",
      id: 5003,
      name: "Desk Chair",
      products: 154,
      image: {
        _type: "image",
        asset: {
          _ref: "image-81912e6f6391395d3d63193c26e56a68d78399f5-312x312-png",
          _type: "reference",
        },
      },
    },
];

const uploadData = async () => {
  try {
    for (const category of topCategories) {
      const response = await client.create(category);
      console.log(`✅ Successfully uploaded: ${response._id}`);
    }
  } catch (error) {
    console.error("❌ Error uploading data:", error);
  }
};

uploadData();