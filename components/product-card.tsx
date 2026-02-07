"use client"

import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export interface Product {
  id: string
  name: string
  price: number
  image?: string
  badge?: string
  badgeVariant?: "default" | "secondary" | "destructive" | "outline"
}

function formatPrice(price: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

function getBadgeClasses(badge: string) {
  switch (badge) {
    case "Terlaris":
      return "bg-primary text-primary-foreground"
    case "Original":
      return "bg-accent text-accent-foreground"
    case "Stok Terbatas":
      return "bg-destructive text-destructive-foreground"
    case "Baru":
      return "bg-emerald-600 text-white"
    case "Diskon 10%":
      return "bg-accent text-accent-foreground"
    default:
      return "bg-secondary text-secondary-foreground"
  }
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-secondary">
        {product.badge && (
          <Badge
            className={`absolute left-3 top-3 z-10 font-bold ${getBadgeClasses(product.badge)}`}
          >
            {product.badge}
          </Badge>
        )}
        <div className="flex h-full items-center justify-center">
          <div className="flex h-full w-full items-center justify-center bg-secondary/80 p-6">
            <svg
              className="h-20 w-20 text-muted-foreground/30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="mb-2 line-clamp-2 min-h-[2.5rem] text-sm font-bold leading-tight text-foreground">
          {product.name}
        </h3>
        <p className="mb-4 text-lg font-black text-primary">{formatPrice(product.price)}</p>
        <Button className="mt-auto w-full gap-2 font-bold">
          <ShoppingCart className="h-4 w-4" />
          Tambah ke Keranjang
        </Button>
      </div>
    </div>
  )
}
