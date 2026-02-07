import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { CatalogSection } from "@/components/catalog-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <CatalogSection />
      </main>
      <Footer />
    </div>
  )
}
