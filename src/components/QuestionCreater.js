import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


// Local Import
import { WouldYou } from '../helpers/viewHelper';
import { handleSaveQuestion } from '../actions/questions';


class QuestionCreater extends Component {

    state = {
        optionOne: '',
        optionTwo: '',
        toHome: false
    }

    handleChange = (e) => {
        const targetInput = e.target;
        const name = targetInput.name;
        const value = targetInput.value;
        this.setState(() => ({
            [name]: value
        }));
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { dispatch } = this.props;
        const question = {
            optionOneText: this.state.optionOne,
            optionTwoText: this.state.optionTwo,
        };
        dispatch(handleSaveQuestion(question))
            .then(() => {
                this.setState(() => ({
                    toHome: true
                }));
            })
            .catch(e => {
                console.log(e);
            });
    };
    render() {
        const createNewQuestionText = 'Create New Question';
        const completeTheQuestionText = 'Complete the question';
        const optionOneText = 'Enter Option One Text Here';
        const optionTwoText = 'Enter Option Two Text Here';

        if (this.state.toHome) {
            return <Redirect to='' />;
        }

        return (
            <>
                <h2>{createNewQuestionText}</h2>
                <hr />
                <h5>{completeTheQuestionText}</h5>
                <b>{WouldYou}...</b>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="optionOne"
                        placeholder={optionOneText}
                        value={this.state.optionOne}
                        onChange={this.handleChange}
                    />
                    <br />
                    OR
                    <br />
                    <input
                        type="text"
                        name="optionTwo"
                        placeholder={optionTwoText}
                        value={this.state.optionTwo}
                        onChange={this.handleChange}
                    />
                    <br />
                    <input type="submit" value="Submit" disabled={!this.state.optionOne || !this.state.optionTwo} />
                </form>
            </>
        );
    }
}

export default connect()(QuestionCreater);
