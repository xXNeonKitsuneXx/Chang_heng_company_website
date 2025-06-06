import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { cn } from "@/lib/utils";

const productImages = [
  "/CH_Product_1.JPG",
  "/CH_Product_2.JPG",
  "/CH_Product_3.JPG",
  "/CH_Product_4.JPG",
  "/CH_Product_5.JPG",
];

export const Products = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollTo = React.useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  return (
    <section className="py-12 md:py-24 lg:py-32 bg-muted">
      <div
        className="container px-4 md:px-6"
        data-aos="zoom-in-down"
        data-aos-duration="500"
      >
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Our Products
          </h2>
          <p className="text-muted-foreground text-3xl">
            ผลิตภัณฑ์บางส่วนของเรา
          </p>
          <Carousel
            setApi={setApi}
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
                          src={src || "/Image_placeholder"}
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

          <div className="flex justify-center space-x-2 pt-4">
            {productImages.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-200 hover:scale-110",
                  current === index
                    ? "bg-[#17a44c] scale-110"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                )}
                onClick={() => scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
