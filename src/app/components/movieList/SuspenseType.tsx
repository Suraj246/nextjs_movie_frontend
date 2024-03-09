"use client"
import React, { Suspense } from 'react'
import MovieType from './MovieType'
import LoadingShadow from './LoadingShadow'

const SuspenseType = () => {
    return (
        <Suspense fallback={<div>
            <LoadingShadow cards={10} />
        </div>}>
            <MovieType />
        </Suspense>
    )
}

export default SuspenseType
