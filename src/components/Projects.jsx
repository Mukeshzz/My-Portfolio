import React from "react";

const Projects = () => {
  const projects = [
    {
      name: "Pokedex App",
      description: "Search Pokémon by name or filter by type.",
      link: "https://pokedex-app-one-steel.vercel.app",
      img: "./src/assets/images/Pokedex.PNG",
    },
    {
      name: "Admin Dashboard",
      description:
        "The dashboard includes dynamic tables, charts, and user management features. It’s designed to help streamline data visualization and admin tasks.",
      link: "https://react-admin-dashboard-zeta-jet.vercel.app",
      img: "./src/assets/images/dashboard.jpg",
    },
    {
      name: "E-commerce",
      description:
        "This e-commerce site allow us to easily browse through products and filter by categories to quickly find what you're looking for.",
      lomk: "https://e-commerce-phi-flax-62.vercel.app",
      img: "./src/assets/images/E-commerce.png",
    },
    {
      name: "Weather App",
      description:
        " this app provides real-time weather updates for any city worldwide 🌍",
      link: "https://weather-application-six-tau.vercel.app",
      img: "./src/assets/images/WeatherApp.jpg",
    },
    {
      name: "Backend",
      description: "Complete Backend project",
      link: "https://github.com/Mukeshzz/backend",
    },
    {
      name: "School Management System",
      description: "A system to manage school data.",
      link: "https://github.com/Mukeshzz/school-management-nodejs-mysql",
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
                className="bg-white p-6 shadow rounded-lg hover:shadow-lg transition"
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
