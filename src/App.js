import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cookies from 'universal-cookie';
import Spinner from 'react-bootstrap/Spinner';

// Local imports
import Login from './components/Login';
import Home from './components/Home';
import QuestionPollWrapper from './components/QuestionPollWrapper';
import QuestionCreaterForm from './components/QuestionCreaterForm';
import LeaderBoard from './components/LeaderBoard';
import Navigation from './components/Nav';
import GenericNotFound from './components/GenericNotFound';
import { handleInitialData } from './actions/shared';
import { setAuthedUser } from './actions/authedUser';

const cookies = new Cookies();

class App extends React.Component {
    componentDidMount() {
        const { dispatch } = this.props;
        const authedUser = cookies.get('authedUser');
        dispatch(handleInitialData())
            .then(() => {
                // If cookie already set up for authedUser then set authedUser in the store
                if (authedUser) {
                    dispatch(setAuthedUser(authedUser));
                }
            });
    }
    render() {
        return (
            <Router>
                <LoadingBar style={{ backgroundColor: 'green', height: '5px' }} />
                <div className='container'>
                    {this.props.enableLogin ?
                        <>
                            {this.props.enableNavBar && <Navigation />}
                            <Switch>
                                <Route path='/' exact component={Home} />
                                <Route path='/questions/:question_id' exact component={QuestionPollWrapper} />
                                <Route path='/add' exact component={QuestionCreaterForm} />
                                <Route path='/leaderboard' exact component={LeaderBoard} />
                                <Route path='/404' component={GenericNotFound} />
                                <Route component={GenericNotFound} />
                            </Switch>
                        </> :
                        // Don't show logIn screen on reload if user already loggedIn
                        (!this.props.enableLogin && cookies.get('authedUser')) ?
                            <div className="text-center">
                                <Spinner animation="border" variant="success" role="status">
                                    <span className="sr-only"></span>
                                </Spinner>
                            </div> :
                            <Login />
                    }
                </div>
            </Router>
        );
    }
}

const mapeStateToProps = ({ authedUser, navbar }) => {
    return {
        enableLogin: authedUser !== null,
        enableNavBar: navbar
    };
};

export default connect(mapeStateToProps)(App);
