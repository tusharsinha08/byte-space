import { BrandSupport } from "./components/home/BrandSupport";
import { ExploreMore } from "./components/home/ExploreMore";
import { Featured } from "./components/home/Featured";
import { GrowthEnd } from "./components/home/GrowthEnd";
import { GrowthStart } from "./components/home/GrowthStart";
import Hero from "./components/home/Hero";
import { JoinAsCreator } from "./components/home/JoinAsCreator";

export default function Home() {
  return (
    <main>
      <div className="max-w-7xl mx-auto">
        <Hero></Hero>
        <BrandSupport></BrandSupport>
        <Featured></Featured>
        <ExploreMore></ExploreMore>
        <GrowthStart></GrowthStart>
        <GrowthEnd></GrowthEnd>
        <JoinAsCreator></JoinAsCreator>
      </div>
    </main>
  );
}
