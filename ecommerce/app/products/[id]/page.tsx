"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { CollapsibleSection, ProductGallery, SizePicker, Modal, Card } from "../../../components";
import { Heart, ShoppingBag, CheckCircle } from "lucide-react";
import { products } from "../../../lib/mockData";
import { useAppDispatch } from "../../../store/hooks";
import { addItem } from "../../../store/slices/cartSlice";

export default function ProductDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const product = products.find((p) => p.id === id);
  const dispatch = useAppDispatch();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  // Get random products for "You Might Like" section
  const relatedProducts = products
    .filter((p) => p.id !== id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  if (!product) {
    return (
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-heading-3 text-dark-900">Product not found</h1>
        <Link href="/" className="mt-4 inline-block text-body text-dark-700 underline">
          Back to Home
        </Link>
      </main>
    );
  }

  const handleAddToBag = () => {
    if (!selectedSize) {
      alert("Please select a size"); // Keep alert for error, or use another modal/toast
      return;
    }
    dispatch(addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    }));
    setIsModalOpen(true);
  };

  // Simulate multiple images by repeating the main image
  const images = [product.image, product.image, product.image];

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <nav className="py-4 text-caption text-dark-700">
        <Link href="/" className="hover:underline">Home</Link> / <span className="text-dark-900">{product.name}</span>
      </nav>

      <section className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_480px]">
        <ProductGallery images={images} className="lg:sticky lg:top-6" />

        <div className="flex flex-col gap-6">
          <header className="flex flex-col gap-2">
            <h1 className="text-heading-2 text-dark-900">{product.name}</h1>
            <p className="text-body text-dark-700">{product.category} Shoes</p>
          </header>

          <div className="flex items-center gap-3">
            <p className="text-lead text-dark-900">${product.price.toFixed(2)}</p>
          </div>

          <SizePicker onSizeSelect={setSelectedSize} />

          <div className="flex flex-col gap-3">
            <button
              onClick={handleAddToBag}
              className="flex items-center justify-center gap-2 rounded-full bg-dark-900 px-6 py-4 text-body-medium text-light-100 transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[--color-dark-500]"
            >
              <ShoppingBag className="h-5 w-5" />
              Add to Bag
            </button>
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className={`flex items-center justify-center gap-2 rounded-full border px-6 py-4 text-body-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[--color-dark-500] ${
                isFavorite
                  ? "border-dark-900 bg-light-100 text-dark-900"
                  : "border-light-300 text-dark-900 hover:border-dark-500"
              }`}
            >
              <Heart className={`h-5 w-5 ${isFavorite ? "fill-current" : ""}`} />
              {isFavorite ? "Favorited" : "Favorite"}
            </button>
          </div>

          <CollapsibleSection title="Product Details" defaultOpen>
            <p>{product.description}</p>
          </CollapsibleSection>

          <CollapsibleSection title="Shipping & Returns">
            <p>Free standard shipping and free 30-day returns for Nike Members.</p>
          </CollapsibleSection>
        </div>
      </section>

      <section className="mt-24">
        <h2 className="mb-8 text-heading-3 text-dark-900">You Might Also Like</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {relatedProducts.map((p) => (
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
      </section>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Added to Bag">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="rounded-full bg-green-100 p-3 text-green-600">
            <CheckCircle className="h-8 w-8" />
          </div>
          <div>
            <p className="text-body-medium text-dark-900">{product.name}</p>
            <p className="text-body text-dark-700">Size: {selectedSize}</p>
            <p className="text-body text-dark-700">${product.price.toFixed(2)}</p>
          </div>
          <div className="flex w-full gap-3 mt-2">
            <button
              onClick={() => setIsModalOpen(false)}
              className="flex-1 rounded-full border border-light-300 py-3 text-body-medium text-dark-900 hover:border-dark-500"
            >
              Continue Shopping
            </button>
            <Link
              href="/cart"
              className="flex-1 flex items-center justify-center rounded-full bg-dark-900 py-3 text-body-medium text-light-100 hover:opacity-90"
            >
              View Cart
            </Link>
          </div>
        </div>
      </Modal>
    </main>
  );
}
