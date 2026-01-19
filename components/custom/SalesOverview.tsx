// Sales Overview Component

import MetricCard from "./MetricCard";
import { Button } from "../ui/button";
import { MyBarchart } from "./MyBarchart";

type NavItemProps = {
  label: string;
  active?: boolean;
};
const SortBTN = ({ label, active = false }: NavItemProps) => (
  <Button
    variant="secondary"
    className={`text-sm text-nav-item-gray rounded-xl cursor-pointer ${
      active ? "bg-gray-100 font-semibold" : "font-normal bg-transparent"
    }`}
  >
    {label}
  </Button>
);

const SalesOverview = () => (
  <div className="bg-white rounded-2xl border border-gray-200 shadow-xs">
    <div className="flex items-center justify-between mb-4.25 p-5 ">
      <div>
        <h2 className="text-xl font-semibold text-black">Sales Overview</h2>
        <p className="text-xs text-gray-500 mt-1">
          Showing overview Jan 2022 - Sep 2022
        </p>
      </div>
      <Button
        variant="outline"
        className="rounded-full cursor-pointer text-xs text-black font-medium"
      >
        View Transactions
      </Button>
    </div>

    <div className="flex gap-4 pb-3 mb-4 border-b justify-end px-5 border-gray-200 ">
      <SortBTN label="1 Week" />
      <SortBTN label="1 Month" />
      <SortBTN label="1 Year" active />
    </div>

    <div className="flex gap-4 pr-5 pb-5">
      <div className="flex-1 ">
        <MyBarchart />
      </div>
      <div className="w-100 ">
        <div className="grid grid-cols-2 gap-4 ">
          <MetricCard
            value="₦120,000,000.00"
            label="Total Inflow"
            trend={2.5}
            color="blue"
          />
          <MetricCard
            value="₦50,000,000.00"
            label="MRR"
            trend={2.5}
            color="green"
          />
          <MetricCard
            value="₦200,000,000.00"
            label="Commission Revenue"
            trend={-0.5}
            color="purple"
          />
          <MetricCard
            value="₦100,000,000.00"
            label="GMV"
            trend={-0.5}
            color="red"
          />
        </div>
      </div>
    </div>
  </div>
);
export default SalesOverview;
