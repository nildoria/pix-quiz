import classes from '../styles/Answers.module.css';
import Checkbox from './Checkbox';

function Answers() {
  return (
    <div className={classes.answers}>
      <Checkbox
        className={classes.answer}
        type="checkbox"
        text="A test answer"
      />
    </div>
  );
}

export default Answers;
