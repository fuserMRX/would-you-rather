import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';


const QuestionView = (props) => {
    const viewPoll = 'viewPoll';

    // Use react hook useHistory to move to another route
    const history = useHistory();

    const handleViewPoll = () => {
        history.push(`questions/${props.question.id}`);
    };

    return (
        <>
            <p>{props.questionOwnerData.name} asks</p>
            <img src={props.questionOwnerData.avatarURL} alt={props.questionOwnerData.name} />
            <p>...{props.question.optionOne.text || props.question.optionTwo.text || ''}...</p>
            <button onClick={handleViewPoll}>{viewPoll}</button>
        </>
    );
};

QuestionView.propTypes = {
    question: PropTypes.object.isRequired,
    questionOwnerData: PropTypes.object.isRequired
};

export default QuestionView;
