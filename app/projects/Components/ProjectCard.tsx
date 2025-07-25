'use client'

import { Project } from "@prisma/client";

type ProjectCardProps = {
    project: Project;
}

const ProjectCard = ({
    project
} : ProjectCardProps
) => {
    const { title , description , image , link} = project;
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 hover:scale-105 z-10 transition-all">
            {
                image && (<img className="w-full h-48 object-cover" src={image} alt={`Logo.${title}`} />)
            }
            
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Project</a>
            </div>
        </div>
    );
};
export default ProjectCard;