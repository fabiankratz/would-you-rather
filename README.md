# Introduction
This is a in-browser implementation of the popular game "Would you rather ...?".
Players can log in as one of three predefined users and answer, create as well as view polls.
After selecting an option, the user is shown a statistic of how other people voted on this paricular question.
It stores the game state locally, so progress will be lost on page refresh.

# Installation
Make sure you have **npm** or **yarn** installed, then clone this repository and `cd` into the root folder.
Then, install the dependencies with `npm install` or `yarn install`.

# Usage
To start a local server which will be accessible in your browser at [localhost:3000](localhost:3000), execute the command `yarn start` or `npm start`.

The following endpoints will be exposed by the server:
* [localhost:3000/](localhost:3000/) - Dashboard showing (un)answered questions
* [localhost:3000/login](localhost:3000/login) - You can manually login at this URL, but you will be redirected to it from any other URL if you haven't signed in yet
* [localhost:3000/add](localhost:3000/add) - Add a new poll
* [localhost:3000/leaderboard](localhost:3000/leaderboard) - Leaderboard, user ranking based on score (num of answered polls + num of unanswered polls)
* [localhost:3000/question/:qid](localhost:3000/question/:qid) - Question details where **qid** is the question id

# About
This project was created for the react nanodegree program focussing on react + redux.
