import { TreePine, Flame, ShieldCheck, Award } from "lucide-react"

export function QualityStandards() {
  return (
    <section
      className="py-16 md:py-24 lg:py-32"
      aria-label="มาตรฐานคุณภาพของช่างเฮง วัตถุดิบไม้คุณภาพสูงและอบความร้อนตามมาตรฐาน IPPC"
      data-aos="fade-up"
      data-aos-duration="500"
    >
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground text-balance">
            มาตรฐานคุณภาพของเรา
          </h2>
          <div className="mx-auto w-12 h-1 bg-[#22c55e] mt-3 rounded-full" />
          <p className="text-muted-foreground md:text-lg mt-4 max-w-2xl">
            ช่างเฮงมุ่งมั่นผลิตพาเลทไม้จากวัตถุดิบคุณภาพสูง
            ผ่านกระบวนการอบความร้อนตามมาตรฐานสากล
          </p>
        </div>

        {/* Two Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {/* Card 1 - Great Wood */}
          <div className="group relative overflow-hidden rounded-xl border border-border bg-card">
            <div className="relative h-56 md:h-64 overflow-hidden">
              <img
                src="/CH_GreatWood_1.webp"
                alt="วัตถุดิบไม้คุณภาพสูงสำหรับพาเลทไม้โดยช่างเฮง"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <div className="rounded-full bg-[#22c55e] p-2">
                  <TreePine className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  วัตถุดิบไม้คุณภาพสูง
                </h3>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                เราคัดสรรไม้ใหม่ที่ไม่เคยผ่านการใช้งาน
                เพื่อให้ผลิตภัณฑ์มีความแข็งแรงและทนทานสูงสุด
                พร้อมผ่านกระบวนการอัดน้ำยาเพื่อป้องกันแมลง
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#22c55e] mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground">
                    ใช้<span className="font-semibold text-[#22c55e]">ไม้ใหม่ 100%</span> ไม่เคยผ่านการใช้งาน
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#22c55e] mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground">
                    ผ่านการ<span className="font-semibold text-[#22c55e]">อัดน้ำยา</span>ป้องกันแมลงกินไม้
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#22c55e] mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground">
                    <span className="font-semibold text-[#22c55e]">สต๊อกไม้ปริมาณมาก</span> ผลิตได้ทันที ไม่ต้องรอนาน
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2 - Great Baking / IPPC */}
          <div className="group relative overflow-hidden rounded-xl border border-border bg-card">
            <div className="relative h-56 md:h-64 overflow-hidden">
              <img
                src="/CH_Baking_UpScale_Edited.webp"
                alt="การอบความร้อนตามมาตรฐาน IPPC สำหรับพาเลทไม้โดยช่างเฮง"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <div className="rounded-full bg-[#22c55e] p-2">
                  <Flame className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  อบความร้อนตามมาตรฐาน IPPC
                </h3>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                ผลิตภัณฑ์ทุกชิ้นผ่านกระบวนการอบความร้อนตามข้อกำหนด IPPC
                เพื่อฆ่าแมลงและรองรับการส่งออกไปยังต่างประเทศ
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-[#22c55e] mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground">
                    อบความร้อนตาม<span className="font-semibold text-[#22c55e]">มาตรฐาน IPPC</span> สากล
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-[#22c55e] mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground">
                    สามารถ<span className="font-semibold text-[#22c55e]">ประทับตราใบสน</span>และออกใบรับรองได้
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-[#22c55e] mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground">
                    รองรับการ<span className="font-semibold text-[#22c55e]">ส่งออกต่างประเทศ</span>ทุกปลายทาง
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}