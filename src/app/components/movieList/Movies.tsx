"use client"
import { Api, movieCardTypes } from '@/app/Api'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styles from './css/movieCard.module.css';
import Image from 'next/image';
import { AppDispatch } from '@/app/redux/store';
import { useDispatch } from 'react-redux';
import { deleteMovie } from '@/app/redux/slices/movieSlice';



interface MovieProps {
  movie: movieCardTypes
}

const Movie: React.FC<MovieProps> = ({ movie }) => {
  const rating: string | undefined = movie?.rating
  const parseRating: number = parseFloat(rating || '0');
  const dispatch = useDispatch<AppDispatch>()
  const [user, setUser] = useState<string>('')

  const removeMovie = (movieId: string) => {

    dispatch(deleteMovie(movieId))
  }
  useEffect(() => {
    const storedUser = localStorage.getItem('LOGIN');
    if (!storedUser) {
      return
    }
    setUser(storedUser)

  }, [user])
  return (
    <div className={styles.movieCard}>
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
}

export default Movie
