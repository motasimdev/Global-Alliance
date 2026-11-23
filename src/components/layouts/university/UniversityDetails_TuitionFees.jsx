import Container from "../../Container";
import { useInView } from "/src/hooks/useInView";
import { FaMoneyBillWave, FaUniversity } from "react-icons/fa";
import { HiOutlineBookOpen, HiOutlineInformationCircle } from "react-icons/hi";

const observerOptions = {
  once: true,
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const UniversityDetails_TuitionFees = ({ university }) => {
  const [ref, inView] = useInView(observerOptions);

  if (!university || !university.tuitionFees) {
    return null;
  }

  const { undergraduate, postgraduate, currency } = university.tuitionFees;

  return (
    <section className="relative overflow-hidden bg-gray-50/70 py-16 md:py-24">
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
              <FaMoneyBillWave className="text-primary text-base" />
              Tuition & Financials
            </span>
            <h3 className="mt-4 text-3xl font-bold tracking-tight text-secondary md:text-4xl">
              Tuition Fees & Programme Costs
            </h3>
            <div className="mx-auto my-4 h-1 w-16 rounded-full bg-primary" />
            <p className="mx-auto max-w-2xl text-base text-gray-600 md:text-lg">
              Estimated tuition fees and financial investment required for undergraduate and postgraduate studies.
            </p>
          </div>

          {/* undergraduate & postgraduate cards */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* undergraduate card */}
            <div className="flex flex-col justify-between rounded-3xl border border-gray-200 bg-white p-8 shadow-xs transition-all duration-300 hover:border-primary/50 hover:shadow-md md:p-10">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-tertiary/40 text-primary">
                      <HiOutlineBookOpen className="text-xl" />
                    </div>
                    <h4 className="text-xl font-bold text-secondary">Undergraduate Fees</h4>
                  </div>
                  {currency && (
                    <span className="rounded-lg bg-secondary/5 px-3 py-1 text-xs font-bold tracking-wider text-secondary uppercase">
                      {currency}
                    </span>
                  )}
                </div>

                <div className="rounded-2xl bg-gray-50 p-6 border border-gray-100 mb-6">
                  <p className="text-lg font-semibold leading-relaxed text-secondary md:text-xl">
                    {undergraduate || "Contact university admissions for undergraduate tuition fee schedules."}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                <FaUniversity className="text-primary" />
                <span>Undergraduate Degree Programme Fee Structure</span>
              </div>
            </div>

            {/* postgraduate card */}
            <div className="flex flex-col justify-between rounded-3xl border border-gray-200 bg-white p-8 shadow-xs transition-all duration-300 hover:border-primary/50 hover:shadow-md md:p-10">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-tertiary/40 text-primary">
                      <FaMoneyBillWave className="text-xl" />
                    </div>
                    <h4 className="text-xl font-bold text-secondary">Postgraduate Fees</h4>
                  </div>
                  {currency && (
                    <span className="rounded-lg bg-secondary/5 px-3 py-1 text-xs font-bold tracking-wider text-secondary uppercase">
                      {currency}
                    </span>
                  )}
                </div>

                <div className="rounded-2xl bg-gray-50 p-6 border border-gray-100 mb-6">
                  <p className="text-lg font-semibold leading-relaxed text-secondary md:text-xl">
                    {postgraduate || "Contact university admissions for postgraduate tuition fee schedules."}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                <FaUniversity className="text-primary" />
                <span>Postgraduate & Research Programme Fee Structure</span>
              </div>
            </div>
          </div>

          {/* small note below */}
          <div className="mt-8 flex items-center justify-center gap-2 text-center text-sm text-gray-500">
            <HiOutlineInformationCircle className="text-primary text-lg shrink-0" />
            <span>Note: Tuition fees may vary depending on the specific programme, faculty, and international student status.</span>
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

export default UniversityDetails_TuitionFees;
