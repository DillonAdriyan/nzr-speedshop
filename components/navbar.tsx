"use client"

import { useState } from "react"
import { Search, ShoppingBag, Menu, X, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useCart } from "@/lib/cart-context"
import { CartSheet } from "./cart-sheet"

const categories = ["Semua Produk", "Pengereman", "Baut", "Mesin", "Aksesoris"]

export function Navbar() {
  const { totalItems } = useCart()
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-4">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2">
              <div className="flex items-center justify-center w-9 h-9 bg-primary rounded">
                <Zap className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-foreground leading-none">
                  NZR
                </span>
                <span className="text-[10px] font-medium tracking-[0.2em] text-muted-foreground uppercase leading-none">
                  Speed Shop
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {categories.map((category) => (
                <a
                  key={category}
                  href="#"
                  className="px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {category}
                </a>
              ))}
            </nav>

            {/* Search and Actions */}
            <div className="flex items-center gap-3">
              {/* Search Bar - Desktop */}
              <div className="hidden md:flex relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Cari sparepart..."
                  className="w-56 lg:w-64 pl-9 bg-secondary border-transparent focus:border-primary focus:bg-card text-foreground placeholder:text-muted-foreground"
                />
              </div>

              {/* Cart Button */}
              <Button
                variant="ghost"
                size="icon"
                className="relative"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingBag className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {totalItems}
                  </span>
                )}
                <span className="sr-only">Keranjang belanja</span>
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="md:hidden pb-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Cari sparepart..."
                className="w-full pl-9 bg-secondary border-transparent focus:border-primary focus:bg-card text-foreground placeholder:text-muted-foreground"
              />
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden border-t border-border bg-card">
            <div className="mx-auto max-w-7xl px-4 py-4 space-y-1">
              {categories.map((category) => (
                <a
                  key={category}
                  href="#"
                  className="block px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-secondary rounded-md"
                >
                  {category}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      <CartSheet open={isCartOpen} onOpenChange={setIsCartOpen} />
    </>
  )
}
