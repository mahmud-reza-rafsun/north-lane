"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CAMPAIGN_DATA } from "@/utils/campaign";

export default function EditorialCampaign() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsMounted(true), 0);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="w-full bg-[#F3F1ED] text-[#17171A] dark:bg-[#0F0F10] dark:text-[#f4f4f5] px-6 sm:px-10 md:px-16 lg:px-24 py-24 border-b border-[#17171A]/10 dark:border-[#f4f4f5]/10 transition-colors duration-300 antialiased font-sans overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <div className="space-y-3">
                        <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C7A874]">
                            Seasonal Perspective
                        </span>
                        <h2 className="text-3xl md:text-4xl font-light uppercase tracking-wider leading-none">
                            The Design <span className="font-semibold">Guild</span>
                        </h2>
                    </div>
                    <p className="text-sm text-[#17171A]/60 dark:text-[#f4f4f5]/60 max-w-xs leading-relaxed">
                        A dynamic exploration of textile physics, minimal layout arrangements, and sustainable artisan assembly.
                    </p>
                </div>

                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 transition-all duration-1000 ease-out ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}>
                    {CAMPAIGN_DATA.map((item) => (
                        <div key={item.id} className="group flex flex-col gap-6">
                            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[#17171A]/5 dark:bg-[#f4f4f5]/5">
                                <span className="absolute top-6 left-6 z-10 bg-[#F3F1ED]/80 backdrop-blur-md dark:bg-[#1e1e20]/80 text-[#17171A] dark:text-[#f4f4f5] text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-[#17171A]/10 dark:border-[#f4f4f5]/10">
                                    {item.tag}
                                </span>
                                <div
                                    className="w-full h-full bg-cover bg-center grayscale contrast-[1.1] transition-transform duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                                    style={{ backgroundImage: `url(${item.imageUrl})` }}
                                />
                                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            </div>

                            <div className="flex items-start justify-between gap-4 px-2">
                                <div className="space-y-2 max-w-[85%]">
                                    <div className="flex items-center gap-3">
                                        <span className="text-xs font-mono font-semibold text-[#C7A874]">
                                            {item.id}
                                        </span>
                                        <h3 className="text-lg font-semibold uppercase tracking-wider">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <p className="text-sm leading-relaxed text-[#17171A]/70 dark:text-[#f4f4f5]/70">
                                        {item.subtitle}
                                    </p>
                                </div>

                                <Link
                                    href={item.link}
                                    className="h-12 w-12 rounded-full border border-[#17171A]/20 dark:border-[#f4f4f5]/20 flex items-center justify-center text-[#17171A] dark:text-[#f4f4f5] group-hover:bg-[#17171A] group-hover:text-[#F3F1ED] dark:group-hover:bg-[#f4f4f5] dark:group-hover:text-[#1e1e20] transition-all duration-300 flex-shrink-0"
                                >
                                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
