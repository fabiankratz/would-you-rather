import { _getUsers, _getQuestions } from "../utils/_DATA";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { startLoading, finishLoading } from "./loading";
import { setAuthedUser } from "./authedUser";

export const LOAD_INITIAL_DATA = "LOAD_INITIAL_DATA";

function loadInitialData(data) {
  return {
    type: LOAD_INITIAL_DATA,
    payload: {
      ...data,
    },
  };
}

export function handleLoadInitialData() {
  return (dispatch) => {
    dispatch(startLoading());
    dispatch(showLoading());
    return Promise.all([_getUsers(), _getQuestions()])
      .then((values) => {
        dispatch(loadInitialData({ users: values[0], questions: values[1] }));
        const authedUser = localStorage.getItem("authedUser");
        authedUser && dispatch(setAuthedUser(authedUser));
        dispatch(finishLoading());
        dispatch(hideLoading());
      })
      .catch((e) => {
        console.log(e);
        dispatch(hideLoading());
      });
  };
}
