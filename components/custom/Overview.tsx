// Overview Card Component

type OverviewCardProps = {
  isUser: boolean;
  title: string;
  children: React.ReactNode;
};
import { ChevronRight } from "lucide-react";
import LinearHome from "../icons/LinearHome";
import User from "../icons/User";

const OverviewCard = ({ title, isUser, children }: OverviewCardProps) => (
  <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-xs">
    <div className="flex items-center justify-between bg-blue-50 border-b border-gray-200 p-4">
      <div className="flex items-center gap-2.5">
        <div className="w-6 h-6 flex items-center justify-center">
          {isUser ? <User /> : <LinearHome />}
        </div>
        <h3 className="font-medium text-sm text-gray-800">{title}</h3>
      </div>
      <button className="text-blue-600 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
        View all <ChevronRight size={16} />
      </button>
    </div>
    {children}
  </div>
);
export default OverviewCard;
