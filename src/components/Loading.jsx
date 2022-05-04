import React from 'react'
import {TailSpin, Puff} from "react-loader-spinner";

 const Loading = () => {
  return (
    <div className='flex justify-center items-center'>
        {/* <TailSpin type="Puff" color="#00BFFF" height={550} width={80} /> */}
        <Puff color="#00BFFF" height={600} width={80} />
    </div>
  )
}

export default Loading;