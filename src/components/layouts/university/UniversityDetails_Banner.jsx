import Container from "../../Container";
import { useInView } from "/src/hooks/useInView";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FiBookOpen } from "react-icons/fi";

const observerOptions = {
  once: true,
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const reveal = (inView, delay = 0) => ({
  opacity: 0,
  animation: inView ? `udb-reveal 700ms ease-out ${delay}ms both` : "none",
});

const PLACEHOLDER_IMAGE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='600'%3E%3Crect fill='%23222262' width='1200' height='600'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23d5d5ff' font-size='48' font-family='sans-serif'%3EUniversity%3C/text%3E%3C/svg%3E";

const PLACEHOLDER_LOGO =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Crect fill='%23d5d5ff' rx='12' width='80' height='80'/%3E%3Ctext x='50%25' y='54%25' dominant-baseline='middle' text-anchor='middle' fill='%23222262' font-size='28' font-weight='bold' font-family='sans-serif'%3EU%3C/text%3E%3C/svg%3E";

const UniversityDetails_Banner = ({ university }) => {
  const [ref1, inView1] = useInView(observerOptions);
  const [ref2, inView2] = useInView(observerOptions);
  const [ref3, inView3] = useInView(observerOptions);

  if (!university) return null;

  const bannerImage = university.image || PLACEHOLDER_IMAGE;
  const logoImage = university.logo || PLACEHOLDER_LOGO;

  return (
    <section className="relative isolate overflow-hidden bg-secondary">
      {/* ── background cover image ── */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerImage})` }}
        aria-hidden="true"
      />

      {/* ── gradient overlays ── */}
      <div
        className="absolute inset-0 bg-linear-to-r from-secondary via-secondary/80 to-secondary/10"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-linear-to-t from-secondary/70 via-transparent to-secondary/30"
        aria-hidden="true"
      />

      {/* ── decorative circles ── */}
      <div
        className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/15 md:-right-16 md:-top-16 md:h-96 md:w-96"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-8 h-24 w-24 rounded-full border border-primary/50 md:bottom-16 md:right-16 md:h-36 md:w-36"
        aria-hidden="true"
      />

      {/* ── content ── */}
      <Container className="relative z-10">
        <div className="flex min-h-70 flex-col justify-end py-12 md:min-h-90 md:py-16 lg:min-h-105 lg:py-20">
          {/* logo + names row */}
          <div
            ref={ref1}
            style={reveal(inView1, 0)}
            className="mb-5 flex items-center gap-4 md:mb-6"
          >
            <img
              src={logoImage}
              alt={`${university.name} logo`}
              className="h-16 w-16 shrink-0 rounded-xl border-2 border-white/30 bg-white/10 object-contain shadow-lg backdrop-blur-sm md:h-20 md:w-20"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = PLACEHOLDER_LOGO;
              }}
            />

            <div className="min-w-0">
              <h1 className="text-3xl leading-tight font-bold tracking-tight text-white drop-shadow-sm md:text-5xl lg:text-6xl">
                {university.name}
              </h1>
              {university.shortName && (
                <span className="mt-1 inline-block rounded-md border border-white/20 bg-white/10 px-2.5 py-0.5 text-xs font-semibold tracking-widest text-white/80 uppercase backdrop-blur-sm md:text-sm">
                  {university.shortName}
                </span>
              )}
            </div>
          </div>

          {/* location + type */}
          <div
            ref={ref2}
            style={reveal(inView2, 120)}
            className="mb-5 flex flex-wrap items-center gap-x-5 gap-y-2 md:mb-6"
          >
            {(university.city || university.country) && (
              <span className="flex items-center gap-1.5 text-sm text-white/85 md:text-base">
                <HiOutlineLocationMarker className="text-primary text-lg md:text-xl" />
                {[university.city, university.country]
                  .filter(Boolean)
                  .join(", ")}
              </span>
            )}

            {university.type && (
              <span className="flex items-center gap-1.5 text-sm text-white/85 md:text-base">
                <HiOutlineAcademicCap className="text-primary text-lg md:text-xl" />
                {university.type}
              </span>
            )}
          </div>

          {/* info badges */}
          <div
            ref={ref3}
            style={reveal(inView3, 240)}
            className="flex flex-wrap gap-2.5"
          >
            {university.established && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur-sm md:px-4 md:text-sm">
                <FaRegCalendarAlt className="text-primary" />
                Est. {university.established}
              </span>
            )}

            {university.studyLevels?.length > 0 &&
              university.studyLevels.map((level) => (
                <span
                  key={level}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur-sm md:px-4 md:text-sm"
                >
                  <FiBookOpen className="text-primary" />
                  {level}
                </span>
              ))}
          </div>
        </div>
      </Container>

      {/* ── keyframe animation ── */}
      <style>{`
        @keyframes udb-reveal {
          from {
            opacity: 0;
            transform: translateY(2.5rem);
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

export default UniversityDetails_Banner;
