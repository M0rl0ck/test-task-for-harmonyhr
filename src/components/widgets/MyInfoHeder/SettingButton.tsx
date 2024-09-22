import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Settings, ChevronDown } from "lucide-react";

export function SettingButton() {
  return (
    <div className="flex justify-between items-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="justify-between bg-transparent w-[56px] h-[33px] p-2 text-sm border-borderButtonPrimary"
          >
            <Settings className="w-4 h-4" />
            <ChevronDown className="w-4 h-4" />{" "}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Setting</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Item 1</DropdownMenuItem>
          <DropdownMenuItem>Item2</DropdownMenuItem>
          <DropdownMenuItem>Item3</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
