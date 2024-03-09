import { movieCardTypes } from '@/app/Api';
import React from 'react'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface MovieProps {
    movie: movieCardTypes
}

const RatingCircle: React.FC<MovieProps> = ({ movie }) => {
    const rating: string | undefined = movie?.rating
    const parseRating: number = parseFloat(rating || '0');
    return (
        <div style={{ width: "20%" }}>
            <CircularProgressbar
                maxValue={10}
                strokeWidth={5}
                value={parseRating}
                text={movie?.rating}
                styles={buildStyles({
                    pathColor: parseRating > 5 ? "green" : "red",
                    textSize: "30px"
                })}
            />
        </div>
    )
}

export default RatingCircle
