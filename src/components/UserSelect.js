import React from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

export const UserSelect = (props) => {
  const { setAuthedUser, id, users, lastListItem } = props;
  const handleSetAuthedUser = (e, id) => {
    e.preventDefault();
    setAuthedUser(id);
  };
  const user = users[id];
  return (
    <div>
      <div
        onClick={(e) => handleSetAuthedUser(e, id)}
        className="user"
        style={{ borderBottom: lastListItem ? "" : "1px solid grey" }}
      >
        <img
          src={user.avatarURL}
          className="userImg"
          alt={`${user.name}'s avatar`}
        />
        <p>
          {user.name} <span className="user-id">@{user.id}</span>
        </p>
      </div>
      {!lastListItem && <p className="or">or</p>}
    </div>
  );
};

const mapStateToProps = ({ users }, props) => ({
  users,
  ...props,
});

const mapDispatchToProps = (dispatch) => ({
  setAuthedUser: (id) => dispatch(setAuthedUser(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserSelect);
