import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const collections = [
  {
    id: "summer-25",
    title: "Summer 2025",
    description: "Embrace the heat with breathable fabrics and vibrant colors.",
    image: "/shoes/shoe-1.jpg",
    href: "/products?collection=summer-25",
  },
  {
    id: "retro-running",
    title: "Retro Running",
    description: "Classic styles reimagined for modern comfort.",
    image: "/shoes/shoe-4.webp",
    href: "/products?collection=retro-running",
  },
  {
    id: "street-style",
    title: "Street Style",
    description: "Bold looks for the urban explorer.",
    image: "/shoes/shoe-3.webp",
    href: "/products?collection=street-style",
  },
];

export default function CollectionsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-heading-1 text-dark-900 mb-4">Our Collections</h1>
        <p className="text-lead text-dark-700 max-w-2xl mx-auto">
          Discover our curated selections, designed to inspire your next move.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {collections.map((collection) => (
          <Link
            key={collection.id}
            href={collection.href}
            className="group relative overflow-hidden rounded-2xl bg-light-200 aspect-[4/5]"
          >
            <Image
              src={collection.image}
              alt={collection.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
            <div className="absolute bottom-0 left-0 p-8 text-light-100">
              <h2 className="text-heading-3 mb-2">{collection.title}</h2>
              <p className="text-body mb-4 text-light-300">{collection.description}</p>
              <span className="inline-flex items-center gap-2 text-body-medium underline-offset-4 group-hover:underline">
                Explore Collection <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
