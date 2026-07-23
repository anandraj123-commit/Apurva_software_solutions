import React, { useState } from "react";
import LoaderOverlay from "../components/loader/Loader";
import AlertBox from "../components/AlertBox";
const Contact = ({ onSubmitFormRequest }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    jobTitle: "",
    company: "",
    industry: "",
    companySize: "",
    budget: "",
    timeline: "",
    requirement: "",
    message: "",
    challenges: "",
    expectedOutcomes: "",
  });
  const [status, setStatus] = useState({
    loading: false,
    error: "",
    success: "",
  });
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setStatus({ loading: false, error: "", success: "" });
  };
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.requirement.trim() ||
      !formData.message.trim()
    ) {
      setStatus({
        loading: false,
        error: "Please fill all required fields.",
        success: "",
      });
      return;
    }
    if (!validateEmail(formData.email)) {
      setStatus({
        loading: false,
        error: "Please enter a valid email address.",
        success: "",
      });
      return;
    }
    setStatus({ loading: true, error: "", success: "" });
    const { loading, error, success } = await onSubmitFormRequest(
      formData,
      "CONTACT-US"
    );
    setStatus({ loading, error: error || "", success: success || "" });
    if (!error) {
      setFormData({
        name: "",
        email: "",
        phone: "",
        jobTitle: "",
        company: "",
        industry: "",
        companySize: "",
        budget: "",
        timeline: "",
        requirement: "",
        message: "",
        challenges: "",
        expectedOutcomes: "",
      });
    }
  };
  return (
    <>
      {" "}
      {status.success && (
        <AlertBox
          type="success"
          message="✅ Action completed successfully!"
          duration="3000"
        />
      )}{" "}
      {status.loading && (
        <AlertBox
          type="loading"
          message="⏳ Sending, please wait..."
          duration="3000"
        />
      )}{" "}
      {status.error && (
        <AlertBox type="error" message={status.error} duration="3000" />
      )}{" "}
      <section id="contact" className="contact section py-16 bg-[#f1f4fa]" style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1920&auto=format&fit=crop')",

        }}>
        {" "}
        <div className="w-full max-w-none px-6">
          {" "}

          <div className="text-center  mx-auto ">
        <h2 className="text-3xl font-bold text-gray-900">
        Get In{" "}
          <span className="bg-[#ff4a17] bg-clip-text text-transparent">
          Touch
          </span>
        </h2>

        
        <div className="w-20 h-[2px] bg-[#ff4a17] mx-auto mt-2"></div>
        <p className="mt-2"> Let's discuss your next project and bring your ideas to life</p>


        </div>
          <div className="row g-4  mt-4">
            {" "}
            {/* LEFT SIDE */}{" "}
            <div className="col-lg-6">
              {" "}
              <div className="flex flex-col gap-6">
                {" "}
                <div className="bg-[white] rounded-3xl p-8 border border-slate-800 text-center">
                  {" "}
                  <i className="bi bi-geo-alt text-[#ff4a17] text-xl"></i>{" "}
                  <h4 className="text-black text-lg font-semibold mt-4">
                    {" "}
                    Address{" "}
                  </h4>{" "}
                  <p className="text-black mt-2 text-sm">
                    {" "}
                    Veer Kuwar Singh Colony, Gaya, Bihar{" "}
                  </p>{" "}
                </div>{" "}
                <div className="bg-[white] rounded-3xl p-4 border border-slate-800 text-center">
                  {" "}
                  <i className="bi bi-telephone text-[#ff4a17] text-xl"></i>{" "}
                  <h4 className="text-black text-lg font-semibold mt-4">
                    {" "}
                    Call Us{" "}
                  </h4>{" "}
                  <p className="text-black text-sm">+91 6203253537</p>{" "}
                  <p className="text-black text-sm">+91 9629776056</p>{" "}
                </div>{" "}
                <div className="bg-[white] rounded-3xl p-4 border border-slate-800 text-center">
                  {" "}
                  <i className="bi bi-envelopetext-[#ff4a17] text-xl"></i>{" "}
                  <h4 className="text-black text-lg font-semibold mt-4">
                    {" "}
                    Email Us{" "}
                  </h4>{" "}
                  <p className="text-black break-all text-sm">
                    {" "}
                    supports@apurvasoftwaresolutions.com{" "}
                  </p>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            {/* RIGHT SIDE */}{" "}
            <div className="col-lg-6">
              {" "}
              <div className="bg-[white] border border-slate-800 rounded-[32px] p-6 md:p-10">
                {" "}
                <h3 className="text-lg font-bold text-black mb-8">
                  {" "}
                  Get Started Today{" "}
                </h3>{" "}
                <form onSubmit={handleSubmit}>
                  {" "}
                  <div className="grid md:grid-cols-2 gap-4">
                    {" "}
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name *"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full h-12 rounded-2xl text-sm border bg-[white] px-5 text-black placeholder-slate-400 focus:border-cyan-500 focus:outline-none"
                      required
                    />{" "}
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full h-12 rounded-2xl text-sm  border border-slate-700 px-5 text-black placeholder-slate-400 focus:border-cyan-500 focus:outline-none"
                      required
                    />{" "}
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full h-12 rounded-2xl text-sm  border border-slate-700 px-5 text-black placeholder-slate-400 focus:border-cyan-500 focus:outline-none"
                    />{" "}
                    <input
                      type="text"
                      name="jobTitle"
                      placeholder="Job Title"
                      value={formData.jobTitle}
                      onChange={handleChange}
                      className="w-full h-12 rounded-2xl text-sm border border-slate-700 px-5 text-black placeholder-slate-400 focus:border-cyan-500 focus:outline-none"
                    />{" "}
                    <input
                      type="text"
                      name="company"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full h-12 rounded-2xl text-sm border border-slate-700 px-5 text-black placeholder-slate-400 focus:border-cyan-500 focus:outline-none"
                    />{" "}
                    <input
                      type="text"
                      name="industry"
                      placeholder="Industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full h-12 rounded-2xl text-sm border border-slate-700 px-5 text-black placeholder-slate-400 focus:border-cyan-500 focus:outline-none"
                    />{" "}
                    <select
                      name="companySize"
                      value={formData.companySize}
                      onChange={handleChange}
                      className="w-full h-12 rounded-2xl text-sm border border-slate-700 px-5 text-black focus:border-cyan-500 focus:outline-none"
                    >
                      {" "}
                      <option value="">Company Size</option>{" "}
                      <option>1-10 Employees</option>{" "}
                      <option>11-50 Employees</option>{" "}
                      <option>51-200 Employees</option>{" "}
                      <option>201-500 Employees</option>{" "}
                      <option>500+ Employees</option>{" "}
                    </select>{" "}
                    <select
  name="budget"
  value={formData.budget}
  onChange={handleChange}
  className="w-full h-12 rounded-2xl border border-slate-700 px-5 text-black focus:border-cyan-500 focus:outline-none"
