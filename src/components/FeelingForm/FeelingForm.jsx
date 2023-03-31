import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function FeelingForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [feeling, setFeeling] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("in handleSubmit", feeling);

    //alert if no input
    if(!feeling || Number(feeling) > 5 || Number(feeling < 1)) {
      alert('Enter number between 1 and 5');
      return
    }

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
      <h1>How are you feeling today?</h1>
        <TextField
          className="ratingInput"
          id="demo-helper-text-aligned"
          type="text"
          label="Feeling?"
          helperText="Enter number 1 - 5"
          onChange={handleFeelingChange}
          inputProps={{ inputMode: 'numeric', pattern: '[1-5]*' }}
        />
      <Button variant="contained" size="large" type="submit">NEXT</Button>
    </form>
  );
}

export default FeelingForm;
