import React from 'react';
import { useLocation } from 'react-router-dom';
import {Loading} from "./Loading";

//import ReactPlayer from 'react-player';

import { StateContextProvider, useStateContext } from '../contexts/ResultContextProvider';
// import {Loading} from "./Loading";

export const Results = () => {

  const { getResults, results, searchTerm, isLoading } = useStateContext();
  const location = useLocation();

   if (isLoading) return <Loading />;
  return (
    <div>
        Results
    </div>
  )
}
