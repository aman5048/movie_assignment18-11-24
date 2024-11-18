import { Link } from "react-router-dom"


export const Card=({movie})=>{
    return(<>
    

<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <Link to={movie.imdb_url}>
        <img className="p-8 rounded-t-lg" src={movie.image} alt={movie.movie} />
    </Link>
    <div className="px-5 pb-5">
        <div className="flex items-center space-x-1 rtl:space-x-reverse">
            <svg className="w-4 h-4 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <p>{movie.rating}</p>
        </div>
        <Link to={movie.imdb_url}>
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{movie.movie}</h5>
        </Link>
    </div>
</div>

    </>)
}