import React,{useEffect, useState} from 'react'

const Timer = ({setTime,num}) => {
  const [times,setTimes]=useState(30);
  useEffect(()=>{
    if(times===0)return setTime(true)
    const interval=setInterval(()=>{
      setTimes((prev)=>prev-1)
    },1000)
    return ()=>clearInterval(interval)
  },[setTime,times]);
useEffect(()=>{
  setTimes(30);
},[num])
  return (
    times
  )
}

export default Timer
