/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState } from 'react'
import { ArrowLeft, RefreshCw, ShieldCheck, Check } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'
import { toast } from 'sonner'

export default function DetailsProduct({ product }: { product: any }) {
    const { addToCart } = useCart()
    const [selectedSize, setSelectedSize] = useState<string>('')
    const [selectedColor, setSelectedColor] = useState<string>('')

    const handleAddToCart = () => {
        if (product.sizes?.length > 0 && !selectedSize) {
            toast.error('Please select a size before adding to cart.')
            return
        }

        if (product.colors?.length > 0 && !selectedColor) {
            toast.error('Please select a color before adding to cart.')
            return
        }

        addToCart({
            ...product,
            sizes: selectedSize ? [selectedSize] : [product.sizes?.[0] || 'Default'],
            colors: selectedColor ? [selectedColor] : [product.colors?.[0] || 'Default']
        })

        toast.success(`${product.name} added to cart!`)
    }

    const isValidHex = (hex: string) => {
        return /^#([0-9A-F]{3}){1,2}$/i.test(hex)
    }

    return (
        <main className="w-full bg-[#F3F1ED] text-[#17171A] dark:bg-[#0F0F10] dark:text-[#F5F4F1] min-h-screen px-6 sm:px-10 md:px-16 lg:px-24 py-32 transition-colors duration-300 antialiased font-sans">
            <Link
                href="/"
                className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#17171A]/60 dark:text-[#F5F4F1]/60 hover:text-[#17171A] dark:hover:text-[#F5F4F1] mb-10 transition-colors"
            >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to catalogue
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
                <div className="mx-auto w-full max-w-[400px] md:max-w-none">
                    <div className="relative aspect-square w-full overflow-hidden bg-[#17171A]/5 dark:bg-[#F5F4F1]/5 rounded-3xl shadow-sm">
                        <Image
                            src={product.image}
                            alt={product.name}
                            className="h-full w-full object-cover"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                        />
                    </div>
                </div>

                <div className="flex flex-col">
                    <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C7A874] mb-2">
                        {product.category}
                    </span>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight mb-4 font-serif">
                        {product.name}
                    </h1>

                    <div className="flex items-center gap-4 mb-6">
                        <p className="text-2xl font-bold">
                            ৳{product.price.toLocaleString()}
                        </p>
                        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#17171A]/5 dark:bg-[#F5F4F1]/5 border border-[#17171A]/10 dark:border-[#F5F4F1]/10">
                            ★ {product.rating}
                        </span>
                    </div>

                    <p className="text-base leading-relaxed text-[#17171A]/70 dark:text-[#F5F4F1]/70 mb-8 border-b border-[#17171A]/10 dark:border-[#F5F4F1]/10 pb-8">
                        {product.description}
                    </p>

                    {product.colors && product.colors.length > 0 && (
                        <div className="mb-6">
                            <h4 className="text-xs font-bold uppercase tracking-wider mb-3">Available Colors</h4>
                            <div className="flex flex-wrap gap-4">
                                {product.colors.map((color: string) => {
                                    const isHex = isValidHex(color)
                                    const isSelected = selectedColor === color

                                    return (
                                        <button
                                            key={color}
                                            onClick={() => setSelectedColor(color)}
                                            className={`relative flex items-center justify-center transition-all duration-200 ${isHex
                                                ? 'h-9 w-9 rounded-full border shadow-sm active:scale-95'
                                                : 'px-4 py-2 border rounded-xl text-sm font-medium'
                                                } ${isSelected
                                                    ? isHex
                                                        ? 'border-[#C7A874] ring-2 ring-[#C7A874] ring-offset-2 dark:ring-offset-[#0F0F10]'
                                                        : 'border-[#C7A874] bg-[#C7A874]/10 text-[#C7A874]'
                                                    : isHex
                                                        ? 'border-[#17171A]/20 dark:border-[#F5F4F1]/20 hover:scale-105'
                                                        : 'border-[#17171A]/20 dark:border-[#F5F4F1]/20 hover:border-[#17171A] dark:hover:border-[#F5F4F1]'
                                                }`}
                                            style={isHex ? { backgroundColor: color } : {}}
                                            title={color}
                                        >
                                            {isHex ? (
                                                isSelected && (
                                                    <Check
                                                        className={`h-4 w-4 ${color.toLowerCase() === '#ffffff' || color.toLowerCase() === '#fff'
                                                            ? 'text-black'
                                                            : 'text-white mix-blend-difference'
                                                            }`}
                                                    />
                                                )
                                            ) : (
                                                color
                                            )}
                                        </button>
                                    )
                                })}
                            </div>
                        </div>
                    )}

                    {product.sizes && product.sizes.length > 0 && (
                        <div className="mb-8">
                            <h4 className="text-xs font-bold uppercase tracking-wider mb-3">Available Sizes</h4>
                            <div className="flex flex-wrap gap-3">
                                {product.sizes.map((size: string) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`px-4 py-2 border rounded-xl text-sm font-semibold transition-all duration-200 ${selectedSize === size
                                            ? 'border-[#C7A874] bg-[#C7A874]/10 text-[#C7A874]'
                                            : 'border-[#17171A]/20 dark:border-[#F5F4F1]/20 hover:border-[#17171A] dark:hover:border-[#F5F4F1]'
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    <button
                        onClick={handleAddToCart}
                        className="w-full bg-[#17171A] hover:bg-[#C7A874] cursor-pointer dark:bg-[#F5F4F1] dark:text-[#17171A] dark:hover:bg-[#C7A874] dark:hover:text-white text-white text-sm font-semibold uppercase tracking-widest rounded-full py-4 px-8 transition-all duration-300 active:scale-[0.98]"
                    >
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
