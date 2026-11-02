import ContactPage from "./Contact";

export const metadata = {
  title: 'Contact | Abhishek Shah',
  description: "Contact full-stack engineer Abhishek Shah. Get in touch for custom web development, Flutter mobile apps, freelance projects, and technical collaborations.",
  alternates: {
    canonical: "https://abhishekshah-portfolio.vercel.app/contact"
  },
  openGraph: {
      title: 'Contact | Abhishek Shah',
      description: "Contact full-stack engineer Abhishek Shah. Get in touch for custom web development, Flutter mobile apps, freelance projects, and technical collaborations.",
      url: "https://abhishekshah-portfolio.vercel.app/contact",
      locale: "en_US",
      images: [{ url: "https://abhishekshah-portfolio.vercel.app/abhishek-shah-full-stack-developer.jpg", width: 1200, height: 630, alt: "Abhishek Shah" }],
      type: "website",
      siteName: "Abhishek Shah Portfolio"
  },
  keywords: [
    "Contact Abhishek",
    "Abhishek contact",
    "Abhishek Shah contact",
    "Contact Abhishek Shah",
    "Get in touch with Abhishek Shah",
    "Abhishek Shah contact details",
    "Full stack developer contact",
    "Contact Abhishek Shah for projects",
    "Contact Abhishek Shah for collaborations",
    "Abhishek Shah phone number",
    "Abhishek Shah email address",
    "Abhishek Shah social media links",
    "Contact information for Abhishek Shah",
    "Abhishek Shah contact info",
    "Abhishek Shah contact page",
    "Contact Abhishek Shah for freelance work",
    "Full stack developer contact information",
    "Full stack developer India",
    "Abhishek Shah contact information",
    "Abhishek Shah email",
    "Abhishek Shah social media",
    "Contact Abhishek Shah for web development",
    "Contact Abhishek Shah for software development",
    "Contact Abhishek Shah for mobile app development",
    "Contact Abhishek Shah for MERN Stack development",
    "Contact Abhishek Shah for Next.js development",
    "Contact Abhishek Shah for Flutter development",
    "Contact Abhishek Shah for React development",
    "Contact Abhishek Shah for Android development",
    "Contact Abhishek Shah for full stack development",
    "Contact Abhishek Shah for freelance projects",
    "Contact Abhishek Shah for collaborations",
    "Abhishek Shah contact details for projects",
    "Abhishek Shah contact details for collaborations",
    "Abhishek Shah phone number for contact",
    "Abhishek Shah email address for contact",
    "Abhishek Shah social media links for contact",
    "Abhishek Shah linkedIn profile for contact",
    "Abhishek Shah GitHub profile for contact",
    "Abhishek Shah Twitter profile for contact",
    "Abhishek Shah Instagram profile for contact",
  ],
  twitter: {
    card: "summary_large_image",
    title: "Contact | Abhishek Shah",
    description: "Contact full-stack engineer Abhishek Shah. Get in touch for custom web development, Flutter mobile apps, freelance projects, and technical collaborations.",
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

function ContactJsonLd() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Abhishek Shah",
      "description": "The official contact point for Abhishek Shah's professional services.",
      "url": "https://abhishekshah-portfolio.vercel.app/contact",
      "mainEntity": {
        "@type": "Person",
        "name": "Abhishek Shah",
        "jobTitle": "Full-Stack Developer",
        "email": "shahabhishek051@gmail.com",
        "telephone": "+91 78610 53202",
        "url": "https://abhishekshah-portfolio.vercel.app",
        "sameAs": [
          "https://github.com/abhishek-2006",
          "https://linkedin.com/in/abhishekshah-dev/",
          "https://twitter.com/AbhishekShah2006",
          "https://instagram.com/abhishekshah_112"
        ],
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
          "name": "Contact",
          "item": "https://abhishekshah-portfolio.vercel.app/contact"
        }
      ]
    }
  ];

  return (
    /* react-doctor: disable-next-line no-danger */
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function page() {
    return (
        <>
            <ContactJsonLd />
            <ContactPage />
        </>
    );
}