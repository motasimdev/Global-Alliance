import Container from "../../Container";
import { useInView } from "/src/hooks/useInView";
import { FaAward } from "react-icons/fa";
import { HiOutlineCheckCircle } from "react-icons/hi";

const observerOptions = {
  once: true,
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const UniversityDetails_Scholarships = ({ university }) => {
  const [ref, inView] = useInView(observerOptions);
  const [ref2, inView2] = useInView(observerOptions);
  const [ref3, inView3] = useInView(observerOptions);

  if (
    !university ||
    !Array.isArray(university.scholarships) ||
    university.scholarships.length === 0
  ) {
    return null;
  }

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      <Container className="relative z-10">
        <div className="mx-auto max-w-5xl">
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
              <FaAward className="text-primary text-base" />
              Financial Aid & Scholarships
            </span>
            <h3
              ref={ref2}
              style={{
                opacity: 0,
                animation: inView2 ? `uda-reveal 700ms 100ms both` : "none",
              }}
              className="mt-4 text-3xl font-bold tracking-tight text-secondary md:text-4xl"
            >
              Scholarships & Funding Opportunities
            </h3>
            <div className="mx-auto my-4 h-1 w-16 rounded-full bg-primary" />
            <p
              ref={ref3}
              style={{
                opacity: 0,
                animation: inView3 ? `uda-reveal 700ms 180ms both` : "none",
              }}
              className="mx-auto max-w-2xl text-base text-gray-600 md:text-lg"
            >
              Explore available grants, assistantships, and financial support
              schemes for international students.
            </p>
          </div>

          {/* list of scholarship items */}
          {university.scholarships.map((scholarship, idx) => (
            <ScholarshipCard key={idx} scholarship={scholarship} index={idx} />
          ))}
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

const ScholarshipCard = ({ scholarship, index }) => {
  const [ref, inView] = useInView(observerOptions);

  return (
    <li
      ref={ref}
      style={{
        opacity: 0,
        animation: inView
          ? `uda-reveal 700ms ease-out ${index * 100}ms both`
          : "none",
      }}
      className="flex items-start gap-4 rounded-3xl border border-gray-200 bg-gray-50/60 p-6 md:p-8 shadow-xs transition-all duration-200 hover:border-primary/40 hover:bg-white hover:shadow-md"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-tertiary/40 text-primary mt-0.5">
        <HiOutlineCheckCircle className="text-2xl" />
      </div>

      <div className="flex-1">
        <span className="inline-block text-xs font-bold uppercase tracking-wider text-primary mb-1">
          Scholarship Scheme {index + 1}
        </span>
        <p className="text-base leading-relaxed text-gray-700 md:text-lg md:leading-8">
          {scholarship}
        </p>
      </div>
    </li>
  );
};

export default UniversityDetails_Scholarships;
