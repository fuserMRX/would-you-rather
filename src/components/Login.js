import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Select from 'react-select';
import { showLoading, hideLoading } from 'react-redux-loading';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
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
        const LOGIN = 'Sign in';
        const WELCOME = 'Welcome to Would You Rather App!';
        const SIGNIN = 'Please sign in to continue';
        return (
            <Jumbotron fluid>
                <div className="text-center container">
                    <h3><b>{WELCOME}</b></h3>
                    <h5>{SIGNIN}</h5>
                    <Image src="/assets/images/AI-jail.png" fluid />
                    <form onSubmit={this.handleSubmit}>
                        <Select
                            closeMenuOnSelect={true}
                            placeholder={PLACEHOLDER}
                            onChange={this.handleChange}
                            options={this.props.loginUsers}
                            formatOptionLabel={CustomSelectOption} // Customize select option with image
                        />
                        <Button className='btn' type='submit' variant="success" disabled={!this.state.value}>
                            {LOGIN}
                        </Button>
                    </form>
                </div>
            </Jumbotron>
        );
    }
}

const mapStateToProps = ({ users }) => {
    return {
        loginUsers: Object.values(users).map(({ id, name, avatarURL }) => ({ value: id, label: name, customAbbreviation: avatarURL })),
    };
};

export default connect(mapStateToProps)(Login);
