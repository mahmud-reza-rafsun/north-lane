"use client";

import { useState, useEffect } from "react";
import { Search, SlidersHorizontal, ArrowUpDown } from "lucide-react";
import { Product } from "@/types/product";
import { DUMMY_PRODUCTS } from "@/utils/dummyData";
import Link from "next/link";

export default function ProductListing({ onSelectProduct }: { onSelectProduct: (p: Product) => void }) {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    // Filters States
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [sortBy, setSortBy] = useState("default");

    // Initial Loading Skeleton Simulation
    useEffect(() => {
        const timer = setTimeout(() => {
            setProducts(DUMMY_PRODUCTS);
            setLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    // Extract unique categories for right filter dropdown
    const categories = ["All", ...new Set(DUMMY_PRODUCTS.map(p => p.category))];

    // Filter and Sort Logic
    const filteredProducts = products
        .filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.category.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
            return matchesSearch && matchesCategory;
        })
        .sort((a, b) => {
            if (sortBy === "price-low") return a.price - b.price;
            if (sortBy === "price-high") return b.price - a.price;
            return 0; // Default
        });

    // Add to Cart handler
    const handleAddToCart = (e: React.MouseEvent, product: Product) => {
        e.stopPropagation();
        console.log("Added to cart:", product);
    };

    return (
        <section className="w-full bg-[#F3F1ED] text-[#17171A] dark:bg-[#0F0F10] dark:text-[#F5F4F1] px-6 sm:px-10 md:px-16 lg:px-24 py-28 transition-colors duration-300">

            {/* Filter and Control Bar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#17171A]/10 dark:border-[#F5F4F1]/10 pb-6 mb-10">

                {/* Left Side: Search Bar */}
                <div className="relative w-full md:max-w-xs">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#17171A]/40 dark:text-[#F5F4F1]/40" />
                    <input
                        type="text"
                        placeholder="Search garments..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 bg-transparent border border-[#17171A]/20 dark:border-[#F5F4F1]/20 rounded-full text-sm font-sans focus:outline-none focus:border-[#C7A874] dark:focus:border-[#C7A874] transition-all"
                    />
                </div>

                {/* Right Side: Category Filters & Sort By Price */}
                <div className="flex flex-wrap items-center gap-3 w-full md:w-auto md:justify-end">

                    {/* Category Filter */}
                    <div className="relative flex items-center gap-2">
                        <SlidersHorizontal className="h-4 w-4 text-[#17171A]/60 dark:text-[#F5F4F1]/60" />
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="bg-transparent border border-[#17171A]/20 dark:border-[#F5F4F1]/20 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider focus:outline-none cursor-pointer hover:border-[#17171A] dark:hover:border-[#F5F4F1]"
                        >
                            {categories.map(cat => (
                                <option key={cat} value={cat} className="bg-[#F3F1ED] dark:bg-[#0F0F10] text-[#17171A] dark:text-[#F5F4F1]">{cat}</option>
                            ))}
                        </select>
                    </div>

                    {/* Price Sort */}
                    <div className="relative flex items-center gap-2">
                        <ArrowUpDown className="h-4 w-4 text-[#17171A]/60 dark:text-[#F5F4F1]/60" />
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="bg-transparent border border-[#17171A]/20 dark:border-[#F5F4F1]/20 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider focus:outline-none cursor-pointer hover:border-[#17171A] dark:hover:border-[#F5F4F1]"
                        >
                            <option value="default" className="bg-[#F3F1ED] dark:bg-[#0F0F10] text-[#17171A] dark:text-[#F5F4F1]">Sort By</option>
                            <option value="price-low" className="bg-[#F3F1ED] dark:bg-[#0F0F10] text-[#17171A] dark:text-[#F5F4F1]">Price: Low to High</option>
                            <option value="price-high" className="bg-[#F3F1ED] dark:bg-[#0F0F10] text-[#17171A] dark:text-[#F5F4F1]">Price: High to Low</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Product Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
                {loading ? (
                    // 4 Skeleton Cards Loading State
                    Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="animate-pulse flex flex-col gap-4">
                            <div className="aspect-[3/4] w-full bg-[#17171A]/5 dark:bg-[#F5F4F1]/5 rounded-2xl" />
                            <div className="h-4 w-1/3 bg-[#17171A]/10 dark:bg-[#F5F4F1]/10 rounded" />
                            <div className="h-6 w-3/4 bg-[#17171A]/10 dark:bg-[#F5F4F1]/10 rounded" />
                            <div className="h-5 w-1/4 bg-[#17171A]/10 dark:bg-[#F5F4F1]/10 rounded" />
                        </div>
                    ))
                ) : filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <Link
                            key={product.id}
                            href={`/products/${product.id}`}
                            className="group flex flex-col cursor-pointer transition-all duration-300"
                        >
                            {/* Product Image Container */}
                            <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#17171A]/5 dark:bg-[#F5F4F1]/5 rounded-2xl mb-4">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                            </div>

                            {/* Product Meta Info */}
                            <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#17171A]/50 dark:text-[#F5F4F1]/50 mb-1">
                                {product.category}
                            </span>
                            <h3 className="font-sans text-base font-medium text-[#17171A] dark:text-[#F5F4F1] mb-1 group-hover:text-[#C7A874] transition-colors">
                                {product.name}
                            </h3>
                            <p className="font-sans text-sm font-semibold text-[#17171A]/80 dark:text-[#F5F4F1]/80 mb-4">
                                ${product.price.toLocaleString()}
                            </p>

                            {/* Action Buttons: Responsive Layout Fix */}
                            <div className="mt-auto flex flex-col sm:flex-row gap-2 w-full">
                                <div className="w-full text-center bg-transparent border border-[#17171A]/20 text-[#17171A] dark:border-[#F5F4F1]/20 dark:text-[#F5F4F1] font-sans text-xs font-semibold py-2.5 rounded-full transition-colors hover:border-[#17171A] dark:hover:border-[#F5F4F1]">
                                    View Details
                                </div>
                                <button
                                    onClick={(e) => handleAddToCart(e, product)}
                                    className="w-full text-center bg-[#17171A] text-[#F5F4F1] dark:bg-[#F5F4F1] dark:text-[#17171A] font-sans text-xs font-semibold py-2.5 rounded-full shadow-md hover:opacity-90 transition-opacity"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </Link>
                    ))
                ) : (
                    // Empty Results State
                    <div className="col-span-full py-20 text-center">
                        <p className="text-sm font-medium text-[#17171A]/50 dark:text-[#F5F4F1]/50">No garments match your active filters.</p>
                    </div>
                )}
            </div>
        </section>
    );
}
