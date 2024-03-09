import Skeleton from 'react-loading-skeleton'
import style from './css/movieCard.module.css';


interface loadingCardState {
    cards: any
}
const LoadingShadow: React.FC<loadingCardState> = ({ cards }) => {


    return (
        <>
            {Array(cards).fill(0).map((card, idx) => {
                return (
                    <div key={idx} className={style.movieCard}>
                        <Skeleton height={200} />
                        <div className={style.movieDetails_container}>
                            <div className={style.movie_title_container}>
                                <div className=''>
                                    <Skeleton width={100} height={10} />
                                    <Skeleton width={100} height={10} />
                                </div>
                                <Skeleton width={50} height={50} borderRadius='100%' />
                            </div>
                            <div className={style.movie_date}>
                                <Skeleton width={50} height={10} />
                            </div>

                            <div className={style.movieCard_actions}>
                                <Skeleton width={30} height={20} />
                                <Skeleton width={30} height={20} />
                            </div>
                        </div>
                    </div>
                    // <div key={idx} className="flex flex-col border-2">
                    //     <Skeleton height={200} />
                    //     <div className="flex flex-col w-full  p-2 gap-4">
                    //         <div className="flex justify-between items-center gap-2 rounded" >
                    //             <div className=''>
                    //                 <Skeleton width={100} height={10} />
                    //                 <Skeleton width={100} height={10} />
                    //             </div>
                    //             <Skeleton width={50} height={50} borderRadius='100%' />
                    //         </div>
                    //         <Skeleton width={50} height={10} />

                    //         <div className=" flex gap-4 justify-between ">
                    //             <Skeleton width={30} height={20} />
                    //             <Skeleton width={50} height={20} />
                    //         </div>
                    //     </div>
                    // </div>
                )
            })}
        </>
    )

}

export default LoadingShadow
