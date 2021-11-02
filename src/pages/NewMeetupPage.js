import { useHistory } from 'react-router-dom';
import MeetupForm from "../components/meet-ups/MeetupForm";

function NewMeetUpPage() {

    const history = useHistory();

    function addMeetupHandler(dataObject) {
        fetch('https://react-meetups-f4eb7-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(dataObject),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
                console.log(response);
                history.replace('/');
        }).catch((error) => {
            console.log('error adding post', error);
        })
    }

    return <div>
        <h1>Add New Meetup</h1>
        <MeetupForm onAddMeetup={addMeetupHandler}/>
    </div>
}

export default NewMeetUpPage;