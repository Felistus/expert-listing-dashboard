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
import CalendarSheet from "../drawers/Calendar";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { UserDropdownMenu } from "./UserDropdownMenu";

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
  const [openUserDropdown, setOpenUserDropdown] = React.useState(false);
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
              onClick={() => setOpenCalendarDrawer(true)}
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

            <Tooltip>
              <TooltipTrigger>
                <UserDropdownMenu
                  open={openUserDropdown}
                  setOpen={setOpenUserDropdown}
                />
              </TooltipTrigger>
              <TooltipContent
                className={`bg-gray-100 p-4 ${openUserDropdown ? "hidden" : ""}`}
              >
                <div className="flex gap-3 items-center">
                  <div className="w-10 h-10 rounded-full text-white flex items-center justify-center cursor-pointer font-bold bg-nav-background-green">
                    D
                  </div>
                  <div>
                    <p className="font-semibold text-base text-black">
                      Dylan Frank
                    </p>
                    <p className="font-normal text-gray-700">
                      dylan96@gmail.com
                    </p>
                  </div>
                </div>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </header>
      <BudgetModal open={openBudgetModal} setOpen={setOpenBudgetModal} />
      <CalendarSheet
        open={openCalendarDrawer}
        setOpen={setOpenCalendarDrawer}
      />
    </>
  );
}
export default Header;
