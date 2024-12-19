import React from "react";

const Skills = () => {
  const skills = [
    {
      skill: "HTML",
      img: "https://thumbs.dreamstime.com/b/html-logo-editorial-illustrative-white-background-eps-download-vector-jpeg-banner-html-logo-editorial-illustrative-white-208329416.jpg",
    },
    {
      skill: "CSS",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkdDy1MPyAklifM98twCxSuRj7EVJPO0cmHg&s",
    },
    {
      skill: "Tailwind CSS",
      img: "https://www.designagogo.co.uk/wp-content/uploads/2022/08/blog-tailwind-1920x1920.jpg",
    },
    {
      skill: "JavaScript",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png",
    },
    {
      skill: "React",
      img: "https://nordicapis.com/wp-content/uploads/A-Short-Guide-What-Types-of-Apps-Can-Be-Built-With-React.png",
    },
    {
      skill: "Nodejs",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ-sdRIvQxSBfArITwaURCNiCo1hu9Vf_uEQ&s",
    },
    {
      skill: "Expressjs",
      img: "https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png",
    },
    {
      skill: "SQL",
      img: "https://www.ibm.com/content/dam/adobe-cms/instana/media_logo/Azure-SQL-Server-Monitoring.component.complex-narrative-xl.ts=1726504326153.png/content/adobe-cms/us/en/products/instana/supported-technologies/microsoft-sql-server-monitoring/_jcr_content/root/table_of_contents/body/content_section_styled/content-section-body/complex_narrative/logoimage",
    },
    {
      skill: "MySQL",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Database-mysql.svg/424px-Database-mysql.svg.png",
    },
    {
      skill: "MongoDB",
      img: "https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png",
    },
    {
      skill: "Github",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpi6a-8mr7ft4mFsHfGWZcI75109WBrHMyuA&s",
    },
  ];

  return (
    <section id="skills" className="py-16 bg-[#205295]">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-[#DFF2EB]">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <img
                src={item.img}
                alt={item.skill}
                className="h-20 w-20 rounded-2xl object-cover mb-4"
              />
              <p className="text-lg font-semibold">{item.skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
