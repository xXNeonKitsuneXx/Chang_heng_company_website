import { Card, CardContent } from "@/components/ui/card"
import { CalendarDaysIcon, CompassIcon, MapPinIcon } from "lucide-react";

export const Contact = () => {
  return (
    <section className="bg-muted py-10 px-4 md:px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">Contact</h2>
          <p className="text-lg text-muted-foreground">
            MediVision's AI-powered analysis provides additional insights to
            support medical professionals, automating the generation of
            diagnostic reports and enabling real-time feedback to patients. By
            leveraging cloud computing and encryption, we aim to reduce the
            burden on healthcare providers and improve patient care.
          </p>
        </div>
        <Card className="w-2xl max-w-md">
          <div className="grid grid-rows-[1fr_1fr]">
            <div className="relative overflow-hidden rounded-t-xl">
              <img
                src="/placeholder.svg"
                alt="Map"
                width="400"
                height="200"
                className="object-cover w-full h-full"
                style={{ aspectRatio: "400/200", objectFit: "cover" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <CardContent className="p-6 space-y-4">
              <div>
                <h3 className="text-xl font-semibold">
                  Yosemite National Park
                </h3>
                <p className="text-muted-foreground">
                  Mariposa County, California, United States
                </p>
              </div>
              <div className="flex items-center gap-4">
                <MapPinIcon className="w-6 h-6 text-muted-foreground" />
                <div className="text-muted-foreground">
                  Yosemite Village, CA 95389
                </div>
              </div>
              <div className="flex items-center gap-4">
                <CalendarDaysIcon className="w-6 h-6 text-muted-foreground" />
                <div className="text-muted-foreground">Open 24 hours</div>
              </div>
              <div className="flex items-center gap-4">
                <CompassIcon className="w-6 h-6 text-muted-foreground" />
                <div className="text-muted-foreground">Elevation: 4,000 ft</div>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  );
};
