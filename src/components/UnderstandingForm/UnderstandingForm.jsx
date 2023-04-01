import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function UnderstandingForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [understanding, setUnderstanding] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("in handleSubmit", understanding);

    //alert if no input or outside range
    if (!understanding || Number(understanding) > 5 || Number(understanding < 1)) {
      alert("Enter number between 1 and 5");
      return;
    }

    dispatch({
      type: "NEW_UNDERSTANDING_RATING",
      payload: understanding,
    });

    history.push("/supported");
  };

  const handleUnderstandingChange = (event) => {
    setUnderstanding(event.target.value);
  };

  // return to previous page
  const goBack = () => {
    history.goBack();
  };

  return (
    <>
      <div className="backBtn">
        <Button onClick={goBack} variant="contained" size="large" type="button">
          BACK
        </Button>
      </div>
      <form onSubmit={handleSubmit}>
        <h1 className="formTitle">
          How well are you understanding the content?
        </h1>
        <TextField
          className="ratingInput"
          id="demo-helper-text-aligned"
          type="text"
          label="Understanding?"
          helperText="Enter number 1 - 5"
          onChange={handleUnderstandingChange}
          inputProps={{ inputMode: "numeric", pattern: "[1-5]*" }}
        />
        <span className="nextBtn">
          <Button variant="contained" size="large" type="submit">
            NEXT
          </Button>
        </span>
      </form>
    </>
  );
}

export default UnderstandingForm;
