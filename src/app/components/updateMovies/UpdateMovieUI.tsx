import { movieObjType } from '@/app/types'
import React, { ChangeEvent } from 'react'

interface PropsType {
    updateMovie: movieObjType;
    movieHandleSubmit: (e: ChangeEvent<HTMLFormElement>) => void;
    handleMovieChange: (e: ChangeEvent<HTMLInputElement>) => void;
    description: string
    handleDescriptionChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    // Type: string;
    // handleMovieTypeChange: (e: ChangeEvent<HTMLSelectElement>) => void;
    // genre: string;
    // handleGenreChange: (e: ChangeEvent<HTMLSelectElement>) => void
}

const UpdateMovieUI: React.FC<PropsType> = ({ updateMovie, movieHandleSubmit, handleMovieChange, description, handleDescriptionChange }) => {

    return (
        <form className='bg-gray-900' onSubmit={movieHandleSubmit}>
            <div className="p-6">

                <div className="">
                    <label htmlFor="title" className="block text-sm font-medium leading-6 text-white">
                        Movie Title
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="title"
                            value={updateMovie.title}
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
                                value={updateMovie.language}
                                onChange={handleMovieChange}
                                id="language"
                                autoComplete="given-name"
                                className="block w-full rounded-md  border-0 px-1.5 py-1.5 text-white shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 bg-neutral-800"
                                required
                            />
                        </div>
                    </div>
                    {/* <div className="">
                        <label htmlFor="type" className="block text-sm font-medium leading-6 text-white">
                            Type
                        </label>
                        <div className="mt-2">
                            <select
                                name="type"
                                // value={Type}
                                // onChange={handleMovieTypeChange}
                                id="type"
                                // className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
                                className="block w-full rounded-md  border-0 px-1.5 py-1.5 text-white shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 bg-neutral-800"
                            >
                                <option value="Movies" className="py-2">Movies</option>
                                <option value="Series" className="py-2">Series</option>
                            </select>
                        </div>
                    </div> */}
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
                                value={updateMovie.date}
                                onChange={handleMovieChange}
                                id="date"
                                autoComplete="given-name"
                                className="block w-full rounded-md  border-0 px-1.5 py-1.5 text-white shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 bg-neutral-800"
                                required
                            />
                        </div>
                    </div>
                    {/* <div className="">
                        <label htmlFor="genre" className="block text-sm font-medium leading-6 text-white">
                            Genre
                        </label>
                        <div className="mt-2">
                            <select
                                name="genre"
                                // value={genre}
                                // onChange={handleGenreChange}
                                id="genre"
                                // className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
                                className="block w-full rounded-md  border-0 px-1.5 py-1.5 text-white shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 bg-neutral-800"
                            >
                                <option value="Action" className="py-2">Action</option>
                                <option value="Crime" className="py-2">Crime</option>
                                <option value="Comedy" className="py-2">Comedy</option>
                            </select>
                        </div>
                    </div> */}
                </div>

                <div className="mt-2">
                    <label htmlFor="actors" className="block text-sm font-medium leading-6 text-white">
                        Actors
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="actors"
                            value={updateMovie.actors}
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
                                value={updateMovie.country}
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
                                value={updateMovie.rating}
                                onChange={handleMovieChange}
                                id="rating"
                                autoComplete="given-name"
                                className="block w-full rounded-md  border-0 px-1.5 py-1.5 text-white shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 bg-neutral-800"
                            />
                        </div>
                    </div>
                </div>

                <div className="col-span-full mt-2">
                    <label htmlFor="description" className="block text-sm font-medium leading-6  text-white">
                        Description
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

                <div className="mt-2">
                    <label htmlFor="trailer" className="block text-sm font-medium leading-6  text-white">
                        Movie Trailer
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="trailer"
                            value={updateMovie.trailer}
                            onChange={handleMovieChange}
                            id="trailer"
                            autoComplete="given-name"
                            className="block w-full rounded-md  border-0 px-1.5 py-1.5 text-white shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 bg-neutral-800"
                            required
                        />
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
                    Update
                </button>
            </div>
        </form>
    )
}

export default UpdateMovieUI
