import Container from "../../Container";
import { useInView } from "/src/hooks/useInView";
import { FaAward } from "react-icons/fa";

const observerOptions = {
  once: true,
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const UniversityDetails_Accreditation = ({ university }) => {
  const [ref, inView] = useInView(observerOptions);

  if (
    !university ||
    !university.accreditation ||
    university.accreditation.length === 0
  ) {
    return null;
  }

  return (
    <section className="relative overflow-hidden bg-[#f4f4f4] py-14 md:py-20">
      <Container className="relative z-10">
        <div className="mx-auto max-w-5xl">
          {/* heading */}
          <div
            ref={ref}
            style={{
              opacity: 0,
              animation: inView ? `uda-reveal 700ms 0s both` : "none",
            }}
            className="text-center"
          >
            <h3 className="text-3xl font-bold tracking-tight text-secondary md:text-4xl">
              Accreditation & Recognition
            </h3>
            {/* decorative divider line */}
            <div className="mx-auto my-4 h-1 w-16 rounded-full bg-primary md:my-5" />
          </div>

          {/* responsive grid of well-designed cards */}
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            {university.accreditation.map((item, index) => (
              <AccreditationCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </Container>

      {/* ── animation style ── */}
      <style>{`
        @keyframes uda-reveal {
          from {
            opacity: 0;
            transform: translateY(2rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0ms !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
};

const AccreditationCard = ({ item, index }) => {
  const [ref, inView] = useInView({
    once: true,
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  });

  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        animation: inView
          ? `uda-reveal 700ms ease-out ${index * 100}ms both`
          : "none",
      }}
      className="group relative flex w-full flex-col items-center rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-md sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)]"
    >
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-tertiary/30 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
        <FaAward className="text-2xl" />
      </div>

      <h4 className="text-xl font-bold text-secondary">{item}</h4>

      <p className="mt-2 text-sm text-gray-600">
        Officially accredited and recognized for academic excellence.
      </p>
    </div>
  );
};

export default UniversityDetails_Accreditation;
