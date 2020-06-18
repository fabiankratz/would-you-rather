import React, { Component } from 'react'
import { connect } from 'react-redux'
import {setAuthedUser} from '../actions/authedUser'

export const UserSelect = (props) => {
  const {setAuthedUser, id, users, lastListItem} = props
  const handleSetAuthedUser = (e, id) => {
    e.preventDefault()
    setAuthedUser(id)
  }
  const user = users[id]
  return (
    <div>
      <div
      onClick={(e) => handleSetAuthedUser(e, id)}
      className="user"
      style={{borderBottom: lastListItem ? "" : "1px solid grey"}}
      >
        <img 
          src={user.avatarURL}
          className="userImg"
        />
        <p>{user.name} <span style={{color: "green"}}>@{user.id}</span></p>
      </div>
      {!lastListItem && (
        <p 
          style={{
            backgroundColor: "white",
            position: "absolute",
            bottom: "-1.5em",
            textAlign: "center",
            left: "calc(50% - 20px)",
            border: "1px solid black",
            padding: "0 0.2em",
            borderRadius: "50%",
            zIndex: "100"
          }}>or</p>
      )}
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
