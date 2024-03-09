"use client"
import { fetchDataByGenre } from '@/app/redux/slices/movieGenreSlice'
import { AppDispatch, RootState } from '@/app/redux/store'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LoadingShadow from './LoadingShadow'
import { selectInputValue } from '@/app/redux/slices/inputSearchSlice'
import styles from './css/movieCard.module.css'
import Image from 'next/image'
import { Api } from '@/app/Api'
import RatingCircle from './RatingCircle'
import { deleteMovie } from '@/app/redux/slices/movieSlice'
import GenreFilter from './GenreFilter'

const FilteredGenreMovies = () => {
    const search: string | null = useSearchParams().get('genreType')
    const dispatch = useDispatch<AppDispatch>()
    const genreMovie = useSelector((state: RootState) => state.movieGenreData)
    const { movieGenreData, status, error } = genreMovie
    const inputValue = useSelector(selectInputValue)

    const [user, setUser] = useState<string>('')

    useEffect(() => {
        const storedUser = localStorage.getItem('LOGIN');
        if (!storedUser) {
            return
        }
        setUser(storedUser)

    }, [user])

    useEffect(() => {
        dispatch(fetchDataByGenre(search))
    }, [dispatch, search])
    const removeMovie = (movieId: string) => {

        dispatch(deleteMovie(movieId))
    }
    return (
        <div className="container mx-auto h-screen">
            <GenreFilter />
            <div className=" grid place-content-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-2 ">
                {
                    status === 'loading' ? <LoadingShadow cards={10} />
                        :
                        error ?
                            <div className="w-full text-center flex justify-center items-center">
                                <span className="text-xl text-red-600 p-2 font-semibold">{search} not available</span>
                            </div> :

                            ""}
                {movieGenreData?.filter((elem) => {
                    if (inputValue === elem.title) {
                        return true;
                    } else if (elem.title && elem.title.toLowerCase().includes(inputValue)) {
                        return true;
                    }
                    return false;
                })
                    .map((movie, idx) => {
                        return (
                            <div key={idx} className={styles.movieCard}>
                                <Link href={`/moviedetails/${movie._id}?genre=${encodeURIComponent(movie?.genre)}&title=${encodeURIComponent(movie?.title)}`} >
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
                                            <RatingCircle movie={movie} />
                                        </div>
                                        <div className={styles.movie_date}>
                                            <p className="text-sm">{movie?.date}</p>

                                        </div>
                                    </div>
                                </Link>
                                {user &&
                                    <div className={styles.movieCard_actions}>
                                        <svg onClick={() => removeMovie(movie._id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-red-600 cursor-pointer ">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                        </svg>
                                        <Link href={`/movieForm/update/${movie._id}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 cursor-pointer text-green-500">
                                                <path fillRule="evenodd" d="M5.433 13.917 6.695 10.76a4 4 0 0 1 1.155-1.343L14.77 3.5a2.121 2.121 0 0 1 3 3L10.62 10.42c-.196.196-.382.408-.558.632l-3.154 1.262a.5.5 0 0 1-.65-.65Zm-.566 2.067a2.25 2.25 0 0 1 3.183-3.183l1.253 1.253a1.25 1.25 0 0 0 1.767-1.767l-1.253-1.253a2.25 2.25 0 0 1-3.183 3.183l-1.253-1.253a1.25 1.25 0 0 0-1.767 1.767l1.253 1.253zM3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 1 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z"></path>
                                            </svg>
                                        </Link>
                                    </div>
                                }
                            </div>
                        )
                    })}

            </div>
        </div>

    )
}

export default FilteredGenreMovies
