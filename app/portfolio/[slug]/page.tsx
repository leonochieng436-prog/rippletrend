import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetail from "@/components/ProjectDetail";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { projects } from "@/lib/content";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = projects.find(({ slug }) => slug === params.slug);
  if (!project) return { title: "Project not found | Ripple Trend Marketing" };
  return {
    title: `${project.title} concept | Ripple Trend Marketing Portfolio`,
    description: project.overview,
    alternates: { canonical: `/portfolio/${project.slug}` },
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  if (!projects.some(({ slug }) => slug === params.slug)) notFound();
  return (
    <>
      <Header />
      <ProjectDetail slug={params.slug} />
      <Footer />
    </>
  );
}