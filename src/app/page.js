import { BrandSupport } from "./components/home/BrandSupport";
import { Featured } from "./components/home/Featured";
import Hero from "./components/home/Hero";

export default function Home() {
  return (
    <main>
      <div className="max-w-7xl mx-auto">
        <Hero></Hero>
        <BrandSupport></BrandSupport>
        <Featured></Featured>
      </div>
    </main>
  );
}
