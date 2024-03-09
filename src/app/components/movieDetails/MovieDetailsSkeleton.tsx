import React from 'react'
import Skeleton from 'react-loading-skeleton'

const MovieDetailsSkeleton = () => {
    return (
        <>
            <Skeleton height={630} />
            <div className="w-full lg:absolute lg:top-0 lg:right-0 lg:w-full lg:h-5/6 lg:grid lg:mt-14  sm:p-4 text-white">
                <div className="">
                    <div className=" flex items-center justify-between">
                        <Skeleton width={200} height={20} baseColor='gray' />
                        <Skeleton width={100} height={100} borderRadius="100%" baseColor='gray' />
                    </div>
                    <div className=''>
                        <Skeleton width={150} height={15} baseColor='gray' />
                        <Skeleton width={150} height={15} baseColor='gray' />
                        <Skeleton width={250} height={15} baseColor='gray' />
                        <Skeleton width={150} height={15} baseColor='gray' />
                    </div>
                    <div className="w-full mt-2">
                        <Skeleton width={100} height={15} baseColor='gray' />
                        <Skeleton className='' height={100} baseColor='gray' />
                    </div>
                </div>
                <div className='hidden lg:flex justify-end items-center gap-4 '>
                    <Skeleton width={150} height={40} baseColor='gray' />
                    <Skeleton width={150} height={40} baseColor='gray' />
                    <Skeleton width={150} height={40} baseColor='gray' />
                </div>
            </div>
        </>
        // <div>
        //     <Skeleton height={630} />
        //     <div className="border-2 w-full lg:absolute lg:top-0 lg:right-0 lg:w-full lg:h-5/6 lg:grid lg:mt-14  sm:p-4 text-white">
        //         <div className="border-2 flex flex-col items-end w-full h-2/4 ">
        //             <div className="border-2 flex flex-col gap-2 lg:gap-4 p-2 w-fit h-fit lg:inset-0 bg-gray-900/30">
        //                 <div className="flex gap-4 items-center justify-between">
        //                     <Skeleton width={130} height={15} />
        //                     <Skeleton width={100} height={100} borderRadius="100%" />
        //                 </div>
        //                 <Skeleton width={100} height={15} />
        //                 <Skeleton width={100} height={15} />
        //                 <Skeleton width={100} height={15} />
        //                 <Skeleton width={100} height={15} />


        //                 <div className="capitalize grid gap-1">
        //                     <Skeleton width={100} height={15} />
        //                     <Skeleton width={300} height={100} />
        //                 </div>

        //             </div>
        //             {/* <Buttons /> */}
        //         </div>

        //     </div>
        // </div>
    )
}

export default MovieDetailsSkeleton
