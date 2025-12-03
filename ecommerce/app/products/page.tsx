"use client";

import { useSearchParams } from "next/navigation";
import { Card } from "../../components";
import { products } from "../../lib/mockData";
import { Suspense } from "react";

function ProductList() {
  const searchParams = useSearchParams();
  const gender = searchParams.get("gender");
  const search = searchParams.get("search");

  const filteredProducts = products.filter((p) => {
    // Filter by gender/category
    if (gender && gender !== "unisex" && p.category.toLowerCase() !== gender.toLowerCase()) {
      return false;
    }

    // Filter by search query
    if (search) {
      const query = search.toLowerCase();
      return (
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
      );
    }

    return true;
  });

  if (filteredProducts.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-heading-3 text-dark-900 mb-4">No products found</h2>
        <p className="text-body text-dark-700">Try adjusting your search or filters.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {filteredProducts.map((p) => (
        <Card
          key={p.id}
          title={p.name}
          subtitle={p.category}
          meta={`${p.sizes.length} Sizes`}
          imageSrc={p.image}
          price={p.price}
          href={`/products/${p.id}`}
        />
      ))}
    </div>
  );
}

export default function ProductsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-heading-3 text-dark-900 mb-8">All Products</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductList />
      </Suspense>
    </main>
  );
}
