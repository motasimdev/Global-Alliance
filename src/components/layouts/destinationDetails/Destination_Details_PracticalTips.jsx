import React from "react";
import Container from "../../Container";
import Heading from "../../Heading";
import { TbBulbFilled } from "react-icons/tb";
import { FaCalendarAlt, FaShieldAlt, FaLanguage, FaMapMarkerAlt, FaUniversity, FaMoneyBillWave, FaClock, FaUserCheck, FaKey, FaBuilding, FaPlane } from "react-icons/fa";

const Destination_Details_PracticalTips = ({ destination }) => {
  const tips = destination?.practicalTips || [];

  if (tips.length === 0) return null;

  const getIcon = (tip) => {
    const lower = tip.toLowerCase();
    if (lower.includes("appointment") || lower.includes("book") || lower.includes("apply") || lower.includes("register")) return <FaCalendarAlt />;
    if (lower.includes("insurance") || lower.includes("health") || lower.includes("cover")) return <FaShieldAlt />;
    if (lower.includes("language") || lower.includes("spanish") || lower.includes("french") || lower.includes("a2") || lower.includes("b2")) return <FaLanguage />;
    if (lower.includes("city") || lower.includes("valencia") || lower.includes("seville") || lower.includes("malaga") || lower.includes("bilbao") || lower.includes("madrid") || lower.includes("barcelona") || lower.includes("cork") || lower.includes("galway") || lower.includes("limerick") || lower.includes("dublin") || lower.includes("location") || lower.includes("beyond")) return <FaMapMarkerAlt />;
    if (lower.includes("bank") || lower.includes("account")) return <FaUniversity />;
    if (lower.includes("cost") || lower.includes("living") || lower.includes("salary") || lower.includes("hourly") || lower.includes("fund") || lower.includes("money") || lower.includes("€10,000") || lower.includes("caf")) return <FaMoneyBillWave />;
    if (lower.includes("work") || lower.includes("hour") || lower.includes("allowance") || lower.includes("part-time")) return <FaClock />;
    if (lower.includes("residence") || lower.includes("visa") || lower.includes("permit") || lower.includes("tie") || lower.includes("irp") || lower.includes("vls-ts") || lower.includes("legal status")) return <FaUserCheck />;
    if (lower.includes("key") || lower.includes("critical") || lower.includes("shorten") || lower.includes("route")) return <FaKey />;
    if (lower.includes("university") || lower.includes("campus") || lower.includes("accommodation") || lower.includes("housing") || lower.includes("crous") || lower.includes("grande école")) return <FaBuilding />;
    if (lower.includes("departure") || lower.includes("arrival") || lower.includes("before departure") || lower.includes("after arrival")) return <FaPlane />;
    return <TbBulbFilled />;
  };

  return (
    <>
      <section
        className="py-12 md:pt-10 md:pb-18 lg:pt-10 lg:pb-20 bg-white"
        id="practical-tips"
      >
        <Container>
          <div className="relative mt-6 md:mt-9 lg:mt-14 mb-8 bg-white shadow-sm lg:w-1/4 rounded-2xl px-8 py-2 overflow-hidden">
            <TbBulbFilled className="text-[50px] absolute -bottom-2.5 -right-2.5 text-secondary/15" />
            <h4 className="text-2xl md:text-3xl lg:text-[34px] font-bold">
              Practical Tips
            </h4>
          </div>

          <div className="bg-white rounded-xl border border-secondary/10 overflow-hidden">
            {tips.map((tip, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 px-5 py-4 border-b border-secondary/10 last:border-b-0 transition-all duration-200 hover:bg-tertiary/20 group"
              >
                <span className="text-primary shrink-0 mt-0.5 transition-transform duration-200 group-hover:scale-110">
                  {getIcon(tip)}
                </span>
                <p className="text-sm md:text-base text-secondary/80 leading-relaxed flex-1">
                  {tip}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Destination_Details_PracticalTips;