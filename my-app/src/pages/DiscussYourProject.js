import { useState } from "react";
import "../assets/scss/DiscussYourProject.scss";
import Hero from "../components/DiscussYourProject/Hero";
import DiscussYourProjectForm from '../forms/DiscussYourProjectForm';
const DiscussYourProject = () => {
  return (
    <div className="w-full discussYourProject">

      {/* ================= HERO SECTION ================= */}
      <Hero />
      {/* ================= FORM SECTION ================= */}
      <DiscussYourProjectForm/>
    </div>
  );
};

export default DiscussYourProject;