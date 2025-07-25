'use client';

import { useEffect, useState } from "react";
import { getProjects } from "./lib/getProject";
import ProjectCard from "./Components/ProjectCard";
import { Project } from "@prisma/client";
const Projects = () => {

    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
       const project =  getProjects() // Replace 'some-id' with a valid project ID
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
            project.then((res) => res && setProjects(res.data))
    }, []);


    if (loading) return <p className="text-white">Loading projects...</p>;
    return (
        <>
            <div className="h-screen w-full grid-cols-3 grid">
                {
                    projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))
                }
            </div>
        </>
    )
};

export default Projects;