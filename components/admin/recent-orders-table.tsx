'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Eye, MoreHorizontal } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { orders, formatRupiah, formatDate } from '@/lib/data';
import { orderStatusConfig, type OrderStatus } from '@/lib/types';
import { cn } from '@/lib/utils';

function StatusBadge({ status }: { status: OrderStatus }) {
  const config = orderStatusConfig[status];
  
  const variantClasses = {
    warning: 'bg-amber-500/15 text-amber-400 hover:bg-amber-500/20',
    info: 'bg-blue-500/15 text-blue-400 hover:bg-blue-500/20',
    purple: 'bg-purple-500/15 text-purple-400 hover:bg-purple-500/20',
    success: 'bg-emerald-500/15 text-emerald-400 hover:bg-emerald-500/20',
    destructive: 'bg-red-500/15 text-red-400 hover:bg-red-500/20',
  };

  return (
    <Badge variant="secondary" className={cn('text-xs font-medium', variantClasses[config.variant])}>
      {config.label}
    </Badge>
  );
}

export function RecentOrdersTable() {
  const recentOrders = orders.slice(0, 6);

  return (
    <Card className="bg-card border-border">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <div>
          <CardTitle className="text-base font-semibold text-foreground">
            Pesanan Terbaru
          </CardTitle>
          <p className="text-sm text-muted-foreground mt-1">
            {orders.length} pesanan dalam 7 hari terakhir
          </p>
        </div>
        <Button variant="outline" size="sm">
          Lihat Semua
        </Button>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-border hover:bg-transparent">
                <TableHead className="text-muted-foreground font-medium">ID Resi</TableHead>
                <TableHead className="text-muted-foreground font-medium">Nama Pelanggan</TableHead>
                <TableHead className="text-muted-foreground font-medium">Tanggal</TableHead>
                <TableHead className="text-muted-foreground font-medium text-right">Total</TableHead>
                <TableHead className="text-muted-foreground font-medium">Status</TableHead>
                <TableHead className="text-muted-foreground font-medium text-right">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentOrders.map((order) => (
                <TableRow key={order.id} className="border-border hover:bg-muted/50">
                  <TableCell className="font-mono text-sm text-foreground">
                    {order.trackingId}
                  </TableCell>
                  <TableCell>
                    <div>
                      <p className="font-medium text-foreground">{order.customerName}</p>
                      <p className="text-xs text-muted-foreground">{order.customerEmail}</p>
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {formatDate(order.createdAt)}
                  </TableCell>
                  <TableCell className="text-right font-medium text-foreground">
                    {formatRupiah(order.total)}
                  </TableCell>
                  <TableCell>
                    <StatusBadge status={order.status} />
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem className="cursor-pointer">
                          <Eye className="mr-2 h-4 w-4" />
                          Lihat Detail
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer">
                          Update Status
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer">
                          Cetak Invoice
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
