import { notFound } from "next/navigation";
import { fetchProjectDetails, getAllProjectSlugs, getAllProjects } from "../../data/projectsData";
import ProjectDetailClient from "./ProjectDetailClient";

export const revalidate = 3600;
export const dynamicParams = true;

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = await fetchProjectDetails(slug);

  if (!project) {
    return {
      title: "Project Not Found | Abhishek Shah",
      description: "The requested project could not be found in Abhishek Shah's portfolio.",
      robots: { index: false, follow: true },
    };
  }

  const title = `${project.name} | Abhishek Shah Portfolio`;
  const description =
    project.tagline ||
    project.description ||
    `Explore ${project.name}, engineered by full-stack developer Abhishek Shah.`;
  const canonicalUrl = `https://abhishekshah-portfolio.vercel.app/projects/${project.slug}`;
  const imageUrl = project.logo?.startsWith("http")
    ? project.logo
    : `https://abhishekshah-portfolio.vercel.app${project.logo || "/favicon.ico"}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    keywords: [
      project.name,
      `${project.name} Abhishek Shah`,
      `${project.name} project`,
      ...(project.tech || []),
      "Abhishek Shah projects",
      "Full stack projects",
      "Software portfolio",
    ],
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Abhishek Shah Portfolio",
      locale: "en_US",
      type: "article",
      images: [
        {
          url: imageUrl,
          width: 800,
          height: 800,
          alt: `${project.name} Showcase`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
      creator: "@shahabhishek409",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    authors: [{ name: "Abhishek Shah", url: "https://abhishekshah-portfolio.vercel.app" }],
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = await fetchProjectDetails(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = getAllProjects()
    .filter((p) => p.slug !== project.slug)
    .slice(0, 3);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": project.isGame ? "SoftwareApplication" : "SoftwareSourceCode",
      name: project.name,
      description: project.description,
      url: `https://abhishekshah-portfolio.vercel.app/projects/${project.slug}`,
      applicationCategory: project.category,
      operatingSystem: project.stats?.platform || "Cross-Platform",
      author: {
        "@type": "Person",
        name: "Abhishek Shah",
        url: "https://abhishekshah-portfolio.vercel.app",
        sameAs: [
          "https://github.com/abhishek-2006",
          "https://www.linkedin.com/in/abhishekshah-dev/",
          "https://x.com/shahabhishek409",
        ],
      },
      codeRepository: project.url || undefined,
      programmingLanguage: project.tech || [],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://abhishekshah-portfolio.vercel.app",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Projects",
          item: "https://abhishekshah-portfolio.vercel.app/projects",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: project.name,
          item: `https://abhishekshah-portfolio.vercel.app/projects/${project.slug}`,
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProjectDetailClient project={project} relatedProjects={relatedProjects} />
    </>
  );
}

