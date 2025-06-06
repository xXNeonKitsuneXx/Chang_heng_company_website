import '../../app/globals.css';
import { Navbar } from '@/components/navbar/navbar'
import { Hero } from '@/components/homepage/hero';
import { About } from '@/components/homepage/about';
import { Services } from '@/components/homepage/service';
import { Footer } from '@/components/footer/footer';
import { Products } from '@/components/homepage/products';
import { Contact } from '@/components/homepage/contact';
import { Toaster } from '@/components/ui/toaster';

export const HomePage = () => {

  return (
    <>
    <Toaster />
    <Navbar />
    <Hero />
    <About />
    <Services />
    <Products />
    <Contact />
    <Footer />
    </>
  );
};
