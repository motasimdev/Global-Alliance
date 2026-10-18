import { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import Container from "../../Container";

const destinationMenuItems = [
  { label: "Overview", targetId: "destination-overview", children: [
    { label: "Destination Overview", targetId: "destination-overview" },
    { label: "Why Study Here", targetId: "overview-why-study-here" },
    { label: "Pros & Cons", targetId: "overview-pros-cons" },
    { label: "Who It Suits", targetId: "overview-who-it-suits" },
  ] },
  { label: "Fees & Costs", targetId: "destination-fees-costs", children: [
    { label: "Tuition Fees", targetId: "fees-tuition" },
    { label: "Cost of Living", targetId: "fees-living" },
    { label: "Full Cost Breakdown", targetId: "fees-breakdown" },
    { label: "Accommodation", targetId: "fees-accommodation" },
  ] },
  { label: "Courses & Careers", targetId: "destination-courses-careers", children: [
    { label: "Popular Courses", targetId: "courses-popular" },
    { label: "Career Opportunities", targetId: "courses-careers" },
    { label: "Salary Ranges", targetId: "courses-salaries" },
  ] },
  { label: "Admission", targetId: "destination-admission", children: [
    { label: "Admission Requirements", targetId: "admission-requirements" },
    { label: "Eligibility", targetId: "admission-eligibility" },
    { label: "Intakes & Deadlines", targetId: "admission-intakes" },
  ] },
  { label: "Scholarships", targetId: "destination-scholarships", children: [
    { label: "Scholarships & Funding", targetId: "scholarships-funding" },
  ] },
  { label: "Application & Visa", targetId: "destination-application-visa", children: [
    { label: "Application Process", targetId: "visa-application" },
    { label: "Visa Process", targetId: "visa-process" },
    { label: "Document Checklist", targetId: "visa-documents" },
  ] },
  { label: "Work & Future", targetId: "destination-work-future", children: [
    { label: "Part-Time Work", targetId: "work-part-time" },
    { label: "Work Rights", targetId: "work-rights" },
    { label: "Post-Study Options", targetId: "work-post-study" },
    { label: "PR Pathway", targetId: "work-pr" },
  ] },
  { label: "FAQs", targetId: "destination-faqs", children: [] },
];

const sectionTargets = destinationMenuItems.flatMap((item) => [
  { label: item.label, targetId: item.targetId },
  ...item.children.map((child) => ({ label: item.label, targetId: child.targetId })),
]);

const Destination_Details_Menu = () => {
  const [activeItem, setActiveItem] = useState("Overview");
  const [hoveredMenu, setHoveredMenu] = useState("");
  const [submenuLeft, setSubmenuLeft] = useState(0);
  const navRef = useRef(null);
  const closeTimer = useRef(null);
  const hoveredItem = destinationMenuItems.find(({ label }) => label === hoveredMenu);

  useEffect(() => {
    const updateActiveItem = () => {
      const scrollMarker = (navRef.current?.getBoundingClientRect().bottom || 160) + 24;
      const activeTarget = sectionTargets
        .map((item) => ({ ...item, element: document.getElementById(item.targetId) }))
        .filter(({ element }) => element)
        .filter(({ element }) => element.getBoundingClientRect().top <= scrollMarker)
        .at(-1);

      if (activeTarget) {
        setActiveItem((currentItem) =>
          currentItem === activeTarget.label ? currentItem : activeTarget.label,
        );
      }
    };

    const animationFrame = requestAnimationFrame(updateActiveItem);
    window.addEventListener("scroll", updateActiveItem, { passive: true });
    window.addEventListener("resize", updateActiveItem);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", updateActiveItem);
      window.removeEventListener("resize", updateActiveItem);
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  const scrollToSection = (targetId, label) => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveItem(label);
  };

  const openSubmenu = (item, event) => {
    if (!item.children.length) return;

    if (closeTimer.current) clearTimeout(closeTimer.current);
    const { left } = event.currentTarget.getBoundingClientRect();
    setSubmenuLeft(left);
    setHoveredMenu(item.label);
  };

  const scheduleSubmenuClose = () => {
    closeTimer.current = setTimeout(() => setHoveredMenu(""), 120);
  };

  return (
    <nav
      aria-label="Destination sections"
      ref={navRef}
      onMouseLeave={scheduleSubmenuClose}
      className="relative sticky top-15 z-50 w-full border-y border-secondary/10 bg-white/95 shadow-sm backdrop-blur md:top-16 lg:top-18"
    >
      <Container className="relative min-w-0">
        <div className="w-full min-w-0 overflow-x-auto py-2.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex w-max min-w-full items-center gap-1.5 md:gap-2">
            <span className="hidden shrink-0 text-xs font-bold tracking-[0.14em] text-secondary/45 uppercase 2xl:block">Explore</span>
            <div className="hidden h-5 w-px shrink-0 bg-secondary/15 2xl:block" />
            {destinationMenuItems.map((item) => {
              const isActive = activeItem === item.label;
              const hasChildren = item.children.length > 0;

              return (
                <button
                  key={item.label}
                  type="button"
                  onMouseEnter={(event) => openSubmenu(item, event)}
                  onFocus={(event) => openSubmenu(item, event)}
                  onClick={() => scrollToSection(item.targetId, item.label)}
                  className={`flex shrink-0 items-center gap-1.5 rounded-lg border px-3 py-2 text-sm font-bold whitespace-nowrap transition-colors duration-200 md:px-3.5 ${
                    isActive
                      ? "border-primary bg-primary text-white shadow-sm"
                      : "border-transparent text-secondary hover:border-secondary/10 hover:bg-tertiary/35 hover:text-primary"
                  }`}
                >
                  {item.label}
                  {hasChildren && <FaChevronDown className="text-[10px]" aria-hidden="true" />}
                </button>
              );
            })}
          </div>
        </div>

      </Container>

      {hoveredItem && (
        <div
          className="absolute top-full z-60 w-52 rounded-b-lg border border-t-0 border-secondary/10 bg-white p-1.5 shadow-lg"
          style={{ left: submenuLeft }}
          onMouseEnter={() => closeTimer.current && clearTimeout(closeTimer.current)}
          onMouseLeave={scheduleSubmenuClose}
        >
            <div className="flex flex-col">
              {hoveredItem.children.map((child) => (
                <button
                  key={child.targetId}
                  type="button"
                  onClick={() => {
                    scrollToSection(child.targetId, hoveredItem.label);
                    setHoveredMenu("");
                  }}
                  className="rounded-md px-2.5 py-2 text-left text-sm font-semibold text-secondary transition-colors hover:bg-tertiary/35 hover:text-primary"
                >
                  {child.label}
                </button>
              ))}
            </div>
        </div>
      )}
    </nav>
  );
};

export const Destination_Details_Menu_Preview = () => (
  <section className="bg-white py-14 md:py-18">
    <Container>
      <div className="mb-8 rounded-2xl border border-primary/15 bg-primary/5 p-5 md:p-6">
        <p className="text-sm font-bold text-primary">Menu preview</p>
        <p className="mt-1 text-sm text-secondary/70">Temporary section targets for menu testing.</p>
      </div>
      <div className="space-y-8">
        {destinationMenuItems.map((item) => (
          <section key={item.label} id={item.targetId === "destination-overview" ? undefined : item.targetId} className="scroll-mt-44 rounded-2xl border border-secondary/10 bg-[#f7f7ff] p-5 md:p-7">
            <h2 className="text-2xl font-bold text-secondary">{item.label}</h2>
            {item.children.length > 0 ? (
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {item.children.filter((child) => child.targetId !== item.targetId).map((child) => (
                  <article key={child.targetId} id={child.targetId} className="scroll-mt-44 rounded-xl border border-secondary/10 bg-white p-4">
                    <h3 className="font-bold text-secondary">{child.label}</h3>
                    <p className="mt-1 text-sm text-secondary/60">Temporary section target for menu testing.</p>
                  </article>
                ))}
              </div>
            ) : <p className="mt-2 text-sm text-secondary/60">Temporary section target for menu testing.</p>}
          </section>
        ))}
      </div>
    </Container>
  </section>
);

export default Destination_Details_Menu;
