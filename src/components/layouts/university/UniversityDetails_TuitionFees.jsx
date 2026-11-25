import Container from "../../Container";
import { useInView } from "/src/hooks/useInView";
import { FaMoneyBillWave } from "react-icons/fa";
import {
  HiOutlineBookOpen,
  HiOutlineAcademicCap,
  HiOutlineInformationCircle,
} from "react-icons/hi";

const observerOptions = {
  once: true,
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const formatFeeAmount = (feeObj) => {
  if (!feeObj) return "N/A";
  const { min, max } = feeObj;
  if (min == null && max == null) return "N/A";
  if (min === max || max == null) {
    return Number(min).toLocaleString();
  }
  if (min == null) {
    return `Up to ${Number(max).toLocaleString()}`;
  }
  return `${Number(min).toLocaleString()} – ${Number(max).toLocaleString()}`;
};

const UniversityDetails_TuitionFees = ({ university }) => {
  const [ref, inView] = useInView(observerOptions);
  const [ref2, inView2] = useInView(observerOptions);
  const [ref3, inView3] = useInView(observerOptions);
  const [ref4, inView4] = useInView(observerOptions);
  const [ref5, inView5] = useInView(observerOptions);

  if (!university || !university.tuitionFees) {
    return null;
  }

  const { undergraduate, postgraduate } = university.tuitionFees;

  const hasUgData =
    undergraduate &&
    ((undergraduate.fees && undergraduate.fees.length > 0) ||
      (undergraduate.additionalFees &&
        undergraduate.additionalFees.length > 0) ||
      (undergraduate.notes && undergraduate.notes.length > 0));

  const hasPgData =
    postgraduate &&
    ((postgraduate.fees && postgraduate.fees.length > 0) ||
      (postgraduate.additionalFees && postgraduate.additionalFees.length > 0) ||
      (postgraduate.notes && postgraduate.notes.length > 0));

  if (!hasUgData && !hasPgData) {
    return null;
  }

  return (
    <section className="relative overflow-hidden bg-gray-50/70 py-16 md:py-24">
      <Container className="relative z-10">
        <div className="mx-auto ">
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
              <FaMoneyBillWave className="text-primary text-base" />
              Tuition & Financials
            </span>
            <h3
              ref={ref2}
              style={{
                opacity: 0,
                animation: inView2 ? `uda-reveal 700ms 100ms both` : "none",
              }}
              className="mt-4 text-3xl font-bold tracking-tight text-secondary md:text-4xl"
            >
              Tuition Fees & Programme Costs
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
              Detailed breakdown of undergraduate and postgraduate tuition fees,
              additional charges, and payment guidelines.
            </p>
          </div>

          <div className="space-y-12">
            {/* ── UNDERGRADUATE SECTION ── */}
            {hasUgData && (
              <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-xs md:p-10">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-tertiary/40 text-primary">
                    <HiOutlineBookOpen className="text-xl" />
                  </div>
                  <div
                    ref={ref4}
                    style={{
                      opacity: 0,
                      animation: inView4 ? `uda-reveal 700ms 0ms both` : "none",
                    }}
                  >
                    <h4 className="text-2xl font-bold text-secondary">
                      Undergraduate Fees
                    </h4>
                    <p className="text-sm text-gray-500">
                      Bachelor's degree fee structure
                    </p>
                  </div>
                </div>

                {/* Main Tuition Fees Table */}
                {undergraduate.fees && undergraduate.fees.length > 0 && (
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-gray-200 bg-gray-50/50 text-xs font-bold uppercase tracking-wider text-secondary">
                          <th className="py-3 px-4">Fee Category</th>
                          <th className="py-3 px-4">Tuition Fee</th>
                          <th className="py-3 px-4">Period</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 text-sm">
                        {undergraduate.fees.map((item, idx) => (
                          <FeeRow key={idx} index={idx}>
                            <td className="py-4 px-4 font-semibold text-secondary">
                              {item.category}
                              {item.note && (
                                <span className="block text-xs font-normal text-gray-500 mt-0.5">
                                  {item.note}
                                </span>
                              )}
                            </td>
                            <td className="py-4 px-4 font-bold text-gray-800 whitespace-nowrap">
                              {item.currency ? `${item.currency} ` : ""}
                              {formatFeeAmount(item.fee)}
                            </td>
                            <td className="py-4 px-4 text-gray-600 whitespace-nowrap">
                              {item.period || "N/A"}
                            </td>
                          </FeeRow>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Additional Fees Table */}
                {undergraduate.additionalFees &&
                  undergraduate.additionalFees.length > 0 && (
                    <div className="mb-6">
                      <h5 className="text-sm font-bold uppercase tracking-wider text-secondary mb-3">
                        Additional Fees
                      </h5>
                      <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse rounded-xl overflow-hidden border border-gray-100">
                          <thead>
                            <tr className="bg-gray-50 text-xs font-bold uppercase tracking-wider text-gray-600 border-b border-gray-100">
                              <th className="py-2.5 px-4">Fee Name</th>
                              <th className="py-2.5 px-4">Amount</th>
                              <th className="py-2.5 px-4">Period</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100 text-sm">
                            {undergraduate.additionalFees.map((addFee, idx) => (
                              <FeeRow key={idx} index={idx}>
                                <td className="py-3 px-4 font-medium text-secondary">
                                  {addFee.name || addFee.category}
                                  {addFee.note && (
                                    <span className="block text-xs font-normal text-gray-500 mt-0.5">
                                      {addFee.note}
                                    </span>
                                  )}
                                </td>
                                <td className="py-3 px-4 font-semibold text-gray-800 whitespace-nowrap">
                                  {addFee.amount != null ? (
                                    <>
                                      {addFee.currency
                                        ? `${addFee.currency} `
                                        : ""}
                                      {Number(addFee.amount).toLocaleString()}
                                    </>
                                  ) : (
                                    <span className="text-gray-400 font-normal">
                                      Not specified
                                    </span>
                                  )}
                                </td>
                                <td className="py-3 px-4 text-gray-600 whitespace-nowrap">
                                  {addFee.period || "N/A"}
                                </td>
                              </FeeRow>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                {/* Notes List */}
                {undergraduate.notes && undergraduate.notes.length > 0 && (
                  <div className="rounded-2xl bg-gray-50 p-5 border border-gray-100">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-secondary mb-2 flex items-center gap-1.5">
                      <HiOutlineInformationCircle className="text-primary text-base" />
                      Undergraduate Notes
                    </h5>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      {undergraduate.notes.map((noteText, idx) => (
                        <FeeNote key={idx} note={noteText} index={idx} />
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* ── POSTGRADUATE SECTION ── */}
            {hasPgData && (
              <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-xs md:p-10">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-tertiary/40 text-primary">
                    <HiOutlineAcademicCap className="text-xl" />
                  </div>
                  <div
                    ref={ref5}
                    style={{
                      opacity: 0,
                      animation: inView5 ? `uda-reveal 700ms 0ms both` : "none",
                    }}
                  >
                    <h4 className="text-2xl font-bold text-secondary">
                      Postgraduate Fees
                    </h4>
                    <p className="text-sm text-gray-500">
                      Master's & PhD fee structure
                    </p>
                  </div>
                </div>

                {/* Main Tuition Fees Table */}
                {postgraduate.fees && postgraduate.fees.length > 0 && (
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-gray-200 bg-gray-50/50 text-xs font-bold uppercase tracking-wider text-secondary">
                          <th className="py-3 px-4">Fee Category</th>
                          <th className="py-3 px-4">Tuition Fee</th>
                          <th className="py-3 px-4">Period</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 text-sm">
                        {postgraduate.fees.map((item, idx) => (
                           <FeeRow key={idx} index={idx}>
                            <td className="py-4 px-4 font-semibold text-secondary">
                              {item.category}
                              {item.note && (
                                <span className="block text-xs font-normal text-gray-500 mt-0.5">
                                  {item.note}
                                </span>
                              )}
                            </td>
                            <td className="py-4 px-4 font-bold text-gray-800 whitespace-nowrap">
                              {item.currency ? `${item.currency} ` : ""}
                              {formatFeeAmount(item.fee)}
                            </td>
                            <td className="py-4 px-4 text-gray-600 whitespace-nowrap">
                              {item.period || "N/A"}
                            </td>
                          </FeeRow>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Additional Fees Table */}
                {postgraduate.additionalFees &&
                  postgraduate.additionalFees.length > 0 && (
                    <div className="mb-6">
                      <h5 className="text-sm font-bold uppercase tracking-wider text-secondary mb-3">
                        Additional Fees
                      </h5>
                      <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse rounded-xl overflow-hidden border border-gray-100">
                          <thead>
                            <tr className="bg-gray-50 text-xs font-bold uppercase tracking-wider text-gray-600 border-b border-gray-100">
                              <th className="py-2.5 px-4">Fee Name</th>
                              <th className="py-2.5 px-4">Amount</th>
                              <th className="py-2.5 px-4">Period</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100 text-sm">
                            {postgraduate.additionalFees.map((addFee, idx) => (
                             <FeeRow key={idx} index={idx}>
                                <td className="py-3 px-4 font-medium text-secondary">
                                  {addFee.name || addFee.category}
                                  {addFee.note && (
                                    <span className="block text-xs font-normal text-gray-500 mt-0.5">
                                      {addFee.note}
                                    </span>
                                  )}
                                </td>
                                <td className="py-3 px-4 font-semibold text-gray-800 whitespace-nowrap">
                                  {addFee.amount != null ? (
                                    <>
                                      {addFee.currency
                                        ? `${addFee.currency} `
                                        : ""}
                                      {Number(addFee.amount).toLocaleString()}
                                    </>
                                  ) : (
                                    <span className="text-gray-400 font-normal">
                                      Not specified
                                    </span>
                                  )}
                                </td>
                                <td className="py-3 px-4 text-gray-600 whitespace-nowrap">
                                  {addFee.period || "N/A"}
                                </td>
                              </FeeRow>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                {/* Notes List */}
                {postgraduate.notes && postgraduate.notes.length > 0 && (
                  <div className="rounded-2xl bg-gray-50 p-5 border border-gray-100">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-secondary mb-2 flex items-center gap-1.5">
                      <HiOutlineInformationCircle className="text-primary text-base" />
                      Postgraduate Notes
                    </h5>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      {postgraduate.notes.map((noteText, idx) => (
                        <FeeNote key={idx} note={noteText} index={idx} />
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
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

const FeeRow = ({ children, index }) => {
  const [ref, inView] = useInView(observerOptions);

  return (
    <tr
      ref={ref}
      style={{
        opacity: 0,
        animation: inView
          ? `uda-reveal 700ms ease-out ${index * 80}ms both`
          : "none",
      }}
      className="hover:bg-gray-50 transition-colors"
    >
      {children}
    </tr>
  );
};

const FeeNote = ({ note, index }) => {
  const [ref, inView] = useInView(observerOptions);

  return (
    <li
      ref={ref}
      style={{
        opacity: 0,
        animation: inView
          ? `uda-reveal 700ms ease-out ${index * 80}ms both`
          : "none",
      }}
    >
      {note}
    </li>
  );
};

export default UniversityDetails_TuitionFees;
