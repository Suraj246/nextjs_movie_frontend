import { movieObjType } from '@/app/types'
import React, { ChangeEvent } from 'react'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface PropsType {
    movie: movieObjType;
    movieHandleSubmit: (e: ChangeEvent<HTMLFormElement>) => void;
    logout: () => void;
    handleMovieChange: (e: ChangeEvent<HTMLInputElement>) => void;
    description: string
    handleDescriptionChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    imageName: string | undefined;
    handleImageChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleVideoChange: (e: ChangeEvent<HTMLInputElement>) => void;
    Type: string;
    handleMovieTypeChange: (e: ChangeEvent<HTMLSelectElement>) => void;
    genre: string;
    handleGenreChange: (e: ChangeEvent<HTMLSelectElement>) => void
    uploadProgress: number
    videoUploaded: Boolean
    videos: FileList | null
}

const CreateMovieUI: React.FC<PropsType> = ({ videos, videoUploaded, uploadProgress, imageName, genre, handleGenreChange, Type, handleMovieTypeChange, movie, movieHandleSubmit, logout, handleMovieChange, description, handleDescriptionChange, handleImageChange, handleVideoChange }) => {
    const genreArray = ['Action', 'Comedy', 'Adventure', 'Crime']
    return (
        <form className='bg-gray-900' onSubmit={movieHandleSubmit}>
            <div className="p-6">
                <div className="flex items-center justify-end">
                    <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 512 512" className="h-6 w-6 cursor-pointer" onClick={logout}>
                        <path fill="#e81717" d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z" />
                    </svg>
                </div>
                <div className="">
                    <label htmlFor="title" className="block text-sm font-medium leading-6 text-white">
                        Movie Title
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="title"
                            value={movie.title}
                            onChange={handleMovieChange}
                            id="title"
                            autoComplete="given-name"
                            className="block w-full rounded-md  border-0 px-1.5 py-1.5 text-white shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 bg-neutral-800"
                            required
                        />
                    </div>
                </div>

                <div className='grid gap-4  grid-cols-2 mt-2'>
                    <div className="">
                        <label htmlFor="language" className="block text-sm font-medium leading-6 text-white">
                            Language
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="language"
                                value={movie.language}
                                onChange={handleMovieChange}
                                id="language"
                                autoComplete="given-name"
                                className="block w-full rounded-md  border-0 px-1.5 py-1.5 text-white shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 bg-neutral-800"
                                required
                            />
                        </div>
                    </div>
                    <div className="">
                        <label htmlFor="type" className="block text-sm font-medium leading-6 text-white">
                            Type
                        </label>
                        <div className="mt-2">
                            <select
                                name="type"
                                value={Type}
                                onChange={handleMovieTypeChange}
                                id="type"
                                className="block w-full rounded-md  border-0 px-1.5 py-1.5 text-white shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 bg-neutral-800"
                            >
                                <option value="movies" className="py-2">movies</option>
                                <option value="series" className="py-2">series</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className='grid gap-4  grid-cols-2 mt-2'>
                    <div className="">
                        <label htmlFor="date" className="block text-sm font-medium leading-6 text-white">
                            Release Date
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="date"
                                value={movie.date}
                                onChange={handleMovieChange}
                                id="date"
                                autoComplete="given-name"
                                className="block w-full rounded-md  border-0 px-1.5 py-1.5 text-white shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 bg-neutral-800"
                                required
                            />
                        </div>
                    </div>
                    <div className="">
                        <label htmlFor="genre" className="block text-sm font-medium leading-6 text-white">
                            Genre
                        </label>
                        <div className="mt-2">
                            <select
                                name="genre"
                                value={genre}
                                onChange={handleGenreChange}
                                id="genre"
                                className="block w-full rounded-md  border-0 px-1.5 py-1.5 text-white shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 bg-neutral-800"
                            >
                                {genreArray.map(genre => <option key={genre.length} value={genre} className="py-2">{genre}</option>)}

                            </select>
                        </div>
                    </div>
                </div>

                <div className="mt-2">
                    <label htmlFor="actors" className="block text-sm font-medium leading-6 text-white">
                        Actors
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="actors"
                            value={movie.actors}
                            onChange={handleMovieChange}
                            id="actors"
                            autoComplete="given-name"
                            className="block w-full rounded-md  border-0 px-1.5 py-1.5 text-white shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 bg-neutral-800"
                            required
                        />
                    </div>
                </div>

                <div className='grid gap-4  grid-cols-2 mt-2'>
                    <div className="">
                        <label htmlFor="country" className="block text-sm font-medium leading-6 text-white">
                            Country
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="country"
                                value={movie.country}
                                onChange={handleMovieChange}
                                id="country"
                                autoComplete="given-name"
                                className="block w-full rounded-md  border-0 px-1.5 py-1.5 text-white shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 bg-neutral-800"
                                required
                            />
                        </div>
                    </div>
                    <div className="">
                        <label htmlFor="rating" className="block text-sm font-medium leading-6 text-white">
                            Rating
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="rating"
                                value={movie.rating}
                                onChange={handleMovieChange}
                                id="rating"
                                autoComplete="given-name"
                                placeholder='1-10'
                                className="block w-full rounded-md  border-0 px-1.5 py-1.5 text-white shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 bg-neutral-800"
                            />
                        </div>
                    </div>
                </div>

                <div className="col-span-full mt-2">
                    <label htmlFor="description" className="block text-sm font-medium leading-6  text-white">
                        Overview
                    </label>
                    <div className="mt-2">
                        <textarea
                            id="description"
                            name="description"
                            value={description}
                            onChange={handleDescriptionChange}
                            rows={3}
                            className="block w-full rounded-md  border-0 px-1.5 py-1.5 text-white shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 bg-neutral-800"
                            required
                        />
                    </div>
                </div>

                <div className="mt-2 ">
                    <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-white">
                        Movie Image
                    </label>
                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 bg-neutral-800">
                        <div className="grid gap-2 text-center">
                            <div className=" mt-4 flex gap-4 text-sm leading-6 text-gray-600">
                                <label
                                    htmlFor="image"
                                    className="px-1  relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                >
                                    <span>Upload a Image</span>
                                    <input id='image' name="image" accept="image/*" type="file" className="sr-only"
                                        onChange={handleImageChange}
                                    />
                                </label>
                                <span>{imageName}</span>

                            </div>
                            <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                        </div>
                    </div>
                </div>

                <div className="mt-2">
                    <label htmlFor="trailer" className="block text-sm font-medium leading-6  text-white">
                        Movie Trailer
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="trailer"
                            value={movie.trailer}
                            onChange={handleMovieChange}
                            id="trailer"
                            autoComplete="given-name"
                            className="block w-full rounded-md  border-0 px-1.5 py-1.5 text-white shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 bg-neutral-800"
                            required
                        />
                    </div>
                </div>

                <div className="mt-2">
                    <label htmlFor="videos" className="block text-sm font-medium leading-6 text-white">
                        Full Movie
                    </label>
                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 bg-neutral-800">
                        <div className="text-center">
                            <div className=" mt-4 flex flex-col gap-4 justify-center items-center text-sm leading-6 text-gray-600">
                                <label
                                    htmlFor="videos"
                                    className=" px-1 relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                >
                                    <span>Upload a Movie</span>
                                    <input id='videos' name="videos" multiple type="file" className="sr-only"
                                        onChange={handleVideoChange}
                                    />
                                </label>
                                <div>
                                    {
                                        videos ? (
                                            Array.from(videos)?.map((video, index) => (
                                                <div key={index} className='grid gap-2 justify-items-start '>
                                                    <span className='text-sky-400/100'>{video?.name}</span>

                                                </div>
                                            ))
                                        ) : (
                                            <span className=''>no video selected</span>
                                        )
                                    }
                                </div>
                                {videoUploaded && (
                                    <div style={{ width: "30%" }}>
                                        <CircularProgressbar
                                            maxValue={100} // Assuming maxValue is 100 for progress percentage
                                            strokeWidth={5}
                                            value={uploadProgress}
                                            text={`${uploadProgress}%`}
                                            styles={buildStyles({
                                                pathColor: uploadProgress > 35 ? "green" : "red",
                                            })}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6 p-6">
                <button type="button" className="text-sm font-semibold leading-6 text-white">
                    Cancel
                </button>
                <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Upload
                </button>
            </div>
        </form>
    )
}

export default CreateMovieUI
