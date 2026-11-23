import Container from "../../Container";
import { useInView } from "/src/hooks/useInView";
import { FiBookOpen, FiClock, FiDollarSign, FiCalendar } from "react-icons/fi";

const observerOptions = {
  once: true,
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const UniversityDetails_Courses = ({ university }) => {
  const [ref, inView] = useInView(observerOptions);

  if (!university || !university.courses || university.courses.length === 0) {
    return null;
  }

  return (
    <section className="relative overflow-hidden bg-gray-50/50 py-16 md:py-24">
      <Container className="relative z-10">
        <div
          ref={ref}
          style={{
            opacity: 0,
            animation: inView ? `uda-reveal 700ms ease-out both` : "none",
          }}
          className="mx-auto max-w-6xl"
        >
          {/* section header */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-tertiary bg-tertiary/30 px-3.5 py-1 text-xs font-bold tracking-[0.16em] text-secondary uppercase md:text-sm">
              <FiBookOpen className="text-primary text-base" />
              Academic Catalog
            </span>
            <h3 className="mt-4 text-3xl font-bold tracking-tight text-secondary md:text-4xl">
              Featured Programmes & Courses
            </h3>
            <div className="mx-auto my-4 h-1 w-16 rounded-full bg-primary" />
            <p className="mx-auto max-w-2xl text-base text-gray-600 md:text-lg">
              Explore available fields of study, qualifications, durations, and tuition fees offered by {university.name}.
            </p>
          </div>

          {/* responsive 2-column card grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {university.courses.map((course) => (
              <div
                key={course.id}
                className="group flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-md md:p-8"
              >
                <div>
                  {/* top row: name & study level badges */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <h4 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors duration-200">
                      {course.name}
                    </h4>
                    {course.studyLevels && course.studyLevels.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 shrink-0">
                        {course.studyLevels.map((level, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center rounded-lg bg-tertiary/30 px-2.5 py-1 text-xs font-semibold text-secondary"
                          >
                            {level}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* qualification and duration */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6 pb-4 border-b border-gray-100">
                    {course.qualifications && course.qualifications.length > 0 && (
                      <div className="flex items-center gap-1.5">
                        <FiBookOpen className="text-primary shrink-0" />
                        <span className="font-medium">{course.qualifications.join(", ")}</span>
                      </div>
                    )}
                    {course.duration && (
                      <div className="flex items-center gap-1.5">
                        <FiClock className="text-primary shrink-0" />
                        <span>{course.duration}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  {/* tuition fee clearly highlighted */}
                  {course.tuitionFee && (
                    <div className="mb-4 rounded-xl bg-gray-50 p-4 border border-gray-100">
                      <div className="flex items-center gap-2 mb-1">
                        <FiDollarSign className="text-primary shrink-0" />
                        <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Tuition Fee</span>
                      </div>
                      <p className="text-base font-bold text-secondary">
                        {course.tuitionFee}
                      </p>
                    </div>
                  )}

                  {/* available intakes */}
                  {course.intakes && course.intakes.length > 0 && (
                    <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                      <FiCalendar className="text-primary shrink-0" />
                      <span>Intakes: {course.intakes.join(", ")}</span>
                    </div>
                  )}
                </div>
              </div>
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

export default UniversityDetails_Courses;
