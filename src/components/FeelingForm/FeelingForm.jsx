import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function FeelingForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [feeling, setFeeling] = useState(0);

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

  const nextHandler = () => {
    console.log("in nextHandler");
    history.push("/understanding");
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
          onChange={handleFeelingChange}
        />
      </label>
      <button type="submit">NEXT</button>
    </form>
  );
}

export default FeelingForm;