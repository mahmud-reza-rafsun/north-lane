/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { ArrowLeft, RefreshCw, ShieldCheck } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function DetailsProduct({ product }: { product: any }) {
    return (
        <main className="w-full bg-[#F3F1ED] text-[#17171A] dark:bg-[#0F0F10] dark:text-[#F5F4F1] min-h-screen px-6 sm:px-10 md:px-16 lg:px-24 py-32 transition-colors duration-300">
            <Link
                href="/"
                className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#17171A]/60 dark:text-[#F5F4F1]/60 hover:text-[#17171A] dark:hover:text-[#F5F4F1] mb-10 transition-colors"
            >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to catalogue
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">


                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#17171A]/5 dark:bg-[#F5F4F1]/5 rounded-3xl shadow-sm">
                    <Image
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover"
                        width={500}
                        height={600}
                    />
                </div>

                <div className="flex flex-col">
                    <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C7A874] mb-2">
                        {product.category}
                    </span>

                    <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight mb-4">
                        {product.name}
                    </h1>

                    <div className="flex items-center gap-4 mb-6">
                        <p className="font-sans text-2xl font-bold">
                            ৳{product.price.toLocaleString()}
                        </p>
                        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#17171A]/5 dark:bg-[#F5F4F1]/5 border border-[#17171A]/10 dark:border-[#F5F4F1]/10">
                            ★ {product.rating}
                        </span>
                    </div>

                    <p className="font-sans text-base leading-relaxed text-[#17171A]/70 dark:text-[#F5F4F1]/70 mb-8 border-b border-[#17171A]/10 dark:border-[#F5F4F1]/10 pb-8">
                        {product.description}
                    </p>

                    <div className="mb-6">
                        <h4 className="text-xs font-bold uppercase tracking-wider mb-3">Available Sizes</h4>
                        <div className="flex gap-2">
                            {product.sizes.map((size: any) => (
                                <span key={size} className="px-4 py-2 border border-[#17171A]/20 dark:border-[#F5F4F1]/20 rounded-xl text-sm font-semibold">
                                    {size}
                                </span>
                            ))}
                        </div>
                    </div>

                    <button className="w-full bg-[#17171A] hover:bg-[#C7A874] dark:bg-[#F5F4F1] dark:text-[#17171A] dark:hover:bg-[#C7A874] dark:hover:text-white text-white font-sans text-sm font-semibold uppercase tracking-widest rounded-full py-4 px-8 transition-all duration-300">
                        Add to Cart
                    </button>

                    <div className="grid grid-cols-2 gap-4 border-t border-[#17171A]/10 dark:border-[#F5F4F1]/10 pt-6 mt-8">
                        <div className="flex items-center gap-2.5 text-xs text-[#17171A]/60 dark:text-[#F5F4F1]/60">
                            <ShieldCheck className="h-4 w-4 text-[#C7A874]" />
                            <span>100% Original Quality</span>
                        </div>
                        <div className="flex items-center gap-2.5 text-xs text-[#17171A]/60 dark:text-[#F5F4F1]/60">
                            <RefreshCw className="h-4 w-4 text-[#C7A874]" />
                            <span>7-Day Simple Exchanges</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
