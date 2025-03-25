"use client";

import { LaptopMinimal, Moon, Sun } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const enableLightMode = () => {
    setTheme("light");
  };

  const enableDarkMode = () => {
    setTheme("dark");
  };

  const enableSystemMode = () => {
    setTheme("system");
  };

  if (!mounted) {
    return null;
  }

  return (
    <ToggleGroup type="single" size={"sm"} className="">
      <ToggleGroupItem
        value="light"
        aria-label="Light Mode"
        className={`${theme === "light" && "bg-secondary"}`}
        onClick={enableLightMode}
      >
        <Sun className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem
        value="dark"
        aria-label="Dark Mode"
        className={`${theme === "dark" && "bg-secondary"}`}
        onClick={enableDarkMode}
      >
        <Moon className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem
        value="system"
        aria-label="System Mode"
        className={`${theme === "system" && "bg-secondary"}`}
        onClick={enableSystemMode}
      >
        <LaptopMinimal className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
