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
import { QualityStandards } from "@/components/homepage/qualityStandards";

export const HomePage = () => {
  return (
    <Fragment>
      <Helmet>
        <title>ช่างเฮง | โรงงานผลิต พาเลทไม้ คุณภาพสูง | Chang Heng Co., Ltd.</title>
        <meta
          name="description"
          content="ช่างเฮง (Chang Heng) โรงงานผู้ผลิตและจำหน่าย พาเลทไม้ (Wooden Pallet) ลังไม้ และไม้รองสินค้าคุณภาพสูง สำหรับคลังสินค้า โรงงานอุตสาหกรรม และการส่งออก"
        />
        <meta
          name="keywords"
          content="บริษัท ช่างเฮง จำกัด, ช่างเฮง, ช่าง เฮง, พาเลทไม้, Wooden Pallet, Pallet, พาเลท, CHANG HENG CO., LTD., CHANG HENG COMPANY LIMITED, Chang Heng, ChangHeng, Chang heng, โรงงานพาเลทไม้ กรุงเทพ, พาเลทไม้กรุงเทพ, พาเลทไม้ราคาถูก, พาเลทไม้ใหม่, พาเลทส่งออก, ไม้พาเลท, pallet ไม้, ไม้รองสินค้า, wooden pallet thailand, pallet manufacturer thailand, ช่างเฮง พาเลท, ลังไม้, กะบะไม้, wooden box, crate, wooden crate, IPPC, ISPM15, ลังอบความร้อน, พาเลทอบความร้อน, พาเลทอบความร้อน"
        />
        <meta name="author" content="Chang Heng Co., Ltd." />
        <meta property="og:title" content="ช่างเฮง จำกัด | พาเลทไม้คุณภาพ | Chang Heng" />
        <meta
          property="og:description"
          content="ผู้เชี่ยวชาญด้านพาเลทไม้ พาเลทไม้ และ Wooden Pallet สำหรับธุรกิจของคุณ"
        />
        <meta property="og:image" content="/CH_Icon.webp" />
        <meta property="og:url" content="https://changheng.co.th" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ช่างเฮง | พาเลทไม้ Wooden Pallet คุณภาพ" />
        <meta
          name="twitter:description"
          content="ช่างเฮง พาเลทไม้คุณภาพ ราคาดี พร้อมส่งทั่วกรุงเทพและทั่วประเทศ"
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
        <div className="md:scroll-mt-0 scroll-mt-10" id="quality">
          <QualityStandards />
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