"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function SecondSection() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const apiKey = "3a3f612abfac691c30934c102a57a872"; // ✅ Apni TMDB API key yahan lagayein
        const res = await fetch(
          `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&language=en-US`
        );

        if (!res.ok) throw new Error("Failed to fetch movies");

        const data = await res.json();
        if (data.results) {
          setMovies(data.results.slice(0, 8 )); // ✅ Sirf 8 movies dikhayenge
        }
      } catch (error) {
        console.error("❌ Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <section
      className="py-12 px-6 text-white bg-no-repeat bg-cover"
      style={{ backgroundImage: "url('/bgphoto.png')" }}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Latest Distributions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <div
                key={movie.id}
                className="bg-gray-900 p-4 rounded-lg shadow-lg hover:scale-105 transition"
              >
                <Image
                  src={movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : "/placeholder.jpg"}
                  alt={movie.title}
                  width={300}
                  height={450}
                  className="rounded-lg"
                />
                <h3 className="mt-3 text-lg font-semibold">{movie.title}</h3>
                <p className="text-sm text-gray-400">
                  ⭐ {movie.vote_average.toFixed(1)} | 📅{" "}
                  {new Date(movie.release_date).getFullYear()}
                </p>
              </div>
            ))
          ) : (
            <p className="text-white text-xl">Loading movies...</p>
          )}
        </div>
      </div>
    </section>
  );
}
