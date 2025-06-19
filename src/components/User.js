import { useState } from "react";

const User = (props) => {
    const {name,location} = props;
    const [count] = useState(0);
    const [count1] = useState(1);
    return (
        <div className="user-card">
            <h1>Name: {name}</h1>
            <h2>Location: {location}</h2>
            <h3>Address: area name</h3>
            <h4>Count: {count}</h4>
            <h4>Count1: {count1}</h4>
        </div>
    )
}

export default User;