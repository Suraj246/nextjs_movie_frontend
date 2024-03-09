"use client"
import { RootState } from '@/app/redux/store';
import Link from 'next/link';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';

const GenreFilter = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string>('Genres');

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleSelectOption = (option: string) => {
    setSelectedValue(option);
    setIsOpen(false);
  };

  const movieLIst = useSelector((state: RootState) => state.movie)
  const { movies, status, error } = movieLIst

  // getting all genres from database
  const genre = movies?.map((genre) => { return genre.genre })
  // removing all duplicates genres
  const uniqueGenres = new Set([...genre])

  // const ar = ['crime', 'action', 'comedy', 'thriller', 'supernatural', 'mystery', 'adventure']

  return (
    <div className='flex justify-end mr-4'>
      <div className="relative inline-block text-left ">
        <div>
          <button
            type="button"
            className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            onClick={handleToggle}
          >
            {selectedValue || 'Select an option'}
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        {isOpen && (
          <div className="z-10 origin-top-left absolute left-0 mt-1 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              {Array.from(uniqueGenres).map((option) => (
                <Link href={`/genre?genreType=${option}`}
                  key={option}
                  onClick={() => {
                    handleSelectOption(option)
                    // setIsOpen(false)
                  }}
                  className=" block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >{option}

                </Link >
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default GenreFilter






// import React, { useState, ChangeEvent } from 'react';

// interface movieListTypes {
//     genre: string[] | undefined;
//     date: string[] | undefined;
//     filterGenreMovies: (genreType: string) => void
// }
// const FilterMovies: React.FC<movieListTypes> = ({ genre, filterGenreMovies }) => {

//     const [isOpen, setIsOpen] = useState<boolean>(false);
//     const [selectedValue, setSelectedValue] = useState<string>('Genres');

//     const handleToggle = () => {
//         setIsOpen(!isOpen);
//     };
//     const handleSelectOption = (option: string) => {
//         setSelectedValue(option);
//         setIsOpen(false);
//         filterGenreMovies(option)
//     };

//     // const uniqueGenres = Array.from(new Set(genre));
//     // const removeEmptyString = uniqueGenres.filter(x => x !== "")

//     const ar = ['crime', 'action', 'comedy', 'thriller', 'supernatural', 'mystery', 'adventure']

//     return (
//         <div className='flex justify-end mr-4'>
//             <div className="relative inline-block text-left ">
//                 <div>
//                     <button
//                         type="button"
//                         className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//                         onClick={handleToggle}
//                     >
//                         {selectedValue || 'Select an option'}
//                         <svg
//                             className="-mr-1 ml-2 h-5 w-5"
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 20 20"
//                             fill="currentColor"
//                             aria-hidden="true"
//                         >
//                             <path
//                                 fillRule="evenodd"
//                                 d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
//                                 clipRule="evenodd"
//                             />
//                         </svg>
//                     </button>
//                 </div>
//                 {isOpen && (
//                     <div className="z-10 origin-top-left absolute left-0 mt-1 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
//                         <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
//                             {ar.map((option) => (
//                                 <button
//                                     key={option}
//                                     onClick={() => {
//                                         handleSelectOption(option)
//                                         // setIsOpen(false)
//                                     }}
//                                     className=" block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//                                     role="menuitem"
//                                 >
//                                     {option}
//                                 </button>
//                             ))}
//                         </div>
//                     </div>
//                 )}
//             </div>

//         </div>
//     );
// };

// export default FilterMovies;
