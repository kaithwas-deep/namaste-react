import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

// const AboutUs = () => {
//     return (
//         <div>
//             <h1>About Us</h1>
//             <h2>Welcome to About Us Page.</h2>
//             {/* <User name="user func" location="loc func" /> */}
//             <UserClass name="user class" location="loc class" />
//         </div>
//     )
// }

class AboutUs extends React.Component {

    constructor(props) {
        super(props);
        console.log("parent constructor called");
    }

    componentDidMount() {
        console.log("parent componentDidMount called");
    }

    render() {
        console.log("parent render called");
        return (
            <div>
                <h1>About Us</h1>
                <h2>Welcome to About Us Page.</h2>
                <UserContext.Consumer>
                    {({loggedInUser}) => (
                        <h1 className="font-bold">User: {loggedInUser}</h1>
                    )}
                </UserContext.Consumer>
                {/* <User name="user func" location="loc func" /> */}
                <UserClass name="first class" location="loc class" />
            </div>
        )
    }

}

export default AboutUs;