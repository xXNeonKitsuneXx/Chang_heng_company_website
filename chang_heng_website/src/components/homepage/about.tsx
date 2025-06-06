export const About = () => {
  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src="./CH_Hero_2.jpg"
            width="550"
            height="400"
            alt="About"
            className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover"
          />
        </div>
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About Us
            </h2>
            <p className="text-muted-foreground md:text-xl">
              เราเป็นผู้เชี่ยวชาญด้านการผลิตลังไม้ พาเลทไม้
              และผลิตภัณฑ์ไม้สำหรับงานบรรจุภัณฑ์ตามแบบและขนาดที่ลูกค้าต้องการ
              ผลิตภัณฑ์ทั้งหมดผลิตจากไม้ใหม่ ไม่เคยผ่านการใช้งาน
              และผ่านกระบวนการอัดน้ำยาเพื่อป้องกันแมลง
              รวมถึงอบความร้อนตามมาตรฐาน IPPC
              เพื่อรองรับการส่งออกไปยังต่างประเทศ
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-muted-foreground">
              ด้วยประสบการณ์มากกว่า 40 ปี
              เราพร้อมให้คำแนะนำและบริการที่ตอบโจทย์ความต้องการของลูกค้าได้อย่างมืออาชีพ
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
