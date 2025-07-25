import axios from "axios";

// lib/addProject.ts
export async function addProject(data: {
  title: string;
  description: string;
  image: string;
  link: string;
}) {
  const res = await axios.post('/api/projects' , data);

  if (res.status === 400) {
    throw new Error('Failed to create project');
  }

  return res.data;
}
