import React from "react";
import {
  FaBriefcase,
  FaCalendarDays,
  FaGraduationCap,
  FaHouseChimney,
  FaRoute,
  FaWallet,
} from "react-icons/fa6";
import Container from "../../Container";

const Destination_Details_AtAGlance = ({ destination }) => {
  if (!destination) return null;

  const glanceItems = [
    {
      title: "Intakes",
      description: destination.intakeOverview,
      icon: FaCalendarDays,
      className: "bg-secondary text-white xl:col-span-2",
      iconClassName: "bg-white/10 text-white",
      descriptionClassName: "text-white/75",
    },
    {
      title: "Tuition Fees",
      description: destination.tuitionFeesOverview,
      icon: FaWallet,
      className: "bg-primary text-white",
      iconClassName: "bg-white/15 text-white",
      descriptionClassName: "text-white/85",
    },
    {
      title: "Living Costs",
      description: destination.costOfLivingBreakdown?.description,
      icon: FaHouseChimney,
      className: "bg-tertiary/45 text-secondary",
      iconClassName: "bg-white text-primary shadow-sm",
      descriptionClassName: "text-secondary/70",
    },
    {
      title: "Work Rights",
      description: destination.workRightOverview,
      icon: FaBriefcase,
      className: "bg-white text-secondary",
      iconClassName: "bg-primary/10 text-primary",
      descriptionClassName: "text-secondary/70",
    },
    {
      title: "Post-Study Options",
      description: destination.postStudyOverview,
      icon: FaRoute,
      className: "bg-secondary/5 text-secondary xl:col-span-2",
      iconClassName: "bg-secondary/7 text-primary",
      descriptionClassName: "text-secondary/70",
    },
    {
      title: "After Study",
      description: destination.postStudyOverview,
      icon: FaGraduationCap,
      className: "bg-white text-secondary",
      iconClassName: "bg-secondary text-white",
      descriptionClassName: "text-secondary/70",
    },
    
  ];

  return (
    <section className="relative overflow-hidden bg-[#f7f7ff] py-14 md:py-18 lg:py-22">
      <div
        className="absolute -left-20 top-12 h-56 w-56 rounded-full bg-tertiary/35 blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative">
        <div className="mb-8 flex flex-col gap-3 md:mb-10 md:flex-row md:items-end md:justify-between">
          <div className="relative lg:pl-46">
            <div className="absolute top-3 left-0 hidden lg:block bg-secondary w-42 h-0.5"></div>
            <div className="absolute top-2.5 left-41 hidden lg:block rounded-full bg-secondary w-2 h-2"></div>
            <div className="absolute top-15 left-0 hidden lg:block bg-primary w-42 h-0.5"></div>
            <div className="absolute top-14.5 left-41 hidden lg:block rounded-full bg-primary w-2 h-2"></div>

            {/* =================== */}
            <p className="mb-2 text-base md:text-lg lg:text-[20px] font-semibold text-primary uppercase">
              Destination snapshot
            </p>
            <h3 className="text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight text-secondary">
              At a glance
            </h3>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-secondary/60 md:text-right md:text-base">
            Key information to help you compare study options with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-5 xl:grid-cols-4">
          {glanceItems.map(
            ({
              title,
              description,
              icon: Icon,
              className,
              iconClassName,
              descriptionClassName,
            }) => (
              <article
                key={title}
                className={`group relative min-h-52 overflow-hidden rounded-2xl border border-secondary/8 p-5 shadow-sm transition-shadow duration-300 hover:shadow-lg md:p-6 ${className}`}
              >
                <div
                  className="absolute -right-8 -top-8 h-28 w-28 rounded-full border border-current opacity-[0.08]"
                  aria-hidden="true"
                />
                <div
                  className={`relative mb-7 flex h-11 w-11 items-center justify-center rounded-xl text-lg ${iconClassName}`}
                >
                  {React.createElement(Icon, { "aria-hidden": true })}
                </div>
                <h3 className="relative text-lg font-bold">{title}</h3>
                <p
                  className={`relative mt-2 text-sm leading-relaxed md:text-base ${descriptionClassName}`}
                >
                  {description}
                </p>
              </article>
            ),
          )}
        </div>
      </Container>
    </section>
  );
};

export default Destination_Details_AtAGlance;
