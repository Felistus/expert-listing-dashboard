// Navigation Component

import Home from "../icons/Home";
import Profile from "../icons/Profile";
import Request from "../icons/Request";
import Scroll from "../icons/Scroll";
import Tasks from "../icons/Tasks";
import Toolbox from "../icons/Toolbox";

type NavItemProps = {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  label: string;
  active?: boolean;
};
const NavItem = ({ icon: Icon, label, active = false }: NavItemProps) => (
  <button
    className={`flex items-center gap-2 px-8 py-1.75 rounded-xl transition-colors text-sm ${
      active
        ? "bg-nav-item-hover-green text-nav-item-active-green font-semibold cursor-pointer"
        : "text-nav-item-gray font-normal"
    }`}
  >
    <Icon />
    <span className="font-medium">{label}</span>
  </button>
);

const Navigation = () => (
  <nav className="py-3.5 bg-white border-b border-gray-200">
    <div className="max-w-321 mx-auto flex items-center justify-between gap-13 ">
      <NavItem icon={Home} label="Dashboard" active />
      <NavItem icon={Toolbox} label="Listings" />
      <NavItem icon={Profile} label="Users" />
      <NavItem icon={Request} label="Request" />
      <NavItem icon={Scroll} label="Applications" />
      <NavItem icon={Tasks} label="Tasks" />
    </div>
  </nav>
);
export default Navigation;
