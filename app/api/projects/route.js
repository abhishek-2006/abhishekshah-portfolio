import { NextResponse } from "next/server";
import { PROJECTS_DATA, normalizeSlug } from "../../data/projectsData";

const FALLBACK_PROJECTS = PROJECTS_DATA.map((p) => ({
  name: p.name,
  slug: p.slug,
  description: p.description,
  url: p.url,
  liveUrl: p.liveUrl,
  tech: p.tech,
  isGame: p.isGame,
  icon: p.isGame ? "game" : null,
  logo: p.logo,
  category: p.category,
  stars: p.stats?.stars || 0,
  forks: p.stats?.forks || 0,
}));

export async function GET() {
  try {
    const headers = {
      "User-Agent": "abhishek-portfolio",
      Accept: "application/vnd.github+json",
    };

    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const res = await fetch("https://api.github.com/users/abhishek-2006/repos?sort=updated&per_page=30", {
      headers,
      next: { revalidate: 3600 }, // Cache on edge for 1 hour
    });

    if (!res.ok) {
      console.warn(`GitHub API returned status ${res.status}. Falling back to cached projects.`);
      return NextResponse.json(FALLBACK_PROJECTS, { status: 200 });
    }

    const repos = await res.json();
    if (!Array.isArray(repos) || repos.length === 0) {
      return NextResponse.json(FALLBACK_PROJECTS, { status: 200 });
    }

    const projects = await Promise.all(
      repos.map(async (repo) => {
        let langs = [];
        try {
          if (repo.languages_url) {
            const langRes = await fetch(repo.languages_url, {
              headers,
              next: { revalidate: 86400 }, // Cache languages for 24h
            });
            if (langRes.ok) {
              const languages = await langRes.json();
              langs = Object.keys(languages);
            }
          }
        } catch {
          // Gracefully continue with primary repo language
          if (repo.language) langs = [repo.language];
        }

        const isTicTacToe = repo.name.toLowerCase().includes("tictactoe");
        const isChess = repo.name.toLowerCase().includes("chess");
        const isGame = isTicTacToe || isChess;

        let category = "Web";
        if (isGame) category = "Android";
        else if (langs.includes("Dart") || langs.includes("Kotlin")) category = "Mobile";
        else if (langs.includes("PHP") || langs.includes("Java")) category = "Full Stack";

        const slug = isTicTacToe
          ? "tictactoe"
          : isChess
          ? "chess"
          : normalizeSlug(repo.name);

        return {
          name: isTicTacToe ? "TicTacToe" : isChess ? "Chess" : repo.name.replace(/-/g, " "),
          slug: slug,
          description: isTicTacToe
            ? "A premium Android edition of the classic game. Built with Flutter, featuring adaptive AI levels and neo-dark aesthetic."
            : isChess
            ? "A modern, beautiful, and feature-rich chess application. Built with Flutter for cross-platform play."
            : repo.description || "Experimental project focusing on modern architecture.",
          url: repo.html_url,
          liveUrl: isTicTacToe ? "/tictactoe" : isChess ? "/chess" : repo.homepage || null,
          tech: langs.length ? langs : repo.language ? [repo.language] : ["General"],
          isGame: isGame,
          icon: isGame ? "game" : null,
          logo: isTicTacToe ? "/tictactoe-logo.png" : isChess ? "/chess-logo.png" : "/favicon.ico",
          category: category,
          stars: repo.stargazers_count || 0,
          forks: repo.forks_count || 0,
        };
      })
    );

    // Sort games first
    const sortedProjects = projects.sort((a, b) => {
      if (a.isGame && !b.isGame) return -1;
      if (!a.isGame && b.isGame) return 1;
      return 0;
    });

    return NextResponse.json(sortedProjects, { status: 200 });
  } catch (err) {
    console.error("Projects API Error:", err);
    return NextResponse.json(FALLBACK_PROJECTS, { status: 200 });
  }
}
