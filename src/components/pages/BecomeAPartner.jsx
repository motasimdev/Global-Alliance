import Container from "../Container";
import { useState } from "react";
import { Flip, toast } from "react-toastify";
import PBase from "../PBase";
import Heading from "../Heading";
import partnerImage from "/src/assets/become-partner.svg";
import axios from "axios";

const BecomeAPartner = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company_name: "",
    address: "",
    universities: [],
    nid_passport: null,
    company_license: null,
  });

  // input change handler (production standard)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // checkbox handler
  // const handleCheckboxChange = (e) => {
  //   const { value, checked } = e.target;

  //   setFormData((prev) => ({
  //     ...prev,
  //     universities: checked
  //       ? [...prev.universities, value]
  //       : prev.universities.filter((item) => item !== value),
  //   }));
  // };

  // file handler
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files[0],
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
      !formData.address ||
      !formData.company_name
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
    if (formData.universities.length === 0) {
      toast.error("Select at least one university");
      return;
    }
    // file require size depends on backend file size limit
    if (formData.nid_passport && formData.nid_passport.size > 2 * 1024 * 1024) {
      toast.error("File too large");
      return;
    }
    // file require size depends on backend file size limit
    if (
      formData.company_license &&
      formData.company_license.size > 2 * 1024 * 1024
    ) {
      toast.error("Company license file too large (Max 2MB)");
      return;
    }
    console.log("Form Data", formData);

    try {
      setLoading(true);

      // ======FormData =========
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("company_name", formData.company_name);
      data.append("address", formData.address);

      // universities name same name as backend
      formData.universities.forEach((uni) =>
        data.append("universities[]", uni),
      );

      data.append("nid_passport", formData.nid_passport);
      data.append("company_license", formData.company_license);

      // ====dummy backend API=======
      await axios.post("https://httpbin.org/post", data, {
        headers: {
          "Content-Type": "multipart/form-data",
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
        company_name: "",
        address: "",
        universities: [],
        nid_passport: null,
        company_license: null,
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
            <div className="md:w-[35%] flex flex-col gap-y-5 w-full h-60 md:h-100 lg:h-140">
              <img
                src={partnerImage}
                alt="Become a partner"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* =================================================================== */}

            <div className="md:w-[63%]">
              <div className="p-7 bg-secondary rounded-xl">
                <Heading text={"Become a Partner"} className={"text-white"} />
                <PBase
                  text={"Fill up the form below and submit to become a Partner"}
                  className={"text-white pt-3"}
                />
                <div className="max-w-4xl mx-auto px-4 mt-8">
                  <form
                    onSubmit={handleSubmit}
                    className="bg-white p-6 rounded-2xl shadow-sm space-y-6"
                  >
                    {/* grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-y-2">
                        <label className="text-sm font-medium text-gray-700">
                          Applicant Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          placeholder="e.g John Doe"
                          value={formData.name}
                          onChange={handleChange}
                          className="input"
                        />
                      </div>

                      <div className="flex flex-col gap-y-2">
                        <label className="text-sm font-medium text-gray-700">
                          Company Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="company_name"
                          placeholder="e.g John Doe Education"
                          value={formData.company_name}
                          onChange={handleChange}
                          className="input"
                        />
                      </div>

                      <div className="flex flex-col gap-y-2">
                        <label className="text-sm font-medium text-gray-700">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder="e.g johndoe@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          className="input"
                        />
                      </div>
                      <div className="flex flex-col gap-y-2">
                        <label className="text-sm font-medium text-gray-700">
                          Contact Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="e.g 010000000000"
                          value={formData.phone}
                          onChange={handleChange}
                          className="input"
                        />
                      </div>
                    </div>

                    {/* textarea */}
                    <div className="flex flex-col gap-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Address <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="address"
                        placeholder="123 Main Street, New York, NY 10001"
                        value={formData.address}
                        onChange={handleChange}
                        rows="6"
                        className="input resize-none"
                      ></textarea>
                    </div>

                    {/* =========== university checkbox ====== */}
                    {/* <div className="flex flex-col gap-y-3 lg:my-15">
                      <label className="text-sm font-medium text-gray-700 lg:mb-3">
                        Choose University{" "}
                        <span className="text-red-500">*</span>
                      </label>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {Universities.map((uni) => (
                          <label
                            key={uni.id}
                            className="flex items-center gap-2 text-sm"
                          >
                            <input
                              type="checkbox"
                              value={uni.name}
                              checked={formData.universities.includes(uni.name)}
                              onChange={handleCheckboxChange}
                              className="accent-secondary cursor-pointer"
                            />
                            {uni.name}
                          </label>
                        ))}
                      </div>
                    </div> */}
                    {/* =========== university checkbox ====== */}
                    {/* =====field====== */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {/* NID / Passport */}
                      <div className="flex flex-col gap-y-2 cursor-pointer">
                        <label className="text-sm font-medium text-gray-700">
                          NID / Passport Copy{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="file"
                          name="nid_passport"
                          accept=".jpg,.jpeg,.png,.pdf"
                          onChange={handleFileChange}
                          className="input file:mr-4 file:px-4 file:py-2 file:rounded-full file:border-0 file:bg-secondary file:text-white cursor-pointer"
                        />
                      </div>

                      {/* Company License */}
                      <div className="flex flex-col gap-y-2 cursor-pointer">
                        <label className="text-sm font-medium text-gray-700">
                          Company License{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="file"
                          name="company_license"
                          accept=".jpg,.jpeg,.png,.pdf"
                          onChange={handleFileChange}
                          className="input file:mr-4 file:px-4 file:py-2 file:rounded-full file:border-0 file:bg-secondary file:text-white cursor-pointer"
                        />
                      </div>
                    </div>
                    {/* =====field====== */}

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

export default BecomeAPartner;
