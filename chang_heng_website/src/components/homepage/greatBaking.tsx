export const GreatBaking= () => {
  return (
    <section
      className="flex justify-center items-center relative w-full h-[80vh] overflow-hidden"
      data-aos="fade-up"
      data-aos-duration="500"
    >
      {/* Left Background Image */}
      <div className="absolute left-0 top-0 w-1/2 h-full">
        <img
          src="CH_Baking_2_UpScale.jpg"
          alt="การอบความร้อนตามมาตรฐาน IPPC สำหรับพาเลตไม้โดยช่างเฮง"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Background Image */}
      <div className="absolute right-0 top-0 w-1/2 h-full">
        <img
          src="CH_Baking_UpScale_Edited.jpg"
          alt="การอบความร้อนไม้ด้านซ้ายตามมาตรฐาน IPPC"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Foreground Content */}
        <div className="relative z-10 container mx-auto px-4 md:px-6 h-full flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            อบความร้อนตาม
            <span className="text-green-500">มาตรฐาน IPPC</span>
          </h1>
        </div>
    </section>
  );
};

