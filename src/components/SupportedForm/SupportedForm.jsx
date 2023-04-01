import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function SupportedForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [supported, setSupported] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("in handleSubmit", supported);

    //alert if no input or outside range
    if (!supported || Number(supported) > 5 || Number(supported < 1)) {
      alert("Enter number between 1 and 5");
      return;
    }

    dispatch({
      type: "NEW_SUPPORTED_RATING",
      payload: supported,
    });

    history.push("/comments");
  };

  const handleSupportChange = (event) => {
    setSupported(event.target.value);
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
        <h1 className="formTitle">How well are you being supported?</h1>
        <TextField
          className="ratingInput"
          id="demo-helper-text-aligned"
          type="text"
          label="Supported?"
          helperText="Enter number 1 - 5"
          onChange={handleSupportChange}
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

export default SupportedForm;
