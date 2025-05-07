import React from "react";
import { motion } from "motion/react";

const Projects = () => {
  const transition = {
    duration: 0.8,
    delay: 0.5,
    ease: [0, 0.71, 0.2, 1.01],
  };

  const projects = [
    {
      name: "Job Portal",
      description:
        "A full-stack job portal where users can search, apply, and post jobs seamlessly.",
      link: "https://job-portal-sigma-sand.vercel.app",
      img: "/JobPortal1.jpg",
    },
    {
      name: "Landing Page",
      description:
        "A modern landing page designed to showcase businesses and products",
      link: "https://landing-page-mu-fawn-59.vercel.app/",
      img: "/landing.jpg",
    },
    {
      name: "Pokedex App",
      description: "Search Pokémon by name or filter by type.",
      link: "https://pokedex-app-one-steel.vercel.app",
      img: "/Pokedex.PNG",
    },
    {
      name: "Admin Dashboard",
      description:
        "The dashboard includes dynamic tables, charts, and user management features. It’s designed to help streamline data visualization and admin tasks.",
      link: "https://react-admin-dashboard-zeta-jet.vercel.app",
      img: "/dashboard.jpg",
    },
    {
      name: "E-commerce",
      description:
        "This e-commerce site allow us to easily browse through products and filter by categories to quickly find what you're looking for.",
      link: "https://e-commerce-phi-flax-62.vercel.app",
      img: "/E-commerce.png",
    },
    {
      name: "Weather App",
      description:
        " this app provides real-time weather updates for any city worldwide 🌍",
      link: "https://weather-application-six-tau.vercel.app",
      img: "/WeatherApp.jpg",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-[#144272]">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-[#DFF2EB]">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <>
              <div
                key={index}
                className="bg-white p-6 shadow rounded-3xl hover:shadow-lg transition"
              >
                {project.img && (
                  <img
                    src={project.img}
                    alt="Backend"
                    className="h-80 w-full rounded-2xl object-cover mb-4"
                  />
                )}
                <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
