// Chart Component
"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", buy: 186, rent: 80, commercial: 40 },
  { month: "February", buy: 305, rent: 200, commercial: 100 },
  { month: "March", buy: 237, rent: 120, commercial: 80 },
  { month: "April", buy: 73, rent: 190, commercial: 60 },
  { month: "May", buy: 209, rent: 130, commercial: 90 },
  { month: "June", buy: 214, rent: 140, commercial: 70 },
  { month: "July", buy: 214, rent: 200, commercial: 100 },
  { month: "August", buy: 214, rent: 140, commercial: 80 },
  { month: "September", buy: 214, rent: 140, commercial: 60 },
];

const chartConfig = {
  buy: {
    label: "Buy",
    color: "var(--color-card-purple)",
  },
  rent: {
    label: "Rent",
    color: "var(--color-card-light-green)",
  },
  commercial: {
    label: "Commercial",
    color: "var(--color-card-error-red)",
  },
} satisfies ChartConfig;

export function MyBarchart() {
  return (
    <div className="w-full px-0">
      <ChartContainer config={chartConfig} className="h-50 w-full px-0">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis tickLine={true} tickMargin={10} axisLine={true} />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="dashed" />}
          />
          <Bar dataKey="buy" fill="var(--color-buy)" radius={4} />
          <Bar dataKey="rent" fill="var(--color-rent)" radius={4} />
          <Bar dataKey="commercial" fill="var(--color-commercial)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
}
