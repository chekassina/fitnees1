import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';

const data = [
  { name: 'Jan', membership: 65400, products: 12400, pt: 18500, marketplace: 4200 },
  { name: 'Feb', membership: 68200, products: 14500, pt: 19200, marketplace: 5100 },
  { name: 'Mar', membership: 72500, products: 16800, pt: 21400, marketplace: 6800 },
  { name: 'Apr', membership: 75800, products: 19200, pt: 24500, marketplace: 8400 },
  { name: 'May', membership: 82400, products: 24500, pt: 28600, marketplace: 12500 },
  { name: 'Jun', membership: 86500, products: 28400, pt: 32400, marketplace: 16800 },
];

export function RevenueChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
        <XAxis 
          dataKey="name" 
          axisLine={false} 
          tickLine={false} 
          tick={{ fill: '#64748b', fontSize: 12 }} 
          dy={10} 
        />
        <YAxis 
          axisLine={false} 
          tickLine={false} 
          tick={{ fill: '#64748b', fontSize: 12 }}
          tickFormatter={(value) => `$${value / 1000}k`}
          dx={-10}
        />
        <Tooltip 
          cursor={{ fill: '#f8fafc' }}
          contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
          formatter={(value: number) => [`$${value.toLocaleString()}`, undefined]}
        />
        <Legend 
          iconType="circle" 
          wrapperStyle={{ fontSize: '12px', paddingTop: '20px' }} 
        />
        <Bar dataKey="membership" name="Memberships" stackId="a" fill="#6366f1" radius={[0, 0, 4, 4]} barSize={32} />
        <Bar dataKey="pt" name="Personal Training" stackId="a" fill="#3b82f6" />
        <Bar dataKey="products" name="Store Sales" stackId="a" fill="#0ea5e9" />
        <Bar dataKey="marketplace" name="Marketplace" stackId="a" fill="#f43f5e" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
