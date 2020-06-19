import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../actions/authedUser";

export const Navbar = (props) => {
  const { logout, authedUser } = props;
  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  };
  return (
    <nav>
      <NavLink exact to="/">
        <button className="nav-link">Home</button>
      </NavLink>
      <NavLink exact to="/leaderboard">
        <button className="nav-link">Leaderboard</button>
      </NavLink>
      <NavLink exact to="/add">
        <button className="nav-link">New poll</button>
      </NavLink>
      {authedUser && (
        <button onClick={(e) => handleLogout(e)}>Logout (@{authedUser})</button>
      )}
    </nav>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
