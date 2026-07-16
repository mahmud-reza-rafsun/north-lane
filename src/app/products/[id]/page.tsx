import { notFound } from "next/navigation";
import { DUMMY_PRODUCTS } from "@/utils/dummyData";
import DetailsProduct from "../_components/DetailsProduct";

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function ProductDetailPage({ params }: PageProps) {
    const { id } = await params;

    if (!id) {
        notFound();
    }

    const cleanId = id.replace("prod-", "");
    const product = DUMMY_PRODUCTS.find((p) => {
        const dbId = String(p.id).trim().toLowerCase();
        const urlId = id.trim().toLowerCase();
        const urlCleanId = cleanId.trim().toLowerCase();

        return dbId === urlId || dbId === urlCleanId;
    });

    if (!product) {
        notFound();
    }

    return <DetailsProduct product={product} />;
}
