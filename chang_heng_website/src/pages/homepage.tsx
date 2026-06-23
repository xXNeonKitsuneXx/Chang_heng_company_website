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
        {/* ===== Primary SEO — Target keyword: "พาเลทไม้" ===== */}
        <title>พาเลทไม้ คุณภาพสูง | ช่างเฮง โรงงานพาเลทไม้ กรุงเทพ | Chang Heng Co., Ltd.</title>
        <meta
          name="description"
          content="ช่างเฮง โรงงานผลิต พาเลทไม้ (Wooden Pallet) คุณภาพสูง ราคาถูก กรุงเทพฯ ประสบการณ์กว่า 40 ปี ไม้ใหม่ 100% ผ่านมาตรฐาน IPPC รองรับส่งออก รับผลิตลังไม้และบรรจุภัณฑ์ไม้ตามสั่ง"
        />
        <meta
          name="keywords"
          content="พาเลทไม้, พาเลทไม้กรุงเทพ, พาเลทไม้ราคาถูก, โรงงานพาเลทไม้, Wooden Pallet, พาเลทไม้ใหม่, พาเลทส่งออก, พาเลทไม้ IPPC, ลังไม้, บริษัท ช่างเฮง จำกัด, ช่างเฮง, CHANG HENG CO., LTD., Chang Heng, พาเลทไม้ทุ่งครุ, พาเลทไม้บางมด, wooden pallet thailand, pallet manufacturer thailand, pallet bangkok, ไม้รองสินค้า, ISPM15, พาเลทอบความร้อน, ลังไม้ส่งออก, wooden box, wooden crate"
        />
        <meta name="author" content="บริษัท ช่างเฮง จำกัด (Chang Heng Co., Ltd.)" />
        <meta name="publisher" content="บริษัท ช่างเฮง จำกัด (Chang Heng Co., Ltd.)" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />

        {/* ===== Open Graph ===== */}
        <meta property="og:title" content="พาเลทไม้คุณภาพสูง | โรงงานช่างเฮง กรุงเทพฯ | Chang Heng" />
        <meta
          property="og:description"
          content="ช่างเฮง ผู้เชี่ยวชาญผลิต พาเลทไม้ (Wooden Pallet) และลังไม้ ประสบการณ์กว่า 40 ปี ไม้ใหม่ 100% ผ่านมาตรฐาน IPPC ส่งออกได้ทุกปลายทาง"
        />
        <meta property="og:image" content="https://changheng.co.th/CH_Hero.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="โรงงานพาเลทไม้ ช่างเฮง กรุงเทพฯ" />
        <meta property="og:url" content="https://changheng.co.th" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="ช่างเฮง — โรงงานพาเลทไม้" />
        <meta property="og:locale" content="th_TH" />

        {/* ===== Twitter Card ===== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="พาเลทไม้คุณภาพสูง | ช่างเฮง โรงงานพาเลทไม้ กรุงเทพ" />
        <meta
          name="twitter:description"
          content="ช่างเฮง ผู้ผลิต พาเลทไม้ ลังไม้ คุณภาพสูง ราคาถูก ไม้ใหม่ 100% ผ่าน IPPC ISPM-15 รองรับส่งออก"
        />
        <meta name="twitter:image" content="https://changheng.co.th/CH_Hero.webp" />

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
        <div className="md:scroll-mt-0 scroll-mt-8" id="quality">
          <QualityStandards />
        </div>
        <div className="md:scroll-mt-0 scroll-mt-8" id="products">
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