import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export function SelectTab() {
  const [value, setValue] = useState("sick");
  return (
    <Select value={value} onValueChange={setValue}>
      <SelectTrigger className="w-64 h-8 border-dividerColor max-lg:w-[312px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="sick">Sick</SelectItem>
        <SelectItem value="annual">Annual Leave</SelectItem>
        <SelectItem value="comp">Comp/in Lieu Time</SelectItem>
      </SelectContent>
    </Select>
  );
}
