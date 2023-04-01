import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';

function Complete() {
    const history = useHistory();
    const dispatch = useDispatch();

    const resetResponses = () => {
        console.log('resetting to beginning')

        //reset reducers
        dispatch({
                type: "RESET_FEEDBACK"
            });
        history.push("/")
    }

    return (
        <div>
            <h1 id="thank-you">Thank You!</h1>
            <Button onClick={() => resetResponses()} variant="contained" size="large">Leave New Feedback</Button>
        </div>
    )
}

export default Complete;