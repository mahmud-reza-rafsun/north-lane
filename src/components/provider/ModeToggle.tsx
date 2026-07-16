// components/mode-toggle.tsx
"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ModeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        const raf = window.requestAnimationFrame(() => {
            setMounted(true);
        });

        return () => window.cancelAnimationFrame(raf);
    }, []);

    if (!mounted) {
        return (
            <div className="h-9 w-9 rounded-full border border-neutral-200/60 bg-transparent dark:border-neutral-800" />
        );
    }

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <button
            onClick={toggleTheme}
            className="relative flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-neutral-200 bg-transparent text-neutral-800 transition-colors duration-300 hover:bg-neutral-100 dark:border-neutral-200 dark:text-neutral-200 dark:hover:bg-neutral-900/50"
            title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
            {/* Sun Icon */}
            <Sun className="h-[18px] w-[18px] scale-100 rotate-0 transition-all duration-300 dark:scale-0 dark:-rotate-90" />

            {/* Moon Icon */}
            <Moon className="absolute h-[18px] w-[18px] scale-0 rotate-90 transition-all duration-300 dark:scale-100 dark:rotate-0" />

            <span className="sr-only">Toggle theme</span>
        </button>
    );
}
