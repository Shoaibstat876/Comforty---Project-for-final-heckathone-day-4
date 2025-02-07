"use client"
import React, { useEffect, useState } from "react";
import ProductCard from "@/components/sections/ProductCard"; // Import ProductCard
import { fetchFeaturedProducts, Product } from "@/utils/mockFeaturedProducts"; // Import mock API and Product interface

const FeaturedProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]); // State for featured products
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  useEffect(() => {
    const loadProducts = async (): Promise<void> => {
      try {
        setLoading(true);
        const featuredProducts: Product[] = await fetchFeaturedProducts(); // Fetch products
        setProducts(featuredProducts); // Update state with fetched products
      } catch (error: unknown) {
        // Type-safe error handling
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-16">
        <p className="text-lg font-medium text-gray-600">Loading Featured Products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-16">
        <p className="text-lg font-medium text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-8">
          Featured Products
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product: Product) => (
            <ProductCard
              key={product.id}
              product={product} // Pass the raw product object directly
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
