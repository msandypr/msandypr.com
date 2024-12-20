import Image from "next/image";
import projectImageTemplate from "@/assets/images/projectsImageSectionTemplate.png";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portofolioProjects = [
  {
    company: "Indonesian Maritime Youths",
    year: "2024",
    title: "Company Profile and Membership Management System",
    results: [
      { title: "Streamlined Membership Registration and Management Processes" },
      { title: "Improved User Engagement Through an Intuitive Interface" },
      { title: "Enhanced System Performance and Security for Seamless Operations" },
    ],
    link: "https://maritimmuda.id/",
    image: projectImageTemplate,
  },
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
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="My Projects"
          title="Featured Projects"
          description="See my latest work!" />
        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {portofolioProjects.map(project => (
            <Card key={project.title} className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20">
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-400 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result =>
                      <li className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div>
                  <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
