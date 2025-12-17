import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/types";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export default function ProjectCard({
  project,
  className = "",
}: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group cursor-pointer block ${className}`}
    >
      <div className="bg-gray-100 overflow-hidden mb-4">
        <Image
          src={project.images.thumbnail}
          alt={project.title}
          width={600}
          height={450}
          className="w-full h-auto grayscale-img group-hover:filter-none group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 ease-in-out"
        />
      </div>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="serif-font text-xl text-gray-900 mb-1 group-hover:underline decoration-1 underline-offset-4">
            {project.title}
          </h3>
          <p className="text-xs text-gray-500">{project.shortDescription}</p>
        </div>
        <span className="text-xs text-gray-400 border border-gray-200 px-2 py-1 rounded-full">
          {project.year}
        </span>
      </div>
    </Link>
  );
}
