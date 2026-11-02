export const metadata = {
  title: 'About | Abhishek Shah',
  description: "About Abhishek Shah – Software developer skilled in full-stack web development and mobile apps. Explore his journey, technical skills, and projects.",
  alternates: {
    canonical: "https://abhishekshah-portfolio.vercel.app/about",
  },
  keywords: [
    "About Abhishek",
    "About Abhishek Shah",
    "Abhishek Shah about",
    "Abhishek Shah biography",
    "Abhishek Shah background",
    "Abhishek Shah journey",
    "Abhishek Shah story",
    "Abhishek Shah experience",
    "Abhishek Shah education",
    "Abhishek Shah developer",
    "Abhishek Shah software developer",
    "Abhishek Shah Android developer",
    "Abhishek Shah Flutter developer",
    "Abhishek Shah full stack developer",
    "Abhishek Shah web developer",
    "Abhishek Shah mobile app developer",
    "Abhishek Shah portfolio",
    "Abhishek Shah career",
    "Abhishek Shah professional background",
    "About Abhishek Shah software developer",
    "Abhishek Shah technical skills",
    "Abhishek Shah education and experience",
    "Abhishek Shah developer profile",
  ],
  openGraph: {
    title: 'About | Abhishek Shah',
    description: "About Abhishek Shah – Software developer skilled in full-stack web development and mobile apps. Explore his journey, technical skills, and projects.",
    url: "https://abhishekshah-portfolio.vercel.app/about",
    siteName: "Abhishek Shah Portfolio",
    locale: "en_US",
    images: [
      {
        url: "https://abhishekshah-portfolio.vercel.app/abhishek-shah-full-stack-developer.jpg",
        width: 1200,
        height: 630,
        alt: "Abhishek Shah - About Me",
      },
    ],
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Abhishek Shah",
    description: "Explore the professional journey, skills, and education of Abhishek Shah.",
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

function JsonLd() {
  const profileSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": "Abhishek Shah",
      "jobTitle": "Professional Full-Stack Developer & Software Engineer",
      "description": "Full-stack developer specializing in MERN Stack, Flutter, and modern web technologies. With 3+ years of hands-on experience, I build scalable, high-performance applications.",
      "url": "https://abhishekshah-portfolio.vercel.app",
      "image": "https://abhishekshah-portfolio.vercel.app/abhishek-shah-full-stack-developer.jpg",
      "email": "shahabhishek051@gmail.com",
      "telephone": "+91 78610 53202",
      "sameAs": [
        "https://github.com/abhishek-2006",
        "https://www.linkedin.com/in/abhishekshah-dev/",
        "https://x.com/shahabhishek409",
        "https://www.instagram.com/abhishekshah_112/"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bardoli",
        "addressRegion": "Gujarat",
        "addressCountry": "India"
      },
      "workHistory": [
        {
          "@type": "EmploymentHistory",
          "workFor": {
            "@type": "Organization",
            "name": "Self-Employed"
          },
          "jobTitle": "Freelance Full-Stack Developer",
          "startDate": "2023-01-01",
          "description": "Developing full-stack web and mobile applications using MERN Stack, Next.js and Flutter. Building scalable solutions with focus on performance optimization and user experience.",
          "skills": ["React", "Next.js", "Node.js", "MongoDB", "Flutter", "Tailwind CSS", "Express.js"]
        }
      ],
      "educationHistory": [
        {
          "@type": "EducationalOccupationalCredential",
          "educationalLevel": "Bachelor of Technology (B.Tech)",
          "name": "Computer Engineering",
          "educationDetails": {
            "@type": "EducationalOrganization",
            "name": "Uka Tarsadia University"
          },
          "startDate": "2025-01-01",
          "endDate": "2028-12-31"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "educationalLevel": "Diploma",
          "name": "Computer Engineering",
          "educationDetails": {
            "@type": "EducationalOrganization",
            "name": "Gujarat Technological University"
          },
          "startDate": "2022-01-01",
          "endDate": "2025-12-31",
          "cgpa": "8.40"
        }
      ],
      "alumniOf": [
        {
          "@type": "EducationalOrganization",
          "name": "Uka Tarsadia University"
        },
        {
          "@type": "EducationalOrganization",
          "name": "Gujarat Technological University"
        }
      ],
      "knowsAbout": [
        "Full-Stack Web Development",
        "Mobile App Development",
        "Flutter",
        "React",
        "Android Development",
        "iOS Development",
        "Next.js",
        "MERN Stack",
        "Node.js",
        "Database Design",
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema) }}
    />
  );
}

import AboutPage from "./About";

export default function Page() {
    return (
      <>
        <JsonLd />
        <AboutPage />
      </>
    );
}   