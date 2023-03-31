import { useSelector } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Review() {
  const history = useHistory();
  const feeling = useSelector((store) => store.feelingRating);
  const understanding = useSelector((store) => store.understandingRating);
  const support = useSelector((store) => store.supportedRating);
  const comments = useSelector((store) => store.comments);

  //TODO: POST responses to database!
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
        history.push('/complete');
      })
      .catch((err) => {
        console.log("Error posting responses to DB", err);
      });
  };

  return (
    <>
      <h1>Review Your Feedback</h1>
      <p>Feelings: {feeling}</p>
      <p>Understanding: {understanding}</p>
      <p>Support: {support}</p>
      <p>Comments: {comments}</p>
      <button onClick={() => submitResponses()}>SUBMIT</button>
    </>
  );
}

export default Review;
