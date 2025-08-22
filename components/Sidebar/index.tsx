"use client";

import * as React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerClose,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Sidebar() {
  const [lang, setLang] = useState<"ENG" | "POL">("ENG");
  const [open, setOpen] = useState(false);

  const current = 1;
  const total = 4;
  const percentage = (current / total) * 100;

  return (
    <div className="flex">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-col items-center justify-start gap-10 bg-white border-r h-screen py-6 w-20">
        <Drawer direction="left" open={open} onOpenChange={setOpen}>
          <DrawerTrigger asChild>
            <Button
              variant="ghost"
              className="mb-2 w-full flex items-center justify-center border-none shadow-none hover:cursor-pointer outline-none focus:ring-0 hover:bg-transparent"
            >
              <Menu className="w-6 h-6" />
            </Button>
          </DrawerTrigger>
        </Drawer>

        {/* Progress bar */}
        <div className="flex flex-col items-center gap-5">
          <span className="text-xs text-orange-500 rotate-270 font-semibold">
            {current}/{total}
          </span>
          <div className="relative h-60 w-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="absolute bottom-0 left-0 w-full bg-orange-500 transition-all duration-300"
              style={{ height: `${percentage}%` }}
            />
          </div>
        </div>

        {/* Language buttons */}
        <div className="flex flex-col items-center gap-4">
          <button
            className={`text-xs md:text-sm font-medium rotate-270 ${
              lang === "POL" ? "text-orange-500 font-bold" : "text-black"
            }`}
            onClick={() => setLang("POL")}
          >
            POL
          </button>
          <button
            className={`text-xs md:text-sm font-medium rotate-270 ${
              lang === "ENG" ? "text-orange-500 font-bold" : "text-black"
            }`}
            onClick={() => setLang("ENG")}
          >
            ENG
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className="flex md:hidden">
        <Drawer direction="left" open={open} onOpenChange={setOpen}>
          <DrawerTrigger asChild>
            <Button
              variant="ghost"
              className="m-4 border-none shadow-none outline-none focus:ring-0 hover:bg-transparent"
            >
              <Menu className="w-6 h-6" />
            </Button>
          </DrawerTrigger>

          <DrawerContent className="flex flex-col px-5 shadow-lg bg-white">
            <DrawerHeader>
              {/* Required for accessibility */}
              <DrawerTitle className="sr-only">Sidebar Menu</DrawerTitle>
            </DrawerHeader>

            {/* Close button */}
            <div className="flex justify-end">
              <DrawerClose asChild>
                <Button variant="ghost" className="border-none shadow-none">
                  <X />
                </Button>
              </DrawerClose>
            </div>

            {/* Horizontal progress bar */}
            <div className="w-full flex gap-3 mt-4 items-center">
              <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-orange-500 transition-all duration-300"
                  style={{ width: `${percentage}%` }}
                />
              </div>
              <span className="text-sm font-semibold text-orange-500">
                {current}/{total}
              </span>
            </div>

            {/* Language buttons */}
            <div className="flex gap-4 mt-4">
              <button
                className={`text-sm font-medium ${
                  lang === "ENG" ? "text-orange-500 font-bold" : "text-black"
                }`}
                onClick={() => setLang("ENG")}
              >
                ENG
              </button>
              <button
                className={`text-sm font-medium ${
                  lang === "POL" ? "text-orange-500 font-bold" : "text-black"
                }`}
                onClick={() => setLang("POL")}
              >
                POL
              </button>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}
