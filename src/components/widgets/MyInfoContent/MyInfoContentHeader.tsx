import { Button } from "@/components/ui/button";
import { FileClock } from "lucide-react";

export function MyInfoContentHeader() {
  return (
    <div className="w-full h-[81px] max-lg:h-[106px] pt-[35px] max-lg:pt-6 font-medium border-b-2 border-b-dividerColor">
      <div className="flex justify-between items-center max-lg:flex-col max-lg:items-end">
        <p className="text-xl text-[hsl(210_57%_29%)] leading-[24px] flex gap-2 items-center max-lg:hidden">
          <FileClock className="w-4 h-4 text-black" /> Time Of
        </p>
        <div className="flex justify-between items-center gap-[30px] max-lg:gap-2 max-lg:flex-col max-lg:items-end">
          <p className="text-sm leading-4">
            Accrual Level Start Date{" "}
            <span className="text-[hsl(223_51%_44%)]">03/09-2020</span>
          </p>
          <Button variant="outline">Add Time Off Policy</Button>
        </div>
      </div>
    </div>
  );
}
