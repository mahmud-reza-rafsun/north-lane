// components/navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingBag, Menu, X } from "lucide-react";
import { CartItem, INITIAL_CART_ITEMS } from "@/utils/types/card";
import { CartDrawer } from "./cart-drawer";
import { ModeToggle } from "@/utils/ModeToggle";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState<CartItem[]>(INITIAL_CART_ITEMS);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const updateQuantity = (id: string, quantity: number) => {
        setCartItems((prev) =>
            prev.map((item) => (item.id === id ? { ...item, quantity } : item))
        );
    };

    const removeItem = (id: string) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    const totalItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-500 ${isScrolled
                    ? "border-b border-neutral-200/50 bg-[#F5F4F1]/90 py-3.5 backdrop-blur-md dark:border-neutral-900/80 dark:bg-[#0F0F10]/90"
                    : "bg-transparent py-5"
                    }`}
            >
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">

                    {/* Brand Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <svg
                            className="h-5 w-5 stroke-neutral-950 stroke-[1.5] transition-transform duration-500 group-hover:rotate-180 dark:stroke-neutral-50"
                            viewBox="0 0 24 24"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <rect x="3" y="3" width="18" height="18" rx="2" />
                            <path d="M9 17V7l6 10V7" />
                        </svg>
                        <span className="font-sans text-base font-semibold uppercase tracking-[0.2em] text-neutral-950 dark:text-neutral-50">
                            North Lane
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-10">
                        {["Home", "Products", "About Us"].map((link) => {
                            const href = link === "Home" ? "/" : `/${link.toLowerCase().replace(" ", "-")}`;
                            return (
                                <Link
                                    key={link}
                                    href={href}
                                    className="relative text-xs font-medium uppercase tracking-widest text-neutral-600 transition-colors duration-300 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-50 before:absolute before:bottom-[-4px] before:left-0 before:h-[1px] before:w-full before:scale-x-0 before:bg-neutral-950 before:transition-transform before:duration-300 hover:before:scale-x-100 dark:before:bg-neutral-50"
                                >
                                    {link}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Action Icons */}
                    <div className="flex items-center gap-3">
                        <ModeToggle />

                        {/* Cart Button */}
                        <button
                            onClick={() => setIsCartOpen(true)}
                            className="relative flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200/60 bg-transparent text-neutral-800 transition-colors duration-300 hover:bg-neutral-100 dark:border-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-900/50"
                            aria-label="Open shopping cart"
                        >
                            <ShoppingBag className="h-[18px] w-[18px]" />
                            {totalItemsCount > 0 && (
                                <span className="absolute -right-0.5 -top-0.5 flex h-[16px] min-w-[16px] items-center justify-center rounded-full bg-neutral-950 px-1 text-[9px] font-semibold text-white dark:bg-white dark:text-neutral-950">
                                    {totalItemsCount}
                                </span>
                            )}
                        </button>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200/60 bg-transparent text-neutral-800 transition-colors duration-300 hover:bg-neutral-100 md:hidden dark:border-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-900/50"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X className="h-[18px] w-[18px]" /> : <Menu className="h-[18px] w-[18px]" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {isMobileMenuOpen && (
                    <div className="absolute left-0 right-0 top-full border-b border-neutral-200/60 bg-[#F5F4F1] px-6 py-6 shadow-lg md:hidden dark:border-neutral-900 dark:bg-[#0F0F10]">
                        <nav className="flex flex-col gap-5">
                            {["Home", "Products", "About Us"].map((link) => {
                                const href = link === "Home" ? "/" : `/${link.toLowerCase().replace(" ", "-")}`;
                                return (
                                    <Link
                                        key={link}
                                        href={href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-sm font-medium uppercase tracking-widest text-neutral-700 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-neutral-50"
                                    >
                                        {link}
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>
                )}
            </header>

            <CartDrawer
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
                items={cartItems}
                onUpdateQuantity={updateQuantity}
                onRemoveItem={removeItem}
            />
        </>
    );
}