import React, { Component } from 'react';
import { connect } from 'react-redux';

import QuestionView from './QuestionView';
import { mapStateToProps } from '../helpers/mapStateToPropsHelper';
import { answeredView } from '../helpers/viewHelper';

class AnsweredQuestionsList extends Component {
    render() {
        return (
            <div>
                {this.props.answeredQuestions.map(answeredQuestion => (
                    <QuestionView key={answeredQuestion.id}
                        question={answeredQuestion}
                        questionOwnerData={this.props.userNames[answeredQuestion.author]}
                        dispatch={this.props.dispatch}
                    />
                ))}
            </div>
        );
    }
}

export default connect(mapStateToProps(answeredView))(AnsweredQuestionsList);

