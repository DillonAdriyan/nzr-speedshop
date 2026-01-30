"use client"

import { ArrowRight, Gauge, Shield, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_25%,rgba(255,255,255,0.05)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.05)_75%)] bg-[length:60px_60px]" />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 py-16 sm:py-20 lg:py-24">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs font-semibold tracking-wide text-primary uppercase">
                Katalog 2026 Tersedia
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground leading-[1.05]">
              Performa
              <br />
              <span className="text-primary">Tanpa Batas</span>
            </h1>
            
            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Sparepart motor premium berkualitas tinggi untuk rider sejati. 
              Teruji di lintasan, terbukti di jalanan.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-base px-8 h-12 font-semibold">
                Belanja Sekarang
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="text-base px-8 h-12 font-semibold bg-transparent border-border hover:bg-secondary hover:text-foreground">
                Lihat Katalog
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 flex flex-wrap items-center gap-8 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Truck className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Gratis Ongkir Rp500rb+</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Garansi 1 Tahun</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Gauge className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">100% Original</span>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="flex-1 relative w-full max-w-lg lg:max-w-xl">
            <div className="aspect-square relative rounded-2xl overflow-hidden bg-secondary">
              <img
                src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&q=80"
                alt="Motor sport performa tinggi"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              
              {/* Stats Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="text-2xl sm:text-3xl font-bold text-foreground">10rb+</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mt-1">Produk</p>
                  </div>
                  <div className="text-center border-x border-border/50">
                    <p className="text-2xl sm:text-3xl font-bold text-foreground">50+</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mt-1">Brand</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl sm:text-3xl font-bold text-foreground">24 Jam</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mt-1">Pengiriman</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-4 sm:bottom-8 sm:-left-8 bg-card border border-border rounded-xl p-4 shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Gauge className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Terlaris</p>
                  <p className="text-sm font-semibold text-foreground">Master Rem Brembo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
