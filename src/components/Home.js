import React from 'react';

import UnansweredQuestionsList from './UnansweredQuestionsList';
import AnsweredQuestionsList from './AnsweredQuestionsList';

const Home = () => {
    return (
        <div>
            <UnansweredQuestionsList />
            <hr />
            <AnsweredQuestionsList />
        </div>
    );
};

export default Home;
