import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import Leaderboard from "./Leaderboard";
import Dashboard from "./Dashboard";
import Question from "./Question";
import AddQuestion from "./AddQuestion";

export default function MainContent() {
  return (
    <Switch>
      <Route path="/question/:qid">
        <Question />
      </Route>
      <Route path="/add">
        <AddQuestion />
      </Route>
      <Route path="/leaderboard">
        <Leaderboard />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route exact path="/">
        <Dashboard />
      </Route>
    </Switch>
  );
}
