import React, { Component } from 'react'
import { connect } from 'react-redux'
import {setAuthedUser} from '../actions/authedUser'

export const UserSelect = (props) => {
  const {setAuthedUser, id, users} = props
  const handleSetAuthedUser = (e, id) => {
    e.preventDefault()
    setAuthedUser(id)
  }
  const user = users[id]
  return (
    <div
      onClick={(e) => handleSetAuthedUser(e, id)}
      className="user"
      >
      <img 
        src={user.avatarURL}
        className="userImg"
      />
      <p>{user.name}</p>
    </div>
  )
}

const mapStateToProps = ({users}, props) => ({
  users,
  ...props
})

const mapDispatchToProps = (dispatch) => ({
  setAuthedUser: (id) => dispatch(setAuthedUser(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserSelect)
