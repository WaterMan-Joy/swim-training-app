import { Fragment, useState } from "react";
import TrainingAddButton from "../Trainings/TrainingAddButton";
import TrainingAddForm from "../Trainings/TrainingAddForm";
import TrainingSummary from "../Trainings/TrainingSummary";
import classes from "./MainBackground.module.css";

const MainBackground = () => {
  const [isAddBtn, setIsAddBtn] = useState(false);

  const addTrainingButtonHandler = () => {
    if (isAddBtn) {
      setIsAddBtn(false);
    } else {
      setIsAddBtn(true);
    }
  };

  return (
    <Fragment>
      <div className={classes.background}>
        <TrainingSummary />
        <TrainingAddButton onAddButton={addTrainingButtonHandler} />
        {isAddBtn && <TrainingAddForm />}
      </div>
    </Fragment>
  );
};

export default MainBackground;
