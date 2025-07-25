import axios from "axios";

export async function getProjects() {
    const projects = await axios.get('/api/projects', );
    if (projects.status === 404) {
        throw new Error('No projects found');
    }
    else {
    }

    return projects
}