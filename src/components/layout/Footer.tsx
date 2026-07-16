"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUp, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        // Defer setting mounted to next animation frame to avoid synchronous setState inside effect
        const raf = requestAnimationFrame(() => setIsMounted(true));
        return () => cancelAnimationFrame(raf);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="w-full bg-[#F3F1ED] text-[#17171A] dark:bg-[#1e1e20] dark:text-[#f4f4f5] px-6 sm:px-10 md:px-16 lg:px-24 pt-20 pb-10 border-t border-[#17171A]/10 dark:border-[#f4f4f5]/10 transition-colors duration-300 antialiased font-sans overflow-hidden">
            <div className="max-w-7xl mx-auto">

                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 transition-all duration-1000 ease-out ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}>

                    <div className="flex flex-col gap-4">
                        <Link href="/" className="font-serif text-2xl font-semibold tracking-tight">
                            VINTAGE<span className="text-[#C7A874]">.</span>
                        </Link>
                        <p className="text-sm leading-relaxed text-[#17171A]/70 dark:text-[#f4f4f5]/70 max-w-xs">
                            Crafting timeless modern essentials with sustainable choices and premium artisan engineering.
                        </p>
                        {/* <div className="flex gap-3 mt-2">
                            <a href="#" className="h-9 w-9 rounded-xl border border-[#17171A]/20 dark:border-[#f4f4f5]/20 flex items-center justify-center text-[#17171A]/70 dark:text-[#f4f4f5]/70 hover:border-[#C7A874] hover:text-[#C7A874] transition-all duration-300">
                                <Facebook className="h-4 w-4" />
                            </a>
                            <a href="#" className="h-9 w-9 rounded-xl border border-[#17171A]/20 dark:border-[#f4f4f5]/20 flex items-center justify-center text-[#17171A]/70 dark:text-[#f4f4f5]/70 hover:border-[#C7A874] hover:text-[#C7A874] transition-all duration-300">
                                <Instagram className="h-4 w-4" />
                            </a>
                            <a href="#" className="h-9 w-9 rounded-xl border border-[#17171A]/20 dark:border-[#f4f4f5]/20 flex items-center justify-center text-[#17171A]/70 dark:text-[#f4f4f5]/70 hover:border-[#C7A874] hover:text-[#C7A874] transition-all duration-300">
                                <Twitter className="h-4 w-4" />
                            </a>
                        </div> */}
                    </div>

                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-[#C7A874] mb-5">Quick Links</h4>
                        <ul className="flex flex-col gap-3 text-sm">
                            <li>
                                <Link href="/" className="text-[#17171A]/70 dark:text-[#f4f4f5]/70 hover:text-[#C7A874] dark:hover:text-[#C7A874] transition-colors duration-200">Shop Collection</Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-[#17171A]/70 dark:text-[#f4f4f5]/70 hover:text-[#C7A874] dark:hover:text-[#C7A874] transition-colors duration-200">Our Story</Link>
                            </li>
                            <li>
                                <Link href="/journal" className="text-[#17171A]/70 dark:text-[#f4f4f5]/70 hover:text-[#C7A874] dark:hover:text-[#C7A874] transition-colors duration-200">Editorial Journal</Link>
                            </li>
                            <li>
                                <Link href="/sustainability" className="text-[#17171A]/70 dark:text-[#f4f4f5]/70 hover:text-[#C7A874] dark:hover:text-[#C7A874] transition-colors duration-200">Eco Commitments</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-[#C7A874] mb-5">Customer Care</h4>
                        <ul className="flex flex-col gap-3 text-sm">
                            <li>
                                <Link href="/support" className="text-[#17171A]/70 dark:text-[#f4f4f5]/70 hover:text-[#C7A874] dark:hover:text-[#C7A874] transition-colors duration-200">Track Order</Link>
                            </li>
                            <li>
                                <Link href="/exchanges" className="text-[#17171A]/70 dark:text-[#f4f4f5]/70 hover:text-[#C7A874] dark:hover:text-[#C7A874] transition-colors duration-200">7-Day Exchanges</Link>
                            </li>
                            <li>
                                <Link href="/shipping" className="text-[#17171A]/70 dark:text-[#f4f4f5]/70 hover:text-[#C7A874] dark:hover:text-[#C7A874] transition-colors duration-200">Shipping Info</Link>
                            </li>
                            <li>
                                <Link href="/faq" className="text-[#17171A]/70 dark:text-[#f4f4f5]/70 hover:text-[#C7A874] dark:hover:text-[#C7A874] transition-colors duration-200">Common FAQs</Link>
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
                                <span>support@vintage.com</span>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="pt-8 border-t border-[#17171A]/10 dark:border-[#f4f4f5]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-[#17171A]/50 dark:text-[#f4f4f5]/50 text-center sm:text-left">
                        &copy; {new Date().getFullYear()} VINTAGE Inc. All rights reserved. Made for minimalistic premium experiences.
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="inline-flex items-center gap-2 group text-xs font-semibold uppercase tracking-widest text-[#17171A]/60 dark:text-[#f4f4f5]/60 hover:text-[#17171A] dark:hover:text-[#f4f4f5] transition-colors duration-200"
                    >
                        Back To Top
                        <span className="h-7 w-7 rounded-xl border border-[#17171A]/20 dark:border-[#f4f4f5]/20 flex items-center justify-center group-hover:-translate-y-1 transition-transform duration-300">
                            <ArrowUp className="h-3.5 w-3.5" />
                        </span>
                    </button>
                </div>

            </div>
        </footer>
    );
}
