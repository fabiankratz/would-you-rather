import React, { Component } from 'react'
import { connect } from 'react-redux'
import {handleSaveAuthedUser} from '../actions/authedUser'

export class Login extends Component {
  handleSaveAuthedUser (e, id) {
    e.preventDefault()
    this.props.handleSaveAuthedUser(id)
  }
  render() {
    const {users} = this.props
    return (
      <div>
        <ul>
          {Object.keys(users).map(id => {
            return (
              <li key={id}>
                <a href="" onClick={(e) => this.handleSaveAuthedUser(e, id)}>{users[id].name}</a>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({users}, props) => ({
  users,
  ...props
})

const mapDispatchToProps = (dispatch) => ({
  handleSaveAuthedUser: (id) => dispatch(handleSaveAuthedUser(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
