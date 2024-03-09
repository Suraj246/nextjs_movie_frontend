import React from 'react'
import { Link } from 'react-scroll'

const Buttons = () => {
    return (
        <div className="hidden lg:flex h-full lg:h-1/4 justify-end items-center gap-4 lg:w-2/4">
            <Link to="youtube" spy={true} smooth={true} offset={-50} duration={500} className="bg-transparent border-2 border-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded cursor-pointer">
                Watch Trailer
            </Link>
            <Link to="watchMovie" spy={true} smooth={true} offset={-100} duration={500} className="bg-transparent border-2 border-blue-800 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded cursor-pointer">
                Watch Now
            </Link>
            <Link to="watchMovie" spy={true} smooth={true} offset={100} duration={500} className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
                Download
            </Link>
        </div>
    )
}

export default Buttons
