import { Navigation } from "./components/Navigation";
import { ScrollProgress } from "./components/ScrollProgress";
import { Footer } from "./components/Footer";
import { Hero } from "./sections/Hero";
import { Metrics } from "./sections/Metrics";
import { Bio } from "./sections/Bio";
import { Timeline } from "./sections/Timeline";
import { Values } from "./sections/Values";
import { Press } from "./sections/Press";
import { Products } from "./sections/Products";
import { Contact } from "./sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-full bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <Metrics />
        <Bio />
        <Timeline />
        <Products />
        <Values />
        <Press />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
