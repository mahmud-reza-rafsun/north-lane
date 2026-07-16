"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUp, Mail, Phone, MapPin, X } from "lucide-react";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "../ui/icon";
import { MODAL_DATA } from "@/utils/footerData";
import { ModalContent } from "@/types/modal.interface";

export default function Footer() {
    const [isMounted, setIsMounted] = useState(false);
    const [activeModal, setActiveModal] = useState<ModalContent | null>(null);

    useEffect(() => {
        const raf = requestAnimationFrame(() => setIsMounted(true));
        return () => cancelAnimationFrame(raf);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const openModal = (key: string, e: React.MouseEvent) => {
        e.preventDefault();
        if (MODAL_DATA[key]) {
            setActiveModal(MODAL_DATA[key]);
        }
    };
    return (
        <>
            <footer className="w-full bg-[#F3F1ED] text-[#17171A] dark:bg-[#141416] dark:text-[#f4f4f5] px-6 sm:px-10 md:px-16 lg:px-24 pt-20 pb-10 border-t border-[#17171A]/10 dark:border-[#f4f4f5]/10 transition-colors duration-300 antialiased font-sans overflow-hidden">
                <div className="max-w-7xl mx-auto">

                    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 transition-all duration-1000 ease-out ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}>

                        <div className="flex flex-col gap-4">
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
                            <p className="text-sm leading-relaxed text-[#17171A]/70 dark:text-[#f4f4f5]/70 max-w-xs">
                                Crafting timeless modern essentials with sustainable choices and premium artisan engineering.
                            </p>
                            <div className="flex gap-3 mt-2">
                                <a href="#" className="h-9 w-9 rounded-xl border border-[#17171A]/20 dark:border-[#f4f4f5]/20 flex items-center justify-center text-[#17171A]/70 dark:text-[#f4f4f5]/70 hover:border-[#C7A874] hover:text-[#C7A874] transition-all duration-300">
                                    <FacebookIcon className="h-4 w-4" />
                                </a>
                                <a href="#" className="h-9 w-9 rounded-xl border border-[#17171A]/20 dark:border-[#f4f4f5]/20 flex items-center justify-center text-[#17171A]/70 dark:text-[#f4f4f5]/70 hover:border-[#C7A874] hover:text-[#C7A874] transition-all duration-300">
                                    <InstagramIcon className="h-4 w-4" />
                                </a>
                                <a href="#" className="h-9 w-9 rounded-xl border border-[#17171A]/20 dark:border-[#f4f4f5]/20 flex items-center justify-center text-[#17171A]/70 dark:text-[#f4f4f5]/70 hover:border-[#C7A874] hover:text-[#C7A874] transition-all duration-300">
                                    <TwitterIcon className="h-4 w-4" />
                                </a>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C7A874] mb-5">Quick Links</h4>
                            <ul className="flex flex-col gap-3 text-sm">
                                <li>
                                    <Link href="/" onClick={(e) => openModal("shop-collection", e)} className="text-[#17171A]/70 dark:text-[#f4f4f5]/70 hover:text-[#C7A874] dark:hover:text-[#C7A874] transition-colors duration-200">Shop Collection</Link>
                                </li>
                                <li>
                                    <Link href="/about" onClick={(e) => openModal("our-story", e)} className="text-[#17171A]/70 dark:text-[#f4f4f5]/70 hover:text-[#C7A874] dark:hover:text-[#C7A874] transition-colors duration-200">Our Story</Link>
                                </li>
                                <li>
                                    <Link href="/journal" onClick={(e) => openModal("editorial-journal", e)} className="text-[#17171A]/70 dark:text-[#f4f4f5]/70 hover:text-[#C7A874] dark:hover:text-[#C7A874] transition-colors duration-200">Editorial Journal</Link>
                                </li>
                                <li>
                                    <Link href="/sustainability" onClick={(e) => openModal("eco-commitments", e)} className="text-[#17171A]/70 dark:text-[#f4f4f5]/70 hover:text-[#C7A874] dark:hover:text-[#C7A874] transition-colors duration-200">Eco Commitments</Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C7A874] mb-5">Customer Care</h4>
                            <ul className="flex flex-col gap-3 text-sm">
                                <li>
                                    <Link href="/support" onClick={(e) => openModal("track-order", e)} className="text-[#17171A]/70 dark:text-[#f4f4f5]/70 hover:text-[#C7A874] dark:hover:text-[#C7A874] transition-colors duration-200">Track Order</Link>
                                </li>
                                <li>
                                    <Link href="/exchanges" onClick={(e) => openModal("7-day-exchanges", e)} className="text-[#17171A]/70 dark:text-[#f4f4f5]/70 hover:text-[#C7A874] dark:hover:text-[#C7A874] transition-colors duration-200">7-Day Exchanges</Link>
                                </li>
                                <li>
                                    <Link href="/shipping" onClick={(e) => openModal("shipping-info", e)} className="text-[#17171A]/70 dark:text-[#f4f4f5]/70 hover:text-[#C7A874] dark:hover:text-[#C7A874] transition-colors duration-200">Shipping Info</Link>
                                </li>
                                <li>
                                    <Link href="/faq" onClick={(e) => openModal("common-faqs", e)} className="text-[#17171A]/70 dark:text-[#f4f4f5]/70 hover:text-[#C7A874] dark:hover:text-[#C7A874] transition-colors duration-200">Common FAQs</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C7A874] mb-1">Contact Details</h4>
                            <div className="flex flex-col gap-3 text-sm text-[#17171A]/70 dark:text-[#f4f4f5]/70">
                                <div className="flex items-center gap-3">
                                    <MapPin className="h-4 w-4 text-[#C7A874] flex-shrink-0" />
                                    <span>Gulshan Avenue, Dhaka, Bangladesh</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone className="h-4 w-4 text-[#C7A874] flex-shrink-0" />
                                    <span>+880 1234-567890</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Mail className="h-4 w-4 text-[#C7A874] flex-shrink-0" />
                                    <span>support@north-lane.com</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="pt-8 border-t border-[#17171A]/10 dark:border-[#f4f4f5]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-xs text-[#17171A]/50 dark:text-[#f4f4f5]/50 text-center sm:text-left">
                            &copy; {new Date().getFullYear()} NORTH_LANE Inc. All rights reserved. Made for minimalistic premium experiences.
                        </p>

                        <button
                            onClick={scrollToTop}
                            className="inline-flex cursor-pointer items-center gap-2 group text-xs font-semibold uppercase tracking-widest text-[#17171A]/60 dark:text-[#f4f4f5]/60 hover:text-[#17171A] dark:hover:text-[#f4f4f5] transition-colors duration-200"
                        >
                            Back To Top
                            <span className="h-7 w-7 cursor-pointer rounded-xl border border-[#17171A]/20 dark:border-[#f4f4f5]/20 flex items-center justify-center group-hover:-translate-y-1 transition-transform duration-300">
                                <ArrowUp className="h-3.5 w-3.5" />
                            </span>
                        </button>
                    </div>

                </div>
            </footer>

            {/* Link Information Modal */}
            {activeModal && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
                    onClick={() => setActiveModal(null)}
                >
                    <div
                        className="relative w-full max-w-md bg-[#F3F1ED] dark:bg-[#1e1e20] text-[#17171A] dark:text-[#f4f4f5] border border-[#17171A]/10 dark:border-[#f4f4f5]/10 rounded-2xl p-6 shadow-2xl transition-all duration-300 scale-in-95 animate-in"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setActiveModal(null)}
                            className="absolute top-4 right-4 text-[#17171A]/50 dark:text-[#f4f4f5]/50 hover:text-[#17171A] dark:hover:text-[#f4f4f5] transition-colors p-1 rounded-lg"
                        >
                            <X className="h-4 w-4" />
                        </button>

                        <h3 className="text-sm font-bold uppercase tracking-widest text-[#C7A874] mb-3">
                            {activeModal.title}
                        </h3>

                        <p className="text-sm leading-relaxed text-[#17171A]/80 dark:text-[#f4f4f5]/80 font-sans">
                            {activeModal.description}
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}
