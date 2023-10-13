"use client";

import { useState } from "react";
import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sidebar } from "@/components/sidebar";

export const MobileSidebar = ({ isPro }: { isPro: boolean }) => {
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);

  const toggleSheet = () => {
    setIsSheetOpen(!isSheetOpen);
  };

  return (
    <Sheet open={isSheetOpen}>
      <SheetTrigger className="md:hidden pr-4">
        <Menu onClick={toggleSheet} />
      </SheetTrigger>
      <SheetContent side="left" className="p-0 bg-secondary pt-10 w-32">
        <Sidebar isPro={isPro} setIsSheetOpen={setIsSheetOpen} />
      </SheetContent>
    </Sheet>
  );
};
