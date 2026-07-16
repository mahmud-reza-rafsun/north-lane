"use client";

import { useState, useEffect } from "react";
import { ArrowDownRight } from "lucide-react";
import { MILESTONES } from "@/utils/milestone";

export default function AboutStory() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsMounted(true), 0);
        return () => clearTimeout(timer);
    }, []);

    return (
        <main className="w-full bg-[#F3F1ED] text-[#17171A] dark:bg-[#0F0F10] dark:text-[#f4f4f5] transition-colors duration-300 antialiased font-sans">

            {/* Split Editorial Hero */}
            <section className="px-6 sm:px-10 md:px-16 lg:px-24 pt-32 pb-24 border-b border-[#17171A]/10 dark:border-[#f4f4f5]/10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
                    <div className="lg:col-span-8 space-y-6">
                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C7A874] block">
                            Manifesto & Vision
                        </span>
                        <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light uppercase tracking-tight leading-[1.1] transition-all duration-1000 ease-out ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}>
                            We build garments as <span className="font-semibold italic text-[#C7A874] dark:text-[#C7A874]">wearable architecture</span>, not seasonal trends.
                        </h1>
                    </div>
                    <div className="lg:col-span-4 lg:pl-6">
                        <p className="text-sm text-[#17171A]/60 dark:text-[#f4f4f5]/60 leading-relaxed font-light max-w-sm">
                            North Lane represents a continuous experiment in structural physics, premium heavy-duty construction, and zero-compromise sustainability.
                        </p>
                    </div>
                </div>
            </section>

            {/* Asymmetric Philosophy Block */}
            <section className="px-6 sm:px-10 md:px-16 lg:px-24 py-28 border-b border-[#17171A]/10 dark:border-[#f4f4f5]/10 bg-[#EAE8E3] dark:bg-[#141415]">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    <div className="lg:col-span-7 space-y-12 order-2 lg:order-1">
                        <div className="space-y-4">
                            <span className="text-xs font-mono text-[#C7A874] tracking-widest block">01 / CORE STANDARD</span>
                            <h2 className="text-3xl md:text-4xl font-light uppercase tracking-wider">
                                Engineered for <span className="font-semibold">Longevity</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm text-[#17171A]/80 dark:text-[#f4f4f5]/80 leading-relaxed font-light">
                            <p>
                                Every item engineered in our studio undergoes a rigorous stress-testing phase. We assess weight distribution, stitch density under tension, and how fiber dynamics adapt over multiple wash cycles.
                            </p>
                            <p>
                                By completely discarding traditional retail calendar systems, we allow our design guild the necessary time required to perfect raw material blueprints before any public release.
                            </p>
                        </div>

                        <div className="pt-4">
                            <button className="inline-flex items-center gap-4 group text-xs font-bold uppercase tracking-widest text-[#17171A] dark:text-[#f4f4f5]">
                                <span>Our Production Blueprint</span>
                                <div className="h-10 w-10 rounded-full border border-[#17171A]/20 dark:border-[#f4f4f5]/20 flex items-center justify-center group-hover:bg-[#17171A] group-hover:text-[#F3F1ED] dark:group-hover:bg-[#f4f4f5] dark:group-hover:text-[#0F0F10] transition-all duration-300">
                                    <ArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                                </div>
                            </button>
                        </div>
                    </div>

                    <div className="lg:col-span-5 order-1 lg:order-2">
                        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-[#17171A]/5 dark:bg-[#f4f4f5]/5 group">
                            <div
                                className="w-full h-full bg-cover bg-center grayscale contrast-[1.1] transition-transform duration-700 ease-out group-hover:scale-105"
                                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop')` }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Premium Timeline Grid */}
            <section className="px-6 sm:px-10 md:px-16 lg:px-24 py-28">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-20">
                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C7A874]">
                            The Narrative
                        </span>
                        <h2 className="text-3xl font-light uppercase tracking-wider mt-3">
                            Evolutionary <span className="font-semibold">Markers</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-l border-[#17171A]/10 dark:border-[#f4f4f5]/10">
                        {MILESTONES.map((item, index) => (
                            <div
                                key={item.year}
                                className={`group flex flex-col justify-between p-8 min-h-[280px] border-b md:border-b-0 border-[#17171A]/10 dark:border-[#f4f4f5]/10 ${index !== 2 ? "md:border-r border-[#17171A]/10 dark:border-[#f4f4f5]/10" : ""
                                    } hover:bg-[#17171A]/5 dark:hover:bg-[#f4f4f5]/5 transition-colors duration-300`}
                            >
                                <span className="text-2xl font-mono font-light text-[#C7A874]">
                                    {item.year}
                                </span>
                                <div className="space-y-3 mt-12">
                                    <h3 className="text-lg font-semibold uppercase tracking-wider">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm leading-relaxed text-[#17171A]/60 dark:text-[#f4f4f5]/60 font-light">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </main>
    );
}
