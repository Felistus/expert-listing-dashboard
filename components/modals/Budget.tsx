import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ChartColumnBig, SlidersHorizontal, TrendingUp } from "lucide-react";
import Image from "next/image";

type BudgetModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};
export default function BudgetModal({ open, setOpen }: BudgetModalProps) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-109.5 [&>button]:hidden p-0 overflow-hidden border-0">
        <DialogHeader className="hidden">
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="p-0 ">
          <div className="relative overflow-hidden h-53.25 w-full bg-modal-bg p-0">
            <Image
              src={"/budget.png"}
              alt={"budget calculator"}
              className="w-full object-cover"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="py-6 px-11.75 space-y-5.5">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6">
                <SlidersHorizontal />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-base leading-4">
                  Set up annual budgets by account category
                </p>
                <p className="font-normal text-xs mt-1 text-gray-500">
                  Allocate funds across income and expense lines with full
                  visibility.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6">
                <TrendingUp />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-base leading-4">
                  Track actuals vs budget in real time
                </p>
                <p className="font-normal text-xs mt-1 text-gray-500">
                  See how your community is performing against plan, month by
                  month.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6">
                <ChartColumnBig />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-base leading-4">
                  Adjust figures and forecast with ease
                </p>
                <p className="font-normal text-xs mt-1 text-gray-500">
                  Edit amounts, apply percentage changes, or roll forward last
                  year&apos;s data—all in one place.
                </p>
              </div>
            </div>
          </div>
        </div>
        <DialogFooter className="justify-center pb-6 px-11.75 pt-0">
          <DialogClose asChild>
            <Button
              type="button"
              variant="secondary"
              className="w-full rounded-full bg-gray-800 text-white hover:bg-gray-900 cursor-pointer"
            >
              Create Budget
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
