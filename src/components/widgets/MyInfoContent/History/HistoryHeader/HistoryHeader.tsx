import React from "react";
import Image from "next/image";
import { SelectTab } from "./SelectTab";
import { SelectFilter } from "./SelectFilter";
import { SelectHistory } from "./SelectHistory";

export function HistoryHeader() {
  return (
    <div className="w-full">
      <p className="flex items-center gap-2 pt-6 pb-4 text-[hsl(210_57%_29%)]">
        <Image src="/square-clock.svg" alt="logo" width={16} height={16} />{" "}
        History
      </p>
      <div className="w-full flex flex-wrap gap-2 justify-start items-center pb-4">
        <SelectTab />
        <SelectFilter />
        <SelectHistory className="ml-auto max-lg:ml-0" />
      </div>
    </div>
  );
}
