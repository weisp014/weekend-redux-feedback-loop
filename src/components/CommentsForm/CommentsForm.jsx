import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";

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

  return (
    <form onSubmit={handleSubmit}>
      <h1>Any comments you want to leave?</h1>
      <label>
        Comments?
        <input
          className="ratingInput"
          type="text"
          name="comments"
          value={comments}
          onChange={handleCommentsChange}
        />
      </label>

      <button type="submit">NEXT</button>
    </form>
  );
}

export default CommentsForm;
