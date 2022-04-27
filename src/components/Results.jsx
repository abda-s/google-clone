import React, {useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

import {useResultContext} from "../contexts/ResultContextProvider";
import {Loading} from "./Loading"

export const Results = () => {

  const { getResults, results, searchTerm, setSearchTerm, isLoading } = useResultContext();
  const location = useLocation; //the will give the location like /images  
  
  if(isLoading) return <Loading />
  
  return (
    <div>
        Results
    </div>
  )
}
