import { MetadataRoute } from "next";


export default function robots(): MetadataRoute.Robots {
    const baseUrl = "https://abhishekshah-portfolio.vercel.app";

    return {
        rules: [
        {
            userAgent: "*",
            allow: "/",
            disallow: "/api/",
        },
        {
            userAgent: "OAI-SearchBot",
            allow: "/",
        },
        {
            userAgent: "Claude-SearchBot",
            allow: "/",
        },
        {
            userAgent: "Claude-User",
            allow: "/",
        },
        {
            userAgent: "PerplexityBot",
            allow: "/",
        },
        {
            userAgent: "GPTBot",
            allow: "/",
        },
        {
            userAgent: "Google-Extended",
            allow: "/",
        },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    };
}