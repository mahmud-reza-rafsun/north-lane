"use client";

/**
 * HeroSlider — premium fashion e-commerce hero
 */

import { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, EffectFade, Keyboard, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import Link from "next/link";

const AUTOPLAY_MS = 6000;

type Slide = {
    eyebrow: string;
    title: string;
    description: string;
    ctaLabel: string;
    ctaHref: string;
    image: string;
    imageAlt: string;
};

const slides: Slide[] = [
    {
        eyebrow: "01 — Arrivals",
        title: "New Season\nCollection",
        description:
            "Considered silhouettes for the months ahead. Cut in natural fibers, finished by hand, made to be worn for years rather than a season.",
        ctaLabel: "Shop Now",
        ctaHref: "/collections/new-season",
        image: "/images/hero-slide-1.jpg",
        imageAlt: "Model wearing a tailored coat from the new season collection",
    },
    {
        eyebrow: "02 — Signature",
        title: "Timeless\nStreetwear",
        description:
            "Everyday pieces built on quiet structure. No logos shouting for attention — just fabric, fit, and a little bit of attitude.",
        ctaLabel: "Explore Collection",
        ctaHref: "/collections/streetwear",
        image: "/images/hero-slide-2.jpg",
        imageAlt: "Model in relaxed-fit streetwear standing against an urban backdrop",
    },
    {
        eyebrow: "03 — Foundations",
        title: "Premium\nEssentials",
        description:
            "The pieces everything else is built around. Elevated basics in a restrained palette, designed to layer without ever competing.",
        ctaLabel: "Shop Now",
        ctaHref: "/collections/essentials",
        image: "/images/hero-slide-3.jpg",
        imageAlt: "Close-up of premium essential garments in neutral tones",
    },
    {
        eyebrow: "04 — Edit",
        title: "Elevate\nYour Style",
        description:
            "A closing statement piece for every wardrobe. Considered details, a fit that moves with you, and nothing left to chance.",
        ctaLabel: "Explore Collection",
        ctaHref: "/collections/edit",
        image: "/images/hero-slide-4.jpg",
        imageAlt: "Model wearing a statement outerwear piece from the closing edit",
    },
];

export default function Banner() {
    const swiperRef = useRef<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [restartKey, setRestartKey] = useState(0);

    const goTo = (index: number) => {
        swiperRef.current?.slideToLoop(index);
    };

    return (
        <section
            aria-roledescription="carousel"
            aria-label="Featured collections"
            className="relative h-[100vh] min-h-[560px] w-full overflow-hidden bg-[#F3F1ED] text-[#17171A] dark:bg-[#0F0F10] dark:text-[#F5F4F1]">
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes hero-rail-fill {
                    from { width: 0%; }
                    to { width: 100%; }
                }
                .animate-rail-fill {
                    animation: hero-rail-fill ${AUTOPLAY_MS}ms linear forwards;
                }
            `}} />

            <Swiper
                modules={[Autoplay, EffectFade, Keyboard, A11y]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                speed={700}
                loop
                keyboard={{ enabled: true }}
                autoplay={{ delay: AUTOPLAY_MS, disableOnInteraction: false }}
                onSwiper={(swiper: SwiperType) => {
                    swiperRef.current = swiper;
                }}
                onSlideChange={(swiper: SwiperType) => {
                    setActiveIndex(swiper.realIndex);
                    setRestartKey((k) => k + 1);
                }}
                className="h-full w-full"
            >
                {slides.map((slide, i) => (
                    <SwiperSlide key={slide.title}>
                        <div className="relative h-full w-full">
                            <Image
                                src={slide.image}
                                alt={slide.imageAlt}
                                fill
                                priority={i === 0}
                                sizes="100vw"
                                className="object-cover"
                            />
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent
                                           dark:from-black/70 dark:via-black/35 dark:to-black/10"
                                aria-hidden="true"
                            />

                            <div className="relative z-10 flex h-full items-center px-6 sm:px-10 md:px-16 lg:px-24">
                                <div className="max-w-xl text-white">
                                    <p className="mb-4 font-[var(--font-body)] text-xs font-medium uppercase tracking-[0.25em] text-white/70 sm:text-sm">
                                        {slide.eyebrow}
                                    </p>

                                    <h1 className="whitespace-pre-line font-[var(--font-display)] text-[2.75rem] font-medium leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
                                        {slide.title}
                                    </h1>

                                    <p className="mt-6 max-w-md font-[var(--font-body)] text-base leading-relaxed text-white/80 sm:text-lg">
                                        {slide.description}
                                    </p>

                                    <Link
                                        href="/products"
                                        className="group mt-9 inline-flex items-center cursor-pointer gap-3 rounded-full bg-[#F5F4F1] px-7 py-3.5
                                                   font-[var(--font-body)] text-sm font-semibold uppercase tracking-wide text-[#17171A]
                                                   transition-all duration-300 ease-out hover:gap-4 hover:bg-[#C7A874]
                                                   focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                                                   focus-visible:outline-[#C7A874] motion-reduce:transition-none"
                                    >
                                        {slide.ctaLabel}
                                        <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5">
                                            →
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Signature: editorial index rail */}
            <nav
                aria-label="Choose slide"
                className="absolute bottom-8 right-6 z-20 flex gap-4 sm:right-10 md:bottom-10 md:right-16 lg:right-24"
            >
                {slides.map((slide, i) => {
                    const isActive = i === activeIndex;
                    return (
                        <button
                            key={slide.title}
                            type="button"
                            onClick={() => goTo(i)}
                            aria-current={isActive ? "true" : undefined}
                            aria-label={`Go to slide ${i + 1}: ${slide.title.replace("\n", " ")}`}
                            className="group flex items-center gap-2 text-left text-white/60 transition-colors duration-300 hover:text-white"
                        >
                            <span className="font-[var(--font-body)] text-xs tabular-nums">
                                {String(i + 1).padStart(2, "0")}
                            </span>
                            <span className="relative h-px w-6 overflow-hidden bg-white/25 sm:w-8 md:w-10">
                                {isActive && (
                                    <span
                                        key={restartKey}
                                        className="absolute inset-y-0 left-0 block bg-[#C7A874] animate-rail-fill motion-reduce:w-full"
                                    />
                                )}
                            </span>
                        </button>
                    );
                })}
            </nav>
        </section>
    );
}
