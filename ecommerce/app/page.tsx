import Image from "next/image";
import Link from "next/link";
import { Card } from "../components";
import { products } from "../lib/mockData";

export default function Home() {
  // Get first 3 products for "Latest" section
  const latestProducts = products.slice(0, 3);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full bg-light-200">
        <div className="absolute inset-0">
          <Image
            src="/hero-bg.png"
            alt="Hero Background"
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <p className="text-body-medium font-bold text-dark-900">New Arrival</p>
            <h1 className="mt-2 text-5xl font-bold uppercase text-dark-900 sm:text-heading-1">
              Nike Air Max <br /> Pulse
            </h1>
            <p className="mt-4 text-body text-dark-700 sm:text-lead">
              Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
              —designed to push you past your limits and help you go to the max.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="rounded-full bg-dark-900 px-8 py-4 text-body-medium text-light-100 transition hover:opacity-90"
              >
                Shop Air Max
              </Link>
              <Link
                href="/products"
                className="rounded-full bg-light-100 px-8 py-4 text-body-medium text-dark-900 transition hover:bg-light-200"
              >
                Shop All
              </Link>
            </div>
          </div>
          {/* Floating Shoe Image */}
          <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 lg:block w-[600px] h-[600px]">
             <Image
                src="/hero-shoe.png"
                alt="Nike Air Max Pulse"
                fill
                className="object-contain drop-shadow-2xl -rotate-12 hover:rotate-0 transition-transform duration-700"
             />
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-heading-3 text-dark-900">Featured</h2>
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl sm:aspect-[21/9]">
          <Image
            src="/feature.png"
            alt="Featured"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-start justify-end bg-gradient-to-t from-black/60 to-transparent p-8 sm:p-12">
            <h3 className="text-4xl font-bold text-light-100 sm:text-heading-2">STEP INTO WHAT FEELS GOOD</h3>
            <p className="mt-4 max-w-lg text-body text-light-200">
              Cause everyone should know the feeling of running in that perfect pair.
            </p>
            <Link
              href="/products"
              className="mt-8 rounded-full bg-light-100 px-8 py-3 text-body-medium text-dark-900 transition hover:bg-light-200"
            >
              Find Your Shoe
            </Link>
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-heading-3 text-dark-900">Trending</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-xl bg-light-200 group">
             <Image src="/trending-1.png" alt="Trending 1" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
             <div className="absolute bottom-8 left-8 p-4">
                <p className="text-body-medium text-light-200">Just In</p>
                <h3 className="text-heading-3 text-light-100 mb-4">Nike Dunk Low</h3>
                <Link
                  href="/products"
                  className="inline-block rounded-full bg-light-100 px-6 py-3 text-body-medium text-dark-900 transition hover:bg-light-200"
                >
                  Shop
                </Link>
             </div>
          </div>
          <div className="grid grid-cols-1 gap-8">
             <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-light-200 group">
                <Image src="/trending-2.png" alt="Trending 2" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-heading-3 text-light-100 mb-3">Retro Styles</h3>
                  <Link
                    href="/products"
                    className="inline-block rounded-full bg-light-100 px-6 py-2 text-body-medium text-dark-900 transition hover:bg-light-200"
                  >
                    Shop
                  </Link>
                </div>
             </div>
             <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-light-200 group">
                <Image src="/trending-3.png" alt="Trending 3" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-heading-3 text-light-100 mb-3">New Performance</h3>
                  <Link
                    href="/products"
                    className="inline-block rounded-full bg-light-100 px-6 py-2 text-body-medium text-dark-900 transition hover:bg-light-200"
                  >
                    Shop
                  </Link>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Latest Shoes Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-heading-3 text-dark-900">Latest Shoes</h2>
          <Link href="/products" className="text-body-medium text-dark-900 hover:underline">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latestProducts.map((p) => (
            <Card
              key={p.id}
              title={p.name}
              subtitle={p.category}
              meta={`${p.sizes.length} Sizes`}
              imageSrc={p.image}
              price={p.price}
              badge={{ label: "New", tone: "orange" }}
              href={`/products/${p.id}`}
            />
          ))}
        </div>
      </section>

      {/* Essentials / Categories */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-heading-3 text-dark-900">The Essentials</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {['Men', 'Women', 'Kids'].map((cat) => (
            <Link
              key={cat}
              href={`/products?gender=${cat.toLowerCase()}`}
              className="group relative aspect-[3/4] overflow-hidden rounded-xl"
            >
              <Image
                src={cat === 'Men' ? '/shoes/shoe-1.jpg' : cat === 'Women' ? '/shoes/shoe-5.avif' : '/shoes/shoe-7.avif'}
                alt={cat}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-8 left-8 rounded-full bg-light-100 px-6 py-2 text-body-medium text-dark-900">
                {cat}'s
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
