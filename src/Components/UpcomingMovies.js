"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function UpcomingMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`
        );

        if (!res.ok) throw new Error("Failed to fetch movies");

        const data = await res.json();
        if (data.results) {
          setMovies(data.results.slice(0, 4));
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <section className="p-10 text-white mb-5 bg-cover bg-center bg-no-repeat">
      <h2 className="text-2xl font-bold mb-6">
        Upcoming Movies 
        <span className="ml-2 border-b-2 border-red-500 inline-block w-10" />
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Featured Movie */}
        {movies.length > 0 && (
          <div className="lg:col-span-2 relative group rounded-xl overflow-hidden transform transition-transform hover:-translate-y-2">
            <div className="relative aspect-video">
              <Image
                src={`https://image.tmdb.org/t/p/original${movies[0].backdrop_path}`}
                alt={movies[0].title}
                fill
                priority
                className="object-cover transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-2xl font-bold mb-2">{movies[0].title}</h3>
              <p className="text-gray-300 line-clamp-3 mb-3">{movies[0].overview}</p>
              <div className="flex items-center text-sm">
                <span className="mr-4">📅 {formatDate(movies[0].release_date)}</span>
                <span className="flex items-center">
                  ⭐ {movies[0].vote_average?.toFixed(1) || 'N/A'}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Movie List */}
        <div className="grid grid-cols-1 gap-4">
          {movies.slice(1).map((movie, index) => (
            <div 
              key={movie.id}
              className="group relative rounded-xl overflow-hidden hover:bg-gray-900/30 transition-colors transform transition-transform hover:-translate-y-2"
            >
              <div className="flex gap-4">
                <div className="relative w-24 h-32 flex-shrink-0">
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                
                <div className="py-2 pr-4">
                  <h3 className="font-semibold line-clamp-1">{movie.title}</h3>
                  <p className="text-sm text-gray-300 line-clamp-2 mt-1">
                    {movie.overview}
                  </p>
                  <div className="flex items-center mt-2 text-xs">
                    <span className="text-gray-400">
                      {formatDate(movie.release_date)}
                    </span>
                    <span className="mx-2">•</span>
                    <span className="flex items-center">
                      ⭐ {movie.vote_average?.toFixed(1) || 'N/A'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
