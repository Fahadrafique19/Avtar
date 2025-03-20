import { NextResponse } from "next/server";

export async function GET() {
  try {
    const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "API Key Missing" }, { status: 500 });
    }

    const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`;
    const res = await fetch(url, { cache: "no-store" }); // ✅ Prevent caching issues

    if (!res.ok) {
      return NextResponse.json({ error: "Failed to fetch movies" }, { status: res.status });
    }

    const { results } = await res.json();
    return NextResponse.json(results.slice(0, 8)); // ✅ Send first 8 movies

  } catch (error) {
    console.error("❌ API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
