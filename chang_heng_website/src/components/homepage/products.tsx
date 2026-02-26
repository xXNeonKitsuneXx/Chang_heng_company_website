import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { cn } from "@/lib/utils";

import Autoplay from "embla-carousel-autoplay";

const productImages = [
  "/CH_Product_1.webp",
  "/CH_Product_2.webp",
  "/CH_Product_3.webp",
  "/CH_Product_4.webp",
  "/CH_Product_5.webp",
  "/CH_Product_6.webp",
];

export const Products = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

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
    <section
      className="py-12 md:py-24 lg:py-32 bg-muted"
      aria-label="แกลเลอรีผลิตภัณฑ์พาเลทไม้และลังไม้จากช่างเฮง"
    >
      <div
        className="container px-4 md:px-6"
        data-aos="zoom-in-down"
        data-aos-duration="500"
      >
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            ผลิตภัณฑ์ พาเลทไม้ และลังไม้ของเรา
          </h2>
          <p className="text-muted-foreground text-2xl pb-1">
            ผลิตภัณฑ์บางส่วนของเรา
          </p>
          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4181,
              }),
            ]}
            className="w-full max-w-7xl"
          >
            <CarouselContent className="-ml-1">
              {productImages.map((src, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:basis-1/2 xl:basis-1/3"
                >
                  <div className="p-0">
                    <Card>
                      <CardContent className="flex items-center justify-center p-0 w-full h-[316px]">
                        <img
                          src={src || "/Image_placeholder"}
                          alt={`ภาพผลิตภัณฑ์พาเลทไม้ ลังไม้ ชิ้นที่ ${
                            index + 1
                          }`}
                          className="w-full h-[316px] object-cover rounded"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="flex justify-center space-x-2 pt-4">
            {productImages.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-200 hover:scale-110",
                  current === index
                    ? "bg-green-500 scale-110"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                )}
                onClick={() => scrollTo(index)}
                aria-label={`ไปยังภาพผลิตภัณฑ์หมายเลข ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
