import _ from 'lodash';
import { useEffect, useReducer, useState } from 'react';
import { useParams } from 'react-router-dom';
import useQuestions from '../../hooks/useQuestions';
import Answers from '../Answers';
import MiniPlayer from '../MiniPlayer';
import ProgressBar from '../ProgressBar';

const initialState = null;

const reducer = (state, action) => {
  switch (action.type) {
    case 'questions':
      action.value.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false;
        });
      });
      return action.value;

    case 'answer':
      // eslint-disable-next-line no-case-declarations
      const questions = _.cloneDeep(state);
      questions[action.questionID].options[action.optionIndex].checked =
        action.value;
      return questions;

    default:
      return state;
  }
};

function Quiz() {
  const { id } = useParams();
  // eslint-disable-next-line no-unused-vars
  const { loading, error, questions } = useQuestions(id);
  // eslint-disable-next-line no-unused-vars
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [qna, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({
      type: 'questions',
      value: questions,
    });
  }, [questions]);

  function handleAnswerChange(e, index) {
    dispatch({
      type: 'answer',
      questionID: currentQuestion,
      optionIndex: index,
      value: e.target.checked,
    });
  }

  return (
    <>
      <h1>{qna[currentQuestion].title}</h1>
      {console.log(qna)}
      <h4>Question can have multiple answers</h4>
      <Answers
        options={qna[currentQuestion].options}
        handleChange={handleAnswerChange}
      />
      <ProgressBar />
      <MiniPlayer />
    </>
  );
}

export default Quiz;
