export const Hero = () => {
  return (
    <section
      className="relative w-full h-[80vh] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("/wood-pallet.jpg")' }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 container mx-auto px-4 md:px-6 h-full flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Experts in Wood Pallet Solutions</h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl">
          From custom designs to reliable delivery, our team has the expertise to meet all your wood pallet needs.
        </p>
      </div>
    </section>
  )
}