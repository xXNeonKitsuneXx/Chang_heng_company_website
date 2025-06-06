import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card";

const productImages = [
  "/CH_Product_1.JPG",
  "/CH_Product_2.JPG",
  "/CH_Product_3.JPG",
  "/CH_Product_4.JPG",
  "/CH_Product_5.JPG",
];

export const Products = () => {
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Our Products
          </h2>
          <p className="text-muted-foreground text-3xl">
            Check out some of our products
          </p>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-7xl"
          >
            <CarouselContent className="-ml-1">
              {productImages.map((src, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-0">
                    <Card>
                      <CardContent className="flex items-center justify-center p-0">
                        <img
                          src={src}
                          alt={`Product ${index + 1}`}
                          className="w-full object-contain rounded"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
