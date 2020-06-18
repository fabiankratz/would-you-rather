import React , {useState } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import {handleAnswerQuestion} from '../actions/questions'

export const Question = (props) => {
  const { qid } = useParams()
  const {questions, users, authedUser, answerQuestion} = props
  const question = questions[qid]
  const answer = users[authedUser].answers[qid]
  const [selectedOption, setSelectedOption] = useState(answer || null)
  if (question) {
    const handleAnswerQuestion = (e) => {
      e.preventDefault()
      answerQuestion({qid, answer: selectedOption})
    }
    const opt1Votes = question.optionOne.votes.length
    const opt2Votes = question.optionTwo.votes.length
    const totalVotes = opt1Votes + opt2Votes
    return (
      <div>
        <img src={users[question.author].avatarURL} alt={`avatar for ${users[question.author].name}`} width="50" height="50"/>
        <h1>Would you rather...</h1>
        <form onSubmit={(e) => handleAnswerQuestion(e)}>
          <input 
            type="radio" 
            id="optionOneRadio" 
            name="option" 
            disabled={answer ? true : false} 
            value="optionOne" 
            onChange={(e) => setSelectedOption(e.target.value)}
            checked={selectedOption === "optionOne"}
          />
          <label htmlFor="optionOneRadio">{question.optionOne.text} ? {answer && `|| ${(opt1Votes/totalVotes)*100}% (${opt1Votes})`}</label>
          <input 
            type="radio" 
            id="optionTwoRadio" 
            name="option" 
            disabled={answer ? true : false} 
            value="optionTwo" 
            onChange={(e) => setSelectedOption(e.target.value)}
            checked={selectedOption === "optionTwo"}
          />
          <label htmlFor="optionTwoRadio">{question.optionTwo.text} ? {answer && `|| ${(opt2Votes/totalVotes)*100}% (${opt2Votes})`}</label>
          <input type="submit" value="Submit" disabled={answer ? true : false}/>
        </form>
      </div>
    )
  } else {
    return (
      <h1>Sorry, we could not find a matching question</h1>
    )
  }
}

const mapStateToProps = ({users, questions, authedUser}) => ({
  users,
  questions,
  authedUser
})

const mapDispatchToProps = {
  answerQuestion: (questionAnswer) => handleAnswerQuestion(questionAnswer)
}

export default connect(mapStateToProps, mapDispatchToProps)(Question)
