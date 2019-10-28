import React, {Component} from 'react'

class QuizQuestion extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <main>
          <section>
            <p className="QuizQuestion">{this.props.quiz_question.instruction_text}</p>
          </section>
          <section className="buttons">
            <ul>
              <li>{this.props.quiz_question.answer_options[0]}</li>
            </ul>
          </section>
        </main>
      )
  }
}

export default QuizQuestion
