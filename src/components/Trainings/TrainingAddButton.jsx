import classes from "./TrainingAddButton.module.css";

const TrainingAddButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onAddButton}>
      +추가
    </button>
  );
};

export default TrainingAddButton;
