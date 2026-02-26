export const About = () => {
  return (
    <section className="py-12 md:py-24 lg:py-32" aria-label="เกี่ยวกับบริษัท ช่างเฮง ผู้ผลิตลังไม้ พาเลทไม้ ส่งออก">
      <div
        className="container grid grid-cols-1 md:grid-cols-2 gap-8"
        data-aos="zoom-in"
        data-aos-duration="500"
      >
        <div>
          <img
            src="./CH_About.webp"
            width="550"
            height="400"
            alt="เกี่ยวกับ ช่างเฮง พาเลทไม้ ลังไม้ IPPC ส่งออก"
            className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover"
          />
        </div>
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl border-l-4 border-green-500 pl-4">
              โรงงานพาเลทไม้ ช่างเฮง
            </h2>
            <p className="text-muted-foreground md:text-xl pt-2">
              เราเป็นผู้เชี่ยวชาญด้านการผลิตลังไม้ พาเลทไม้
              และผลิตภัณฑ์ไม้สำหรับงานบรรจุภัณฑ์ตามแบบและขนาดที่ลูกค้าต้องการ
              ผลิตภัณฑ์ทั้งหมดผลิตจาก
              <span className="text-green-500 font-semibold">ไม้ใหม่</span>
              ไม่เคยผ่านการใช้งาน และผ่านกระบวนการอัดน้ำยาเพื่อป้องกันแมลง
              รวมถึงอบความร้อนตาม
              <span className="text-green-500 font-semibold">
                มาตรฐาน IPPC{" "}
              </span>
              เพื่อรองรับการ
              <span className="text-green-500 font-semibold">ส่งออก</span>
              ไปยังต่างประเทศ
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-muted-foreground">
              ด้วยประสบการณ์มากกว่า{" "}
              <span className="text-green-500 font-semibold">40 ปี </span>
              เราพร้อมให้คำแนะนำและบริการที่ตอบโจทย์ความต้องการของลูกค้าได้อย่างมืออาชีพ
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
