import { useInView } from "../../../hooks/useInView";
import { cn } from "../../../utils/cn";
import Container from "../../Container";
import Select from "react-select";
import { RiGraduationCapFill } from "react-icons/ri";
import PBase from "../../PBase";
import grpStudy from "/src/assets/group-study.webp";
import university from "/src/assets/university.webp";
import APU from "/src/assets/university-logos/APU-logo.webp";
import INTI from "/src/assets/university-logos/INTI-40.webp";
import NILAI from "/src/assets/university-logos/nilai.webp";
import LINCOLN from "/src/assets/university-logos/lincoln.webp";
import UNIRAZAK from "/src/assets/university-logos/Official-UNIRAZAK-Logo.webp";
import SEGI from "/src/assets/university-logos/SEGi-University.webp";
import UOW from "/src/assets/university-logos/UOW-logoo.webp";
import Psm from "../../Psm";

import Marquee from "react-fast-marquee";
import CountUp from "react-countup";
import Button from "../../Button";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa6";
import { GiTiedScroll } from "react-icons/gi";
import { SiOrganicmaps } from "react-icons/si";

const Banner = () => {
  const [ref, isInView] = useInView({ once: true });
  //counter up
  const onComplete = () => {
    console.log("Completed");
  };

  const onStart = () => {
    console.log("Started");
  };
  //counter up

  //react select

  // const universities = [
  //   { value: "um", label: "University of Malaya (UM)" },
  //   { value: "utm", label: "Universiti Teknologi Malaysia (UTM)" },
  //   { value: "upm", label: "Universiti Putra Malaysia (UPM)" },
  //   { value: "ukm", label: "Universiti Kebangsaan Malaysia (UKM)" },
  //   { value: "usm", label: "Universiti Sains Malaysia (USM)" },
  //   { value: "uim", label: "International Islamic University Malaysia (IIUM)" },
  //   { value: "monash-my", label: "Monash University Malaysia" },
  //   { value: "taylor", label: "Taylor’s University" },
  //   { value: "sunway", label: "Sunway University" },
  //   { value: "apu", label: "Asia Pacific University (APU)" },
  // ];

  //react select

  const university_logo = [
    { name: "APU", logo: APU },
    { name: "INTI", logo: INTI },
    { name: "NILAI", logo: NILAI },
    { name: "LINCOLN", logo: LINCOLN },
    { name: "UNIRAZAK", logo: UNIRAZAK },
    { name: "SEGI", logo: SEGI },
    { name: "UOW", logo: UOW },
  ];
  return (
    <>
      <section className="relative bg-linear-to-b from-tertiary to-[#e6e6ec] pt-15 pb-5 md:pb-20 lg:pt-20 lg:pb-30">
        <Container>
          <div className="relative md:flex justify-between items-center md:gap-x-8 lg:gap-x-0">
            <div className="md:w-[50%] ">
              <h1 className=" lg:pr-23 text-[40px] lg:text-[58px] leading-11 md:leading-13 lg:leading-16 text-secondary font-extrabold animate-in fade-in slide-in-from-bottom-8 duration-700">
                Gateway to <span className="text-primary">Global Student </span>
                Recruitment
              </h1>
              <p className="text-[22px] text-secondary lg:pr-26 pt-5 pb-3 lg:text-justify animate-in fade-in slide-in-from-bottom-8 duration-700">
                We simplify everything, from selecting the perfect university to
                obtaining your student visa.
              </p>
              <Link to={"/become-a-partner"}>
                {/* <Button className="animate-in fade-in slide-in-from-bottom-8 duration-800">
                  Become a Partner
                </Button> */}
                <button className="py-2 lg:py-3 px-4 lg:px-4 mt-4 lg:mt-8 text-[14px] md:text-lg font-medium lg:font-bold rounded-xl bg-secondary text-white border border-white flex items-center gap-x-4 cursor-pointer  hover:bg-primary transition duration-300 ">Become a Partner <FaArrowRight className="animate-bounce mt-1 "/> </button>
              </Link>
            </div>

            {/* ======================================= */}
            <div className=" md:w-[50%] mt-4 md:mt-0">
              <div className="md:flex justify-end md:gap-x-4 lg:gap-x-7">
                <div className="md:w-[45%] flex flex-col gap-y-3">
                  {/* ==============box one======== */}
                  <div className="flex justify-center py-4 md:py-5 md:px-8 bg-secondary rounded-xl">
                    <div className="size-9 md:size-14 rounded-full bg-white flex items-center justify-center shrink-0">
                      <RiGraduationCapFill className="text-secondary text-2xl md:text-4xl " />
                    </div>
                    <div className="ml-5">
                      <PBase
                        text={"University"}
                        className={"text-white font-semibold"}
                      />
                      <CountUp
                        className="account-balance text-xl md:text-2xl text-white font-bold"
                        start={0}
                        end={29}
                        duration={3}
                        useEasing={false}
                        separator=","
                      />{" "}
                      <span className="text-xl md:text-2xl text-white font-bold">
                        +
                      </span>
                    </div>
                  </div>
                  {/* ==============box one======== */}

                  {/* ==============box two======== */}
                  <div className="bg-[#b5b5f8] pt-2 md:pt-2.5 px-2 md:px-3 lg:px-4 pb-3 md:pb-5 rounded-xl flex flex-col gap-y-2 shadow-[0px_5px_8px_-2px_rgba(0,0,0,0.3)]">
                    <div className="w-full h-54 md:h-30 lg:h-40">
                      <img
                        src={grpStudy}
                        alt="group study"
                        className="w-full h-full rounded-xl"
                        loading="eager"
                        decoding="async"
                        fetchPriority="high"
                      />
                    </div>
                    <div className="flex justify-center py-4 md:py-5 md:px-5 lg:px-8 bg-primary rounded-xl shadow-[0px_5px_8px_-2px_rgba(0,0,0,0.3)]">
                      <div className="size-9 md:size-11 lg:size-14 rounded-full bg-white grid place-items-center shrink-0">
                        < SiOrganicmaps className="text-secondary text-2xl md:text-3xl lg:text-4xl" />
                      </div>
                      <div className="ml-5">
                        <PBase
                          text={"Study Destination"}
                          className={"text-white font-semibold"}
                        />
                        <CountUp
                          className="account-balance text-xl md:text-2xl text-white font-bold"
                          start={0}
                          end={15}
                          duration={3}
                          useEasing={true}
                          separator=","
                        />{" "}
                      </div>
                    </div>
                  </div>
                  {/* ==============box two======== */}
                </div>

                {/* ================================ */}
                <div className="md:w-[40%] flex flex-col gap-y-4">
                  <div className="bg-[url(/src/assets/university.webp)] bg-cover bg-center rounded-xl">
                    <div className="w-full h-76 md:h-42 lg:h-56 pt-14"></div>
                    {/* <img
                      src={university}
                      alt="university"
                      className="w-full h-full rounded-xl"
                      loading="eager"
                      decoding="async"
                      fetchPriority="high"
                    /> */}
                  </div>
                  {/* ============= */}
                  <div className="flex justify-center py-4 md:py-5 md:px-5 lg:px-8 bg-primary rounded-xl shadow-[0px_5px_8px_-2px_rgba(0,0,0,0.3)]">
                    <div className="size-9 md:size-11 lg:size-14 rounded-full bg-white grid place-items-center shrink-0">
                      <GiTiedScroll className="text-secondary text-2xl md:text-3xl lg:text-4xl" />
                    </div>
                    <div className="ml-5">
                      <PBase
                        text={"Student helped"}
                        className={"text-white font-semibold"}
                      />
                      <CountUp
                        className="account-balance text-xl md:text-2xl text-white font-bold"
                        start={0}
                        end={200}
                        duration={3}
                        useEasing={true}
                        separator=","
                      />{" "}
                      <span className="text-xl md:text-2xl text-white font-bold">
                        +
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <div className="bg-[#e6e6ece0] py-2 lg:py-6">
        <Marquee speed={80} gradient={false} pauseOnHover={true}>
          {university_logo.map((uni, index) => (
            <div key={index} className="mx-10 flex items-center justify-center">
              <div className="h-12">
                <img
                  src={uni.logo}
                  alt={uni.name}
                  className={`h-full object-contain`}
                />
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </>
  );
};

export default Banner;
