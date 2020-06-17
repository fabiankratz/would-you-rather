import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Leaderboard extends Component {
  render() {
    const {users} = this.props
    const leaderboard = Object.keys(users).map(id => {
      return {
        name: users[id].name,
        score: users[id].questions.length + Object.keys(users[id].answers).length
      }
    })
    leaderboard.sort((a,b) => a - b)
    return (
      <div>
        <ul> 
          {leaderboard.map(user => (
            <li key={user.name}>
              <span>{user.name}</span><span>, Score: {user.score}</span>
            </li>
          ))}
        </ul>
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