>
  <option value="">Budget</option>
  <option value="<5000">{"<$5000"}</option>
  <option value="5000-15000">$5000 - $15000</option>
  <option value="15000-50000">$15000 - $50000</option>
  <option value="50000-100000">$50000 - $100000</option>
  <option value=">100000">{">$100000"}</option>
</select>
                  </div>{" "}
                  <div className="mt-4">
                    {" "}
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full h-12 rounded-2xl text-sm border border-slate-700 px-5 text-black focus:border-cyan-500 focus:outline-none"
                    >
                      {" "}
                      <option value="">Project Timeline</option>{" "}
                      <option>Immediately</option> <option>1-3 Months</option>{" "}
                      <option>3-6 Months</option> <option>6+ Months</option>{" "}
                    </select>{" "}
                  </div>{" "}
                  <div className="mt-4">
                    {" "}
                    <select
                      name="requirement"
                      value={formData.requirement}
                      onChange={handleChange}
                      className="w-full h-12 rounded-2xl text-sm border border-cyan-500 px-5 text-black focus:outline-none"
                      required
                    >
                      {" "}
                      <option value="">Choose Your Requirement *</option>{" "}
                      <option>Website Development</option>{" "}
                      <option>Mobile App Development</option>{" "}
                      <option>Custom Software Development</option>{" "}
                      <option>ERP Development</option>{" "}
                      <option>CRM Development</option>{" "}
                      <option>AI Chatbot Development</option>{" "}
                      <option>SAP Consulting</option>{" "}
                      <option>Digital Marketing</option>{" "}
                    </select>{" "}
                  </div>{" "}
                  <div className="mt-4">
                    {" "}
                    <textarea
                      rows="2"
                      name="message"
                      placeholder="Project Description *"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full rounded-2xl text-sm border border-slate-700 p-5 text-black placeholder-slate-400 focus:border-cyan-500 focus:outline-none"
                      required
                    />{" "}
                  </div>{" "}
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    {" "}
                    <textarea
                      rows="2"
                      name="challenges"
                      placeholder="Current Challenges (Optional)"
                      value={formData.challenges}
                      onChange={handleChange}
                      className="w-full rounded-2xl text-sm border border-slate-700 p-5 text-black placeholder-slate-400 focus:border-cyan-500 focus:outline-none"
                    />{" "}
                    <textarea
                      rows="2"
                      name="expectedOutcomes"
                      placeholder="Expected Outcomes (Optional)"
                      value={formData.expectedOutcomes}
                      onChange={handleChange}
                      className="w-full rounded-2xl text-sm border border-slate-700 p-5 text-black placeholder-slate-400 focus:border-cyan-500 focus:outline-none"
                    />{" "}
                  </div>{" "}
                  <div className="mt-6 relative">
                    {" "}
                    {status.loading && <LoaderOverlay />}{" "}
                    <button
                      type="submit"
                      disabled={status.loading}
                      className="w-full h-12 rounded-3xl text-sm text-xl font-bold text-white bg-[#ff4a17] hover:scale-[1.01] transition-all duration-300"
                    >
                      {" "}
                      {status.loading ? "Sending..." : "SUBMIT"}{" "}
                    </button>{" "}
                  </div>{" "}
                </form>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
    </>
  );
};
export default Contact;
