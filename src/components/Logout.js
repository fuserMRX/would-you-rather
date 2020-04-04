import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import Cookies from 'universal-cookie';

// Local Import
import { removeAuthedUser } from '../actions/authedUser';

const Logout = (props) => {

    const logout = 'Logout';
    const history = useHistory();

    const clickHandler = () => {
        const cookies = new Cookies();
        const { dispatch } = props;

        cookies.remove('authedUser', { path: '/' });

        history.push('/');
        dispatch(removeAuthedUser());
    };

    return (
        <div>
            <button onClick={clickHandler}>{logout}</button>
        </div>
    );
};

export default connect()(Logout);