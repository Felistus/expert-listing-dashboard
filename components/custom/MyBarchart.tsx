// // Chart Component
// const BarChart = () => {
//   const months = [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sep",
//   ];
//   const data = [
//     [30, 15, 10],
//     [25, 28, 20],
//     [18, 22, 15],
//     [28, 18, 12],
//     [22, 15, 20],
//     [48, 8, 5],
//     [35, 28, 22],
//     [25, 28, 18],
//     [40, 32, 25],
//   ];

//   return (
//     <div className="flex items-end justify-between h-64 px-4">
//       {months.map((month, idx) => (
//         <div key={month} className="flex flex-col items-center gap-1 flex-1">
//           <div className="flex items-end gap-0.5 w-full justify-center h-full">
//             <div
//               className="bg-blue-500 w-2 rounded-t"
//               style={{ height: `${data[idx][0]}%` }}
//             />
//             <div
//               className="bg-green-500 w-2 rounded-t"
//               style={{ height: `${data[idx][1]}%` }}
//             />
//             <div
//               className="bg-red-500 w-2 rounded-t"
//               style={{ height: `${data[idx][2]}%` }}
//             />
//           </div>
//           <span className="text-xs text-gray-500 mt-2">{month}</span>
//         </div>
//       ))}
//     </div>
//   );
// };
// export default BarChart;

"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

export const description = "A multiple bar chart";

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
    color: "var(--color-card-purpler)",
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
