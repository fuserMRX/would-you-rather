import React, { Component } from 'react';
import { connect } from 'react-redux';

// Local imports
import QuestionView from './QuestionView';
import { mapStateToProps } from '../helpers/mapStateToPropsHelper';
import { unansweredView } from '../helpers/viewHelper';

class UnansweredQuestionsList extends Component {
    render() {
        return (
            <div>
                {this.props.unansweredQuestions.map(unansweredQuestion => (
                    <QuestionView key={unansweredQuestion.id}
                        question={unansweredQuestion}
                        questionOwnerData={this.props.userNames[unansweredQuestion.author]}
                        dispatch={this.props.dispatch}
                    />
                ))}
            </div>
        );
    }
}

export default connect(mapStateToProps(unansweredView))(UnansweredQuestionsList);
