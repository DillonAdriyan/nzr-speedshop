import { Shield, Truck, Wrench, BadgeCheck } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Produk 100% Original",
    description: "Semua produk dijamin asli dengan garansi resmi dari distributor.",
  },
  {
    icon: Truck,
    title: "Pengiriman Seluruh Indonesia",
    description: "Kirim ke seluruh nusantara dengan packaging aman dan tracking realtime.",
  },
  {
    icon: Wrench,
    title: "Konsultasi Gratis",
    description: "Tim mekanik berpengalaman siap membantu pilih sparepart yang tepat.",
  },
  {
    icon: BadgeCheck,
    title: "Harga Terbaik",
    description: "Garansi harga kompetitif dengan kualitas premium terjamin.",
  },
]

export function FeaturesSection() {
  return (
    <section className="border-y border-border bg-card py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-black tracking-tight text-foreground md:text-3xl">
            Kenapa Pilih <span className="text-primary">NZR Speed Shop?</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            Kepercayaan ribuan pelanggan adalah prioritas kami
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-lg border border-border bg-secondary/50 p-6 transition-all hover:border-primary/50 hover:bg-secondary"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-foreground">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
