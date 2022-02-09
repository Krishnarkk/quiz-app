import React, { useEffect, useState } from 'react';

const Unique = ({data,setTime,num,setNum}) => {
    const[question,setQuestion]=useState(null)
    const[yourAns,setYourans]=useState(null)
    const [className,setClassName]=useState('answer')
    console.log(data.length)
    useEffect(()=>{
      if(data.length<=3){
      setQuestion(data[num-1])
      }
    },[data,num])


      const delay=(duration,check)=>{
      setTimeout(()=>{
          check()
      },duration)
      }
    const handleClick=(a)=>{
       setYourans(a)
       setClassName('answer active')
       delay(3000,()=>
       setClassName(a.correct?'answer correct':'answer wrong')
       );
       delay(6000,()=>{
    //    setClassName(a.correct?'answer correct':'answer wrong')
      if(a.correct){
          setNum(num+1)
          setQuestion(prev=>prev+1)
          setYourans(null)
      }
      else{
          setTime(true)
      }   
    }
    );
    }
  return (
  <div className='head'>
  <div className='question'>{question?.question}</div>
  <div className='answers'>
      { question ?.answers?.map((a)=>
      <h2 className={yourAns===a?className:'answer'} onClick={()=> handleClick(a)}>{a.text}</h2>
      )}
  </div>
  </div>
  );
};

export default Unique