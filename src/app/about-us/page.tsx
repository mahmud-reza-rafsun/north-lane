"use client";

import { useEffect, useState } from "react";
import { Shield, Sparkles, Sprout, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutSection() {
    const [isMounted, setIsMounted] = useState(true);

    return (
        <section className="w-full bg-[#F3F1ED] text-[#17171A] dark:bg-[#1e1e20] dark:text-[#f4f4f5] px-6 sm:px-10 md:px-16 lg:px-24 py-28 transition-colors duration-300 overflow-hidden antialiased font-sans">
            <div className="max-w-7xl mx-auto">

                <div className={`text-center max-w-2xl mx-auto mb-20 transition-all duration-1000 ease-out ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}>
                    <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C7A874] mb-3 block">
                        Our Story
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight font-serif">
                        Crafting Timeless Garments With Purpose
                    </h2>
                    <div className="h-[2px] w-16 bg-[#C7A874] mx-auto mt-6" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
                    <div className={`grid grid-cols-2 gap-4 transition-all duration-1000 delay-300 ease-out ${isMounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                        }`}>
                        <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#17171A]/5 dark:bg-[#f4f4f5]/5 rounded-3xl group">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600"
                                alt="Our artisan workshop"
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#17171A]/5 dark:bg-[#f4f4f5]/5 rounded-3xl mt-8 group">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=600"
                                alt="Tailoring details"
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>

                    <div className={`flex flex-col justify-center transition-all duration-1000 delay-500 ease-out ${isMounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                        }`}>
                        <h3 className="text-xl sm:text-2xl font-medium font-serif mb-6 text-[#17171A] dark:text-[#f4f4f5]">
                            We believe clothing should tell a story of conscious choices and pristine craftsmanship.
                        </h3>
                        <p className="text-base leading-relaxed text-[#17171A]/70 dark:text-[#f4f4f5]/70 mb-6">
                            Founded with a vision to redefine modern essentials, we bridge the gap between minimalistic aesthetics and sustainable production. Each fabric is mindfully sourced, and every pattern is refined until it fits like a second skin.
                        </p>
                        <p className="text-base leading-relaxed text-[#17171A]/70 dark:text-[#f4f4f5]/70 mb-8">
                            We discard the fleeting cycles of fast fashion. Instead, we create investments for your wardrobe that endure seasons, shifts, and years.
                        </p>

                        <div>
                            <Link href="/products" className="inline-flex cursor-pointer items-center gap-2 group bg-[#17171A] text-[#F3F1ED] dark:bg-[#f4f4f5] dark:text-[#1e1e20] text-xs font-semibold uppercase tracking-widest px-6 py-3.5 rounded-full hover:bg-[#C7A874] dark:hover:bg-[#C7A874] dark:hover:text-white transition-all duration-300 active:scale-95 shadow-sm">
                                Explore Collection
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 border-t border-[#17171A]/10 dark:border-[#f4f4f5]/10">
                    <div className={`flex flex-col items-center text-center p-6 transition-all duration-1000 delay-700 ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}>
                        <div className="h-12 w-12 rounded-2xl bg-[#C7A874]/10 flex items-center justify-center mb-4 text-[#C7A874]">
                            <Sparkles className="h-5 w-5" />
                        </div>
                        <h4 className="text-base font-semibold uppercase tracking-wider mb-2">Artisan Design</h4>
                        <p className="text-sm leading-relaxed text-[#17171A]/60 dark:text-[#f4f4f5]/60">
                            Meticulously drafted silhouettes balancing classic tailoring with contemporary elegance.
                        </p>
                    </div>

                    <div className={`flex flex-col items-center text-center p-6 transition-all duration-1000 delay-900 ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}>
                        <div className="h-12 w-12 rounded-2xl bg-[#C7A874]/10 flex items-center justify-center mb-4 text-[#C7A874]">
                            <Sprout className="h-5 w-5" />
                        </div>
                        <h4 className="text-base font-semibold uppercase tracking-wider mb-2">Eco-Conscious</h4>
                        <p className="text-sm leading-relaxed text-[#17171A]/60 dark:text-[#f4f4f5]/60">
                            Committed to sustainable materials that respect both our workers and the planet.
                        </p>
                    </div>

                    <div className={`flex flex-col items-center text-center p-6 transition-all duration-1000 delay-1100 ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}>
                        <div className="h-12 w-12 rounded-2xl bg-[#C7A874]/10 flex items-center justify-center mb-4 text-[#C7A874]">
                            <Shield className="h-5 w-5" />
                        </div>
                        <h4 className="text-base font-semibold uppercase tracking-wider mb-2">Uncompromised Quality</h4>
                        <p className="text-sm leading-relaxed text-[#17171A]/60 dark:text-[#f4f4f5]/60">
                            Rigorous standard evaluation ensures every single stitch fulfills our lifetime promise.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
