import Container from "../../Container";
import { useInView } from "/src/hooks/useInView";
import { FaAward } from "react-icons/fa";

const observerOptions = {
  once: true,
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const UniversityDetails_Scholarships = ({ university }) => {
  const [ref, inView] = useInView(observerOptions);

  if (!university || !university.scholarships || university.scholarships.trim() === "") {
    return null;
  }

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      <Container className="relative z-10">
        <div
          ref={ref}
          style={{
            opacity: 0,
            animation: inView ? `uda-reveal 700ms ease-out both` : "none",
          }}
          className="mx-auto max-w-4xl"
        >
          {/* section header */}
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-tertiary bg-tertiary/30 px-3.5 py-1 text-xs font-bold tracking-[0.16em] text-secondary uppercase md:text-sm">
              <FaAward className="text-primary text-base" />
              Financial Aid & Scholarships
            </span>
            <h3 className="mt-4 text-3xl font-bold tracking-tight text-secondary md:text-4xl">
              Scholarships & Funding Opportunities
            </h3>
            <div className="mx-auto my-4 h-1 w-16 rounded-full bg-primary" />
            <p className="mx-auto max-w-2xl text-base text-gray-600 md:text-lg">
              Explore available grants, assistantships, and financial support schemes for international students.
            </p>
          </div>

          {/* full-width information panel */}
          <div className="rounded-3xl border border-gray-200 bg-gray-50/70 p-8 shadow-xs backdrop-blur-xs md:p-10 lg:p-12">
            <div className="flex items-start gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-tertiary/50 text-primary">
                <FaAward className="text-2xl" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-secondary mb-3">Available Scholarship Schemes</h4>
                <p className="text-base leading-relaxed text-gray-700 md:text-lg md:leading-8 whitespace-pre-line">
                  {university.scholarships}
                </p>
              </div>
            </div>
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

export default UniversityDetails_Scholarships;
