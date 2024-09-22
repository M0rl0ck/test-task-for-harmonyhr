import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function SearchInput() {
  return (
    <div className="relative">
      <Search className="absolute h-4 w-4 top-1/2 left-4 -translate-y-1/2" />
      <Input type="search" placeholder="Search" className="w-[395px] pl-14" />
    </div>
  );
}