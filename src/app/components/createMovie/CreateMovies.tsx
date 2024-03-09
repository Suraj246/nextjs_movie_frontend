"use client"
import { Api } from '@/app/Api'
import { movieObjType } from '@/app/types'
import axios from 'axios'
import { usePathname, useRouter } from 'next/navigation'
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import CreateMovieUI from './CreateMovieUI'


const CreateMovies: React.FC = () => {
    const router = useRouter()
    const pathname = usePathname()

    const [movie, setMovie] = useState<movieObjType>({
        title: '',
        date: '',
        language: '',
        actors: '',
        country: "",
        rating: "",
        trailer: ''
    })

    const [Type, setType] = useState<string>('movies')
    const [genre, setGenre] = useState<string>('action')

    const [description, setDescription] = useState('')
    const [image, setImage] = useState<File | null>(null)
    const imageName: string | undefined = image?.name

    const [videos, setVideos] = useState<FileList | null>(null)
    const [uploadProgress, setUploadProgress] = useState<number>(0);
    const [videoUploaded, setVideoUploaded] = useState<Boolean>(false)
    const handleMovieChange = (e: ChangeEvent<HTMLInputElement>) => {
        setMovie({ ...movie, [e.target.name]: e.target.value })
    }
    const handleMovieTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setType(e.target.value);
    };
    const handleGenreChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setGenre(e.target.value);
    };
    const movieHandleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const { title, language, date, actors, country, rating, trailer } = movie
        try {
            const formData = new FormData()
            formData.append('title', title)
            formData.append('language', language)
            formData.append("type", Type)
            formData.append('date', date)
            formData.append('genre', genre.toLowerCase())
            formData.append('actors', actors)
            formData.append('country', country)
            formData.append('rating', rating)
            formData.append('trailer', trailer)
            formData.append('description', description)
            if (image) {
                formData.append('image', image)
            }
            interface VideosObject {
                [key: string]: File;
            }
            if (videos) {
                for (const [key, file] of Object.entries(videos)) {
                    formData.append('videos', file);
                }
            }



            const { data } = await axios.post(`${Api}/movieData/createMovie`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data' // Set the Content-Type header to multipart/form-data
                }
                ,
                onUploadProgress: (progressEvent) => {
                    if (progressEvent.total !== undefined) {
                        setVideoUploaded(!videoUploaded)
                        const progress: number = Math.round((progressEvent.loaded / progressEvent.total) * 100);
                        // Update progress bar state here
                        setUploadProgress(progress);
                    }
                }
            })
            if (data) {
                setMovie({
                    title: '',
                    date: '',
                    language: '',
                    actors: '',
                    country: "",
                    rating: "NA",
                    trailer: ''
                });
                setDescription('')
                setImage(null);
                setVideos(null);
                setUploadProgress(0)
                alert("movie uploaded successfully")

            }

        } catch (error) {
            alert(error)
            return error
        }

    }


    const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value)
    }
    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] ? e.target.files?.[0] : null
        setImage(file)
    }
    const handleVideoChange = (e: ChangeEvent<HTMLInputElement>) => {
        // for single file
        // const file = e.target.files?.[0] ? e.target.files?.[0] : null

        setVideos(e.target.files)
    }


    useEffect(() => {
        const storedUser = localStorage.getItem('LOGIN');
        if (!storedUser && !pathname.includes('/loginPage')) {
            router.push('/loginPage');
        }

    }, [router, pathname])

    const logout = () => {
        localStorage.removeItem('LOGIN');
        window.location.reload()
    };

    return (
        <main>
            <CreateMovieUI
                movie={movie}
                movieHandleSubmit={movieHandleSubmit}
                logout={logout}
                handleMovieChange={handleMovieChange}
                description={description}
                handleDescriptionChange={handleDescriptionChange}
                imageName={imageName}
                handleImageChange={handleImageChange}
                handleVideoChange={handleVideoChange}
                Type={Type}
                handleMovieTypeChange={handleMovieTypeChange}
                genre={genre}
                handleGenreChange={handleGenreChange}
                uploadProgress={uploadProgress}
                videoUploaded={videoUploaded}
                videos={videos}
            />
        </main>

    )
}

export default CreateMovies
