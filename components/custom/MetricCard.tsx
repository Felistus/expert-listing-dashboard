// Metric Card Component

import { ArrowDown, ArrowUp } from "lucide-react";

type MetricCardProps = {
  value: string;
  label: string;
  trend?: number;
  color?: "blue" | "green" | "purple" | "red";
};

const colorClasses = {
  blue: "text-blue-600 bg-blue-50",
  green: "text-green-600 bg-green-50",
  purple: "text-teal-400 bg-purple-50",
  red: "text-red-600 bg-red-50",
};

const MetricCard = ({
  value,
  label,
  trend = 0,
  color = "blue",
}: MetricCardProps) => {
  const TrendIcon = trend > 0 ? ArrowUp : ArrowDown;
  const trendText = trend > 0 ? "text-green-700 " : "text-red-700";
  const trendBg = trend > 0 ? "bg-green-300" : "bg-red-300";

  return (
    <div className="bg-white rounded-xl p-3.25 border border-gray-100 ">
      <div className="flex items-start justify-between ">
        <div>
          <div
            className={`text-[19px] font-semibold ${colorClasses[color].split(" ")[0]}`}
          >
            {value}
          </div>
          <div className="flex gap-3.25 items-center mt-1">
            <div className="text-[10px] font-medium text-nav-item-gray ">
              {label}
            </div>
            {trend && (
              <div
                className={`flex items-center gap-1 text-xs font-medium ${trendText}`}
              >
                <div
                  className={`rounded-full flex items-center justify-center w-3 h-3 ${trendBg} `}
                >
                  <TrendIcon size={8} />
                </div>
                {Math.abs(trend)}%
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MetricCard;
