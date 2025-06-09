export const GreatWood = () => {
  return (
    <section
      className="flex justify-center items-center relative w-full h-[80vh] overflow-hidden"
      data-aos="fade-up"
      data-aos-duration="500"
      aria-label="วัตถุดิบไม้คุณภาพสูงจากช่างเฮง สำหรับการผลิตพาเลตไม้"
    >
      {/* Left Background Image */}
      <div className="absolute left-0 top-0 w-1/2 h-full">
        <img
          src="CH_GreatWood_1.webp"
          alt="วัตถุดิบไม้คุณภาพด้านซ้ายสำหรับพาเลตไม"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Background Image */}
      <div className="absolute right-0 top-0 w-1/2 h-full">
        <img
          src="CH_GreatWood_2.webp"
          alt="วัตถุดิบไม้ด้านขวาสำหรับผลิตลังไม้"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Foreground Content */}
      <div
        className="relative z-20 container mx-auto px-4 md:px-6 h-full flex flex-col items-center justify-center text-center text-white"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
          วัตถุดิบไม้
          <span className="text-green-500">คุณภาพสูง</span>
        </h1>
      </div>
    </section>
  );
};
