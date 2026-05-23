"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { Home, BookOpen, Settings } from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "SEO", href: "/seo", icon: BookOpen },
  { name: "Blog", href: "/blog", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 w-64 bg-white/30 dark:bg-black/30 backdrop-blur-lg border-r border-gray-200 dark:border-gray-700 p-4 flex flex-col">
      <div className="flex items-center gap-2 mb-8">
        <Home className="h-6 w-6 text-primary" />
        <h1 className="text-xl font-semibold text-primary">Admin Panel</h1>
      </div>
      <nav className="flex-1 space-y-2">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/10 transition-colors"
          >
            <item.icon className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">{item.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
