"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useAppSelector } from "../store/hooks";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";

const NAV_LINKS = [
  { label: "Men", href: "/products?gender=men" },
  { label: "Women", href: "/products?gender=women" },
  { label: "Kids", href: "/products?gender=kids" },
  { label: "Collections", href: "/collections" },
  { label: "Contact", href: "/contact" },
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const cartItems = useAppSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }

    const delayDebounceFn = setTimeout(() => {
      if (searchQuery) {
        router.push(`/products?search=${encodeURIComponent(searchQuery)}`);
      } else {
        router.push('/products');
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery, router]);

  return (
    <header className="sticky top-0 z-50 bg-light-100/80 backdrop-blur-md border-b border-light-300">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        <Link href="/" aria-label="Nike Home" className="flex items-center z-20">
           <Image src="/logo.svg" alt="Nike" width={60} height={20} className="invert" />
        </Link>

        {/* Desktop Navigation - Restored to original layout */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-body-medium text-dark-900 transition-colors hover:text-dark-700"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 z-20">
          {/* Search Bar - Fixed to not overlap */}
          <div className={`flex items-center transition-all duration-300 ease-in-out ${isSearchOpen ? 'w-64' : 'w-10'}`}>
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-dark-900 hover:text-dark-700 p-2 flex-shrink-0"
            >
              <Search className="h-6 w-6" />
            </button>

            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`ml-2 bg-transparent border-b-2 border-dark-900 text-dark-900 placeholder-dark-500 focus:outline-none transition-all duration-300 flex-1 min-w-0 ${
                isSearchOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
              onBlur={() => {
                if (!searchQuery) setIsSearchOpen(false);
              }}
            />
          </div>

          <Link href="/cart" className="relative text-dark-900 hover:text-dark-700 p-2 flex-shrink-0">
            <ShoppingBag className="h-6 w-6" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-dark-900 text-[10px] font-bold text-light-100">
                {cartCount}
              </span>
            )}
          </Link>

          <button
            type="button"
            className="md:hidden p-2 text-dark-900"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 top-16 z-40 bg-light-100 transform transition-all duration-300 ease-in-out md:hidden ${
          open ? "translate-x-0 opacity-100 visible" : "translate-x-full opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col p-6 gap-6">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-heading-3 text-dark-900"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
