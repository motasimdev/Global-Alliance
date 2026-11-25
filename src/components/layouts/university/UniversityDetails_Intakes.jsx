import Container from "../../Container";
import { useInView } from "/src/hooks/useInView";
import { FaRegCalendarAlt } from "react-icons/fa";
import { HiOutlineClock } from "react-icons/hi";

const observerOptions = {
  once: true,
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const UniversityDetails_Intakes = ({ university }) => {
  const [ref, inView] = useInView(observerOptions);
  const [ref2, inView2] = useInView(observerOptions);
  const [ref3, inView3] = useInView(observerOptions);

  if (!university || !university.intakes || university.intakes.length === 0) {
    return null;
  }

  return (
    <section className="relative overflow-hidden bg-gray-50/50 py-16 md:py-24">
      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl">
          {/* section header */}
          <div className="text-center mb-12">
            <span
              ref={ref}
              style={{
                opacity: 0,
                animation: inView ? `uda-reveal 700ms 0ms both` : "none",
              }}
              className="inline-flex items-center gap-1.5 rounded-full border border-tertiary bg-tertiary/30 px-3.5 py-1 text-xs font-bold tracking-[0.16em] text-secondary uppercase md:text-sm"
            >
              <FaRegCalendarAlt className="text-primary text-base" />
              Intake Schedule
            </span>
            <h3
              ref={ref2}
              style={{
                opacity: 0,
                animation: inView2 ? `uda-reveal 700ms 100ms both` : "none",
              }}
              className="mt-4 text-3xl font-bold tracking-tight text-secondary md:text-4xl"
            >
              Available Admission Intakes
            </h3>
            <div className="mx-auto my-4 h-1 w-16 rounded-full bg-primary" />
            <p
              ref={ref3}
              style={{
                opacity: 0,
                animation: inView3 ? `uda-reveal 700ms 180ms both` : "none",
              }}
              className="mx-auto max-w-xl text-base text-gray-600 md:text-lg"
            >
              Plan your application timeline around the official academic intake
              periods.
            </p>
          </div>

          {/* intakes list / cards */}
          <div className="space-y-4">
            {university.intakes.map((intake, index) => (
              <IntakeCard key={index} intake={intake} index={index} />
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

const IntakeCard = ({ intake, index }) => {
  const [ref, inView] = useInView(observerOptions);

  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        animation: inView
          ? `uda-reveal 700ms ease-out ${index * 100}ms both`
          : "none",
      }}
      className="group flex flex-col md:flex-row md:items-center md:justify-between rounded-2xl border border-gray-200 bg-white p-6 shadow-xs transition-all duration-300 hover:border-primary/50 hover:shadow-md gap-6"
    >
      {/* left: icon & intake name */}
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-tertiary/40 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
          <FaRegCalendarAlt className="text-2xl" />
        </div>
        <div>
          <h4 className="text-xl font-bold text-secondary">{intake} Intake</h4>
          <p className="text-sm text-gray-500">Main Academic Term</p>
        </div>
      </div>

      {/* middle: starting month */}
      <div className="flex items-center gap-3 border-t md:border-t-0 md:border-x border-gray-100 pt-4 md:pt-0 md:px-8">
        <HiOutlineClock className="text-primary text-xl shrink-0" />
        <div>
          <span className="block text-xs font-semibold uppercase tracking-wider text-gray-400">
            Starting Month
          </span>
          <span className="text-base font-bold text-secondary">{intake}</span>
        </div>
      </div>

      {/* right: application period */}
      <div className="flex items-center justify-between md:justify-end gap-3 border-t md:border-t-0 border-gray-100 pt-4 md:pt-0">
        <div>
          <span className="block text-xs font-semibold uppercase tracking-wider text-gray-400">
            Application Period
          </span>
          <span className="text-sm font-semibold text-gray-700">
            Open 3–6 months prior
          </span>
        </div>
      </div>
    </div>
  );
};

export default UniversityDetails_Intakes;
