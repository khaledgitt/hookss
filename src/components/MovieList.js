import React, { useState } from "react";
import Filter from "./Filter";
import MovieCard from "./MovieCard";

export default function MovieList({ movies }) {
    const [text, settext] = useState("");
    const [rate, setrate] = useState("");

    const filterText = (txt) => {
        settext(txt);
    };
    const filterRate = (rt) => {
        setrate(rt);
    };

    return (
        <>
            <Filter filterText={filterText} filterRate={filterRate} />

            <div className="listcard">
                {movies
                    .filter(
                        (movie) =>
                            movie.name.toLowerCase().includes(text.toLowerCase()) &&
                            movie.rating >= rate
                    )
                    .map((movie) => (
                        <MovieCard movie={movie} />
                    ))}
            </div>
        </>
    );
}