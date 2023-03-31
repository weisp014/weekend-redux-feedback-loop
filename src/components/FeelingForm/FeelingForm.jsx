import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function FeelingForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [feeling, setFeeling] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("in handleSubmit", feeling);

    // TODO: input validation

    dispatch({
      type: "NEW_FEELING_RATING",
      payload: feeling,
    });

    history.push("/understanding");
  };

  const handleFeelingChange = (event) => {
    setFeeling(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>How are you feeling today</h1>
      <label>
        Feeling?
        <input
          type="number"
          name="fRating"
          value={feeling}
          min="1"
          max="5"
          onChange={handleFeelingChange}
        />
      </label>
      <button type="submit">NEXT</button>
    </form>
  );
}

export default FeelingForm;
