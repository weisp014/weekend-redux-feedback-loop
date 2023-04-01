import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function CommentsForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [comments, setComments] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("in handleSubmit", comments);

    dispatch({
      type: "NEW_COMMENTS",
      payload: comments,
    });

    history.push("/review");
  };

  const handleCommentsChange = (event) => {
    setComments(event.target.value);
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
        <h1 className="formTitle">Any comments you want to leave?</h1>
        <TextField
          className="ratingInput"
          id="demo-helper-text-aligned"
          type="text"
          label="Comments?"
          helperText="Optional"
          onChange={handleCommentsChange}
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

export default CommentsForm;
