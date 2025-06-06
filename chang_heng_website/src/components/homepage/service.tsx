import { HammerIcon, PencilRulerIcon, UserCheckIcon } from "lucide-react";

export const Services = () => {
  return (
    <section className="pb-12 md:pb-24 lg:pb-32">
      <div
        className="container px-4 md:px-6"
        data-aos="fade-down"
        data-aos-duration="500"
      >
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-4xl font-bold text-center">
            Our Services
            <div className="mx-auto w-12 h-1 bg-green-500 mt-2 rounded-full" />
          </h2>
          {/* <p className="text-muted-foreground max-w-3xl text-2xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p> */}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            <div className="bg-primary rounded-full p-4">
              <HammerIcon className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold">ผลิตพาเลทไม้และลังไม้</h3>
            <p className="text-muted-foreground">
              รับสั่งผลิตพาเลทไม้ ลังไม้ และบรรจุภัณฑ์ไม้ทุกรูปแบบ
              ตามขนาดและดีไซน์ที่เหมาะกับการใช้งานจริงของคุณ
            </p>
          </div>
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            <div className="bg-primary rounded-full p-4">
              <PencilRulerIcon className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold">ออกแบบบรรจุภัณฑ์เฉพาะทาง</h3>
            <p className="text-muted-foreground">
              ออกแบบบรรจุภัณฑ์ไม้ให้เหมาะสมกับประเภทสินค้า น้ำหนัก
              และรูปแบบการขนส่ง เพื่อความแข็งแรงและปลอดภัยสูงสุด
            </p>
          </div>
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            <div className="bg-primary rounded-full p-4">
              <UserCheckIcon className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold">
              ให้คำปรึกษาโดยผู้เชี่ยวชาญ
            </h3>
            <p className="text-muted-foreground">
              ทีมงานมากประสบการณ์พร้อมแนะนำตั้งแต่การเลือกชนิดไม้ การออกแบบ
              ไปจนถึงการจัดส่งที่มีประสิทธิภาพ
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
