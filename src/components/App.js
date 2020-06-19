import React, { useEffect } from "react";
import { connect } from "react-redux";
import { handleLoadInitialData } from "../actions/shared";
import LoadingBar from "react-redux-loading-bar";
import { Route, Redirect, useLocation } from "react-router-dom";
import Header from "./Header";
import MainContent from "./MainContent";

export function App(props) {
  const { authedUser, loading, handleLoadInitialData } = props;
  useEffect(() => {
    handleLoadInitialData();
  }, [handleLoadInitialData]);
  const location = useLocation();
  const redirect = !(authedUser || location.pathname === "/login");
  return (
    <React.Fragment>
      <LoadingBar />
      {!loading &&
        (redirect ? (
          <Route
            path="*"
            render={({ location }) => (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: location },
                }}
              />
            )}
          />
        ) : (
          <div className="container">
            {location.pathname !== "/login" && <Header />}
            <MainContent />
          </div>
        ))}
    </React.Fragment>
  );
}

const mapStateToProps = ({ authedUser, loading }, props) => ({
  authedUser,
  loading,
  ...props,
});

const mapDispatchToProps = (dispatch) => {
  return {
    handleLoadInitialData: () => dispatch(handleLoadInitialData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
