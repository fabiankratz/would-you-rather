let users = {
    sarahedo: {
      id: 'sarahedo',
      name: 'Sarah Edo',
      avatarURL: "data:image/jpeg;base64,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",
      answers: {
        "8xf0y6ziyjabvozdd253nd": 'optionOne',
        "6ni6ok3ym7mf1p33lnez": 'optionTwo',
        "am8ehyc8byjqgar0jgpub9": 'optionTwo',
        "loxhs1bqm25b708cmbf3g": 'optionTwo'
      },
      questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
    },
    tylermcginnis: {
      id: 'tylermcginnis',
      name: 'Tyler McGinnis',
      avatarURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS2RtTZdiFzgqXuoLPGKWwZmhEaw2Xdx5-lf-FdDbZYLW0_ygBe&usqp=CAU",
      answers: {
        "vthrdm985a262al8qx3do": 'optionOne',
        "xj352vofupe1dqz9emx13r": 'optionTwo',
      },
      questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
    },
    johndoe: {
      id: 'johndoe',
      name: 'John Doe',
      avatarURL: "https://storage.needpix.com/rsynced_images/emoji-2639738_1280.png",
      answers: {
        "xj352vofupe1dqz9emx13r": 'optionOne',
        "vthrdm985a262al8qx3do": 'optionTwo',
        "6ni6ok3ym7mf1p33lnez": 'optionTwo'
      },
      questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
    }
  }
  
  let questions = {
    "8xf0y6ziyjabvozdd253nd": {
      id: '8xf0y6ziyjabvozdd253nd',
      author: 'sarahedo',
      timestamp: 1467166872634,
      optionOne: {
        votes: ['sarahedo'],
        text: 'have horrible short term memory',
      },
      optionTwo: {
        votes: [],
        text: 'have horrible long term memory'
      }
    },
    "6ni6ok3ym7mf1p33lnez": {
      id: '6ni6ok3ym7mf1p33lnez',
      author: 'johndoe',
      timestamp: 1468479767190,
      optionOne: {
        votes: [],
        text: 'become a superhero',
      },
      optionTwo: {
        votes: ['johndoe', 'sarahedo'],
        text: 'become a supervillain'
      }
    },
    "am8ehyc8byjqgar0jgpub9": {
      id: 'am8ehyc8byjqgar0jgpub9',
      author: 'sarahedo',
      timestamp: 1488579767190,
      optionOne: {
        votes: [],
        text: 'be telekinetic',
      },
      optionTwo: {
        votes: ['sarahedo'],
        text: 'be telepathic'
      }
    },
    "loxhs1bqm25b708cmbf3g": {
      id: 'loxhs1bqm25b708cmbf3g',
      author: 'tylermcginnis',
      timestamp: 1482579767190,
      optionOne: {
        votes: [],
        text: 'be a front-end developer',
      },
      optionTwo: {
        votes: ['sarahedo'],
        text: 'be a back-end developer'
      }
    },
    "vthrdm985a262al8qx3do": {
      id: 'vthrdm985a262al8qx3do',
      author: 'tylermcginnis',
      timestamp: 1489579767190,
      optionOne: {
        votes: ['tylermcginnis'],
        text: 'find $50 yourself',
      },
      optionTwo: {
        votes: ['johndoe'],
        text: 'have your best friend find $500'
      }
    },
    "xj352vofupe1dqz9emx13r": {
      id: 'xj352vofupe1dqz9emx13r',
      author: 'johndoe',
      timestamp: 1493579767190,
      optionOne: {
        votes: ['johndoe'],
        text: 'write JavaScript',
      },
      optionTwo: {
        votes: ['tylermcginnis'],
        text: 'write Swift'
      }
    },
  }
  
  function generateUID () {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  }
  
  export function _getUsers () {
    return new Promise((res, rej) => {
      setTimeout(() => res({...users}), 1000)
    })
  }
  
  export function _getQuestions () {
    return new Promise((res, rej) => {
      setTimeout(() => res({...questions}), 1000)
    })
  }
  
  function formatQuestion ({ optionOneText, optionTwoText, author }) {
    return {
      id: generateUID(),
      timestamp: Date.now(),
      author,
      optionOne: {
        votes: [],
        text: optionOneText,
      },
      optionTwo: {
        votes: [],
        text: optionTwoText,
      }
    }
  }
  
  export function _saveQuestion (question) {
    return new Promise((res, rej) => {
      const authedUser = question.author;
      const formattedQuestion = formatQuestion(question);
  
      setTimeout(() => {
        questions = {
          ...questions,
          [formattedQuestion.id]: formattedQuestion
        }
        
        users = {
          ...users,
          [authedUser]: {
            ...users[authedUser],
            questions: users[authedUser].questions.concat([formattedQuestion.id])
          }
        }
  
        res(formattedQuestion)
      }, 1000)
    })
  }
  
  export function _saveQuestionAnswer ({ authedUser, qid, answer }) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        users = {
          ...users,
          [authedUser]: {
            ...users[authedUser],
            answers: {
              ...users[authedUser].answers,
              [qid]: answer
            }
          }
        }
  
        questions = {
          ...questions,
          [qid]: {
            ...questions[qid],
            [answer]: {
              ...questions[qid][answer],
              votes: questions[qid][answer].votes.concat([authedUser])
            }
          }
        }
  
        res()
      }, 500)
    })
  }