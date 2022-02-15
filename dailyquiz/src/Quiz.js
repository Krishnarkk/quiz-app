



// import React, { useEffect, useState } from 'react';
// import QuestionBox from './Components/QuestionBox';
// import Questions from './Questions';
// const Quiz = () => {
//     const [ques, setQues] = useState([])
//     const [score, setScore] = useState(0)
//     const [response, setResponse] = useState(0)

//     useEffect(() => {
//         Questions().then(question => {
//             setQues(question)
//         });
//     }, []);
// //    computeAnswer=(answer, correct)=> {
      
      
// //     if (answer === correct) {
// //         setScore(score + 1)
// //     }

// //     setResponse(response < 5 ? setResponse(response + 1) : 5)
// //     }


// return (
//     <div className='container'>
//         {
//             ques.length > 0 && response<5 && ques.map(({ question, answers, correctAns, qId }) => (
//                 <QuestionBox question={question} options={answers} key={qId} selected={this.computeAnswer=(answer, correct)=> {
      
      
//                     if (answer === correct) {
//                         setScore(score + 1)
//                     }
                
//                     setResponse(response < 5 ? setResponse(response + 1) : 5)
//                     }
//                 }
//                  />
//             ))
//         }

//         {
//             response === 5?(<h2>{score}</h2>):null
//         }
//     </div>
// )
// };

// export default Quiz;

