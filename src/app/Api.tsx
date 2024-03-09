
// export const Api = 'http://localhost:4000';
export const Api = 'https://nextjs-movie-backend.onrender.com';

export type movieCardTypes = {
    _id: string;
    title: string;
    image: string;
    actors: string;
    country: string;
    type: string;
    date: string;
    language: string;
    rating: string;
    genre: string;
    trailer: string;
    description: string;
    videos: string[]
}

// export const movieDataList = async () => {
//     try {
//         const { data } = await axios.get(`${Api}/movieData`)
//         if (!data.movies) {
//             throw new Error('No data')
//         }
//         else {
//             const MovieData: movieCardTypes[] = await data.movies
//             return MovieData
//         }

//     } catch (error: unknown) {
//         if (error instanceof Error) {
//             console.error(error.message);
//         } else {
//             console.error("An unknown error occurred:", error);
//         }
//     }
// }
