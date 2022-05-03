import React, { useContext} from 'react';
import { useLocation } from 'react-router-dom';

//import ReactPlayer from 'react-player';

import { StateContextProvider, StateContext, useStateContext } from '../contexts/ResultContextProvider';
// import {Loading} from "./Loading";

export const Results = () => {

  const { getResults, results, searchTerm, setSearchTerm, isLoading } = useStateContext();
  const location = useLocation();

  // if (loading) return <Loading />;
  return (
    <div>
        Results
    </div>
  )
}
