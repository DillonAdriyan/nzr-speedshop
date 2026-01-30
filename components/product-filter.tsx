"use client"

import { SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { categories } from "@/lib/products"

interface ProductFilterProps {
  selectedCategory: string
  setSelectedCategory: (category: string) => void
  priceRange: [number, number]
  setPriceRange: (range: [number, number]) => void
}

const formatRupiah = (value: number) => {
  if (value >= 1000000) {
    return `Rp${(value / 1000000).toFixed(1)}jt`
  }
  return `Rp${(value / 1000).toFixed(0)}rb`
}

export function ProductFilter({
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
}: ProductFilterProps) {
  return (
    <div className="space-y-8">
      {/* Mobile Filter Header */}
      <div className="flex items-center justify-between lg:hidden">
        <h2 className="text-lg font-semibold text-foreground">Filter</h2>
        <Button variant="outline" size="sm" className="bg-transparent">
          <SlidersHorizontal className="h-4 w-4 mr-2" />
          Filter
        </Button>
      </div>

      {/* Desktop Sidebar Filter */}
      <div className="hidden lg:block space-y-8">
        {/* Categories */}
        <div className="bg-card border border-border rounded-xl p-5">
          <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">
            Kategori
          </h3>
          <div className="space-y-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div className="bg-card border border-border rounded-xl p-5">
          <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">
            Rentang Harga
          </h3>
          <div className="px-1">
            <Slider
              value={priceRange}
              min={0}
              max={5000000}
              step={100000}
              onValueChange={(value) => setPriceRange(value as [number, number])}
              className="mb-4"
            />
            <div className="flex items-center justify-between text-sm">
              <span className="px-2 py-1 bg-secondary rounded text-foreground font-medium">{formatRupiah(priceRange[0])}</span>
              <span className="text-muted-foreground">sampai</span>
              <span className="px-2 py-1 bg-secondary rounded text-foreground font-medium">{formatRupiah(priceRange[1])}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Horizontal Filter */}
      <div className="lg:hidden">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              className={`shrink-0 ${selectedCategory !== category ? "bg-transparent" : ""}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        <div className="mt-4">
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground shrink-0">Harga:</span>
            <Slider
              value={priceRange}
              min={0}
              max={5000000}
              step={100000}
              onValueChange={(value) => setPriceRange(value as [number, number])}
              className="flex-1"
            />
            <span className="text-sm text-foreground shrink-0 min-w-[120px] text-right font-medium">
              {formatRupiah(priceRange[0])} - {formatRupiah(priceRange[1])}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
