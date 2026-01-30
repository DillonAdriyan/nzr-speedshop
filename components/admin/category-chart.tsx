'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart';
import { Pie, PieChart, Cell, Legend } from 'recharts';
import { categorySalesData } from '@/lib/data';

const chartConfig = {
  sales: {
    label: 'Penjualan',
  },
  rem: {
    label: 'Rem',
    color: 'var(--chart-1)',
  },
  baut: {
    label: 'Baut',
    color: 'var(--chart-2)',
  },
  knalpot: {
    label: 'Knalpot',
    color: 'var(--chart-3)',
  },
  lainnya: {
    label: 'Lainnya',
    color: 'var(--chart-4)',
  },
} satisfies ChartConfig;

const COLORS = ['var(--chart-1)', 'var(--chart-2)', 'var(--chart-3)', 'var(--chart-4)'];

export function CategoryChart() {
  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-4">
        <CardTitle className="text-base font-semibold text-foreground">
          Penjualan per Kategori
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Distribusi penjualan bulan ini
        </p>
      </CardHeader>
      <CardContent className="pt-0">
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <PieChart>
            <Pie
              data={categorySalesData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={2}
              dataKey="sales"
              nameKey="category"
              label={({ category, sales }) => `${category} ${sales}%`}
              labelLine={false}
            >
              {categorySalesData.map((entry, index) => (
                <Cell key={`cell-${entry.category}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <ChartTooltip
              content={
                <ChartTooltipContent
                  formatter={(value, name) => [`${value}%`, name]}
                />
              }
            />
            <Legend
              formatter={(value) => (
                <span className="text-sm text-muted-foreground">{value}</span>
              )}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
