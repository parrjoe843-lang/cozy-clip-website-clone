"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Search, User, ShoppingBag } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
{ href: '/', label: 'HOME' },
{ href: '/collections/all', label: 'SHOP' },
{ href: '/about-us', label: 'ABOUT' },
{ href: '/pages/contact', label: 'CONTACT US' }];


export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-border bg-background text-foreground">
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="flex h-[72px] items-center justify-between gap-4">
            <div className="flex flex-1 justify-start">
              <div className="lg:hidden">
                <Sheet>
                  <SheetTrigger asChild>
                    <button className="-m-1 p-1">
                      <span className="sr-only">Open menu</span>
                      <Menu className="h-7 w-7" />
                    </button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-[300px] bg-background p-6 flex flex-col">
                    <div className="flex items-center justify-end">
                      <SheetTrigger asChild>
                         <button className="-m-1 p-1">
                          <span className="sr-only">Close menu</span>
                          <X className="h-5 w-5" />
                        </button>
                      </SheetTrigger>
                    </div>
                    <ul className="mt-5 space-y-1">
                      {navLinks.map(({ href, label }) =>
                      <li key={href}>
                           <Link href={href} className="block py-2.5 text-lg font-medium text-foreground">
                             {label.charAt(0) + label.slice(1).toLowerCase()}
                           </Link>
                         </li>
                      )}
                    </ul>
                    <div className="mt-auto space-y-5 border-t border-border pt-5">
                       <ul className="space-y-1.5">
                         <li><Link href="/account/login">Log in</Link></li>
                         <li><Link href="/account/register">Create account</Link></li>
                       </ul>
                       <form action="/search" method="get" className="relative">
                         <label htmlFor="mobile-search-header" className="sr-only">Search</label>
                         <input
                          type="search"
                          name="q"
                          id="mobile-search-header"
                          placeholder="Search"
                          className="w-full rounded-md border border-input bg-transparent py-2 pl-4 pr-10 text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" />

                         <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 p-1" aria-label="Search">
                           <Search className="h-5 w-5 text-muted-foreground" />
                         </button>
                       </form>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>

              <nav className="hidden lg:block">
                <ul className="-mx-2.5 flex items-center text-base">
                  {navLinks.map(({ href, label }) =>
                  <li key={href}>
                      <Link
                      href={href}
                      className="flex items-center px-2.5 py-3.5 text-sm uppercase text-foreground transition hover:opacity-75">

                        {label}
                      </Link>
                    </li>
                  )}
                </ul>
              </nav>
            </div>

            <h1 className="flex-shrink-0">
              <Link href="/" aria-label="Cloud Clip homepage" className="inline-block">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/ChatGPT-Image-Oct-22-2025-11_43_54-PM-1761201882515.png?width=8000&height=8000&resize=contain"
                  alt="Cloud Clip®"
                  width={360}
                  height={120}
                  priority
                  className="w-56 sm:w-64 md:w-72 lg:w-[352px] max-h-24 object-contain" />
              </Link>
            </h1>

            <div className="flex flex-1 items-center justify-end gap-x-3">
              <div className="hidden lg:block">
                <Link href="/account/login" aria-label="Log in" className='p-1'>
                  <User className="h-7 w-7" />
                </Link>
              </div>

              <button onClick={() => setIsSearchOpen(true)} className="p-1" aria-label="Open search">
                <Search className="h-7 w-7" />
              </button>

              <Link href="/cart" className="p-1" aria-label="Open cart">
                <ShoppingBag className="h-7 w-7" />
              </Link>

              <div className="ml-5 hidden lg:flex">
                 <Link
                  href="/products/the-cloud-clip"
                  className="inline-block rounded-lg bg-primary px-8 py-[14px] text-sm font-medium uppercase tracking-wide text-primary-foreground shadow-[0_4px_0_rgba(0,0,0,0.15)] transition-transform duration-150 ease-in-out hover:-translate-y-0.5 hover:bg-brand-dusty-rose-hover active:translate-y-0 active:shadow-none">

                  <span className="block">Shop Now</span>
                </Link>
              </div>
            </div>
          </div>
          
          {isSearchOpen &&
          <div
            className="absolute left-0 top-0 z-20 flex h-full w-full items-center bg-background px-6 lg:px-12">

              <form action="/search" method="get" className="relative w-full">
                <label htmlFor="header-search" className="sr-only">Search our site</label>
                <input
                id="header-search"
                type="search"
                name="q"
                autoFocus
                placeholder="Search"
                className="w-full border-0 border-b border-foreground bg-transparent py-2 pl-9 pr-8 text-lg shadow-none placeholder:text-muted-foreground focus:ring-0" />

                <button type="submit" className="absolute left-0 top-1/2 -translate-y-1/2 transform p-1" aria-label="Search submit">
                  <Search className="h-6 w-6" />
                </button>
              </form>
              <button onClick={() => setIsSearchOpen(false)} className="ml-4 flex-shrink-0 p-1" aria-label="Close search">
                <X className="h-6 w-6" />
              </button>
            </div>
          }
        </div>
      </header>
    </>);

}