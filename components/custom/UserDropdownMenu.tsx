import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  LocateFixed,
  Lock,
  LogOut,
  MessageSquare,
  SquareMousePointer,
  Users2,
} from "lucide-react";

export function UserDropdownMenu({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <div
          className="w-10 h-10 rounded-full bg-white flex items-center justify-center cursor-pointer font-bold text-nav-background-green"
          onClick={() => setOpen(!open)}
        >
          D
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-75 p-3" align="end">
        <div className="flex gap-3 items-center bg-gray-100 mb-3 border border-gray-200 rounded-lg p-3 ">
          <div className="w-10 h-10 rounded-full text-white flex items-center justify-center cursor-pointer font-bold bg-nav-background-green">
            D
          </div>
          <div>
            <p className="font-semibold text-base text-black">Dylan Frank</p>
            <p className="font-normal text-gray-700">dylan96@gmail.com</p>
          </div>
        </div>
        <DropdownMenuItem>
          <Users2 />
          Teams
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <SquareMousePointer />
          Snagging
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <MessageSquare />
          Feedback
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LocateFixed />
          Geo-Bucket
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Lock />
          Change Password
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-card-error-red">
          <LogOut className="text-card-error-red" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
