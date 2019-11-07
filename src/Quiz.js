import React, {Component} from 'react'
import QuizQuestion from './QuizQuestion.js'
import QuizEnd from './QuizEnd.js'

let quizData = require('./quiz_data.json');

class Quiz extends Component {

  constructor(props){
    super(props);
    this.state = {quiz_position: 1,
                  quiz_correct: 0}
  }

  showNextQuestion(guessedIncorrectly){
    this.setState((state) => {
      if (guessedIncorrectly)
        return {quiz_position: state.quiz_position + 1}
      else {
        return {quiz_position: state.quiz_position + 1,
                quiz_correct: state.quiz_correct + 1}
      }
    })
  }

  handleResetClick() {
      this.setState({quiz_position: 1});
  }

  render(){
    const isQuizEnd = (this.state.quiz_position - 1 === quizData.quiz_questions.length);
    return (
      <div>
        <div className= "QuizInfo">
          {isQuizEnd ? <p className = "QuestionMarker">Quiz Finished!</p>  : <p className = "QuestionMarker"> Question: {this.state.quiz_position}</p>}
          <p className = "ScoreDisplay">Number Correct: {this.state.quiz_correct}</p>
        </div>
        {isQuizEnd ? <QuizEnd resetClickHandler = {this.handleResetClick.bind(this)}/> :
        <QuizQuestion showNextQuestionHandler = {this.showNextQuestion.bind(this)} quiz_question = {quizData.quiz_questions[this.state.quiz_position - 1]}/>
      }
      </div>
    )
  }
}

export default Quiz;
