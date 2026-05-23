"use client";
import Link from "next/link";
import { Moon, Sun, User } from "lucide-react";
import { useTheme } from "next-themes";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <header className="flex items-center justify-between px-4 py-2 bg-white/30 dark:bg-black/30 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <h2 className="text-lg font-semibold text-primary">SEO Admin Panel</h2>
      <div className="flex items-center gap-4">
        <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-primary/10 transition-colors">
          {theme === "dark" ? <Sun className="h-5 w-5 text-primary" /> : <Moon className="h-5 w-5 text-primary" />}
        </button>
        <User className="h-6 w-6 text-primary" />
      </div>
    </header>
  );
}
