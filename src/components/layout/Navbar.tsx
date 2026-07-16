"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingBag, Menu, X } from "lucide-react";
import { CartDrawer } from "./cart-drawer";
import { ModeToggle } from "../provider/ModeToggle";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const { cartItems, updateQuantity, removeFromCart } = useCart();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const totalItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-40 w-full py-5">
                <div
                    className={`mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5 lg:px-12 md:rounded-full sm:rounded-none transition-all duration-500 ${isScrolled
                        ? "border border-neutral-200/50 bg-[#F5F4F1]/80 backdrop-blur-sm shadow-sm dark:border-neutral-800/50 dark:bg-gray-800"
                        : "border border-transparent bg-[#F5F4F1]/40 backdrop-blur-3xl dark:bg-[#0F0F10]/40"
                        }`}
                >
                    <Link href="/" className="flex items-center gap-2 group">
                        <svg
                            className="h-5 w-5 stroke-neutral-900 stroke-[1.5] transition-transform duration-500 group-hover:rotate-180 dark:stroke-neutral-50"
                            viewBox="0 0 24 24"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <rect x="3" y="3" width="18" height="18" rx="2" />
                            <path d="M9 17V7l6 10V7" />
                        </svg>
                        <span className="font-sans text-base font-semibold uppercase tracking-[0.2em] text-neutral-900 dark:text-neutral-50">
                            North Lane
                        </span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-10">
                        {["Home", "Products", "About Us"].map((link) => {
                            const href = link === "Home" ? "/" : `/${link.toLowerCase().replace(" ", "-")}`;
                            return (
                                <Link
                                    key={link}
                                    href={href}
                                    className="relative text-xs font-semibold uppercase tracking-widest text-neutral-800 transition-colors duration-300 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50 before:absolute before:bottom-[-4px] before:left-0 before:h-[1.5px] before:w-full before:scale-x-0 before:bg-neutral-900 before:transition-transform before:duration-300 hover:before:scale-x-100 dark:before:bg-neutral-50"
                                >
                                    {link}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="flex items-center gap-3">
                        <ModeToggle />

                        <button
                            onClick={() => setIsCartOpen(true)}
                            className="relative flex h-9 w-9 items-center cursor-pointer justify-center rounded-full border border-neutral-200 bg-transparent text-neutral-900 transition-colors duration-300 hover:bg-neutral-900/5 dark:border-neutral-400 dark:text-neutral-50 dark:hover:bg-white/5"
                            aria-label="Open shopping cart"
                        >
                            <ShoppingBag className="h-[18px] w-[18px]" />
                            {totalItemsCount > 0 && (
                                <span className="absolute -right-0.5 -top-0.5 flex h-[16px] min-w-[16px] items-center justify-center rounded-full bg-neutral-900 px-1 text-[9px] font-bold text-white dark:bg-white dark:text-neutral-900">
                                    {totalItemsCount}
                                </span>
                            )}
                        </button>

                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="flex cursor-pointer h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-transparent text-neutral-900 transition-colors duration-300 hover:bg-neutral-900/5 md:hidden dark:border-neutral-400 dark:text-neutral-50 dark:hover:bg-white/5"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X className="h-[18px] w-[18px]" /> : <Menu className="h-[18px] w-[18px]" />}
                        </button>
                    </div>

                    {isMobileMenuOpen && (
                        <div className="absolute left-6 right-6 top-full mt-2 rounded-2xl border border-neutral-200/60 bg-[#F5F4F1]/95 px-6 py-6 shadow-lg md:hidden backdrop-blur-md dark:border-neutral-900/60 dark:bg-[#0F0F10]/95">
                            <nav className="flex flex-col gap-5">
                                {["Home", "Products", "About Us"].map((link) => {
                                    const href = link === "Home" ? "/" : `/${link.toLowerCase().replace(" ", "-")}`;
                                    return (
                                        <Link
                                            key={link}
                                            href={href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="text-xs font-semibold uppercase tracking-widest text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50"
                                        >
                                            {link}
                                        </Link>
                                    );
                                })}
                            </nav>
                        </div>
                    )}
                </div>
            </header>

            <CartDrawer
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
                items={cartItems}
                onUpdateQuantity={updateQuantity}
                onRemoveItem={removeFromCart}
            />
        </>
    );
}
