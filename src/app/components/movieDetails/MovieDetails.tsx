'use client'
import { Api } from "@/app/Api"
import { fetchMovies } from "@/app/redux/slices/movieSlice"
import { AppDispatch, RootState } from "@/app/redux/store"
import Image from "next/image"
import { useParams, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import VideoCarousel from "./VideoCarousel"
import Buttons from "./Buttons"

import YoutubeTrailer from "./YoutubeTrailer"
import MovieDetailsSkeleton from "./MovieDetailsSkeleton"
import GenreMovieFilter from "./GenreMovieFilter"
import Footer from "../footer/Footer"

interface movieDetailsObjType {
    title: string;
    image: string;
    genre: string;
    description: string;
    date: string;
    language: string;
    actors: string;
    country: string;
    rating: string;
    trailer: string;
    videos: string[]
}

const MovieDetails = () => {
    const params = useParams()
    const search = useSearchParams().get("genre")

    const dispatch = useDispatch<AppDispatch>()

    const [movieData, setMovieData] = useState<movieDetailsObjType | null>(null)

    const { movies, status, error } = useSelector((state: RootState) => state.movie)

    useEffect(() => {
        dispatch(fetchMovies())
    }, [dispatch]);

    // accessing movie details using id
    useEffect(() => {
        const filterMovieFromParamsId = movies.filter(movie => movie._id === params.id);
        if (filterMovieFromParamsId.length > 0) {
            const movieDetails = filterMovieFromParamsId[0];
            setMovieData(movieDetails);
        }
    }, [params.id, movieData, movies])

    // converting string rating to number
    const rating: string | undefined = movieData?.rating
    const parseRating: number = parseFloat(rating || '0');

    // getting youtube video id 
    const newUrl: string | undefined = movieData?.trailer;
    let urlPathName: string | undefined = '';
    if (newUrl) {
        try {
            const url = new URL(newUrl);
            urlPathName = url.pathname;
        } catch (error) {
            console.error("Invalid URL:", error);
        }
    } else {
        console.log("Trailer URL is undefined or null.");
    }

    return (
        <div className="m-2 h-screen sm:h-full sm:relative mx-0 sm:container sm:mx-auto shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] mb-12">

            {status === "loading" ?
                <MovieDetailsSkeleton />
                : error ?
                    <div className="text-center h-screen flex justify-center items-center bg-black">
                        <span className="text-2xl text-red-600 p-2 font-semibold">details not available</span>
                    </div>
                    :
                    <div>
                        {!movieData?.image ?
                            <Image
                                src='/black.jpg'
                                alt=""
                                className="w-full h-fit block lg:h-screen object-contain sm:object-cover overflow-hidden"
                                width={400}
                                height={550}

                            />
                            :
                            <Image
                                src={`${Api}/uploads/image/${movieData?.image}`}
                                alt=""
                                className="w-full h-fit block sm:h-full object-contain sm:object-cover overflow-hidden"
                                width={400}
                                height={550}
                            />
                        }
                        <div className="w-full lg:absolute lg:top-0 lg:right-0 lg:w-full lg:h-5/6 lg:grid lg:mt-14  sm:p-4 text-white">
                            <div className="flex flex-col items-end w-full h-2/4 ">
                                <div className="flex flex-col gap-2 lg:gap-4 p-2 w-fit h-fit lg:inset-0 bg-gray-900/30">
                                    <div className="flex gap-4 items-center justify-between">
                                        <h1 className="text-xl font-semibold lg:text-2xl lg:font-bold sm:font-semibold ">{movieData?.title}</h1>
                                        <div style={{ width: "10%" }}>
                                            <CircularProgressbar
                                                maxValue={10}
                                                strokeWidth={5}
                                                value={parseRating}
                                                text={movieData?.rating}
                                                styles={buildStyles({
                                                    pathColor: parseRating > 5 ? "green" : "red",
                                                    textColor: "white"
                                                })}
                                            />
                                        </div>
                                    </div>

                                    <span className="capitalize text-sm">genre: {movieData?.genre}</span>
                                    <span className="capitalize text-sm">released: {movieData?.date}</span>
                                    <span className="capitalize text-sm">language: {movieData?.language}</span>
                                    <span className="capitalize text-sm">actors: {movieData?.actors}</span>
                                    <span className="capitalize text-sm">country: {movieData?.country}</span>

                                    <div className="capitalize grid gap-1">
                                        <span >overview:</span>
                                        <p className="ml-4 text-sm sm:text-base">{movieData?.description}</p>
                                    </div>

                                </div>
                                <Buttons />
                            </div>

                        </div>
                        <div className="mt-6">
                            <YoutubeTrailer urlPathName={urlPathName} />
                            <VideoCarousel videos={movieData?.videos} videoImg={movieData?.image} />
                        </div>

                    </div>
            }
            <div className="mx-0 lg:mx-11 mb-11">
                <span className="text-white pl-2 ">More Suggestions</span>
                <GenreMovieFilter genre={search} />
            </div>
            <div>
                <Footer />
            </div>
        </div>

    )
}

export default MovieDetails
