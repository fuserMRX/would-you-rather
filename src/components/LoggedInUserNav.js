import React from 'react';
import { connect } from 'react-redux';

const LoggedInUserNav = (props) => {
    const helloText = 'Hello';
    return (
        <div>
            <p>{helloText}, {props.userInfo.name}</p>
            <img src={props.userInfo.avatarURL} alt={props.userInfo.name} width='30'/>
        </div>
    );
};

const mapStateToProps = ({ users, authedUser }) => {
    return {
        userInfo: Object.values(users)
            .filter(({ id }) => id === authedUser)
            .map(({ name, avatarURL }) => ({ name, avatarURL }))[0]
    };
};

export default connect(mapStateToProps)(LoggedInUserNav);
