"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Distributions() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(null);

        // Random page number between 1-5 for variety
        const randomPage = Math.floor(Math.random() * 5) + 1;
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=${randomPage}`
        );

        if (!res.ok) throw new Error("Failed to fetch movies");

        const data = await res.json();
        if (data.results) {
          // Shuffle movies and pick first 6
          const shuffled = [...data.results].sort(() => 0.5 - Math.random());
          setMovies(shuffled.slice(0, 6));
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
        setError("Failed to load movies. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="text-white bg-cover" style={{ backgroundImage: "url('/Section 1 (3).png')" }}>
      <section className="max-w-7xl mx-auto py-16 px-6 mb-20">
        <h2 className="text-3xl font-bold text-center mb-10">Latest Distributions</h2>

        {/* Loading State */}
        {loading && <p className="text-center text-gray-400">Loading movies...</p>}

        {/* Error Message */}
        {error && <p className="text-center text-red-400">{error}</p>}

        {/* Movies Grid */}
        {!loading && !error && (
          <div className="grid md:grid-cols-3 gap-8">
            {movies.map((movie) => (
              <div key={movie.id} className="bg-gray-800 rounded-lg overflow-hidden group relative transition-transform transform hover:-translate-y-2">
                <Image 
                  src={movie.poster_path ? 
                    `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 
                    '/placeholder-movie.jpg'} 
                  alt={movie.title} 
                  width={400} 
                  height={250} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{movie.title}</h3>
                  <p className="text-gray-400 mt-2 line-clamp-3">
                    {movie.overview || "No description available."}
                  </p>
                  <Link 
                    href={`/movies/${movie.id}`} 
                    className="mt-3 inline-block text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
