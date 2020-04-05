import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// Local Import
import { WouldYou } from '../helpers/viewHelper';
import { Submit } from '../helpers/viewHelper';
import { handleSaveAnswer } from '../actions/answers';

class QuestionPoll extends Component {

    state = {
        value: null,
    }

    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        questionInfo: PropTypes.object.isRequired
    }

    onRadioChange = (e) => {
        const value = e.target.value;
        this.setState(() => ({
            value
        }));
    }

    onSubmit = (e) => {
        e.preventDefault();
        const qid = this.props.questionInfo.currentQuestion.id;
        const authedUser = this.props.questionInfo.authedUser;
        const answer = this.state.value;
        const { dispatch } = this.props;
        dispatch(handleSaveAnswer({ authedUser, qid, answer }));
    }

    render() {
        const questionerName = this.props.questionInfo.questionUserName;
        const avatar = this.props.questionInfo.questionUserAvatar;
        const question = this.props.questionInfo.currentQuestion;

        const asks = 'asks';

        if (!Object.keys(question).length) {
            return <Redirect to='/404' />;
        }

        return (
            <div>
                <p>{questionerName} {asks}</p>
                <img src={avatar} alt={questionerName} />
                <h3>{WouldYou}...</h3>
                <form onSubmit={this.onSubmit}>
                    <div onChange={this.onRadioChange}>
                        <ul className='options'>
                            <li>
                                <label>
                                    <input type="radio" value="optionOne" name={this.props.questionInfo.authedUser} />
                                    <span> {question.optionOne.text}</span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="radio" value="optionTwo" name={this.props.questionInfo.authedUser} />
                                    <span> {question.optionTwo.text}</span>
                                </label>
                            </li>
                        </ul>
                    </div>
                    <button type="submit" disabled={!this.state.value}>{Submit}</button>
                </form>
            </div>
        );
    }
}

export default connect()(QuestionPoll);
