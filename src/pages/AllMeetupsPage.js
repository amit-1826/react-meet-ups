import MeetupList from "../components/meet-ups/MeetupList";
import {useEffect, useState} from "react";

function AllMeetupsPage() {

    const [isLoading, setLoading] = useState(true);
    const [meetupsData, setMeetupsData] = useState([]);

    // without useEffect will create infinite loop
    useEffect(() => {
        setLoading(true);
        fetch('https://react-meetups-f4eb7-default-rtdb.firebaseio.com/meetups.json')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const meetups = [];
                for (const dataKey in data) {
                    const meetup = {
                        id: dataKey,
                        ...data[dataKey]
                    }
                    meetups.push(meetup);
                }
                setLoading(false);
                setMeetupsData(meetups);
            })
            .catch((error) => {
                setLoading(false);
            })
    }, []);  // blank array is the set of external dependencies


    if (isLoading) {
        return <section>
            Loading...
        </section>
    }

    return <section>
        <h2>All Meetups</h2>
        <MeetupList meetups={meetupsData}/>
    </section>
}

export default AllMeetupsPage;