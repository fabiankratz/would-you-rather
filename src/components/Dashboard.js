import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

export function Dashboard (props) {
  const {questions, users, authedUser} = props
  const [showAnswered, setShowAnswered] = useState(false)
  const qids = showAnswered 
    ? Object.keys(users[authedUser].answers)
    : Object.keys(questions).filter(q => {
      return !Object.keys(users[authedUser].answers).some(a => a === q)
    })
  return (
    <div className="dashboard">
      <button onClick={() => setShowAnswered(!showAnswered)}>{showAnswered ? "Show unanswered" : "Show answered"}</button>
      <ul>
        {qids.map(id => (
          <li key={id}>
            <h3>{users[questions[id].author].name} asks: </h3>
            <p>Would you rather?</p>
            <p>...{questions[id].optionOne.text.slice(0, 15)}...</p>
            <Link to={`/question/${id}`}>
              <button>Answer</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

const mapStateToProps = ({users, questions, authedUser}) => ({
  users,
  questions,
  authedUser
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
