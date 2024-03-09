'use client'

import { selectInputValue } from '@/app/redux/slices/inputSearchSlice'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/app/redux/store'
import { useEffect } from 'react'
import { fetchMovies } from '@/app/redux/slices/movieSlice'

import LoadingShadow from './LoadingShadow'
import Movie from './Movies'
import GenreFilter from './GenreFilter'


const MovieList = () => {
    const dispatch = useDispatch<AppDispatch>()

    const inputValue = useSelector(selectInputValue)

    const movieLIst = useSelector((state: RootState) => state.movie)
    const { movies, status, error } = movieLIst

    // const genre = movies?.map((genre) => { return genre.genre })
    // const date = movies?.map((date) => { return date.date })

    useEffect(() => {
        dispatch(fetchMovies())
    }, [dispatch])



    return (
        <div className="container mx-auto h-screen">
            <GenreFilter />
            <div className=" grid place-content-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-2 ">
                {
                    status === 'loading' ?
                        <LoadingShadow cards={10} />
                        : error ?
                            <div className="w-full text-center flex justify-center items-center">
                                <span className="text-xl text-red-600 p-2 font-semibold">movies not available</span>
                            </div>
                            :
                            movies?.filter((elem) => {
                                if (inputValue === elem.title) {
                                    return true;
                                } else if (elem.title && elem.title.toLowerCase().includes(inputValue)) {
                                    return true;
                                }
                                return false;
                            })
                                .map((movie, idx: number) => {
                                    const rating: string | undefined = movie?.rating
                                    const parseRating: number = parseFloat(rating || '0');
                                    return (
                                        <Movie movie={movie} key={idx} />
                                    )
                                })
                }

            </div>
        </div >

    )
}

export default MovieList
