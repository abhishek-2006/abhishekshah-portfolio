export const metadata = {
  title: "Skills | Abhishek Shah",
  description: "Explore Abhishek Shah\'s technical skills including Frontend, Backend, Mobile Development, and Database technologies like React, Next.js, Node.js, and Flutter.",
  keywords: [
    "Abhishek Shah Skills",
    "Frontend Development Skills",
    "Backend Development Skills",
    "Mobile App Development",
    "Full Stack Technologies",
    "Flutter Skills",
    "React Skills",
    "Next.js Skills",
    "Node.js Skills",
    "Database Skills",
    "MERN Stack Skills",
    "Tailwind CSS Skills",
    "Express.js Skills",
    "Flutter Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Database Management"
  ],
  alternates: {
    canonical: "https://abhishekshah-portfolio.vercel.app/skills",
  },
  openGraph: {
    title: "Skills | Abhishek Shah",
    description: "Explore Abhishek Shah\'s technical skills including Frontend, Backend, Mobile Development, and Database technologies.",
    url: "https://abhishekshah-portfolio.vercel.app/skills",
    siteName: "Abhishek Shah Portfolio",
    locale: "en_US",
    images: [{ url: "https://abhishekshah-portfolio.vercel.app/abhishek-shah-full-stack-developer.jpg", width: 1200, height: 630, alt: "Abhishek Shah Skills" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skills | Abhishek Shah",
    description: "Explore Abhishek Shah\'s technical skills including Frontend, Backend, Mobile Development, and Database technologies.",
    images: ["https://abhishekshah-portfolio.vercel.app/abhishek-shah-full-stack-developer.jpg"],
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
    bingBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,        
    },
  },
  authors: [{ name: "Abhishek Shah", url: "https://abhishekshah-portfolio.vercel.app" }],
};

function SkillsJsonLd() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      "mainEntity": {
        "@type": "Person",
        "name": "Abhishek Shah",
        "jobTitle": "Professional Full-Stack Developer",
        "url": "https://abhishekshah-portfolio.vercel.app",
        "description": "Expert in full-stack web development with proficiency in MERN Stack, Flutter, and modern technologies.",
        "email": "shahabhishek051@gmail.com",
        "knowsAbout": [
          "Frontend Development",
          "Backend Development",
          "Mobile App Development",
          "Full-Stack Web Development"
        ],
        "skills": [
          {
            "@type": "Thing",
            "name": "React",
            "proficiencyLevel": "Advanced",
            "yearsOfExperience": "3+"
          },
          {
            "@type": "Thing",
            "name": "Next.js",
            "proficiencyLevel": "Advanced",
            "yearsOfExperience": "2+"
          },
          {
            "@type": "Thing",
            "name": "Node.js",
            "proficiencyLevel": "Advanced",
            "yearsOfExperience": "2+"
          },
          {
            "@type": "Thing",
            "name": "Express.js",
            "proficiencyLevel": "Advanced",
            "yearsOfExperience": "2+"
          },
          {
            "@type": "Thing",
            "name": "MongoDB",
            "proficiencyLevel": "Advanced",
            "yearsOfExperience": "2+"
          },
          {
            "@type": "Thing",
            "name": "MySQL",
            "proficiencyLevel": "Advanced",
            "yearsOfExperience": "2+"
          },
          {
            "@type": "Thing",
            "name": "Flutter",
            "proficiencyLevel": "Advanced",
            "yearsOfExperience": "2+"
          },
          {
            "@type": "Thing",
            "name": "Tailwind CSS",
            "proficiencyLevel": "Advanced",
            "yearsOfExperience": "2+"
          },
          {
            "@type": "Thing",
            "name": "JavaScript",
            "proficiencyLevel": "Expert",
            "yearsOfExperience": "3+"
          },
          {
            "@type": "Thing",
            "name": "HTML5",
            "proficiencyLevel": "Expert",
            "yearsOfExperience": "3+"
          },
          {
            "@type": "Thing",
            "name": "CSS3",
            "proficiencyLevel": "Expert",
            "yearsOfExperience": "3+"
          },
          {
            "@type": "Thing",
            "name": "Git",
            "proficiencyLevel": "Advanced",
            "yearsOfExperience": "3+"
          }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://abhishekshah-portfolio.vercel.app"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Skills",
          "item": "https://abhishekshah-portfolio.vercel.app/skills"
        }
      ]
    }
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

import SkillsClient from "./skillsClient";

export default function page() {
    return (
      <>
        <SkillsJsonLd />
        <SkillsClient />
      </>
    );
}