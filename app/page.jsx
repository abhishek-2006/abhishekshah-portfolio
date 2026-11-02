import Hero from "@/app/components/Hero";
import FeaturedProjects from "@/app/components/FeaturedProjects";
import MiniAbout from "@/app/components/MiniAbout";
import ThreeBackgroundDynamic from "@/app/components/ThreeBackgroundDynamic";
import TechnicalPhilosophy from "@/app/components/TechnicalPhilosophy";
import FAQ from "@/app/components/FAQ";

export const metadata = {
  title: "Abhishek Shah | Full-Stack Developer & Software Engineer",
  description: "Abhishek Shah is a Full-Stack Developer & Software Engineer from Bardoli, Gujarat, India. Explore his projects, skills, games, and contact details. Specializing in MERN Stack, Next.js, Flutter, and Android development.",
  keywords: [
    "Abhishek",
    "Abhishek Shah",
    "Abhishek Shah Developer",
    "Abhishek Projects",
    "Abhishek Developer",
    "About Abhishek",
    "About Abhishek Shah",
    "Abhishek Portfolio",
    "Abhishek Shah Portfolio",
    "Abhishek Shah Projects",
    "Abhishek Shah Games",
    "Abhishek Games",
    "Full-Stack Developer",
    "Software Engineer",
    "Web Developer",
    "Portfolio",
    "MERN Stack",
    "React Developer",
    "Next.js Developer",
    "Flutter Developer",
    "Mobile App Developer",
    "Developer Bardoli",
    "Developer Gujarat",
    "Indian Developer",
    "Tech Freelancer",
    "Software Development",
    "Web Development",
    "Mobile Development",
    "Android Development",
    "Android Developer",
    "Projects by Abhishek Shah",
    "Projects by Abhishek",
    "Contact Abhishek Shah",
    "Contact Abhishek",
    "Abhishek Shah Skills",
    "Abhishek Shah TicTacToe",
    "Abhishek Shah Chess",
    "Abhishek Shah Contact",
    "Frontend Development",
    "Backend Development",
    "Mobile App Development",
    "Firebase",
    "Tailwind CSS",
    "Express.js"
  ],
  alternates: {
    canonical: "https://abhishekshah-portfolio.vercel.app/",
  },
  openGraph: {
    title: "Abhishek Shah - Full-Stack Developer Portfolio",
    description: "Professional full-stack developer portfolio showcasing projects, skills, games, and services.",
    url: "https://abhishekshah-portfolio.vercel.app/",
    siteName: "Abhishek Shah Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://abhishekshah-portfolio.vercel.app/abhishek-shah-full-stack-developer.jpg",
        width: 1200,
        height: 630,
        alt: "Abhishek Shah - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Shah - Full-Stack Developer Portfolio",
    description: "Professional full-stack developer portfolio showcasing projects, skills, games, and services.",
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

function HomeJsonLd() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Abhishek Shah - Portfolio",
      "url": "https://abhishekshah-portfolio.vercel.app",
      "logo": "https://abhishekshah-portfolio.vercel.app/favicon.ico",
      "description": "Abhishek Shah - Professional full-stack developer specializing in MERN Stack, Flutter, and modern web technologies.",
      "sameAs": [
        "https://github.com/abhishek-2006",
        "https://www.linkedin.com/in/abhishekshah-dev/",
        "https://x.com/shahabhishek409",
        "https://www.instagram.com/abhishekshah_112/"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "Gujarat",
        "addressCountry": "India"
      },
      "areaServed": "Worldwide",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "email": "shahabhishek051@gmail.com",
        "telephone": "+91 78610 53202"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Abhishek Shah",
      "jobTitle": "Professional Full-Stack Developer & Software Engineer",
      "description": "Full-stack developer specializing in MERN Stack, Flutter, and modern web technologies. Building scalable applications with focus on performance, security, and user experience.",
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
        "addressRegion": "Gujarat",
        "addressCountry": "India"
      },
      "knowsAbout": [
        "MERN Stack",
        "Full-Stack Web Development",
        "Mobile App Development",
        "Flutter",
        "React",
        "Firebase",
        "Tailwind CSS",
        "Next.js",
        "Node.js",
        "Database Design",
      ],
      "inLanguage": ["en", "hi", "gu"],
      "potentialAction": {
        "@type": "CommunicateAction",
        "target": "https://abhishekshah-portfolio.vercel.app/contact"
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
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who is Abhishek Shah?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Abhishek Shah is a professional Full-Stack Developer and Software Engineer based in Bardoli, Gujarat, India. He builds high-performance web applications using the MERN Stack and Next.js, and designs cross-platform mobile applications using Flutter and Dart."
          }
        },
        {
          "@type": "Question",
          "name": "What core technologies does Abhishek specialize in?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Abhishek's primary expertise includes React, Next.js, Node.js, Express, MongoDB, MySQL, Flutter, Dart, Tailwind CSS, TypeScript, and Git. He works across the full development lifecycle, from system design to database administration and Vercel/Firebase deployments."
          }
        },
        {
          "@type": "Question",
          "name": "What development services does Abhishek Shah provide?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "He provides full-stack web application development, responsive and fast landing pages, cross-platform Android/iOS mobile application development, RESTful API design, database modeling & query speed-ups, and modern SEO & Generative Engine optimization (GEO)."
          }
        },
        {
          "@type": "Question",
          "name": "Is Abhishek Shah available for freelance work and collaborations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Abhishek is actively open to freelance opportunities, consulting work, and collaborative software projects. You can request a quote or pitch a collaboration directly through the Contact page."
          }
        },
        {
          "@type": "Question",
          "name": "Where can I see games built by Abhishek Shah?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Abhishek has developed interactive web-based editions of classic games, including Tic Tac Toe and Chess. You can play them directly in the browser by visiting the Games section on this website."
          }
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

export default function Home() {
  return (
    <>
      <HomeJsonLd />
      <main className="relative flex min-h-screen flex-col overflow-hidden">
        <ThreeBackgroundDynamic />

        <div className="relative z-10 w-full">
          <Hero />
          <MiniAbout />
          <FeaturedProjects />
          <TechnicalPhilosophy />
          <FAQ />
        </div>
      </main>
    </>
  );
}