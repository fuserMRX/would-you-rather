import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Logout extends Component {

    state = {
        toLogin: false
    }

    clickHandler = () => {
        this.setState(() => ({
            toLogin: true
        }));
    }

    render() {
        const logout = 'Logout';
        if (this.state.toLogin) {
            return <Redirect to='' />;
        }
        return (
            <div>
                <button onClick={this.clickHandler}>{logout}</button>
            </div>
        );
    }
}

export default Logout;
