import { Api } from '@/app/Api';
import React, { useEffect, useState } from 'react';
import style from './css/videoCarousel.module.css'
import ReactPlayer from 'react-player'
import axios from 'axios';
import FileDownload from 'js-file-download'
import Image from 'next/image';
interface VideoCarouselProps {
    videos: string[] | undefined
    videoImg: string | undefined
}

const VideoCarousel: React.FC<VideoCarouselProps> = ({ videos, videoImg }) => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [video, setVideo] = useState<string[]>([])
    const [videoName, setVideoName] = useState<string>('')
    console.log(videoName)
    useEffect(() => {
        if (!videos) {
            return
        }
        else {
            setVideo(videos)
        }
    }, [videos, currentSlide])


    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === video.length - 1 ? 0 : prevSlide + 1));
    };

    const prevSlide = () => {

        setCurrentSlide((prevSlide) => (prevSlide === 0 ? video.length - 1 : prevSlide - 1));
    };

    const name = () => {
        const cv = video.filter((item, id) => currentSlide === id);
        return cv[0]?.substring(13); // Accessing the substring starting from index 13
    };

    // const downloadVideo = () => {
    //     const cv = video.filter((item, id) => currentSlide === id);

    //     const videoUrl = `${Api}/uploads/videos/${cv}`;
    //     const anchor = document.createElement('a');
    //     anchor.href = videoUrl;
    //     anchor.download = cv[0];
    //     anchor.click();
    //     console.log(videoUrl);
    // }
    // const downloadVideo = async () => {
    //     const currentVideo = video.find((item, id) => currentSlide === id);
    //     // console.log(currentVideo);
    //     if (currentVideo) {
    //         await axios(`${Api}/movieData/downloadVideo/${currentVideo}}`, { method: 'GET', responseType: "blob" })
    //             .then((res) => {
    //                 console.log(res);
    //                 FileDownload(res.data, `${currentVideo}`)
    //             })

    //     } else {
    //         console.log('No video found for the current slide index.');
    //     }
    // };

    const downloadVideo = async () => {
        const currentVideo = video.find((item, id) => currentSlide === id);
        console.log("hello world")
        console.log(currentVideo);
        if (currentVideo) {
            try {
                const response = await axios.get(`${Api}/movieData/downloadVideo/${currentVideo}`, { responseType: 'blob' });
                FileDownload(response.data, `${currentVideo}`);
            } catch (error) {
                console.error('Error downloading video:', error);
            }
        } else {
            console.log('No video found for the current slide index.');
        }
    };


    return (
        <div className={`${style.videoCarousel_container} `} id="watchMovie" >
            <div className={style.videos}>
                <div className='mt-5 flex gap-2 justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className='h-5 w-5'
                    >
                        <path d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM376.9 294.6L269.8 394.5c-3.8 3.5-8.7 5.5-13.8 5.5s-10.1-2-13.8-5.5L135.1 294.6c-4.5-4.2-7.1-10.1-7.1-16.3c0-12.3 10-22.3 22.3-22.3l57.7 0 0-96c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 96 57.7 0c12.3 0 22.3 10 22.3 22.3c0 6.2-2.6 12.1-7.1 16.3z" />
                    </svg>
                    <span className="text-sm text-sky-500 relative cursor-pointer" onClick={downloadVideo}>{name()}</span>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className='h-5 w-5'
                    >
                        <path d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM376.9 294.6L269.8 394.5c-3.8 3.5-8.7 5.5-13.8 5.5s-10.1-2-13.8-5.5L135.1 294.6c-4.5-4.2-7.1-10.1-7.1-16.3c0-12.3 10-22.3 22.3-22.3l57.7 0 0-96c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 96 57.7 0c12.3 0 22.3 10 22.3 22.3c0 6.2-2.6 12.1-7.1 16.3z" />
                    </svg>
                </div>
                <div className={style.videoContainer}>
                    {video.map((v, idx) => {

                        return (
                            <ReactPlayer
                                key={idx}
                                url={`${Api}/uploads/videos/${v}`}
                                controls
                                className={style.videoCard}
                                style={{ translate: `${-100 * currentSlide}%` }}
                                width="100%"
                                height="100%"
                                light={<Image src={`${Api}/uploads/image/${videoImg}`}
                                    width={100}
                                    height={100}
                                    alt=""
                                    className='w-full h-full object-cover'
                                    priority
                                />}

                            />

                        )
                    })}
                </div>
                <div>

                    {!video ? '' :
                        video?.length > 1 ?
                            <div>
                                <button className={style.leftButton} onClick={prevSlide}>
                                    &#10094;
                                </button>
                                <button className={style.rightButton} onClick={nextSlide}>
                                    &#10095;
                                </button>
                            </div>
                            :
                            ""
                    }
                </div>

            </div>
            {/* <div className='mt-5 text-center'>
                <span className="text-xl text-sky-500" onClick={downloadVideo}>{name()}</span>

            </div> */}
        </div>
    );
};

export default VideoCarousel;
