"use client"
import React, { Suspense } from 'react'
import FilteredGenreMovies from './FilteredGenreMovies'

const SuspenseFilter = () => {
    return (
        <Suspense >
            <FilteredGenreMovies />
        </Suspense>
    )
}

export default SuspenseFilter
