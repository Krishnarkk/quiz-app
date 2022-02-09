import React,{useState} from 'react';

const QuestionBox = ({question,options,selected}) => {
    const[answer,setAnswer]=useState(options)
  return <div className='questionBox'>
      <h1 className='question'>{question}</h1>
      {
          answer.map((text,index)=>
              <button key={index} onClick={()=>{
                  setAnswer([text])
                  selected(text)
              }}>{text}</button>
          )
      }
  </div>;
};

export default QuestionBox;
