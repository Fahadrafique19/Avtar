"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaPlay } from "react-icons/fa";

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

export default function HeroSection() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("https://api.themoviedb.org/3/trending/movie/week", {
          params: {
            api_key: API_KEY,
            language: "en-US",
          },
        });

        if (!response.data || response.data.results.length === 0) {
          throw new Error("No movies found");
        }

        console.log("✅ Movies:", response.data.results);
        const randomMovie = response.data.results[Math.floor(Math.random() * response.data.results.length)];
        setMovie(randomMovie);
      } catch (error) {
        console.error("❌ Error fetching movies:", error);
        setMovie({
          title: "Default Movie",
          backdrop_path: "/default-banner.jpg",
          vote_average: 7.5,
          release_date: "2023-01-01",
          overview: "This is a fallback movie in case of API failure.",
        });
      }
    };

    fetchMovies();
  }, []);

  return (
    <section
      className="relative h-screen w-full flex items-center justify-center text-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path || "/default-banner.jpg"})`,
      }}
    >
      <div className="relative w-11/12 max-w-screen-2xl mx-auto text-center lg:text-left">
        {movie ? (
          <>
            <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm uppercase">
              New
            </span>
            <p className="text-gray-300 mt-2 text-lg lg:text-xl">Best of {new Date(movie.release_date).getFullYear()}</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mt-4">
              {movie.title}
            </h1>
            <div className="flex flex-wrap items-center justify-center lg:justify-start space-x-4 mt-4 text-lg">
              <span className="bg-gray-700 px-3 py-1 rounded">PG-18</span>
              <span className="bg-yellow-500 px-3 py-1 rounded">
                IMDb {movie.vote_average.toFixed(1)}
              </span>
              <span>{new Date(movie.release_date).getFullYear()}</span>
            </div>
            <p className="mt-4 text-gray-300 w-full md:w-8/12 lg:w-6/12 text-base lg:text-lg">
              {movie.overview}
            </p>
            <div className="mt-6 flex flex-wrap justify-center max-md:gap-4 lg:justify-start space-x-4">
              <button className="bg-pink-600 px-6 py-2 rounded-lg text-lg hover:bg-pink-700">
                ▶ Watch Now
              </button>
              <button className="bg-gray-700 px-6 py-2 rounded-lg flex items-center text-lg hover:bg-gray-800">
                <FaPlay className="mr-2" /> Watch Trailer
              </button>
            </div>
          </>
        ) : (
          <p className="text-white text-xl">Loading movie...</p>
        )}
      </div>
    </section>
  );
}
