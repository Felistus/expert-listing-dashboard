"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Calendar } from "../ui/calendar";
import React from "react";
import { ArrowLeft } from "lucide-react";

type CalendarSheetProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};
export default function CalendarSheet({ open, setOpen }: CalendarSheetProps) {
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(2025, 11, 16),
  );
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className="bg-drawer-bg border-0 [&>button]:text-white [&>button]:cursor-pointer">
        <SheetHeader className="bg-drawer-header-bg">
          <SheetTitle className="text-white flex gap-2 text-base font-semibold items-center">
            <ArrowLeft /> Calendar
          </SheetTitle>
          <SheetDescription className="hidden">
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <div className="bg-transparent h-full ">
          <Calendar
            mode="single"
            defaultMonth={date}
            selected={date}
            onSelect={setDate}
            className="rounded-none w-full bg-transparent text-white h-full [--cell-size:--spacing(80)] md:[--cell-size:--spacing(16)] "
          />
        </div>
        <SheetFooter className="hidden">
          <Button type="submit">Save changes</Button>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
