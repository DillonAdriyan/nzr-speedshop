import { AdminSidebar } from '@/components/admin/admin-sidebar';
import { AdminTopbar } from '@/components/admin/admin-topbar';
import { MetricCard } from '@/components/admin/metric-card';
import { RevenueChart } from '@/components/admin/revenue-chart';
import { CategoryChart } from '@/components/admin/category-chart';
import { RecentOrdersTable } from '@/components/admin/recent-orders-table';
import { dashboardMetrics, formatRupiah, getLowStockProducts } from '@/lib/data';
import { Wallet, ShoppingCart, Package, AlertTriangle } from 'lucide-react';

export default function DashboardPage() {
  const lowStockCount = getLowStockProducts().length;

  return (
    <div className="flex min-h-screen bg-background">
      <AdminSidebar />
      <div className="flex-1 flex flex-col lg:ml-0">
        <AdminTopbar
          breadcrumbs={[
            { label: 'NZR Admin' },
            { label: 'Dashboard' },
          ]}
        />
        <main className="flex-1 p-6 overflow-auto">
          {/* Page Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Selamat datang kembali! Berikut ringkasan performa toko Anda.
            </p>
          </div>

          {/* Metric Cards */}
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-6">
            <MetricCard
              title="Total Pendapatan"
              value={formatRupiah(dashboardMetrics.totalRevenue)}
              change="+15% dari bulan lalu"
              changeType="positive"
              icon={Wallet}
            />
            <MetricCard
              title="Pesanan Baru"
              value={`${dashboardMetrics.newOrders} Order`}
              change="+5%"
              changeType="positive"
              icon={ShoppingCart}
            />
            <MetricCard
              title="Produk Terjual"
              value={`${dashboardMetrics.productsSold} Pcs`}
              icon={Package}
            />
            <MetricCard
              title="Stok Menipis"
              value={`${lowStockCount} Item`}
              change="Perlu Restock"
              changeType="negative"
              icon={AlertTriangle}
            />
          </div>

          {/* Charts Section */}
          <div className="grid gap-6 lg:grid-cols-3 mb-6">
            <div className="lg:col-span-2">
              <RevenueChart />
            </div>
            <div className="lg:col-span-1">
              <CategoryChart />
            </div>
          </div>

          {/* Recent Orders Table */}
          <RecentOrdersTable />
        </main>
      </div>
    </div>
  );
}
