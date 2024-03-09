import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-1">
            <div className="container mx-auto">
                <div className="grid p-2 gap-4">

                    <div className="md:col-span-1">
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="text-sm">
                            <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
                            <li><Link href="/movietype/?type=movies" className="text-gray-400 hover:text-white">Movies</Link></li>
                            <li><Link href="/movietype/?type=series" className="text-gray-400 hover:text-white">Series</Link></li>
                        </ul>
                    </div>

                    <div className="flex justify-center items-center">
                        <h3 className="text-sm capitalize">created@2024</h3>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
