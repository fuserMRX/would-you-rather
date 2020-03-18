import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';

import CustomSelectOption from './CustomSelectOption';

class Login extends Component {
    state = {
        value: '0'
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
    }

    render() {
        const PLACEHOLDER = 'Select User';
        return (
            <form onSubmit={this.handleSubmit}>
                <Select
                    closeMenuOnSelect={true}
                    placeholder={PLACEHOLDER}
                    onChange={this.handleChange}
                    options={this.props.loginUsers}
                    formatOptionLabel={CustomSelectOption} // Customize select option with image
                />
                <button className='btn' type='submit'>
                    Log in
                </button>
            </form>
        );
    }
}

const mapStateToProps = ({ users }) => {
    return {
        loginUsers: Object.values(users).map(({ id, name, avatarURL }) => ({ value: id, label: name, customAbbreviation: avatarURL })),
    };
};

export default connect(mapStateToProps)(Login);
