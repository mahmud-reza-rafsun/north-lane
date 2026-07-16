import AboutStory from "@/components/Home/AboutStory";
import Banner from "@/components/Home/Banner";
import EditorialCampaign from "@/components/Home/EditorialCampaign";
import ProductCard from "@/components/Home/ProductCard";


export default function Home() {
  return (
    <>
      <Banner />
      <ProductCard />
      <EditorialCampaign />
      <AboutStory />
    </>
  );
}
