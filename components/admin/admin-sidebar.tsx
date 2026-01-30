'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Wallet,
  Settings,
  Wrench,
  ChevronLeft,
  Menu,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const menuItems = [
  {
    label: 'Dashboard',
    href: '/',
    icon: LayoutDashboard,
  },
  {
    label: 'Manajemen Produk',
    href: '/products',
    icon: Package,
  },
  {
    label: 'Pesanan',
    href: '/orders',
    icon: ShoppingCart,
  },
  {
    label: 'Pelanggan',
    href: '/customers',
    icon: Users,
  },
  {
    label: 'Keuangan',
    href: '/finance',
    icon: Wallet,
  },
  {
    label: 'Pengaturan',
    href: '/settings',
    icon: Settings,
  },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <Menu className="h-5 w-5" />
      </Button>

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed left-0 top-0 z-40 h-screen bg-sidebar border-r border-sidebar-border transition-all duration-300',
          isCollapsed ? 'w-0 lg:w-16' : 'w-64',
          'lg:relative'
        )}
      >
        <div className={cn('flex flex-col h-full', isCollapsed && 'lg:items-center')}>
          {/* Logo */}
          <div className={cn(
            'flex items-center gap-3 px-6 py-5 border-b border-sidebar-border',
            isCollapsed && 'lg:px-4 lg:justify-center'
          )}>
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
              <Wrench className="h-5 w-5 text-primary-foreground" />
            </div>
            {!isCollapsed && (
              <div className="flex flex-col">
                <span className="font-bold text-lg text-sidebar-foreground tracking-tight">
                  NZR ADMIN
                </span>
                <span className="text-[10px] text-muted-foreground uppercase tracking-wider">
                  Speed Shop
                </span>
              </div>
            )}
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-sidebar-accent text-primary'
                      : 'text-muted-foreground hover:text-sidebar-foreground hover:bg-sidebar-accent/50',
                    isCollapsed && 'lg:justify-center lg:px-2'
                  )}
                >
                  <item.icon className={cn('h-5 w-5 shrink-0', isActive && 'text-primary')} />
                  {!isCollapsed && <span>{item.label}</span>}
                </Link>
              );
            })}
          </nav>

          {/* Collapse Toggle - Desktop Only */}
          <div className="hidden lg:block p-3 border-t border-sidebar-border">
            <Button
              variant="ghost"
              size="sm"
              className={cn('w-full justify-center', !isCollapsed && 'justify-start')}
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              <ChevronLeft
                className={cn(
                  'h-4 w-4 transition-transform',
                  isCollapsed && 'rotate-180'
                )}
              />
              {!isCollapsed && <span className="ml-2">Tutup Menu</span>}
            </Button>
          </div>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {!isCollapsed && (
        <div
          className="fixed inset-0 z-30 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={() => setIsCollapsed(true)}
        />
      )}
    </>
  );
}
