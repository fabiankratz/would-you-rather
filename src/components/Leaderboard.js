import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Leaderboard extends Component {
  render() {
    const {users} = this.props
    const leaderboard = Object.keys(users).map(id => {
      const questionsAnswered = Object.keys(users[id].answers).length
      const questionsAsked = users[id].questions.length
      return {
        name: users[id].name,
        questionsAnswered,
        questionsAsked,
        score: questionsAsked + questionsAnswered
      }
    })
    leaderboard.sort((a,b) => a - b)
    return (
      <div>
        <ol> 
          {leaderboard.map(user => (
            <li key={user.name}>
              <p>{user.name}</p>
              <p>Score: {user.score}</p>
              <p>Questions answered: {user.questionsAnswered}</p>
              <p>Questions asked: {user.questionsAsked}</p>
            </li>
          ))}
        </ol>
      </div>
    )
  }
}

const mapStateToProps = ({users}) => ({
  users
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard)
