"use client"

import { useState } from "react"
import { SlidersHorizontal, X, Grid3X3, LayoutGrid } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProductCard, type Product } from "@/components/product-card"
import { FilterSidebar } from "@/components/filter-sidebar"

const products: Product[] = [
  {
    id: "1",
    name: "Master Rem Brembo RCS 19 Corsa Corta",
    price: 4500000,
    badge: "Original",
  },
  {
    id: "2",
    name: "Paket Baut Body RX King Stainless",
    price: 250000,
    badge: "Terlaris",
  },
  {
    id: "3",
    name: "Velg RCB SP522 Jupiter Z",
    price: 1850000,
    badge: "Stok Terbatas",
  },
  {
    id: "4",
    name: "Handgrip Ariete Original",
    price: 200000,
  },
  {
    id: "5",
    name: "Kaliper Brembo 4 Piston Universal",
    price: 3200000,
    badge: "Original",
  },
  {
    id: "6",
    name: "Knalpot R9 H2 Carbon Series",
    price: 2750000,
    badge: "Baru",
  },
  {
    id: "7",
    name: "Cover CVT Carbon Aerox 155",
    price: 450000,
  },
  {
    id: "8",
    name: "Stang Fatbar Protaper Aluminium",
    price: 385000,
    badge: "Terlaris",
  },
]

export function CatalogSection() {
  const [showMobileFilter, setShowMobileFilter] = useState(false)

  return (
    <section id="katalog" className="bg-background py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-black tracking-tight text-foreground md:text-3xl">
              Katalog <span className="text-primary">Produk</span>
            </h2>
            <p className="mt-2 text-muted-foreground">
              Menampilkan {products.length} produk pilihan
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Mobile Filter Toggle */}
            <Button
              variant="outline"
              className="gap-2 lg:hidden bg-transparent"
              onClick={() => setShowMobileFilter(true)}
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filter
            </Button>

            {/* View Toggle */}
            <div className="hidden items-center gap-1 rounded-lg border border-border bg-secondary p-1 sm:flex">
              <Button variant="ghost" size="icon" className="h-8 w-8 bg-card">
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <LayoutGrid className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block">
            <FilterSidebar />
          </div>

          {/* Mobile Filter Overlay */}
          {showMobileFilter && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div
                className="absolute inset-0 bg-background/80 backdrop-blur-sm"
                onClick={() => setShowMobileFilter(false)}
                onKeyDown={(e) => e.key === 'Enter' && setShowMobileFilter(false)}
              />
              <div className="absolute bottom-0 left-0 right-0 max-h-[80vh] overflow-auto rounded-t-xl border-t border-border bg-card p-4">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-bold">Filter Produk</h3>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowMobileFilter(false)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <FilterSidebar />
                <div className="mt-4 flex gap-3">
                  <Button
                    variant="outline"
                    className="flex-1 bg-transparent"
                    onClick={() => setShowMobileFilter(false)}
                  >
                    Reset
                  </Button>
                  <Button className="flex-1" onClick={() => setShowMobileFilter(false)}>
                    Terapkan Filter
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Load More */}
            <div className="mt-8 flex justify-center">
              <Button variant="outline" size="lg" className="font-bold bg-transparent">
                Muat Lebih Banyak
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
