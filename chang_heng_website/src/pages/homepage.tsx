import "../../app/globals.css";
import { Navbar } from "@/components/navbar/navbar";
import { Hero } from "@/components/homepage/hero";
import { About } from "@/components/homepage/about";
import { Services } from "@/components/homepage/service";
import { Footer } from "@/components/footer/footer";
import { Products } from "@/components/homepage/products";
import { Contact } from "@/components/homepage/contact";
import { Toaster } from "@/components/ui/toaster";
import { Fragment } from "react/jsx-runtime";

export const HomePage = () => {
  return (
    <Fragment>
      <Toaster />
      <Navbar />
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="products">
        <Products />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </Fragment>
  );
};
