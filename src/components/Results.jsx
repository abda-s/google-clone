import React, {useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import Loading from "./Loading";

//import ReactPlayer from 'react-player';

import { StateContextProvider, useStateContext } from '../contexts/ResultContextProvider';
// import {Loading} from "./Loading";

export const Results = () => {

  const { getResults, results, searchTerm, loading } = useStateContext();
  const location = useLocation();

  useEffect(()=>{
    getResults('/search/q=musk&num=40')
  },[]);
   if (loading) return <Loading />

    switch (location.pathname) {
      case "/search":
        return (
          <div className='flex flex-wrap justify-between space-y-6 sm:px-56'>
              {results?.results?.map(({link,title}, index) =>(
                <div key={index} className="md:w-2/5 w-full">
                  <a href={link} target="_blank" rel="noreferrer">
                    <p className='text-sm'>
                      {link.length > 30 ? link.substring(0, 30) : link}
                    </p>
                    <p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
                      {title}
                    </p>
                  </a>
                </div>
              ))}
          </div>
        );

      case "/images":
        return (
          <div className='flex flex-wrap justify-center items-center'>
            {results?.image_results?.map(()=>(
              <div>
                
              </div>
            ))}
            
          </div>
        );

      case "/news":
        return (
          <div className='flex flex-wrap justify-between space-y-6 sm:px-56'>

          </div>
        );

      case "/videos":
        return (
          <div className='flex flex-wrap justify-between space-y-6 sm:px-56'>

          </div>
        );
      
      default:
        return "ERROR!";
    }
}
