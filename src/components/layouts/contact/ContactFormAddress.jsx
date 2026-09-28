import { IoLocationOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import Container from "../../Container";
import PBase from "../../PBase";
import Heading from "../../Heading";
import { useState } from "react";
import { Flip, toast } from "react-toastify";
import axios from "axios";

const ContactFormAddress = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  // input change handler (production standard)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) {
      return;
    }
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      toast.error("Please fill all requred field", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Flip,
      });
      return;
    }

    console.log("Form Data", formData);

    
    try {
      setLoading(true);

        // ====dummy backend API=======
      await axios.post("https://httpbin.org/post", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

    //   if (res.data.success) {
    //     toast.success(res.data.message || "Successfully Submited!");
    //   } else {
    //     toast.error(res.data.message || "Something went wrong!");
    //   }
      toast.success("Successfully Submited!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Flip,
      });

      // reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast.error("Something went wrong!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Flip,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="py-5 lg:py-10 ">
        <Container>
          <div className="flex flex-col gap-y-5 md:flex-row justify-between">
            <div className="md:w-[35%] flex flex-col gap-y-5">
              {/* ============ location box ========= */}
              <div className="p-10 bg-tertiary rounded-xl">
                <div className="flex items-center gap-x-6">
                  <div className="py-1.5 px-1.5 bg-white rounded-full">
                    <IoLocationOutline className="text-secondary text-[40px]" />
                  </div>
                  <div className="">
                    <h5 className="text-xl font-bold text-secondary pb-2">
                      Malaysia Head Office
                    </h5>
                    <PBase
                      text={
                        "1, B-G-26 Block B,Merchant Square@Tropicana selatan, Bandar Utama, 47410 Petaling Jaya, Selangor, Malaysia"
                      }
                      className={" text-secondary"}
                    />
                  </div>
                </div>
              </div>
              {/* ============ location box ========= */}

              {/* ============ phone box ========= */}
              <div className="p-10 bg-tertiary rounded-xl">
                <div className="flex items-center gap-x-6">
                  <div className="py-3 px-3 bg-white rounded-full">
                    <FiPhoneCall className="text-secondary text-[32px]" />
                  </div>
                  <div className="">
                    <h5 className="text-xl font-bold text-secondary">Phone</h5>
                    <PBase text={"+60 13-9247 098"} className={" text-secondary"} />
                  </div>
                </div>
              </div>
              {/* ============ phone box ========= */}

              {/* ============ email box ========= */}
              <div className="p-10 bg-tertiary rounded-xl">
                <div className="flex items-center gap-x-6">
                  <div className="py-2 px-2 bg-white rounded-full">
                    <MdOutlineMailOutline className="text-secondary text-[36px]" />
                  </div>
                  <div className="">
                    <h5 className="text-xl font-bold text-secondary">
                      E-mail Address
                    </h5>
                    <PBase
                      text={"info@ipathwaymy.com"}
                      className={" text-secondary"}
                    />
                  </div>
                </div>
              </div>
              {/* ============ email box ========= */}
            </div>

            {/* =================================================================== */}

            <div className="md:w-[63%]">
              <div className="p-7 bg-secondary rounded-xl">
                <Heading text={"Send Us Message"} className={"text-white"} />
                <PBase
                  text={
                    "Your email address will not be published. Required fields are marked *"
                  }
                  className={"text-white pt-3"}
                />
                <div className="max-w-4xl mx-auto px-4 mt-8">
                  <form
                    onSubmit={handleSubmit}
                    className="bg-white p-6 rounded-2xl shadow-sm space-y-6"
                  >
                    {/* grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name*"
                        value={formData.name}
                        onChange={handleChange}
                        className="input"
                      />

                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number*"
                        value={formData.phone}
                        onChange={handleChange}
                        className="input"
                      />

                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address*"
                        value={formData.email}
                        onChange={handleChange}
                        className="input"
                      />

                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="input"
                      />
                    </div>

                    {/* textarea */}
                    <textarea
                      name="message"
                      placeholder="Your Message*"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      className="input resize-none"
                    ></textarea>

                    {/* submit */}
                    <button
                      disabled={loading}
                      type="submit"
                      className={`w-full md:w-fit px-8 py-3 rounded-full bg-secondary text-white font-medium hover:opacity-90 transition cursor-pointer ${
                        loading ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ContactFormAddress;
