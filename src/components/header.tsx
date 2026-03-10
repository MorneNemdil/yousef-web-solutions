import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider"; // Adjust path as needed
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function Header() {
  const { theme, setTheme } = useTheme();
  
  const navItems = [
    { title: "Portfolio", href: "#portfolio" },
    { title: "Services", href: "#services" },
    { title: "About", href: "#about" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <div className="text-xl font-bold tracking-tight text-foreground">
          Yousef Web Solutions<span className="text-primary">.</span>
        </div>

        <div className="flex items-center gap-4">
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuLink href={item.href} className={navigationMenuTriggerStyle()}>
                    {item.title}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-2 border-l pl-4 border-border">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            
            <Button asChild className="hidden sm:flex bg-primary hover:bg-primary/90">
              <a href="#contact">Start a Project</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}