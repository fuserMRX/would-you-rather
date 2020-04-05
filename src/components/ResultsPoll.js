import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Badge from 'react-bootstrap/Badge';
import PropTypes from 'prop-types';

// Local Import
import { WouldYou } from '../helpers/viewHelper';

/**
* Get answer rate for th curernt question
* @param {object} optionVotes - option (one or two) votes
* @param {number} allVotes - number of all votes
* @param {string} userId - userId
* @returns {object} returns object with percentage and text for option
*/
function getVotesPercentageInfo(optionVotes, allVotes, userId) {
    const authedUserVote = optionVotes.filter(vote => vote === userId).length;
    const currentVotes = optionVotes.length;

    return {
        precentRate: currentVotes ? ((currentVotes * 100) / allVotes).toFixed(1) : 0,
        percentText: `${currentVotes} out of ${allVotes} votes`,
        isVotedByAuthedUser: !!authedUserVote
    };
}


const ResultsPoll = (props) => {
    const question = props.resultsInfo.currentQuestion;
    const authedUser = props.resultsInfo.authedUser;
    const optionOneVotes = question.optionOne.votes;
    const optionTwoVotes = question.optionTwo.votes;
    const allVotes = optionOneVotes.length + optionTwoVotes.length;

    const optionOneInfo = getVotesPercentageInfo(optionOneVotes, allVotes, authedUser);
    const optionTwoInfo = getVotesPercentageInfo(optionTwoVotes, allVotes, authedUser);

    const VOTE = 'You vote';
    const AskedByText = 'Asked by';
    const RESULTS = 'Results:';

    return (
        <div>
            <p>{AskedByText} {props.resultsInfo.questionUserName}</p>
            <img src={props.resultsInfo.questionUserAvatar} alt={props.resultsInfo.questionUserName} />
            <h5>{RESULTS}</h5>
            <hr/>

            <p>{WouldYou} {question.optionOne.text}?</p>
            <ProgressBar variant="success" now={optionOneInfo.precentRate} label={`${optionOneInfo.precentRate}%`} />
            {optionOneInfo.isVotedByAuthedUser && <Badge variant="success">{VOTE}</Badge>}
            <p>{optionOneInfo.percentText}</p>

            <p>{WouldYou} {question.optionTwo.text}?</p>
            <ProgressBar variant="success" now={optionTwoInfo.precentRate} label={`${optionTwoInfo.precentRate}%`} />
            {optionTwoInfo.isVotedByAuthedUser && <Badge variant="success">{VOTE}</Badge>}
            <p>{optionTwoInfo.percentText}</p>
        </div>
    );
};

ResultsPoll.propTypes = {
    resultsInfo: PropTypes.object.isRequired
};

export default ResultsPoll;
