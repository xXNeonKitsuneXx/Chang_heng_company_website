import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const QASection = () => {
  return (
    <section className="bg-muted pb-16 lg:pb-36 px-4 md:px-6">
      <div
        className="container px-4 md:px-6"
        data-aos="fade-up"
        data-aos-duration="500"
      >
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-2xl/relaxed dark:text-gray-400">
            คำตอบสำหรับคำถามทั่วไปเกี่ยวกับผลิตภัณฑ์และบริการของเรา
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-3xl md:mt-12">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value={`item-1`}>
              <AccordionTrigger className="text-left font-medium hover:text-green-500 text-xl">
                พาเลทไม้ดีอย่างไร?
              </AccordionTrigger>
              <AccordionContent className="text-gray-500 dark:text-gray-400 text-base">
                เป็น
                <span className="text-green-500 font-semibold">
                  วัสดุที่หาได้ง่าย
                </span>
                และสามารถผลิตได้ในเวลารวดเร็ว ราคาไม่แพง
                <span className="text-green-500 font-semibold">
                  แข็งแรง ทนทาน
                </span>
                สามารถรับน้ำหนักได้มากถึง 2 ตัน (ขึ้นอยู่กับแบบ)
                <br /> <br />
                หากผลิตภัณฑ์ชำรุด หรือแตกหัก ก็สามารถ
                <span className="text-green-500 font-semibold">
                  ซ่อมแซมเป็นจุด ๆ ได้
                </span>
                โดยไม่ต้องผลิตใหม่ทั้งชิ้น
                เป็นการประหยัดค่าใช้จ่ายในการดูแลรักษา และสามารถ
                <span className="text-green-500 font-semibold">
                  นำกลับมาใช้ใหม่ได้
                </span>{" "}
                <br /> <br />
                หากต้องส่งพาเลทออกต่างประเทศไปพร้อมกับผลิตภัณฑ์ของท่าน
                พาเลทไม้ก็จะเป็นตัวเลือกที่ถูกกว่าพาเลตจากวัสดุอื่น
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value={`item-2`}>
              <AccordionTrigger className="text-left font-medium hover:text-green-500 text-xl">
                ผลิตภัณฑ์ของบริษัท ช่างเฮง จำกัด ดีอย่างไร?
              </AccordionTrigger>
              <AccordionContent className="text-gray-500 dark:text-gray-400 text-base">
                ผลิตภัณฑ์ของเรา ทำจาก
                <span className="text-green-500 font-semibold">ไม้ใหม่</span>
                ที่
                <span className="text-green-500 font-semibold">
                  ไม่เคยผ่านการใช้งาน
                </span>
                มาก่อน จึงมีความแข็งแรงมากกว่า และไม้ที่ใช้ยังผ่านการ
                <span className="text-green-500 font-semibold">อัดน้ำยา</span>
                รักษาเนื้อไม้ เพื่อยืดอายุ และป้องกันไม้จากแมลงกินไม้ต่าง ๆ
                <br /> <br />
                ทั้งนี้ เรายัง
                <span className="text-green-500 font-semibold">
                  มีการสต๊อก{" "}
                </span>
                ไม้ไว้ในปริมาณมาก เมื่อลูกค้าสั่งผลิต ก็สามารถนำมา
                <span className="text-green-500 font-semibold">
                  ผลิตได้ทันที{" "}
                </span>
                ลูกค้าจึง
                <span className="text-green-500 font-semibold">
                  ไม่ต้องรอนาน
                </span>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value={`item-3`}>
              <AccordionTrigger className="text-left font-medium hover:text-green-500 text-xl">
                ผลิตภัณฑ์ของ ช่างเฮง ส่งออกได้ไหม?
              </AccordionTrigger>
              <AccordionContent className="text-gray-500 dark:text-gray-400 text-base">
                สามารถส่งออกได้ เพราะผลิตภัณฑ์ของเราได้รับการ
                <span className="text-green-500 font-semibold">อบความร้อน</span>
                เพื่อฆ่าแมลงตามข้อกำหนดของ{" "}
                <span className="text-green-500 font-semibold">IPPC </span>แล้ว
                สามารถ
                <span className="text-green-500 font-semibold">ประทับตรา</span>
                ใบสน และออก
                <span className="text-green-500 font-semibold">ใบรับรอง</span>
                ให้ได้
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};
