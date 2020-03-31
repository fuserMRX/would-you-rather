import React from 'react';
import { connect } from 'react-redux';

// Local imports
import { mapStateToPropsQuestionPollHelper as mapStateToProps } from '../helpers/mapStateToPropsQuestionPollHelper';
import QuestionPoll from './QuestionPoll';
import ResultsPoll from './ResultsPoll';

const QuestionPollWrapper = (props) => {
    return (
        <>
            {props.isQuestionAnswered ?
                <ResultsPoll resultsInfo={props}/> :
                <QuestionPoll questionInfo={props}/>
            }
        </>
    );
};

export default connect(mapStateToProps)(QuestionPollWrapper);
