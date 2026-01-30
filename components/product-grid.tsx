"use client"

import { useState, useMemo } from "react"
import { ProductCard } from "./product-card"
import { ProductFilter } from "./product-filter"
import { products } from "@/lib/products"

export function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState("Semua")
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000000])

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "Semua" || product.category === selectedCategory
      const matchesPrice =
        product.price >= priceRange[0] && product.price <= priceRange[1]
      return matchesCategory && matchesPrice
    })
  }, [selectedCategory, priceRange])

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-card/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
            Belanja Sparepart
          </h2>
          <p className="mt-2 text-muted-foreground">
            Komponen premium untuk motor kesayangan Anda
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar Filter - Desktop */}
          <aside className="lg:w-64 shrink-0">
            <ProductFilter
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
            />
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Results Count */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">{filteredProducts.length}</span> produk ditemukan
              </p>
              <select className="text-sm bg-secondary border-0 text-foreground cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary rounded-md px-3 py-1.5">
                <option>Urutkan: Unggulan</option>
                <option>Harga: Rendah ke Tinggi</option>
                <option>Harga: Tinggi ke Rendah</option>
                <option>Terbaru</option>
              </select>
            </div>

            {/* Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-secondary/50 rounded-xl">
                <p className="text-muted-foreground">
                  Tidak ada produk yang sesuai kriteria Anda.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory("Semua")
                    setPriceRange([0, 5000000])
                  }}
                  className="mt-4 text-sm font-medium text-primary hover:underline"
                >
                  Hapus filter
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
