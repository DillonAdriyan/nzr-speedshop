import { AdminSidebar } from '@/components/admin/admin-sidebar';
import { AdminTopbar } from '@/components/admin/admin-topbar';
import { ProductsTable } from '@/components/admin/products-table';

export default function ProductsPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <AdminSidebar />
      <div className="flex-1 flex flex-col lg:ml-0">
        <AdminTopbar
          breadcrumbs={[
            { label: 'NZR Admin' },
            { label: 'Manajemen Produk' },
          ]}
        />
        <main className="flex-1 p-6 overflow-auto">
          <ProductsTable />
        </main>
      </div>
    </div>
  );
}
