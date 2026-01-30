"use client"

import Image from "next/image"
import { Minus, Plus, Trash2 } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/lib/cart-context"
import { ScrollArea } from "@/components/ui/scroll-area"

interface CartSheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const formatRupiah = (value: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)
}

export function CartSheet({ open, onOpenChange }: CartSheetProps) {
  const { items, updateQuantity, removeFromCart, totalPrice, totalItems } = useCart()

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="flex flex-col w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="text-lg font-bold tracking-tight">
            Keranjang Anda ({totalItems})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 py-12">
            <div className="rounded-full bg-secondary p-6">
              <svg
                className="h-10 w-10 text-muted-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </div>
            <div className="text-center">
              <p className="text-foreground font-semibold">Keranjang Anda kosong</p>
              <p className="text-sm text-muted-foreground mt-1">
                Tambahkan sparepart untuk memulai
              </p>
            </div>
            <Button onClick={() => onOpenChange(false)} className="mt-4">
              Lanjut Belanja
            </Button>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 -mx-4 px-4">
              <div className="space-y-4 py-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative h-24 w-24 overflow-hidden rounded-lg bg-secondary flex-shrink-0">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="96px"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <h3 className="text-sm font-medium text-foreground line-clamp-2">
                          {item.name}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {item.category}
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-7 w-7 bg-transparent"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                          >
                            <Minus className="h-3 w-3" />
                            <span className="sr-only">Kurangi jumlah</span>
                          </Button>
                          <span className="w-6 text-center text-sm font-medium">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-7 w-7 bg-transparent"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                          >
                            <Plus className="h-3 w-3" />
                            <span className="sr-only">Tambah jumlah</span>
                          </Button>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-semibold text-foreground">
                            {formatRupiah(item.price * item.quantity)}
                          </span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7 text-muted-foreground hover:text-destructive"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">Hapus item</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="mt-auto border-t border-border pt-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium text-foreground">{formatRupiah(totalPrice)}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Ongkos Kirim</span>
                  <span className="font-medium text-foreground">Dihitung saat checkout</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="text-base font-medium text-foreground">Total</span>
                  <span className="text-lg font-semibold text-foreground">{formatRupiah(totalPrice)}</span>
                </div>
              </div>
              <SheetFooter className="p-0 mt-6">
                <Button className="w-full font-semibold" size="lg">
                  Lanjut ke Pembayaran
                </Button>
              </SheetFooter>
              <p className="text-xs text-center text-muted-foreground mt-3">
                Gratis ongkir untuk pesanan di atas Rp500.000
              </p>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
