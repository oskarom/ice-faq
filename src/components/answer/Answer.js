import React, { Component } from 'react';

import './Answer.css';

export class Answer extends Component {
  
  // Shows toggles answer-content, hides all other answer-contents
  toggleAnswerContent() {  
    if(this.refs["answer-content"].style.display === 'block') {
      this.refs["answer-content"].style.display = 'none';
    } else {
      const answers = document.getElementsByClassName('answer-content');
      for (var i = 0; i < answers.length; i++ ) {
        answers[i].style.display = 'none';
      }

      this.refs["answer-content"].style.display = 'block';
    }
  }
  
  render() {

    var answerParagraphs = this.props.answer.map(function(paragraph, i){
      return (
        <p>{paragraph}</p>
      );
    });

    return (
      <div className="answer">
          <div className="answer-header-left">
            <div className="count">{this.props.viewCount}</div>
            <div>VIEWS</div>
          </div>
          <div className="answer-header-middle">
            <h2 onClick={this.toggleAnswerContent.bind(this)}>{this.props.title}</h2> {/* calling toggle function to show answer content on click */}
            <p>Asked by {this.props.askedBy}</p>
            <div className="answer-tags">
              <div>Sales</div>
              <div>Marketing</div>
            </div>
          </div>
          <div className="answer-header-right">
          </div>
        <div className="answer-content" ref='answer-content'> {/* ref added for simpler selection when showing/hiding */}
          <h3>Answer</h3>
          {answerParagraphs}
        </div>
      </div>
      )
    }
  }