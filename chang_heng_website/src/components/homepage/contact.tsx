import { Card, CardContent } from "@/components/ui/card";
import { CalendarDaysIcon, PhoneIcon, MapPinIcon } from "lucide-react";
import { useState } from "react";
import { FaEnvelope, FaFacebookSquare, FaPhoneAlt } from "react-icons/fa";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const emailCopyToClipboard = () => {
    const email = "changheng.th@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      toast({
        title: "Email copied to clipboard!",
      });
    });
  };

  const phoneCopyToClipboard = () => {
    const phone = "081-666-6686";
    navigator.clipboard.writeText(phone).then(() => {
      setCopied(true);
      toast({
        title: "Phone number copied to clipboard!",
      });
    });
  };

  return (
    <section
      className="pb-10 lg:pb-20 px-4 md:px-6"
      aria-label="ติดต่อบริษัท ช่างเฮง จำกัด ที่อยู่ เบอร์โทร อีเมล และแผนที่"
    >
      <div
        className="flex-col lg:flex-row flex justify-center items-center"
        data-aos="zoom-in"
        data-aos-duration="500"
      >
        <Card className="p-6 mb-4 lg:mr-16 w-[350px] lg:w-[450px] md:w-[400px]">
          <CardContent className="p-0 lg:px-6 ">
            <div className="space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-semibold">Contact Us</h2>
                <div className="flex justify-center">
                  <hr className="mt-1 h-1.5 bg-green-500 border-none w-full" />
                </div>
                <div className="py-1">
                  <div
                    onClick={emailCopyToClipboard}
                    className="flex mt-1 hover:text-green-500 hover:-translate-y-1 duration-300 cursor-pointer"
                  >
                    <FaEnvelope className="min-w-9 min-h-9 md:min-w-12 md:min-h-12" />{" "}
                    <span className="pl-4 pt-1 md:pt-3 text-xl">
                      changheng.th@gmail.com
                    </span>
                  </div>
                  {copied}

                  <div
                    onClick={phoneCopyToClipboard}
                    className="flex mt-5 hover:text-green-500 hover:-translate-y-1 duration-300 cursor-pointer"
                  >
                    <FaPhoneAlt className="text-4xl md:text-5xl" />{" "}
                    <span className="pl-4 pt-1 md:pt-3 text-xl">
                      081-666-6686
                    </span>
                  </div>
                  {copied}

                  <div>
                    <a
                      href="https://www.facebook.com/profile.php?id=100090867267443"
                      target="_blank"
                      className="flex mt-5 hover:text-green-500 hover:-translate-y-1 duration-300 cursor-pointer"
                    >
                      <FaFacebookSquare className="text-4xl md:text-5xl" />{" "}
                      <span className="pl-4 pt-1 md:pt-3 text-xl">
                        พาเลทไม้ ช่างเฮง
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* ///////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <Card className="w-2xl max-w-md hover:!scale-105 duration-500 cursor-pointer transition-all w-[350px] lg:w-[400px] hover:text-green-500">
          <a
            href="https://www.google.com/maps/place/บริษัท+ช่างเฮง+จำกัด/@13.648077,100.4955955,17z/data=!3m1!4b1!4m6!3m5!1s0x30e2a3682e8cd159:0xc9a6d1a935c4be24!8m2!3d13.648077!4d100.4981704!16s%2Fg%2F11g4jbk881?entry=ttu&g_ep=EgoyMDI1MDYwMy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
          >
            <div className="grid grid-rows-[1fr_1fr]">
              <div className="relative overflow-hidden rounded-t-xl">
                <img
                  src="/CH_Map.webp"
                  alt="แผนที่ที่ตั้งบริษัท ช่างเฮง จำกัด ในเขตทุ่งครุ กรุงเทพฯ"
                  width="400"
                  height="200"
                  className="object-cover w-full h-full"
                  style={{ aspectRatio: "400/200", objectFit: "cover" }}
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold">
                    CHANG HENG COMPANY LIMITED (บริษัท ช่างเฮง จำกัด)
                  </h3>
                  <p className="text-muted-foreground">
                    กรุงเทพมหานคร ประเทศไทย
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <MapPinIcon className="min-w-6 min-h-6 text-muted-foreground" />
                  <div className="text-muted-foreground">
                    181 ซอยประชาอุทิศ 49 แขวงบางมด เขตทุ่งครุ กรุงเทพฯ 10140
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <CalendarDaysIcon className="min-w-6 min-h-6 text-muted-foreground" />
                  <div className="text-muted-foreground">
                    เปิดทำการ: จันทร์ – เสาร์
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <PhoneIcon className="min-w-6 min-h-6 text-muted-foreground" />
                  <div className="text-muted-foreground">
                    081-666-6686, 081-855-4992
                  </div>
                </div>
              </CardContent>
            </div>
          </a>
        </Card>
      </div>
    </section>
  );
};
