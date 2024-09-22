import { Settings, CircleHelp, Bell } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useStore } from "@/store";
import { NavigationMobile } from "./NavigationMobile";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLogout } from "@/components/API";

export function SettingBlock() {
  const { user } = useStore();
  const { logOut } = useLogout();
  return (
    <div className="flex items-center gap-5">
      <div className="flex items-center gap-5 max-lg:hidden">
        <Settings className="w-6 h-6" />
        <CircleHelp className="w-6 h-6" />
        <Bell className="w-6 h-6" />
      </div>

      <div className="lg:hidden">
        <NavigationMobile />
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="w-[38px] h-[]38px cursor-pointer">
            <AvatarImage src={user ? user.avatar : ""} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={logOut}>Logout</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
