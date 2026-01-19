// Stats Grid Component

type StatsGridProps = {
  stats: { label: string; value: string | number }[];
};

const StatsGrid = ({ stats }: StatsGridProps) => (
  <div className="grid grid-cols-3 gap-6 py-5 px-4">
    {stats.map((stat, idx) => (
      <div key={idx}>
        <div className="text-sm text-gray-600 mb-2">{stat.label}</div>
        <div className="text-2xl font-semibold text-gray-900">{stat.value}</div>
      </div>
    ))}
  </div>
);
export default StatsGrid;
