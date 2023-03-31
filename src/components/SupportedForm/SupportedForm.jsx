import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function SupportedForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [supported, setSupported] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("in handleSubmit", supported);

    // TODO: input validation

    dispatch({
      type: "NEW_SUPPORTED_RATING",
      payload: supported,
    });

    history.push("/comments");
  };

  const handleSupportChange = (event) => {
    setSupported(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>How well are you being supported?</h1>
      <label>
        Support?
        <input
          type="number"
          name="sRating"
          value={supported}
          onChange={handleSupportChange}
        />
      </label>

      <button type="submit">NEXT</button>
    </form>
  );
}

export default SupportedForm;
