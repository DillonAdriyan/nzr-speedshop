import { AdminSidebar } from '@/components/admin/admin-sidebar';
import { AdminTopbar } from '@/components/admin/admin-topbar';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';

export default function OrdersPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <AdminSidebar />
      <div className="flex-1 flex flex-col lg:ml-0">
        <AdminTopbar
          breadcrumbs={[
            { label: 'NZR Admin' },
            { label: 'Pesanan' },
          ]}
        />
        <main className="flex-1 p-6 overflow-auto">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-foreground">Manajemen Pesanan</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Kelola dan pantau semua pesanan pelanggan
            </p>
          </div>
          <Card className="bg-card border-border">
            <CardContent className="flex flex-col items-center justify-center py-16">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <ShoppingCart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Halaman Pesanan</h3>
              <p className="text-sm text-muted-foreground text-center max-w-md">
                Halaman ini akan menampilkan daftar lengkap pesanan dengan fitur filter, 
                pencarian, dan manajemen status pesanan.
              </p>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
