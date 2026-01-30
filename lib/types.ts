// TypeScript Interfaces for NZR Speed Shop Admin Dashboard

export type OrderStatus = 
  | 'menunggu_bayar' 
  | 'diproses' 
  | 'dikirim' 
  | 'selesai' 
  | 'batal';

export type ProductStatus = 'aktif' | 'nonaktif';

export type ProductCategory = 
  | 'Rem' 
  | 'Baut' 
  | 'Knalpot' 
  | 'Rangka' 
  | 'Elektrik' 
  | 'Aksesoris'
  | 'Mesin'
  | 'Suspensi';

export interface Product {
  id: string;
  name: string;
  sku: string;
  category: ProductCategory;
  brand: string;
  price: number;
  stock: number;
  status: ProductStatus;
  image: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Order {
  id: string;
  trackingId: string;
  customerId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  items: OrderItem[];
  total: number;
  status: OrderStatus;
  shippingAddress: string;
  paymentMethod: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderItem {
  productId: string;
  productName: string;
  quantity: number;
  price: number;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  totalOrders: number;
  totalSpent: number;
  joinedAt: Date;
  lastOrderAt?: Date;
}

export interface DashboardMetric {
  label: string;
  value: string;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  icon: string;
}

export interface RevenueData {
  month: string;
  revenue: number;
}

export interface CategorySalesData {
  category: string;
  sales: number;
  fill: string;
}

// Status badge color mappings
export const orderStatusConfig: Record<OrderStatus, { label: string; variant: 'warning' | 'info' | 'purple' | 'success' | 'destructive' }> = {
  menunggu_bayar: { label: 'Menunggu Bayar', variant: 'warning' },
  diproses: { label: 'Diproses', variant: 'info' },
  dikirim: { label: 'Dikirim', variant: 'purple' },
  selesai: { label: 'Selesai', variant: 'success' },
  batal: { label: 'Batal', variant: 'destructive' },
};

export const productStatusConfig: Record<ProductStatus, { label: string; variant: 'success' | 'secondary' }> = {
  aktif: { label: 'Aktif', variant: 'success' },
  nonaktif: { label: 'Non-aktif', variant: 'secondary' },
};
