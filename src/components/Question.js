import React from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'

export const Question = (props) => {
  const { qid } = useParams()
  const {questions, users, authedUser} = props
  const question = questions[qid]
  if (question) {
    const opt1Votes = question.optionOne.votes.length
    const opt2Votes = question.optionTwo.votes.length
    const totalVotes = opt1Votes + opt2Votes
    const answer = users[authedUser].answers[qid]
    return (
      <div>
        <img src={users[question.author].avatarURL} alt={`avatar for ${users[question.author].name}`} width="50" height="50"/>
        <h1>Would you rather...</h1>
        <form>
          <input type="radio" id="optionOneRadio" name="option" disabled={answer ? true : false}/>
          <label htmlFor="optionOneRadio">{question.optionOne.text} ? {answer && `|| ${(opt1Votes/totalVotes)*100}% (${opt1Votes})`}</label>
          <input type="radio" id="optionTwoRadio" name="option" disabled={answer ? true : false}/>
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
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Question)
