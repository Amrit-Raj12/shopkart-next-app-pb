import React from "react"
import { BarLoader } from "react-spinner-animated"
import { useState, CSSProperties } from "react";
import PuffLoader from "react-spinners/ClipLoader";


const Loading = () => {
  let [loading, setLoading] = useState(true);
  return (
    <div className="container mx-auto flex justify-center items-center h-[600px]">
      <PuffLoader
        color={'blue'}
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default Loading
