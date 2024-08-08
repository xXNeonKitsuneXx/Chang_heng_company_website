export const About = () => {
  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src="/placeholder.svg"
            width="550"
            height="400"
            alt="About"
            className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover"
          />
        </div>
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About Our Agency
            </h2>
            <p className="text-muted-foreground md:text-xl">
              We are a team of passionate digital experts who have been creating
              innovative solutions for our clients since 2010. Our mission is to
              help businesses of all sizes succeed in the digital landscape.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-semibold">Our Team</h3>
              <p className="text-muted-foreground">
                Meet the talented individuals behind our agency.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-semibold">Our History</h3>
              <p className="text-muted-foreground">
                Learn about our journey and how we've grown over the years.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
