import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import Container from "../../Container";

const menuData = [
  {
    label: "Overview",
    targetId: "destination-overview",
    submenu: [
      {
        label: "Destination Overview",
        targetId: "destination-overview-description",
      },
      { label: "Why Study Here", targetId: "why-study-here" },
      { label: "Pros & Cons", targetId: "pros-cons" },
      { label: "Who This Destination Suits Best", targetId: "who-this-suits" },
    ],
  },
  {
    label: "Fees & Costs",
    targetId: "tuition-fees",
    submenu: [
      { label: "Tuition Fees", targetId: "tuition-fees" },
      { label: "Cost of Living", targetId: "cost-of-living" },
      { label: "Full Cost Breakdown", targetId: "full-cost-breakdown" },
      { label: "Accommodation", targetId: "accommodation" },
    ],
  },
  {
    label: "Courses & Careers",
    targetId: "popular-courses",
    submenu: [
      { label: "Popular Courses", targetId: "popular-courses" },
      { label: "Career Opportunities", targetId: "career-opportunities" },
      { label: "Salary Ranges", targetId: "salary-ranges" },
    ],
  },
  {
    label: "Admission",
    targetId: "admission-requirements",
    submenu: [
      { label: "Admission Requirements", targetId: "admission-requirements" },
      { label: "Eligibility", targetId: "eligibility" },
      { label: "Intakes & Deadlines", targetId: "intakes-deadlines" },
    ],
  },
  {
    label: "Scholarships",
    targetId: "scholarships-funding",
    submenu: [
      { label: "Scholarships & Funding", targetId: "scholarships-funding" },
    ],
  },
  {
    label: "Application & Visa",
    targetId: "application-process",
    submenu: [
      { label: "Application Process", targetId: "application-process" },
      { label: "Visa Process", targetId: "visa-process" },
      { label: "Document Checklist", targetId: "document-checklist" },
    ],
  },
  {
    label: "Work & Future",
    targetId: "part-time-work",
    submenu: [
      { label: "Part-Time Work", targetId: "part-time-work" },
      { label: "Work Rights During and After Study", targetId: "work-rights" },
      { label: "Post-Study Options", targetId: "post-study-options" },
      { label: "PR Pathway", targetId: "pr-pathway" },
    ],
  },
  {
    label: "FAQs",
    targetId: "faqs",
  },
];

const SCROLL_OFFSET = 90;

const Destination_Details_Menu = () => {
  const [activeId, setActiveId] = useState("");
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const observerRef = useRef(null);

  // Deduplicate target IDs so shared parent/submenu IDs are observed only once
  const allTargetIds = [
    ...new Set(
      menuData.flatMap((item) => [
        item.targetId,
        ...(item.submenu || []).map((s) => s.targetId),
      ]),
    ),
  ];

  const isMenuItemActive = (item) => {
    if (activeId === item.targetId) return true;
    if (item.submenu) {
      return item.submenu.some((s) => s.targetId === activeId);
    }
    return false;
  };

  const isSubmenuActive = (sub) => {
    return activeId === sub.targetId;
  };

  const scrollToTarget = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      const bodyRect = document.body.getBoundingClientRect();
      const elementRect = element.getBoundingClientRect();
      const elementPosition = elementRect.top - bodyRect.top;
      window.scrollTo({
        top: elementPosition - SCROLL_OFFSET,
        behavior: "smooth",
      });
    }
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    scrollToTarget(targetId);
    if (window.innerWidth < 1024) {
      setOpenSubmenu(null);
    }
  };

  const handleMainClick = (e, item) => {
    if (item.submenu && window.innerWidth < 1024) {
      e.preventDefault();
      setOpenSubmenu(openSubmenu === item.label ? null : item.label);
    } else {
      handleNavClick(e, item.targetId);
    }
  };

  const handleMouseEnter = (item) => {
    if (window.innerWidth >= 1024) {
      if (item.submenu) {
        setOpenSubmenu(item.label);
      } else {
        setOpenSubmenu(null);
      }
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 1024) {
      setOpenSubmenu(null);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".destination-menu")) {
        setOpenSubmenu(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to the top of the viewport
        const visibleEntries = entries.filter((e) => e.isIntersecting);
        if (visibleEntries.length === 0) return;

        let best = visibleEntries[0];
        for (let i = 1; i < visibleEntries.length; i++) {
          if (
            visibleEntries[i].boundingClientRect.top <
            best.boundingClientRect.top
          ) {
            best = visibleEntries[i];
          }
        }
        setActiveId(best.target.id);
      },
      {
        rootMargin: "-120px 0px -50% 0px",
        threshold: 0,
      },
    );

    allTargetIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observerRef.current.observe(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []); // Empty dependency: run once on mount, cleanup on unmount

  return (
    <nav
      className="destination-menu sticky z-999 bg-white border-b border-secondary/10 shadow-sm"
      style={{ top: "74px" }}
      onMouseLeave={handleMouseLeave}
    >
      <Container>
        <div className="flex items-center">
          <ul
            className="flex items-center space-x-1 lg:space-x-2 py-2 whitespace-nowrap"
            onMouseLeave={handleMouseLeave}
          >
            {menuData.map((item) => (
              <li
                key={item.targetId}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item)}
              >
                {item.submenu ? (
                  <>
                    <button
                      onClick={(e) => handleMainClick(e, item)}
                      className={`px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center gap-1 ${
                        isMenuItemActive(item)
                          ? "text-primary border-b-2 border-primary"
                          : "text-secondary hover:text-primary"
                      }`}
                    >
                      {item.label}
                      <FaChevronDown
                        className={`text-xs transition-transform duration-200 ${
                          openSubmenu === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openSubmenu === item.label && (
                      <div className="absolute top-full left-0 z-1000 min-w-[240px] bg-white border border-secondary/10 shadow-lg rounded-lg py-2">
                        {item.submenu.map((sub) => (
                          <a
                            key={sub.targetId}
                            href={`#${sub.targetId}`}
                            onClick={(e) => handleNavClick(e, sub.targetId)}
                            className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                              isSubmenuActive(sub)
                                ? "text-primary bg-tertiary/30 font-semibold"
                                : "text-secondary hover:text-primary hover:bg-tertiary/20"
                            }`}
                          >
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={`#${item.targetId}`}
                    onClick={(e) => handleNavClick(e, item.targetId)}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 block ${
                      isMenuItemActive(item)
                        ? "text-primary border-b-2 border-primary"
                        : "text-secondary hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Destination_Details_Menu;
