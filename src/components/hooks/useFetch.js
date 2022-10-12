import React, { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData ] = useState([]);

  useEffect(()=>{
    fetchData(url);
  },[])

  const fetchData = async (url) => {
    try{
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    }catch(error){
      console.log(error);
    }
  }
  return[data]
}

export default useFetch;