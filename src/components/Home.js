import React, { Component } from 'react';

import UnansweredQuestionsList from './UnansweredQuestionsList';
import AnsweredQuestionsList from './AnsweredQuestionsList';

class Home extends Component {
    render() {
        return (
            <div>
                <UnansweredQuestionsList />
                <hr/>
                <AnsweredQuestionsList />
            </div>
        );
    }
}

export default Home;
