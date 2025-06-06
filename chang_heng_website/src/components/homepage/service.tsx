import { SmartphoneIcon, StoreIcon, WebhookIcon } from "lucide-react";

export const Services = () => {
  return (
    <section className="pb-12 md:pb-24 lg:pb-32">
      <div
        className="container px-4 md:px-6"
        data-aos="fade-down"
        data-aos-duration="500"
      >
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-4xl font-bold text-center">
            Our Services
            <div className="mx-auto w-12 h-1 bg-[#17a44c] mt-2 rounded-full" />
          </h2>
          <p className="text-muted-foreground max-w-3xl">
            We offer a wide range of digital services to help your business
            thrive in the online world.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="flex flex-col items-center space-y-4">
            <div className="bg-primary rounded-full p-4">
              <WebhookIcon className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold">Web Development</h3>
            <p className="text-muted-foreground">
              We build custom, responsive websites that are optimized for
              performance and user experience.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="bg-primary rounded-full p-4">
              <SmartphoneIcon className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold">Mobile App Development</h3>
            <p className="text-muted-foreground">
              Our team of experts create intuitive and engaging mobile
              applications for iOS and Android.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="bg-primary rounded-full p-4">
              <StoreIcon className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold">Digital Marketing</h3>
            <p className="text-muted-foreground">
              We develop and execute targeted digital marketing strategies to
              drive traffic and increase conversions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
