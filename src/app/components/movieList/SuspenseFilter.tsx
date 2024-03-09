"use client"
import React, { Suspense } from 'react'
import FilteredGenreMovies from './FilteredGenreMovies'
import LoadingShadow from './LoadingShadow'

const SuspenseFilter = () => {
    return (
        <Suspense fallback={<div>
            <LoadingShadow cards={10} />
        </div>}>
            <FilteredGenreMovies />
        </Suspense>
    )
}

export default SuspenseFilter
