import { useSelector } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";

function Review( {getFeedback} ) {
  const history = useHistory();
  const feeling = useSelector((store) => store.feelingRating);
  const understanding = useSelector((store) => store.understandingRating);
  const support = useSelector((store) => store.supportedRating);
  const comments = useSelector((store) => store.comments);

  // POST responses to database
  const submitResponses = () => {
    console.log("submitting responses");

    const responses = {
      feeling: feeling,
      understanding: understanding,
      support: support,
      comments: comments,
    };

    axios
      .post("/response", responses)
      .then((response) => {
        console.log(response);
        getFeedback();
        history.push('/complete');
      })
      .catch((err) => {
        console.log("Error posting responses to DB", err);
      });
  };

  // return to previous page
  const goBack = () => {
    history.goBack();
  }

  return (
    <>
    <div className="backBtn">
        <Button onClick={goBack} variant="contained" size="large" type="button">
          BACK
        </Button>
      </div>
      <h1>Review Your Feedback</h1>
      <br></br>
      <h2>Feelings: {feeling}</h2>
      <h2>Understanding: {understanding}</h2>
      <h2>Support: {support}</h2>
      <h2>Comments: {comments}</h2>
      <Button 
      onClick={() => submitResponses()}
      variant="contained" 
      size="large"
      >
        SUBMIT
      </Button>
    </>
  );
}

export default Review;
