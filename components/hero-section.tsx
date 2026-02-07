import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export function HeroSection() {
  return (
    <section id="beranda" className="relative overflow-hidden bg-background py-20 md:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary via-background to-background" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            <span className="text-xs font-semibold uppercase tracking-wide text-primary">
              Trusted Since 2018
            </span>
          </div>

          {/* Headline */}
          <h1 className="max-w-4xl text-balance text-4xl font-black leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Pusat Sparepart & Aksesoris Motor{" "}
            <span className="text-primary">Terlengkap</span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            Solusi modifikasi motor Anda mulai dari baut, pengereman, hingga aksesoris carbon. 
            Kualitas terjamin, harga bersahabat.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Button size="lg" className="h-12 gap-2 px-8 text-base font-bold">
              Belanja Sekarang
              <ChevronRight className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 px-8 text-base font-bold bg-transparent"
            >
              Lihat Katalog
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {[
              { value: "5K+", label: "Produk" },
              { value: "10K+", label: "Pelanggan" },
              { value: "50+", label: "Brand" },
              { value: "4.9", label: "Rating" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-black text-foreground md:text-4xl">{stat.value}</p>
                <p className="mt-1 text-sm font-medium text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
