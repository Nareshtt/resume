"use client";

import Link from "next/link";
import Image from "next/image";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { removeItem, updateQuantity } from "../../store/slices/cartSlice";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import { products } from "../../lib/mockData";
import { Card } from "../../components";

export default function CartPage() {
  const { items, total } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  // Get random products for "You Might Like" section
  const relatedProducts = products
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  if (items.length === 0) {
    return (
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col items-center justify-center text-center max-w-lg mx-auto mb-20">
          <div className="w-20 h-20 bg-light-200 rounded-full flex items-center justify-center mb-6 text-dark-500">
            <ShoppingBag className="w-10 h-10" />
          </div>
          <h1 className="text-heading-2 text-dark-900 mb-4">Your bag is empty</h1>
          <p className="text-lead text-dark-700 mb-8">
            Looks like you haven't added anything to your bag yet.
          </p>
          <Link
            href="/"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-dark-900 px-8 py-4 text-body-medium text-light-100 transition hover:opacity-90"
          >
            Start Shopping
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <section className="border-t border-light-300 pt-16">
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
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-heading-3 text-dark-900 mb-8">Bag</h1>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_380px]">
        <div className="flex flex-col gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex gap-6 border-b border-light-300 pb-6 last:border-0"
            >
              <div className="relative h-32 w-32 flex-shrink-0 overflow-hidden rounded-lg bg-light-200">
                {item.image && (
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                )}
              </div>

              <div className="flex flex-1 flex-col justify-between">
                <div className="flex justify-between gap-4">
                  <div>
                    <h3 className="text-body-medium text-dark-900">
                      {item.name}
                    </h3>
                    <p className="text-body text-dark-700">
                      Price: ${item.price.toFixed(2)}
                    </p>
                  </div>
                  <p className="text-body-medium text-dark-900">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center rounded-full border border-light-300">
                      <button
                        onClick={() =>
                          dispatch(
                            updateQuantity({
                              id: item.id,
                              quantity: item.quantity - 1,
                            })
                          )
                        }
                        className="p-2 text-dark-900 hover:text-dark-700 disabled:opacity-50"
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-8 text-center text-body-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          dispatch(
                            updateQuantity({
                              id: item.id,
                              quantity: item.quantity + 1,
                            })
                          )
                        }
                        className="p-2 text-dark-900 hover:text-dark-700"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => dispatch(removeItem(item.id))}
                    className="text-dark-700 hover:text-red-600"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="h-fit rounded-xl border border-light-300 p-6">
          <h2 className="text-heading-3 text-dark-900 mb-6">Summary</h2>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between border-b border-light-300 pb-4">
              <span className="text-body text-dark-700">Subtotal</span>
              <span className="text-body-medium text-dark-900">
                ${total.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between border-b border-light-300 pb-4">
              <span className="text-body text-dark-700">
                Estimated Delivery & Handling
              </span>
              <span className="text-body-medium text-dark-900">Free</span>
            </div>
            <div className="flex justify-between py-4">
              <span className="text-body-medium text-dark-900">Total</span>
              <span className="text-body-medium text-dark-900">
                ${total.toFixed(2)}
              </span>
            </div>
            <Link href="/checkout/success" className="w-full block text-center rounded-full bg-dark-900 py-4 text-body-medium text-light-100 transition hover:opacity-90">
              Member Checkout
            </Link>
          </div>
        </div>
      </div>

      {/* Recommendations for non-empty cart as well */}
      <section className="mt-24 border-t border-light-300 pt-16">
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
    </main>
  );
}
