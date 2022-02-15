import React,{useEffect, useState} from 'react';
import './App.css'
import Unique from './Unique';
import data from './Questions'
import Timer from './Timer';
import Shuhru from './Shuhru';
const App = () => {
  // console.log(questionBank);
  const[num,setNum]=useState(1)
  const [guest,setGuest]=useState('')
  const[score,setScore]=useState(0)
  const[time,setTime]=useState(false)
  const scorelist=[
    {id:1,marky:100},
    {id:2,marky:200},
    {id:3,marky:300},
    {id:4,marky:400},
    {id:5,marky:500},
    {id:6,marky:600},
    {id:7,marky:700},
    {id:8,marky:800},
    {id:9,marky:900},
    {id:10,marky:1000},
  ].reverse()
 
  useEffect(()=>
  {
    num>1 && setScore(scorelist.find((s)=>s.id===num-1).marky);
  },[num,scorelist])
  return (
  <div className='app'>
    {guest?(<> 
    <div className='main'>
      {time?num-1===data.length?(<><h1 className='winner'>Congrats!!</h1><h1 className='resultText'>{guest} Scored:{score}</h1></>):(<h1 className='resultText' >{guest} Scored:{score}</h1>):(
        <>
      <div className='upper'>
             <div className='time'><Timer setTime={setTime} num={num}/></div>
      </div>
      <div className='niche'>
         <Unique data={data} setScore={setScore} setTime={setTime} num={num}
         setNum={setNum}/>
      </div>
      
      </>)}
    </div>
    
    <div className='score'>
      <ul className='scorelist'>
        {
          scorelist.map((m)=>
            <li className={num === m.id?'scorelistItem active':'scorelistItem'}>
            <span className='questions'>{m.id}</span>
            <span className="marks">{m.marky}</span>
            </li>
          )
        }
   </ul>
    </div>
    </>):<Shuhru setGuest={setGuest}/>}
  </div>);
  
};

export default App;

