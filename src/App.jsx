import { useState } from 'react'
import './App.css'

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)

//quiz question array
  const questions = [
    {
      question:"JavaScript is ?",
      option:['dynamic typed','static typed','dynamic and static typed','none of these'],
      correctAnswer:'dynamic typed'
    },
    {
      question:"which keyword used for constant variable?",
      option:['const','constant','cont','none of these'],
      correctAnswer:'const'
    },
    {
      question:"JavaScript is client side or server side language",
      option:['client side','server side','both client and server','none of these'],
      correctAnswer:'both client and server'
    } 
  ]

  function handleOptionClick(selectedOption){
    //score if selected option is === correctAnswer
    if(selectedOption === questions[currentQuestion].correctAnswer){
      setScore(score+1)
    }    
    //next
    //If another question exist in array
    const nextQuestion = currentQuestion + 1;   
    if(nextQuestion < questions.length){ 
      setCurrentQuestion(currentQuestion+1)
    }
    else{
      //if current question is last question
      setShowScore(true);
    }
    
 
    //show score
  }

  return (
    <>
    {/* App heading */}
    <div className=' p-10 border text-center rounded-3xl m-4'>

    <h1 className='md:text-6xl text-5xl font-semibold mb-10'>Quiz App</h1>
    {showScore ? 
    <p className='text-blue-300' >You got {score} questions right out of {questions.length}.</p>  
    : (
      <>
      {/* current question */}
      <h3 className='md:text-4xl text-2xl'>{questions[currentQuestion].question}</h3>
  
      {/* current question option */}
      {questions[currentQuestion].option.map((option,index) => {
        return  <button className='mt-5 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'  key={index}  onClick={()=> handleOptionClick(option)}>{option}</button>
        
      })}
      
      </>

)

}
</div>
    
   
    </>
  )
}

export default App
