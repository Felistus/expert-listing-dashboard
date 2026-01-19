// Main header component
"use client";

import Logo from "./Logo";
import Calculator from "../icons/Calculator";
import Calendar from "../icons/Calendar";
import SearchText from "../icons/SearchText";
import Wallet from "../icons/Wallet";
import Shop from "../icons/Shop";
import React from "react";
import BudgetModal from "../modals/Budget";

type IconButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

const IconButton = ({ children, className = "", onClick }: IconButtonProps) => (
  <button
    className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

function Header() {
  const [openBudgetModal, setOpenBudgetModal] = React.useState(false);
  const [openCalendarDrawer, setOpenCalendarDrawer] = React.useState(false);
  return (
    <>
      <header className="bg-nav-background-green py-5.5 ">
        <div className="max-w-321 mx-auto flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-6">
            <IconButton
              className="cursor-pointer"
              onClick={() => setOpenBudgetModal(true)}
            >
              <Calculator />
            </IconButton>
            <IconButton
              className="cursor-pointer"
              onClick={() => console.log("calculate")}
            >
              <Calendar />
            </IconButton>
            <IconButton>
              <SearchText />
            </IconButton>
            <IconButton>
              <Wallet />
            </IconButton>
            <IconButton>
              <Shop />
            </IconButton>
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center cursor-pointer font-bold text-[#1e6b5e]">
              D
            </div>
          </div>
        </div>
      </header>
      <BudgetModal open={openBudgetModal} setOpen={setOpenBudgetModal} />
    </>
  );
}
export default Header;
