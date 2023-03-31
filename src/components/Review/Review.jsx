import { useSelector } from "react-redux";

function Review() {
    const feelings = useSelector(store => store.feelingRating);
    const understanding = useSelector(store => store.understandingRating);
    const support = useSelector(store => store.supportedRating);
    const comments = useSelector(store => store.comments);

    //TODO: POST responses to database!

    return(
        <>
        <h1>Review Your Feedback</h1>
        <p>Feelings: {feelings}</p>
        <p>Understanding: {understanding}</p>
        <p>Support: {support}</p>
        <p>Comments: {comments}</p>
        <button onClick={() => {}}>SUBMIT</button>
        </>
    )
}

export default Review;