import { AboutUs } from "@/components/Home/AboutUs";
import { Features } from "@/components/Home/Features";
import { NewItems } from "@/components/Home/NewItems";
import { OurProducts } from "@/components/Home/OurProducts";
import { Products } from "@/components/Home/Products";

export default function Home() {
  return (
    <main className="w-full">
      <Features />
      <NewItems />
      <AboutUs />
      <OurProducts />
      <Products />
    </main>
  );
}
