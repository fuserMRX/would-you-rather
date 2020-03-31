import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Local imports
import Login from './components/Login';
import Home from './components/Home';
import QuestionPollWrapper from './components/QuestionPollWrapper';
import { handleInitialData } from './actions/shared';


class App extends React.Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData());
    }
    render() {
        return (
            <Router>
                <LoadingBar style={{ backgroundColor: 'green', height: '5px' }} />
                <div className='container'>
                    {this.props.enableLogin ?
                        <div>
                            <Route path='/' exact component={Home} />
                            <Route path='/questions/:question_id' component={QuestionPollWrapper} />
                        </div>:
                        <Login />
                    }
                </div>
            </Router>
        );
    }
}

const mapeStateToProps = ({ authedUser }) => {
    return {
        enableLogin: authedUser !== null
    };
};

export default connect(mapeStateToProps)(App);
