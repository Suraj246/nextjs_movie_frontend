"use client"
import { Api, movieCardTypes } from '@/app/Api';
import { fetchMovies } from '@/app/redux/slices/movieSlice';
import { AppDispatch, RootState } from '@/app/redux/store';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styles from '../movieList/css/movieCard.module.css'
import Link from 'next/link';
import Image from 'next/image';
interface genreProps {
    genre: string | null;

}

const GenreMovieFilter: React.FC<genreProps> = ({ genre }) => {
    const params = useParams()

    const { movies, status, error } = useSelector((state: RootState) => state.movie)
    const dispatch = useDispatch<AppDispatch>()

    const [genreMovie, setGenresMovie] = useState<movieCardTypes[]>([])

    useEffect(() => {
        dispatch(fetchMovies())
    }, [dispatch]);

    // accessing movie details using genre
    useEffect(() => {
        const filterMovieFromGenre = movies.filter(movie => movie._id !== params.id && movie.genre === genre);
        setGenresMovie(filterMovieFromGenre);
    }, [genre, params, movies])



    return (
        <div className=" grid place-content-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 p-2">

            {genreMovie?.length === 0 ? <span className='text-sm text-white'>No Suggestions available </span> :
                genreMovie?.map((movie, idx) => {
                    const rating: string | undefined = movie?.rating
                    const parseRating: number = parseFloat(rating || '0');
                    return (
                        <div key={idx} className={styles.movieCard}>
                            <Link href={`/moviedetails/${movie._id}?genre=${encodeURIComponent(movie?.genre)}&title=${encodeURIComponent(movie?.title)}`}

                            >
                                {
                                    !movie?.image ?
                                        <Image
                                            src='/no-image.jpg'
                                            alt='image not available'
                                            className={styles.image_card}
                                            width={500}
                                            height={600}
                                        />
                                        :
                                        <Image src={`${Api}/uploads/image/${movie?.image}`}
                                            alt='image not available'
                                            className={styles.image_card}
                                            width={400}
                                            height={550}
                                        />
                                }
                                <div className={styles.movieDetails_container}>
                                    <div className={styles.movie_title_container}>
                                        <div>
                                            <h3 className="text-sm font-semibold capitalize">{movie?.title}</h3>
                                            <h3 className="text-xs capitalize">{movie?.language}</h3>
                                        </div>

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

                                    </div>
                                    <div className={styles.movie_date}>
                                        <p className="text-sm">{movie?.date}</p>
                                    </div>
                                </div>
                            </Link>

                        </div>
                    )
                })
            }
        </div>
    )
}

export default GenreMovieFilter
