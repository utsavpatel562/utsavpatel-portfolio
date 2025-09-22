import MagicBento from "@/components/MagicBento";
import Header from "./components/Header";
import LaserFlowBoxExample from "./components/HeroSection";
import TechStack from "./components/TechStack";

export default function Home() {
  return (
    <div className="bg-neutral-950">
    <Header />  
    <LaserFlowBoxExample/>
    <div className="md:mt-10">
    <TechStack/>
    </div>
    <div className="justify-center flex">
    <MagicBento/>
    </div>
    </div>
  );
}
