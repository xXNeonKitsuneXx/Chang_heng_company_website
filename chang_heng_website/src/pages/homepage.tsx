import "../../app/globals.css";
import { Navbar } from "@/components/navbar/navbar";
import { Hero } from "@/components/homepage/hero";
import { About } from "@/components/homepage/about";
import { Services } from "@/components/homepage/service";
import { Footer } from "@/components/footer/footer";
import { Products } from "@/components/homepage/products";
import { QASection } from "@/components/homepage/QASection";
import { Contact } from "@/components/homepage/contact";
import { Toaster } from "@/components/ui/toaster";
import { Fragment } from "react/jsx-runtime";
import { GreatWood } from "@/components/homepage/greatWood";
import { GreatBaking } from "@/components/homepage/greatBaking";

export const HomePage = () => {
  return (
    <Fragment>
      <Toaster />
      <Navbar />
        <div id="home" className="scroll-mt-0 pt-16">
          <Hero />
        </div>
      <div className="mb:pt-16">
        <div className="scroll-mt-8" id="about">
          <About />
        </div>
        <div id="services" className="md:scroll-mt-36 scroll-mt-24">
          <Services />
        </div>
        <GreatWood />
        <div className="pt-24">
          <GreatBaking />
        </div>
        <div className="md:scroll-mt-0 scroll-mt-10" id="products">
          <Products />
        </div>
        <div id="qa" className="lg:scroll-mt-32 scroll-mt-24">
          <QASection />
        </div>
        <div id="contact" className="lg:scroll-mt-36 scroll-mt-20">
          <Contact />
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};
