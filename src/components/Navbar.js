import React from 'react'
import { connect } from 'react-redux'
import {NavLink} from 'react-router-dom'
import {logout} from '../actions/authedUser'

export const Navbar = (props) => {
  const {logout, authedUser} = props
  const handleLogout = (e) => {
    e.preventDefault()
    logout()
  }
  return (
    <nav>
      <NavLink to="/">
        Home
      </NavLink>
      <NavLink to="/leaderboard">
        Leaderboard
      </NavLink>
      <NavLink to="/add">
        New poll
      </NavLink>
      {authedUser && <button onClick={(e) => handleLogout(e)}>Logout</button>}
  </nav>
  )
}

const mapStateToProps = ({authedUser}) => ({
  authedUser
})

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
