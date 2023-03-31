import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function UnderstandingForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [understanding, setUnderstanding] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("in handleSubmit", understanding);

    // TODO: input validation

    dispatch({
      type: "NEW_UNDERSTANDING_RATING",
      payload: understanding,
    });

    history.push("/supported");
  };

  const handleUnderstandingChange = (event) => {
    setUnderstanding(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>How well are you understanding the content?</h1>
      <label>
        Understanding?
        <input
          type="number"
          name="uRating"
          value={understanding}
          onChange={handleUnderstandingChange}
          min="1"
          max="5"
        />
      </label>

      <button type="submit">NEXT</button>
    </form>
  );
}

export default UnderstandingForm;
