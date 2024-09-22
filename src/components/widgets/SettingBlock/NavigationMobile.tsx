"use client";

import { Menu } from "lucide-react";
import { NavigationLinks } from "@/components/components";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { Separator } from "@/components/ui/separator";

export function NavigationMobile() {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Menu className="h-5 w-5" />
        </SheetTrigger>
        <SheetContent side="top" aria-describedby={undefined}>
          <SheetHeader>
            <VisuallyHidden.Root>
              <SheetTitle></SheetTitle>
            </VisuallyHidden.Root>
            <NavigationLinks className="flex flex-col" />
            <Separator />
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
