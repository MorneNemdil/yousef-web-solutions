import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Moon, Sun } from "lucide-react";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { title: "Services", to: "services" },
    { title: "Projects", to: "projects" },
    { title: "About", to: "about" },
  ];

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? "border-b border-border bg-background/80 backdrop-blur-md py-2" 
        : "border-b border-transparent bg-transparent py-4"
    }`}>
      <div className="container mx-auto flex items-center justify-between px-6">
        <div className="text-xl font-bold tracking-tight text-foreground">
          Yousef Web Solutions<span className="text-primary">.</span>
        </div>

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <ScrollLink
                key={item.title}
                to={item.to}
                smooth={true}
                duration={500}
                offset={-64}
                spy={true}
                activeClass="text-primary"
                className={`${navigationMenuTriggerStyle()} cursor-pointer transition-colors !bg-transparent hover:text-primary`}
              >
                {item.title}
              </ScrollLink>
            ))}
          </nav>

          <div className={`flex items-center gap-2 border-l pl-4 transition-colors ${isScrolled ? "border-border" : "border-transparent"}`}>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-primary/10"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            
            <ScrollLink to="contact" smooth={true} duration={500} offset={-64}>
              <Button className="hidden sm:flex bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
                Start a Project
              </Button>
            </ScrollLink>
          </div>
        </div>
      </div>
    </header>
  );
}