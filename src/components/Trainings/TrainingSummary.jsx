import { Fragment, useState } from "react";
// import { Card } from "react-bootstrap";
import classes from "./TrainingSummary.module.css";

const TrainingSummary = () => {
  const [isSummary, setIsSummary] = useState(true);

  const summaryHandler = () => {
    setIsSummary(false);
  };

  return (
    <Fragment>
      {isSummary && (
        <section className={classes.summary}>
          <h2>수영 훈련 프로그램에 오신것을 환영합니다!</h2>
          <p>밑에 추가 버튼을 눌러 운동을 추가 할 수 있습니다.</p>
          <button onClick={summaryHandler}>확인</button>
        </section>
      )}
    </Fragment>
  );
};

export default TrainingSummary;
