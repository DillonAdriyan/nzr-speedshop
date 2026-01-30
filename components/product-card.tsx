"use client"

import Image from "next/image"
import { ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart, Product } from "@/lib/cart-context"
import { cn } from "@/lib/utils"

interface ProductCardProps {
  product: Product
}

const formatRupiah = (value: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart()

  const getBadgeStyles = (badge: string) => {
    switch (badge) {
      case "bestseller":
        return "bg-bestseller text-bestseller-foreground border-transparent"
      case "sale":
        return "bg-sale text-sale-foreground border-transparent"
      case "new":
        return "bg-new text-new-foreground border-transparent"
      default:
        return ""
    }
  }

  const getBadgeLabel = (badge: string, discount?: number) => {
    switch (badge) {
      case "bestseller":
        return "Terlaris"
      case "sale":
        return discount ? `-${discount}%` : "Diskon"
      case "new":
        return "Baru"
      default:
        return ""
    }
  }

  return (
    <article className="group relative flex flex-col bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        
        {/* Badges */}
        {product.badge && (
          <div className="absolute top-3 left-3">
            <Badge className={cn("text-xs font-bold uppercase tracking-wide", getBadgeStyles(product.badge))}>
              {getBadgeLabel(product.badge, product.discount)}
            </Badge>
          </div>
        )}

        {/* Add to Cart Overlay */}
        <div className="absolute inset-x-3 bottom-3 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <Button
            className="w-full shadow-lg font-semibold"
            onClick={() => addToCart(product)}
          >
            <ShoppingBag className="h-4 w-4 mr-2" />
            Tambah ke Keranjang
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2 flex-1">
        <p className="text-xs text-primary font-semibold uppercase tracking-wide">
          {product.category}
        </p>
        <h3 className="text-sm font-medium text-foreground line-clamp-2 leading-snug flex-1">
          {product.name}
        </h3>
        
        {/* Pricing */}
        <div className="flex items-center gap-2 mt-auto pt-2">
          <span className="text-lg font-bold text-foreground">
            {formatRupiah(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-xs text-muted-foreground line-through">
              {formatRupiah(product.originalPrice)}
            </span>
          )}
        </div>
      </div>

      {/* Mobile Add to Cart */}
      <div className="p-4 pt-0 lg:hidden">
        <Button
          variant="outline"
          size="sm"
          className="w-full bg-transparent border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
          onClick={() => addToCart(product)}
        >
          <ShoppingBag className="h-4 w-4 mr-2" />
          Tambah ke Keranjang
        </Button>
      </div>
    </article>
  )
}
