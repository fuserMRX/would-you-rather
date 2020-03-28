import { getInitialData } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';
import { receiveUsers } from './users';
import { receiveQuestions } from './questions';

/**
* Return initial load data for users, questions
* @returns {Object} object with dispatch functions for store
*/
export const handleInitialData = () => {
    return (dispatch) => {
        dispatch(showLoading());
        return getInitialData()
            .then(({ users, questions }) => {
                dispatch(receiveUsers(users));
                dispatch(receiveQuestions(questions));
                dispatch(hideLoading());
            });
    };
};