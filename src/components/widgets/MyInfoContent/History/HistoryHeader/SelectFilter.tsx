import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export function SelectFilter() {
  const [value, setValue] = useState("all");
  return (
    <Select value={value} onValueChange={setValue}>
      <SelectTrigger className="w-24 h-8 border-dividerColor max-lg:w-28">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All</SelectItem>
        <SelectItem value="item1">Item 1</SelectItem>
        <SelectItem value="item2">Item 2</SelectItem>
      </SelectContent>
    </Select>
  );
}
