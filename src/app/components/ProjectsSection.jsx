"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "MedXpert Frontend",
    description: "MedXpert is a comprehensive medicine database where users can view, rate, and review medicines. I designed the UI and contributed to the frontend, making sure the platform was intuitive and user-friendly.",
    image: "/images/projects/med.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SherwinSaga/Medxpert_frontend",
    previewUrl: "https://drive.google.com/drive/folders/1hJ1RDjrCcDQxGBAtYVMbXq9Zh0BKLtOO?usp=sharing",
  },
  {
    id: 2,
    title: "MedXpert Backend",
    description: "MedXpert is a comprehensive medicine database where users can view, rate, and review medicines. I designed the UI and contributed to the frontend, making sure the platform was intuitive and user-friendly. DISCLAIMER: I did not get myself involved in any of the backend development.",
    image: "/images/projects/med.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SherwinSaga/Medxpert_backend",
    previewUrl: "https://drive.google.com/drive/folders/1hJ1RDjrCcDQxGBAtYVMbXq9Zh0BKLtOO?usp=sharing",
  },
  {
    id: 3,
    title: "Metro Events",
    description: "Metro Events is a React.js project aimed at event management. Users can create or join events making it a versatile platform for social and professional gatherings. I was responsible for the entire design and UI, ensuring a seamless and engaging user experience. DISCLAIMER: I did not get myself involved in any of the backend development.",
    image: "/images/projects/metro.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SherwinSaga/Metro_Eventss",
    previewUrl: "https://drive.google.com/drive/folders/17Oj6msLfN2EZaHwoXZpjq9-o49hVUfbL?usp=sharing",
  },
  {
    id: 4,
    title: "SeniorSurf 1.0",
    description: "One of my notable projects is SeniorSurf, the very first prototype that was designed to help senior citizens navigate smartphones more easily. I led this project, focusing on creating an intuitive UX/UI design that makes technology accessible to the elderly.",
    image: "/images/projects/ss.png",
    tag: ["All", "Web"],
    gitUrl: "https://www.figma.com/design/C7BYAnLB7rdEkXhQ6a34uY/Convertify-Sketch%2FAdobe%2FGoogle-(Community)?node-id=1%3A2&t=IxMSkEMeqMxuGHOP-1",
    previewUrl: "https://www.figma.com/design/C7BYAnLB7rdEkXhQ6a34uY/Convertify-Sketch%2FAdobe%2FGoogle-(Community)?node-id=1%3A2&t=IxMSkEMeqMxuGHOP-1",
  },
  {
    id: 4,
    title: "SeniorSurf 2.0",
    description: "One of my notable projects is SeniorSurf, this is a much improved prototype designed to help senior citizens navigate smartphones more easily. I led this project, focusing on creating an intuitive UX/UI design that makes technology accessible to the elderly.",
    image: "/images/projects/ss.png",
    tag: ["All", "Web"],
    gitUrl: "https://www.figma.com/design/jzbzcbhzMYBiU1vdsoBBIR/Final?node-id=0%3A1&t=zIcH4tHMxu7DUQkM-1",
    previewUrl: "https://www.figma.com/design/jzbzcbhzMYBiU1vdsoBBIR/Final?node-id=0%3A1&t=zIcH4tHMxu7DUQkM-1",
  },
  {
    id: 6,
    title: "Tranquil Oasis Spa",
    description: "Another project is the Tranquil Oasis Spa my very first static website, where I applied UI/UX principles to create a user-friendly prototype using HTML and CSS.",
    image: "/images/projects/tos.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/CastroNicole/CastroN_FinalProject_IntroductionToWebDevelopment",
    previewUrl: "https://castronicole.github.io/CastroN_FinalProject_IntroductionToWebDevelopment/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
