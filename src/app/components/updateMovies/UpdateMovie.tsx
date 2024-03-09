'use client'
import { Api } from '@/app/Api'
import { fetchMovies, updateMovieData } from '@/app/redux/slices/movieSlice'
import { AppDispatch, RootState } from '@/app/redux/store'
import { movieObjType, updateMovieObjType } from '@/app/types'
import axios from 'axios'
import { useParams, usePathname, useRouter } from 'next/navigation'
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UpdateMovieUI from './UpdateMovieUI'

const UpdateMovie = () => {
    const router = useRouter()
    const pathname = usePathname()
    const params = useParams()
    const dispatch = useDispatch<AppDispatch>()
    const movieLIst = useSelector((state: RootState) => state.movie)

    useEffect(() => {
        dispatch(fetchMovies())
    }, [dispatch])

    const { movies, status, error } = movieLIst
    const filterMovieFromParamsId = movies.filter(movie => movie._id === params.id)



    const [updateMovie, setMovie] = useState<updateMovieObjType>({
        title: filterMovieFromParamsId[0]?.title ? filterMovieFromParamsId[0]?.title : '',
        date: filterMovieFromParamsId[0]?.date ? filterMovieFromParamsId[0]?.date : '',
        language: filterMovieFromParamsId[0]?.language ? filterMovieFromParamsId[0]?.language : '',
        actors: filterMovieFromParamsId[0]?.actors ? filterMovieFromParamsId[0]?.actors : '',
        country: filterMovieFromParamsId[0]?.country ? filterMovieFromParamsId[0]?.country : "",
        rating: filterMovieFromParamsId[0]?.rating ? filterMovieFromParamsId[0]?.rating : "NA",
        movieTrailer: filterMovieFromParamsId[0]?.movieTrailer ? filterMovieFromParamsId[0]?.movieTrailer : ''
    })

    // const [Type, setType] = useState<string>('movies')
    // const [genre, setGenre] = useState<string>('action')

    const [description, setDescription] = useState(filterMovieFromParamsId[0]?.description ? filterMovieFromParamsId[0]?.description : '')

    const handleMovieChange = (e: ChangeEvent<HTMLInputElement>) => {
        setMovie({ ...updateMovie, [e.target.name]: e.target.value })
    }
    // const handleMovieTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    //     setType(e.target.value);
    // };
    // const handleGenreChange = (e: ChangeEvent<HTMLSelectElement>) => {
    //     setGenre(e.target.value);
    // };
    const movieHandleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const movieId = params.id
        dispatch(updateMovieData({ movieId, updateMovie, description }))
        router.back()
    }

    const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value)
    }

    useEffect(() => {
        const storedUser = localStorage.getItem('LOGIN');
        if (!storedUser && !pathname.includes('/loginPage')) {
            router.push('/loginPage');
        }
    }, [router, pathname])



    return (
        <div>
            <UpdateMovieUI
                updateMovie={updateMovie}
                movieHandleSubmit={movieHandleSubmit}
                handleMovieChange={handleMovieChange}
                // handleMovieTypeChange={handleMovieTypeChange}
                // Type={Type}
                // genre={genre}
                description={description}
                handleDescriptionChange={handleDescriptionChange}
            // handleGenreChange={handleGenreChange}
            />
        </div>
    )
}

export default UpdateMovie
