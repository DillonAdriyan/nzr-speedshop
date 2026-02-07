import { MapPin, Phone, Mail, Clock, Instagram, Facebook, MessageCircle } from "lucide-react"

const quickLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Katalog Produk", href: "#katalog" },
  { label: "Cek Resi", href: "#cek-resi" },
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Kontak", href: "#kontak" },
]

const categories = [
  "Baut & Mur",
  "Pengereman",
  "Body Carbon",
  "Velg & Ban",
  "Aksesoris CNC",
  "Knalpot Racing",
]

export function Footer() {
  return (
    <footer id="kontak" className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-black text-foreground">
              NZR <span className="text-primary">SPEED SHOP</span>
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Toko sparepart dan aksesoris motor terpercaya sejak 2018. 
              Menyediakan produk original berkualitas dengan harga kompetitif 
              untuk modifikasi motor impian Anda.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-foreground">
              Menu Utama
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-foreground">
              Kategori Produk
            </h4>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category}>
                  <a
                    href="#katalog"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-foreground">
              Hubungi Kami
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>Jl. Raya Modifikasi No. 88, Jakarta Timur 13510</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <span>info@nzrspeedshop.id</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 shrink-0 text-primary" />
                <span>Senin - Sabtu, 09:00 - 21:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-12 border-t border-border pt-8">
          <h4 className="mb-4 text-center text-sm font-bold uppercase tracking-wide text-foreground">
            Metode Pembayaran
          </h4>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {["BCA", "BRI", "Mandiri", "Dana", "ShopeePay", "OVO", "GoPay"].map((payment) => (
              <div
                key={payment}
                className="flex h-10 items-center justify-center rounded-md border border-border bg-secondary px-4 text-sm font-bold text-muted-foreground"
              >
                {payment}
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 NZR Speed Shop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
