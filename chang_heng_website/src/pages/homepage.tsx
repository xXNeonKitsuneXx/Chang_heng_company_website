import { Helmet } from "react-helmet-async";
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
      <Helmet>
        <title>ช่างเฮง จำกัด | พาเลตไม้ Wooden Pallet คุณภาพ | Chang Heng</title>
        <meta
          name="description"
          content="บริษัท ช่างเฮง จำกัด ผู้ผลิตและจำหน่ายพาเลตไม้ Wooden Pallet พาเลทไม้คุณภาพ สำหรับโรงงาน คลังสินค้า และธุรกิจขนส่ง"
        />
        <meta
          name="keywords"
          content="ช่างเฮง, พาเลตไม้, Wooden Pallet, Pallet, พาเลท, บริษัท ช่างเฮง จำกัด, Chang Heng, CHANG HENG CO., LTD., โรงงานพาเลตไม้ กรุงเทพ, พาเลตไม้กรุงเทพ, พาเลตไม้ราคาถูก, พาเลตไม้ส่งออก, pallet manufacturer thailand, ไม้พาเลต, ไม้รองสินค้า, ช่างเฮง พาเลต, ลังไม้, กะบะไม้, wooden box, crate, wooden crate, IPPC, ISPM15, ลังอบความร้อน, พาเลทอบความร้อน, พาเลตอบความร้อน"
        />
        <meta name="author" content="Chang Heng Co., Ltd." />
        <meta property="og:title" content="ช่างเฮง จำกัด | พาเลตไม้คุณภาพ | Chang Heng" />
        <meta
          property="og:description"
          content="พาเลตไม้คุณภาพสูง เหมาะสำหรับคลังสินค้าและการขนส่ง สั่งซื้อจากช่างเฮงได้เลย"
        />
        <meta property="og:image" content="/CH_Icon.png" />
        <meta property="og:url" content="https://changheng.co.th" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ช่างเฮง จำกัด | พาเลตไม้ Wooden Pallet คุณภาพ" />
        <meta
          name="twitter:description"
          content="ช่างเฮง พาเลตไม้คุณภาพ ราคาดี พร้อมส่งทั่วกรุงเทพและทั่วประเทศ"
        />
        <meta name="twitter:image" content="/CH_Icon.png" />
        <html lang="th" />
      </Helmet>
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