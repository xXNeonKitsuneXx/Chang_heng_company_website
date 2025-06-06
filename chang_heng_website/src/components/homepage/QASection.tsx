import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const QASection = () => {
  return (
    <section className="bg-muted pb-36 px-4 md:px-6">
      <div
        className="container px-4 md:px-6"
        data-aos="fade-up"
        data-aos-duration="500"
      >
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            ค้นหาคำตอบสำหรับคำถามทั่วไปเกี่ยวกับผลิตภัณฑ์และบริการของเรา
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-3xl md:mt-12">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value={`item-1`}>
              <AccordionTrigger className="text-left text-base font-medium">
                พาเลทไม้ดีอย่างไร?
              </AccordionTrigger>
              <AccordionContent className="text-gray-500 dark:text-gray-400">
                เป็นวัสดุที่หาได้ง่าย และสามารถผลิตได้ในเวลารวดเร็ว ราคาไม่แพง
                แข็งแรง ทนทาน สามารถรับน้ำหนักได้มากถึง 2 ตัน (ขึ้นอยู่กับแบบ)
                <br /> <br />
                หากผลิตภัณฑ์ชำรุด หรือแตกหัก ก็สามารถซ่อมแซมเป็นจุดๆ
                ได้โดยไม่ต้องผลิตใหม่ทั้งชิ้น
                เป็นการประหยัดค่าใช้จ่ายในการดูแลรักษา
                และสามารถนำกลับมาใช้ใหม่ได้ <br /> <br />
                หากต้องส่งพาเลทออกต่างประเทศไปพร้อมกับผลิตภัณฑ์ของท่าน
                พาเลทไม้ก็จะเป็นตัวเลือกที่ถูกกว่าพาเลตจากวัสดุอื่น
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value={`item-2`}>
              <AccordionTrigger className="text-left text-base font-medium">
                ผลิตภัณฑ์ของบริษัท ช่างเฮง จำกัด ดีอย่างไร?
              </AccordionTrigger>
              <AccordionContent className="text-gray-500 dark:text-gray-400">
                ผลิตภัณฑ์ของเรา ทำจากไม้ใหม่ที่ไม่เคยผ่านการใช้งานมาก่อน
                จึงมีความแข็งแรงมากกว่า และไม้ที่ใช้ยัง
                ผ่านการอัดน้ำยารักษาเนื้อไม้ เพื่อยืดอายุ
                และป้องกันไม้จากแมลงกินไม้ต่าง ๆ
                <br /> <br />
                ทั้งนี้ เรายังมีการ stock ไม้ไว้ในปริมาณมาก เมื่อลูกค้าสั่งผลิต
                ก็สามารถนำมาผลิตได้ทันที ลูกค้าจึงไม่ต้องรอนาน
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value={`item-3`}>
              <AccordionTrigger className="text-left text-base font-medium">
                ผลิตภัณฑ์ของ ช่างเฮง ส่งออกได้ไหม?
              </AccordionTrigger>
              <AccordionContent className="text-gray-500 dark:text-gray-400">
                สามารถส่งออกได้
                เพราะผลิตภัณฑ์ของเราได้รับการอบความร้อนเพื่อฆ่าแมลงตามข้อกำหนดของ
                IPPC แล้ว สามารถประทับตราใบสน และออกใบรับรองให้ได้
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};
