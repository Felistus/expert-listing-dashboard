import ExpertLogo from "../icons/ExpertLogo";

const Logo = () => (
  <div className="flex items-center gap-2.75 text-white">
    <div className="w-8 h-8 flex items-center justify-center">
      <ExpertLogo />
    </div>
    <span className="text-xl font-normal">Expert Listing</span>
  </div>
);
export default Logo;
