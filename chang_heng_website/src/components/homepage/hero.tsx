export const Hero = () => {
  return (
    <section className="flex justify-center items-center" aria-label="Hero section promoting Wooden Pallet solutions by ช่างเฮง">
      <div
        className="relative w-full h-[80vh] flex items-center justify-center"
        data-aos="zoom-in"
      >
        <img
          src="CH_Hero.webp"
          alt="ช่างเฮง พาเลทไม้ พาเลทไม้ Wooden Pallet คุณภาพสูง"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 container mx-auto px-4 md:px-6 h-full flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            ช่างเฮง ผู้ผลิตและจำหน่าย
            <span className="text-green-500">พาเลทไม้ คุณภาพสูง</span>
          </h1>
          <p className="text-white text-lg md:text-xl text-center mt-4 max-w-2xl mx-auto drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)]">
            ตั้งแต่{" "}
            <span className="text-green-500 font-semibold">การออกแบบตามสั่ง</span>{" "}
            ไปจนถึง
            <span className="text-green-500 font-semibold">
              {" "}
              การจัดส่งที่เชื่อถือได้
            </span>
            , ทีมงานของเรามีความเชี่ยวชาญที่จะ
            <span className="text-green-500 font-semibold">
              {" "}
              ตอบสนองทุกความต้องการด้านพาเลทไม้ของคุณ
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
};