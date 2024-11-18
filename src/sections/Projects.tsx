import Image from "next/image";
import projectImageTemplate from "@/assets/images/projectsImageSectionTemplate.png";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

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
    <section className="pb-16">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent text-center">My Projects Portofolio</p>
        </div>
        <h2 className="font-serif text-3xl text-center mt-6">Featured Projects</h2>
        <p className="text-center text-white/60 mt-4">See my latest work!</p>
        <div className="flex flex-col mt-10 gap-20">
          {portofolioProjects.map(project => (
            <div key={project.title} className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 after:pointer-events-none">
              <div className="absolute inset-0 -z-10 opacity-5" style={{ backgroundImage: `url(${grainImage.src})`, }}></div>
              <div className="bg-gradient-to-r from-emerald-400 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                <span>{project.company}</span>
                <span>&bull;</span>
                <span>{project.year}</span>
              </div>
              <h3 className="font-serif text-2xl mt-2">{project.title}</h3>
              <hr className="border-t-2 border-white/5 mt-4" />
              <ul className="flex flex-col gap-4 mt-4">
                {project.results.map((result =>
                  <li className="flex gap-2 text-sm text-white/50">
                    <CheckCircleIcon className="size-5" />
                    <span>{result.title}</span>
                  </li>
                ))}
              </ul>
              <a href={project.link}>
                <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                  <span>Visit Live Site</span>
                  <ArrowUpRightIcon className="size-4" />
                </button>
              </a>
              <Image src={project.image} alt={project.title} className="mt-8 -mb-4" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
