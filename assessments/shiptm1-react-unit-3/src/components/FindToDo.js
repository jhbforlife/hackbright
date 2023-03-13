import { useState } from 'react';
import Card from "./Card";

const FindToDo = () => {

    const [activity, setActivity] = useState({
        activity: '',
        price: '',
        type: '',
        participants: ''
    });

    const newActivityClickHandler = async () => {
        const resp = await fetch('https://www.boredapi.com/api/activity/');
        const json = await resp.json();
        makeNewActivity(json);
    };

    const makeNewActivity = (json) => {
        const activity = {
            activity: json.activity,
            price: `Price: ${json.price}`,
            type: `Type: ${json.type}`,
            participants: `Participants Needed: ${json.participants}`
        }
        setActivity(activity);
    }

    return (
        <Card heading="Do you need help finding something to do?" body={
            <div>
                <h4>{activity.activity}</h4>
                <h5>{activity.price}</h5>
                <h5>{activity.type}</h5>
                <h5>{activity.participants}</h5>
                <button onClick={newActivityClickHandler}>Click for a new activity</button>
            </div>
        } />
    );

};

export default FindToDo;