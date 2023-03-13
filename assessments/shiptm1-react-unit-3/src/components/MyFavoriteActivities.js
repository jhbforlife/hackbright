import Card from './Card.js';

const MyFavoriteActivities = () => {
    const activities = ['reading', 'writing', 'coding', 'traveling', 'hiking', 'magic: the gathering', 'playing nintendo switch'].sort();

    return (
        <Card heading="My Favorite Activities" body={
            <ul>
                {activities.map(a => <li key={a}>{a}</li>)}
            </ul>
        } />
    );
};

export default MyFavoriteActivities;