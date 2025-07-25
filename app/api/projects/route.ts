// app/api/projects/route.ts (App Router)
import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: 'desc' },
  });
  if(!projects) {
    return new NextResponse('No projects found' , {status : 404});
  }
  return NextResponse.json(projects);
}

export async function POST(req: Request) {
  const body = await req.json();
  const { title, description, image, link , updatedAt , createdAt } = body;

  if(!body ) return new NextResponse('No data provided' , { status : 400});

  const project = await prisma.project.create({
    data: { title, description, image, link, updatedAt, createdAt },
  });

  return NextResponse.json(project);
}
