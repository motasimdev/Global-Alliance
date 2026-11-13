import React from "react";
import Container from "../../Container";
import Heading from "../../Heading";
import { LuTableColumnsSplit } from "react-icons/lu";
import { FaBriefcase, FaWallet, FaRegClock } from "react-icons/fa";
import { useInView } from "/src/hooks/useInView";
import Kicker from "../../Kicker";

const Destination_Details_PartTimeWork = ({ destination }) => {
  // ....animation
  const observerOptions = {
    once: true,
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };
  const [ref, inView] = useInView(observerOptions);
  const [ref2, inView2] = useInView(observerOptions);
  // ....animation
  const data = destination?.partTimeWorkRulesOpportunitiesAndEarnings || {};
  const rules = data?.rules || [];
  const description = data?.description || "";
  const earningRules = rules.filter((r) => /[€$£]/.test(r));
  const otherRules = rules.filter((r) => !/[€$£]/.test(r));

  const Block = ({ icon, title, children }) => (
    <div className="bg-white rounded-xl border border-secondary/10 p-4 md:p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-primary/30 group">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-primary text-lg transition-transform duration-300 group-hover:scale-110">
          {icon}
        </span>
        <h5 className="text-lg md:text-xl font-semibold text-secondary transition-colors duration-300 group-hover:text-primary">
          {title}
        </h5>
      </div>
      {children}
    </div>
  );

  return (
    <>
      <section
        className="py-12 md:pt-25 md:pb-18 lg:py-20 bg-tertiary/25"
        id="part-time-work"
      >
        <Container>
          <div className="mb-10 relative md:pl-35 lg:pl-46">
            <div className="absolute top-3 left-0 hidden md:block bg-secondary md:w-32 lg:w-42 h-0.5"></div>
            <div className="absolute top-2.5 md:left-31.5 lg:left-41 hidden md:block rounded-full bg-secondary w-2 h-2"></div>
            <div className="absolute md:top-14 lg:top-14.5 left-0 hidden md:block bg-primary md:w-32 lg:w-42 h-0.5"></div>
            <div className="absolute md:top-13.5 lg:top-14 md:left-31.5 lg:left-41 hidden md:block rounded-full bg-primary w-2 h-2"></div>

            <Kicker
              style={{ transitionDelay: "0ms" }}
              text={"Student Work Rights"}
              className="mb-2"
            />
            <Heading
              style={{ transitionDelay: "120ms" }}
              text={"Part-Time Jobs & Work Rights"}
              className={"text-secondary tracking-tight"}
            />
          </div>
          <div
            ref={ref}
            style={{
              opacity: 0,
              animation: inView ? `reveal 700ms ease-out 180ms both` : "none",
            }}
            className="relative mt-6 md:mt-9 lg:mt-14 mb-8 bg-white shadow-sm lg:w-2/5 rounded-2xl px-8 py-2 overflow-hidden"
          >
            <LuTableColumnsSplit className="text-[50px] absolute -bottom-2.5 -right-2.5 text-secondary/15" />
            <h4 className="text-2xl md:text-3xl lg:text-[34px] font-bold">
              Part-Time Work
            </h4>
          </div>

          <div
            style={{
              opacity: 0,
              animation: inView ? `reveal 700ms ease-out 280ms both` : "none",
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
          >
            <Block icon={<FaRegClock />} title="Work Rules">
              <ul className="space-y-1">
                {otherRules.map((r, i) => (
                  <li
                    key={i}
                    className="text-sm md:text-base text-secondary/80 leading-relaxed"
                  >
                    {r}
                  </li>
                ))}
              </ul>
            </Block>

            <Block icon={<FaBriefcase />} title="Job Opportunities">
              <p className="text-sm md:text-base text-secondary/70 leading-relaxed">
                {description}
              </p>
            </Block>
          </div>

          <div
            ref={ref2}
            style={{
              opacity: 0,
              animation: inView2 ? `reveal 700ms ease-out 180ms both` : "none",
            }}
            className="mt-4 md:mt-6"
          >
            <Block icon={<FaWallet />} title="Potential Earnings">
              <div className="space-y-1">
                {earningRules.map((r, i) => (
                  <p
                    key={i}
                    className="text-base md:text-lg font-semibold text-primary leading-relaxed"
                  >
                    {r}
                  </p>
                ))}
              </div>
            </Block>
          </div>
        </Container>
        <style jsx global>{`
          @keyframes reveal {
            from {
              opacity: 0;
              transform: translateY(3.5rem);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @media (prefers-reduced-motion: reduce) {
            .animation-none {
              animation: none !important;
              opacity: 1 !important;
              transform: none !important;
            }
          }
        `}</style>
      </section>
    </>
  );
};

export default Destination_Details_PartTimeWork;
