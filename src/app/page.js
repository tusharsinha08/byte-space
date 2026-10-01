import { BrandSupport } from "./components/home/BrandSupport";
import { ExploreMore } from "./components/home/ExploreMore";
import { Featured } from "./components/home/Featured";
import { GrowthEnd } from "./components/home/GrowthEnd";
import { GrowthStart } from "./components/home/GrowthStart";
import Hero from "./components/home/Hero";
import { JoinAsCreator } from "./components/home/JoinAsCreator";
import { Reviews } from "./components/home/Reviews";

export default function Home() {
  return (
    <main>
      <div className="">
        <Hero></Hero>
        <BrandSupport></BrandSupport>
        <Featured></Featured>
        <ExploreMore></ExploreMore>
        <GrowthStart></GrowthStart>
        <GrowthEnd></GrowthEnd>
        <JoinAsCreator></JoinAsCreator>
        <Reviews></Reviews>
      </div>
    </main>
  );
}
