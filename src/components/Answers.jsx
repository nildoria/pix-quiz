import classes from '../styles/Answers.module.css';
import Checkbox from './Checkbox';

function Answers({ options = [], handleAnswerChange }) {
  return (
    <div className={classes.answers}>
      {options.map((option, index) => (
        <Checkbox
          key={index}
          className={classes.answer}
          onchange={(e) => handleAnswerChange(e, index)}
          type="checkbox"
          text={option.title}
          value={index}
          checked={option.checked}
        />
      ))}
    </div>
  );
}

export default Answers;
