import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export function SelectHistory({ className }: Props) {
  const [value, setValue] = useState("balance");

  const classes = cn("w-44 h-8 border-dividerColor", className);

  return (
    <Select value={value} onValueChange={setValue}>
      <SelectTrigger className={classes}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="balance">Balance History</SelectItem>
        <SelectItem value="item1">Item 1</SelectItem>
        <SelectItem value="item2">Item 2</SelectItem>
      </SelectContent>
    </Select>
  );
}
