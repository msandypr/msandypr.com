import Image from "next/image";
import projectImageTemplate from "@/assets/images/projectsImageSectionTemplate.png";

const portofolioProjects = [
  {
    company: "Cyber Web Indonesia",
    year: "2023",
    title: "AI SEO Optimization Tool",
    results: [
      { title: "Improve SEO Ranking by 30% with AI Technology" },
      { title: "Improve Website Speed and SEO Score with AI Tools" },
      { title: "SEO Content Optimization with AI for Increased Website Visibility" },
    ],
    link: "https://msandypr.com/",
    image: projectImageTemplate,
  },
]
export const ProjectsSection = () => {
  return (
    <div>
      <div className="container">
        <p>My Projects Portofolio</p>
        <h2>Featured Projects</h2>
        <p>See my latest work!</p>
        <div>
          {portofolioProjects.map(project => (
            <div key={project.title}>
              <div>
                <span>{project.company}</span>
                <span>{project.year}</span>
              </div>
              <h3>{project.title}</h3>
              <hr />
              <ul>
                {project.results.map(result =>
                  <li>{result.title}</li>
                )}
              </ul>
              <a href={project.link}>
                <button>View Live Site</button>
              </a>
              <Image src={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
