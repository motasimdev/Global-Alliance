import Container from "../../Container";
import { useInView } from "/src/hooks/useInView";
import { FaGraduationCap, FaLanguage } from "react-icons/fa";
import { HiOutlineBookOpen, HiOutlineCheckCircle } from "react-icons/hi";

const observerOptions = {
  once: true,
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const UniversityDetails_Admission = ({ university }) => {
  const [ref, inView] = useInView(observerOptions);
  const [ref2, inView2] = useInView(observerOptions);
  const [ref3, inView3] = useInView(observerOptions);
  const [ref4, inView4] = useInView(observerOptions);
  const [ref5, inView5] = useInView(observerOptions);
  const [ref6, inView6] = useInView(observerOptions);
  const [ref7, inView7] = useInView(observerOptions);

  if (!university || !university.admissionRequirements) {
    return null;
  }

  const { undergraduate, postgraduate } = university.admissionRequirements;
  const { ielts, toefl } = university.englishRequirements || {};

  const hasUg = Array.isArray(undergraduate) && undergraduate.length > 0;
  const hasPg = Array.isArray(postgraduate) && postgraduate.length > 0;

  if (!hasUg && !hasPg) {
    return null;
  }

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      <Container className="relative z-10">
        <div className="mx-auto">
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
              <FaGraduationCap className="text-primary text-base" />
              Admissions & Requirements
            </span>
            <h3
              ref={ref2}
              style={{
                opacity: 0,
                animation: inView2 ? `uda-reveal 700ms 100ms both` : "none",
              }}
              className="mt-4 text-3xl font-bold tracking-tight text-secondary md:text-4xl"
            >
              Admission Criteria & English Proficiency
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
              Explore undergraduate and postgraduate entry requirements along
              with accepted English language test scores.
            </p>
          </div>

          <div className="space-y-10">
            {/* undergraduate section */}
            {hasUg && (
              <div className="rounded-3xl border border-gray-200 bg-gray-50/60 p-8 shadow-xs md:p-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-tertiary/40 text-primary">
                    <HiOutlineBookOpen className="text-2xl" />
                  </div>
                  <div
                    ref={ref4}
                    style={{
                      opacity: 0,
                      animation: inView4 ? `uda-reveal 700ms 0ms both` : "none",
                    }}
                  >
                    <h4 className="text-2xl font-bold text-secondary">
                      Undergraduate Admission
                    </h4>
                    <p className="text-sm text-gray-500">
                      Bachelor's degree entry requirements
                    </p>
                  </div>
                </div>

                <ul className="space-y-4">
                  {undergraduate.map((req, idx) => (
                    <AdmissionRequirement key={idx} req={req} index={idx} />
                  ))}
                </ul>
              </div>
            )}

            {/* postgraduate section */}
            {hasPg && (
              <div className="rounded-3xl border border-gray-200 bg-gray-50/60 p-8 shadow-xs md:p-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-tertiary/40 text-primary">
                    <FaGraduationCap className="text-2xl" />
                  </div>
                  <div
                    ref={ref7}
                    style={{
                      opacity: 0,
                      animation: inView7 ? `uda-reveal 700ms 0ms both` : "none",
                    }}
                  >
                    <h4 className="text-2xl font-bold text-secondary">
                      Postgraduate Admission
                    </h4>
                    <p className="text-sm text-gray-500">
                      Master's & PhD entry requirements
                    </p>
                  </div>
                </div>

                <ul className="space-y-4">
                  {postgraduate.map((req, idx) => (
                    <AdmissionRequirement key={idx} req={req} index={idx} />
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* english language requirements area */}
          {(ielts || toefl) && (
            <div
              ref={ref5}
              style={{
                opacity: 0,
                animation: inView5 ? `uda-reveal 700ms 0ms both` : "none",
              }}
              className="mt-12 rounded-3xl border border-secondary/15 bg-secondary p-8 text-white md:p-10"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-white">
                    <FaLanguage className="text-2xl" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold">
                      English Language Requirements
                    </h4>
                    <p className="text-white/80 text-sm mt-1">
                      Accepted minimum test scores for international students
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  {ielts && (
                    <div
                      ref={ref6}
                      style={{
                        opacity: 0,
                        animation: inView6
                          ? `uda-reveal 700ms 0ms both`
                          : "none",
                      }}
                      className="flex items-center gap-3 rounded-2xl bg-white/10 px-5 py-3 border border-white/20 backdrop-blur-xs"
                    >
                      <HiOutlineCheckCircle className="text-primary text-xl shrink-0" />
                      <div>
                        <span className="block text-xs font-semibold uppercase tracking-wider text-white/70">
                          IELTS
                        </span>
                        <span className="text-lg font-bold text-white">
                          {ielts}
                        </span>
                      </div>
                    </div>
                  )}

                  {toefl && (
                    <div
                      ref={ref6}
                      style={{
                        opacity: 0,
                        animation: inView6
                          ? `uda-reveal 700ms 80ms both`
                          : "none",
                      }}
                      className="flex items-center gap-3 rounded-2xl bg-white/10 px-5 py-3 border border-white/20 backdrop-blur-xs"
                    >
                      <HiOutlineCheckCircle className="text-primary text-xl shrink-0" />
                      <div>
                        <span className="block text-xs font-semibold uppercase tracking-wider text-white/70">
                          TOEFL
                        </span>
                        <span className="text-lg font-bold text-white">
                          {toefl}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
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

const AdmissionRequirement = ({ req, index }) => {
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
      className="flex items-start gap-4 rounded-2xl bg-white p-5 border border-gray-100 shadow-2xs transition-all duration-200 hover:border-primary/30"
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-tertiary/30 text-xs font-bold text-secondary">
        {index + 1}
      </span>

      <p className="flex-1 text-base leading-relaxed text-gray-700 md:leading-8">
        {req}
      </p>
    </li>
  );
};

export default UniversityDetails_Admission;
