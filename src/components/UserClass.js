import React from "react";
import SecondUserClass from "./SecondUserClass";

class UserClass extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            count: 1,
            count2: 2,
            userInfo:{
                name: "dummy name",
                location: "dummy location",
                avatar_url: ""
            }
        }
        console.log(this.props.name+" child constructor called");
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/kaithwas-deep");
        const jsonData = await data.json();
        console.log(jsonData);
        this.setState({
            userInfo: jsonData
        });
        
        console.log(this.props.name+" child componentDidMount called");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount called");
    }

    render(){
        console.log(this.props.name+" child render called");
        const {name,location,login,avatar_url} = this.state.userInfo;
        return (
            <div className="user-card">
                <img className="user-card-img" src={avatar_url} />
                <h2>Name: {name || "dummy name"}</h2>
                <h3>Location: {location || "N/A"}</h3>
                <h3>Username: {login}</h3>
            </div>
        )
    }
    
    // render(){
    //     console.log(this.props.name+" child render called");
    //     const {name,location} = this.props;
    //     const {count,count2} = this.state;
    //     return (
    //         <div className="user-card">
    //             <h1>Name: {name}</h1>
    //             <h2>Location: {location}</h2>
    //             <h3>Address: area name</h3>
    //             <h4>Count: {count}</h4>
    //             <h4>Count2: {count2}</h4>
    //             <button onClick={()=>{
    //                 this.setState({
    //                     count: this.state.count+1,
    //                     count2: this.state.count2+1
    //                 })
    //             }}>Count Increase</button>
    //             <SecondUserClass name={name} />
    //         </div>
    //     )
    // }
}

export default UserClass;