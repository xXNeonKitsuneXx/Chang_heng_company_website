export const Footer = () => {
  return (
    <footer
      className="bg-black text-white"
      aria-label="ส่วนท้ายเว็บไซต์ บริษัท ช่างเฮง จำกัด โรงงานพาเลทไม้ กรุงเทพฯ"
    >
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand */}
          <div>
            <h2 className="font-bold text-xl text-green-400 mb-2">
              CHANG HENG CO., LTD.
            </h2>
            <p className="text-gray-400 text-sm">
              บริษัท ช่างเฮง จำกัด — ผู้ผลิตและจำหน่าย{" "}
              <strong className="text-white">พาเลทไม้</strong> (Wooden Pallet)
              ลังไม้ คุณภาพสูง ประสบการณ์กว่า 40 ปี
            </p>
          </div>

          {/* NAP — Name Address Phone (สำคัญมากสำหรับ Local SEO) */}
          <div>
            <h3 className="font-semibold text-green-400 mb-2">ติดต่อเรา</h3>
            <address className="not-italic text-gray-400 text-sm space-y-1">
              <p>181 ซอยประชาอุทิศ 49 แขวงบางมด</p>
              <p>เขตทุ่งครุ กรุงเทพมหานคร 10140</p>
              <p>
                โทร:{" "}
                <a
                  href="tel:+66816666686"
                  className="text-white hover:text-green-400 transition-colors"
                >
                  081-666-6686
                </a>
                {" "}|{" "}
                <a
                  href="tel:+66818554992"
                  className="text-white hover:text-green-400 transition-colors"
                >
                  081-855-4992
                </a>
              </p>
              <p>
                อีเมล:{" "}
                <a
                  href="mailto:changheng.th@gmail.com"
                  className="text-white hover:text-green-400 transition-colors"
                >
                  changheng.th@gmail.com
                </a>
              </p>
            </address>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-green-400 mb-2">ผลิตภัณฑ์ของเรา</h3>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>พาเลทไม้ (Wooden Pallet)</li>
              <li>ลังไม้ (Wooden Box / Crate)</li>
              <li>พาเลทไม้ผ่านมาตรฐาน IPPC</li>
              <li>บรรจุภัณฑ์ไม้ออกแบบตามสั่ง</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} บริษัท ช่างเฮง จำกัด (Chang Heng Co., Ltd.) — All rights reserved
          </p>
          <p className="mt-1">
            <a href="https://changheng.co.th" className="hover:text-green-400 transition-colors">
              changheng.co.th
            </a>{" "}
            | โรงงาน<strong className="text-white"> พาเลทไม้ </strong>กรุงเทพฯ
          </p>
        </div>
      </div>
    </footer>
  );
};
