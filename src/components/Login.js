import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Select from 'react-select';
import { showLoading, hideLoading } from 'react-redux-loading';
import Cookies from 'universal-cookie';

// Local imports
import { setAuthedUser } from '../actions/authedUser';
import CustomSelectOption from './CustomSelectOption';

class Login extends Component {
    state = {
        value: null
    };

    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        loginUsers: PropTypes.array.isRequired
    };

    handleChange = (e) => {
        let selectedValue = e.value;
        this.setState(() => ({
            value: selectedValue
        }
        ));
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { dispatch } = this.props;
        const cookies = new Cookies();

        dispatch(showLoading());
        dispatch(setAuthedUser(this.state.value));
        setTimeout(function () {
            dispatch(hideLoading());
        }, 300);

        // Temporary solution - not for production!!!
        // Create ability to show needed page after reload if user already logged in - for smooth customer experience
        // Non secure solution as normally we should get this info from DB
        cookies.set('authedUser', this.state.value, { path: '/' });
    }

    render() {
        const PLACEHOLDER = 'Select User';
        const LOGIN = 'Log in';
        const WELCOME = 'Welcome to would you rather App!';
        const SIGNIN = 'Please sign in to continue';
        return (
            <>
                <h3>{WELCOME}</h3>
                <h5>{SIGNIN}</h5>
                <form onSubmit={this.handleSubmit}>
                    <Select
                        closeMenuOnSelect={true}
                        placeholder={PLACEHOLDER}
                        onChange={this.handleChange}
                        options={this.props.loginUsers}
                        formatOptionLabel={CustomSelectOption} // Customize select option with image
                    />
                    <button className='btn' type='submit' disabled={!this.state.value}>
                        {LOGIN}
                    </button>
                </form>
            </>
        );
    }
}

const mapStateToProps = ({ users }) => {
    return {
        loginUsers: Object.values(users).map(({ id, name, avatarURL }) => ({ value: id, label: name, customAbbreviation: avatarURL })),
    };
};

export default connect(mapStateToProps)(Login);
