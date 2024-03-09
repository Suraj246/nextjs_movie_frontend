import React from 'react'

interface YoutubeTrailerType {
    urlPathName: string;
}

const YoutubeTrailer: React.FC<YoutubeTrailerType> = ({ urlPathName }) => {
    return (

        <div className="flex lg:mt-0 justify-center mx-0 lg:mx-11" id="youtube">

            <iframe
                width={560}
                height={315}
                src={`https://youtube.be/embed/${urlPathName}`}
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; web-share"
                allowFullScreen
                className="w-full z-0 aspect-video"
            >
            </iframe>

        </div>
    )
}

export default YoutubeTrailer
