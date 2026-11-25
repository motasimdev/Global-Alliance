import Container from "../../Container";
import { useInView } from "/src/hooks/useInView";
import { HiOutlineBookOpen } from "react-icons/hi";

const observerOptions = {
  once: true,
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const UniversityDetails_About = ({ university }) => {
  const [ref, inView] = useInView(observerOptions);
  const [ref2, inView2] = useInView(observerOptions);
  const [ref3, inView3] = useInView(observerOptions);

  if (!university) return null;

  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-18">
      {/* ── subtle background decorative elements ── */}
      <div
        className="absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-tertiary/20 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -right-20 top-1/3 h-64 w-64 rounded-full bg-secondary/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl">
          {/* section label */}
          <div
            ref={ref}
            style={{
              opacity: 0,
              animation: inView ? `uda-reveal 700ms 0ms both` : "none",
            }}
            className="mb-4 flex items-center justify-center gap-2 md:mb-5"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-tertiary bg-tertiary/30 px-3.5 py-1 text-xs font-bold tracking-[0.16em] text-secondary uppercase md:text-sm">
              <HiOutlineBookOpen className="text-primary text-base" />
              About Institution
            </span>
          </div>

          {/* heading */}
          <h3
            ref={ref2}
            style={{
              opacity: 0,
              animation: inView2 ? `uda-reveal 700ms 100ms both` : "none",
            }}
            className="text-center text-3xl font-bold tracking-tight text-secondary md:text-4xl lg:text-[40px]"
          >
            Overview of <span className="text-primary">{university.name}</span>
          </h3>

          {/* decorative divider line */}
          <div className="mx-auto my-6 h-1 w-20 rounded-full bg-primary md:my-8" />

          {/* description box with subtle border and shadow */}
          <div
            ref={ref3}
            style={{
              opacity: 0,
              animation: inView3 ? `uda-reveal 700ms 100ms both` : "none",
            }}
            className="rounded-2xl border border-gray-100 bg-gray-50/70 p-6 shadow-xs backdrop-blur-xs md:p-10 lg:p-6"
          >
            <p className="text-base leading-relaxed text-gray-700 md:text-lg md:leading-8 whitespace-pre-line">
              {university.description ||
                `Welcome to ${university.name}. Dedicated to academic excellence, innovative research, and global engagement, this institution provides a vibrant learning environment for students pursuing undergraduate, postgraduate, and doctoral studies.`}
            </p>
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

export default UniversityDetails_About;
