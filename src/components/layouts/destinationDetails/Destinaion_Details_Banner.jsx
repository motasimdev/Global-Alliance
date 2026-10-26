import Container from "../../Container";

const destinationAssets = {
  ...import.meta.glob("../../assets/destination/details/*", {
    eager: true,
    import: "default",
    query: "?url",
  }),
  ...import.meta.glob("../../assets/destination/flags/*", {
    eager: true,
    import: "default",
    query: "?url",
  }),
};

const getDestinationAsset = (assetPath) =>
  destinationAssets[assetPath?.replace("/src/", "../../")] ?? assetPath;

const Destinaion_Details_Banner = ({ destination }) => {
  const bannerImage = getDestinationAsset(destination.banner);
  const flagImage = getDestinationAsset(destination.flag);

  return (
    <section className="relative isolate overflow-hidden bg-secondary">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerImage})` }}
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 bg-linear-to-r from-secondary via-secondary/75 to-secondary/5"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 bg-linear-to-t from-secondary/55 via-transparent to-secondary/20"
        aria-hidden="true"
      />

      <div
        className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/20 md:-right-16 md:-top-16 md:h-96 md:w-96"
        aria-hidden="true"
      />

      <div
        className="absolute bottom-10 right-8 h-24 w-24 rounded-full border border-primary/70 md:bottom-16 md:right-16 md:h-36 md:w-36"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="flex min-h-80 items-end py-14 md:min-h-100 md:py-18 lg:min-h-125 lg:py-24">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3 md:mb-7">
              {destination.flag && (
                <img
                  src={flagImage}
                  alt={`${destination.name} flag`}
                  className="h-10 w-10 rounded-full border-2 border-white/80 object-cover shadow-lg md:h-12 md:w-12"
                />
              )}

              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-bold tracking-[0.16em] text-white uppercase backdrop-blur-sm md:px-4 md:text-sm">
                Study in {destination.region}
              </span>
            </div>

            <h1 className="max-w-2xl text-5xl leading-[0.95] font-bold tracking-tight text-white drop-shadow-sm md:text-7xl lg:text-8xl">
              {destination.name}
            </h1>

            <div className="mt-6 flex max-w-2xl gap-4 border-l-2 border-primary pl-4 md:mt-8 md:pl-5">
              <p className="text-base leading-relaxed text-white/90 md:text-xl md:leading-8">
                {destination.shortDescription}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Destinaion_Details_Banner;
