'use client';
import { projectsData } from '@/consts/projects';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export const runtime = 'edge';

export default function ProjectsPage() {
  return (
    <div className=" mt-6 md:mt-10">
      <HeroSection />
      <ProjectsSection />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="  w-full">
      <div className="max-w-5xl p-4 mx-auto flex flex-col gap-4 md:gap-6 items-center justify-center h-96">
        <p className=" border-b-2 border-primary-blue">Our Projects</p>
        <p className=" text-3xl md:text-5xl font-semibold text-center">
          Building the Future with Excellence
        </p>
        <p className=" text-sm md:text-lg text-gray-700 text-center">
          At SBN INFRA, we take pride in delivering high-quality industrial,
          commercial, and urban projects that shape Indias infrastructure. With
          over 20 years of experience, we have successfully completed numerous
          projects, ensuring precision, durability, and innovation.
        </p>
      </div>
      <img
        className=" w-full h-96 object-cover"
        src="/construction-bg.jpg"
        alt=""
      />
    </div>
  );
}

function ProjectsSection() {
  return (
    <div className=" w-full max-w-7xl mx-auto mt-12 p-4 flex flex-col gap-16 md:gap-16">
      {projectsData.map((project, idx) => {
        return <ProjectCard key={idx} project={{ ...project, index: idx }} />;
      })}
    </div>
  );
}
function ProjectCard({
  project,
}: {
  project: {
    index: number;
    name: string;
    description: string;
    details: string[];
    image: string;
    status: string;
  };
}) {
  return (
    <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center min-h-96">
      <div className=" w-full h-full bg-gray-100 rounded-xl py-6">
        <div className="divide-y divide-solid divide-primary-blue/20 ">
          <div className=" flex flex-col px-4 md:px-6 pb-6">
            <div className=" w-full flex flex-col md:flex-row gap-3 md:gap-6">
              <p className=" whitespace-nowrap md:mt-1">
                [0{project.index + 1}]
              </p>
              <div className=" flex flex-col gap-4">
                <p className=" text-2xl font-semibold">{project.name} </p>
                <p className=" text-gray-700 md:text-lg">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
          {project.details.map((item: string, idx: number) => {
            return (
              <p
                key={idx}
                className=" py-4 px-4 md:px-6 divide-dashed font-medium md:text-xl "
              >
                {item}
              </p>
            );
          })}
        </div>
        <p
          className={cn(
            ' ml-auto mr-4 py-1.5 bg-green-200 px-3 font-semibold text-green-600 rounded-3xl text-sm w-fit h-fit',
            project.status === 'Completed'
              ? 'bg-green-200 text-green-600'
              : 'bg-orange-200 text-orange-600'
          )}
        >
          {project.status === 'Completed' ? 'Completed' : 'Ongoing'}
        </p>
      </div>
      <div className="relative w-full h-full min-h-80 rounded-xl overflow-hidden ">
        <Image src={project.image} fill alt="" />
      </div>
    </div>
  );
}
