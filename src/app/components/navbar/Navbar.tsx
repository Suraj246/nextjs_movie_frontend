"use client"
import { selectInputValue, setInputValue } from '@/app/redux/slices/inputSearchSlice';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {
    const router = useRouter()
    const [user, setUser] = useState<string>('')
    const dispatch = useDispatch()
    const inputValue = useSelector(selectInputValue)

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setInputValue(e.target.value))
    };

    useEffect(() => {
        const storedUser: any = localStorage.getItem('LOGIN');
        if (!storedUser) {
            return
        }
        setUser(storedUser)

    }, [])

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto grid md:flex gap-2 md:justify-between md:items-center">
                <div>
                    <Link href="/">
                        <span className="text-white text-2xl md:text-4xl font-bold cursor-pointer"

                        >Dark Movies</span>
                    </Link>
                </div>
                <div className="flex items-center gap-x-4 flex-col md:flex-row">
                    <div className="md:flex items-center space-x-4 ">

                        <Link href="/movietype/?type=movies" className="text-white hover:text-gray-300 cursor-pointer"> Movies</Link>
                        <Link href="/movietype/?type=series" className="text-white hover:text-gray-300 cursor-pointer"> Series</Link>

                    </div>
                    <div className='flex mt-2 sm:mt-0 w-full'>
                        <input
                            type="text"
                            value={inputValue}
                            onChange={handleSearch}
                            placeholder="Search movies"
                            className="px-2 py-1 rounded-md w-full"
                        />
                        <button className="px-4 py-2 bg-blue-500 text-white rounded-md ml-2">Search</button>
                    </div>
                    <div className='mt-4 md:m-0'>
                        {user &&
                            <Link href='/movieForm' className="px-4 py-2 bg-blue-500 text-white rounded-md ml-2">upload</Link>
                        }
                    </div>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;
