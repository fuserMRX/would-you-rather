import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const LeaderBoard = (props) => {
    const answeredQuestions = 'Answered questions';
    const createdQuestions = 'Created questions';
    const score = 'Score';
    return (
        <div>
            <ul className='options'>
                {props.usersInfo.map(user => (
                    <li key={user.id}>
                        <div className="user">
                            <p>{user.userName}</p>
                            <img src={user.userPicture} alt={user.userName} />
                            <p>{answeredQuestions} {user.answeredQuestions}</p>
                            <p>{createdQuestions} {user.createdQuestions}</p>
                            <p>{score} {user.score}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const mapStateToProps = ({ users }) => {
    return {
        usersInfo: Object.values(users).map(({ id, name, avatarURL, answers, questions }) => {
            const answeredQuestions = Object.keys(answers).length || 0;
            const createdQuestions = questions.length || 0;
            const score = answeredQuestions + createdQuestions;
            return {
                userName: name,
                userPicture: avatarURL,
                id,
                answeredQuestions,
                createdQuestions,
                score
            };
        }).sort((userA, userB) => userB.score - userA.score).slice(0, 3)
    };
};

LeaderBoard.propTypes = {
    usersInfo: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(LeaderBoard);
