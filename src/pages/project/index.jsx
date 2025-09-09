import React from "react";
import Navbar from "../home/components/Navbar";
import Projects from "./components/Frontend";
import ProjectNav from "./components/ProjectNav";
import ProjectHero from "./components/ProjectHero";

const ProjectIndex = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <ProjectNav />
      <ProjectHero />
    </div>
  );
};

export default ProjectIndex;
