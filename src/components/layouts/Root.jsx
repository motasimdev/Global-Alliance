import { useEffect, useLayoutEffect, useState } from "react";
import { useLocation, Outlet } from "react-router";
import Footer from "./Footer";
import Navbar from "./Navbar";
import whatsapp from "/src/assets/home/whatsapp.svg";
import { FaChevronCircleUp } from "react-icons/fa";
const Root = () => {
  const [show, setShow] = useState(false);

  // =====page navigate to top=====
  const location = useLocation();

  useLayoutEffect(() => {
    window.history.scrollRestoration = "manual";

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [location.pathname]);
  // =====page navigate to top=====

 useEffect(() => {
  const handleScroll = () => {
    setShow(window.scrollY > 600);
  };

  handleScroll();

  window.addEventListener("scroll", handleScroll, {
    passive: true,
  });

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main>
          <Outlet />
          <div className="fixed bottom-5 right-5 z-1100 flex flex-col items-center gap-3">
            {/* Back-to-top Button (শর্তসাপেক্ষে স্ট্যাকের ওপরে রেন্ডার হবে) */}
            {show && (
              <button
              type="button"
                onClick={scrollTop}
                className="w-7 h-7 bg-white dark:bg-zinc-800 text-secondary rounded-full flex items-center justify-center shadow-lg cursor-pointer transition-transform duration-200 hover:scale-110 active:scale-95 border border-gray-100 dark:border-zinc-700"
                aria-label="Scroll to top"
              >
                <FaChevronCircleUp className="text-2xl text-white pointer-events-none" />
              </button>
            )}

            {/* WhatsApp Icon Widget */}
            <div className="relative w-12 h-12 md:w-15 md:h-15 bg-green-600 rounded-full flex items-center justify-center shadow-xl">
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="z-10 w-full h-full p-2 flex items-center justify-center transition-transform hover:scale-110"
                aria-label="Chat on WhatsApp"
              >
                <img
                  src={whatsapp}
                  alt="WhatsApp"
                  className="w-full h-full object-contain"
                />
              </a>
              {/* মডার্ন ক্লিন পিং অ্যানিমেশন (Tailwind-Safe Standard) */}
              <span
                className="pointer-events-none absolute inset-0 bg-green-600 rounded-full animate-ping opacity-60"
                style={{ animationDuration: "2s" }}
              />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Root;
