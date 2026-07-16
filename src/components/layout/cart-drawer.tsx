"use client";

import { useEffect } from "react";
import { X, Plus, Minus, ShoppingBag, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { CartDrawerProps } from "@/types/card-props.interface";

export function CartDrawer({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem }: CartDrawerProps) {
    const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.4 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-50 bg-black backdrop-blur-[2px]"
                    />

                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed bottom-0 right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-[#F5F4F1] shadow-2xl dark:bg-[#0F0F10]"
                    >
                        <div className="flex items-center justify-between border-b border-neutral-200/60 px-6 py-5 dark:border-neutral-800">
                            <div className="flex items-center gap-2.5">
                                <ShoppingBag className="h-5 w-5 text-neutral-800 dark:text-neutral-200" />
                                <h2 className="font-sans text-lg font-medium tracking-wide text-neutral-900 dark:text-neutral-50">
                                    Your Cart ({items.length})
                                </h2>
                            </div>
                            <button
                                onClick={onClose}
                                className="rounded-full cursor-pointer hover:text-red-500 p-1.5 text-neutral-500 transition-colors hover:bg-neutral-200/60 dark:hover:bg-neutral-900/50"
                                aria-label="Close cart"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto px-6 py-4">
                            {items.length === 0 ? (
                                <div className="flex h-full flex-col items-center justify-center text-center">
                                    <ShoppingBag className="mb-4 h-12 w-12 stroke-1 text-neutral-400" />
                                    <p className="text-sm text-neutral-500">Your shopping bag is empty.</p>
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    {items.map((item) => (
                                        <motion.div
                                            key={item.id}
                                            layout
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            className="flex gap-4 border-b border-neutral-200/40 pb-5 last:border-0 dark:border-neutral-900"
                                        >
                                            <div className="relative h-24 w-18 overflow-hidden rounded bg-neutral-100 dark:bg-neutral-900">
                                                <div className="absolute inset-0 bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
                                                <Image
                                                    src={item.image}
                                                    alt={item.name}
                                                    fill
                                                    sizes="72px"
                                                    className="object-cover transition-opacity duration-300"
                                                    onLoadingComplete={(img) => img.classList.remove("opacity-0")}
                                                />
                                            </div>

                                            <div className="flex flex-1 flex-col justify-between">
                                                <div>
                                                    <div className="flex justify-between gap-2">
                                                        <h3 className="font-sans text-sm font-medium text-neutral-950 dark:text-neutral-50">
                                                            {item.name}
                                                        </h3>
                                                        <span className="text-sm font-medium tracking-tight text-neutral-950 dark:text-neutral-50">
                                                            ৳{(item.price * item.quantity).toLocaleString()}
                                                        </span>
                                                    </div>
                                                    <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                                                        {item.colors} / Size {item.sizes}
                                                    </p>
                                                </div>

                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center border border-neutral-200/60 bg-white dark:border-neutral-800 dark:bg-black">
                                                        <button
                                                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                                                            className="px-2 py-1 text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100"
                                                            disabled={item.quantity <= 1}
                                                        >
                                                            <Minus className="h-3 w-3" />
                                                        </button>
                                                        <span className="w-8 text-center text-xs font-medium text-neutral-850 dark:text-neutral-150">
                                                            {item.quantity}
                                                        </span>
                                                        <button
                                                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                                                            className="px-2 py-1 text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100"
                                                        >
                                                            <Plus className="h-3 w-3" />
                                                        </button>
                                                    </div>

                                                    <button
                                                        onClick={() => onRemoveItem(item.id)}
                                                        className="text-neutral-400 hover:text-red-500 dark:hover:text-red-500 cursor-pointer"
                                                        aria-label="Remove item"
                                                    >
                                                        <Trash2 className="h-4 w-4" />
                                                    </button>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {items.length > 0 && (
                            <div className="border-t border-neutral-200/60 bg-white px-6 py-6 dark:border-neutral-800 dark:bg-neutral-950/20">
                                <div className="flex justify-between mb-4">
                                    <span className="text-sm text-neutral-500 dark:text-neutral-400">Subtotal</span>
                                    <span className="text-base font-semibold tracking-tight text-neutral-950 dark:text-neutral-50">
                                        ৳{subtotal.toLocaleString()}
                                    </span>
                                </div>
                                <p className="mb-6 text-xs text-neutral-400">
                                    Shipping and taxes calculated at checkout.
                                </p>
                                <button
                                    onClick={() => alert("Proceeding to checkout...")}
                                    className="w-full bg-neutral-950 py-3.5 text-center font-sans text-xs font-semibold uppercase tracking-wider text-neutral-50 transition-all duration-300 hover:bg-neutral-800 dark:bg-neutral-50 dark:text-neutral-950 dark:hover:bg-neutral-200"
                                >
                                    Proceed to Checkout
                                </button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
