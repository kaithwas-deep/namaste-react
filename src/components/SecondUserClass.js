import React from "react";

class SecondUserClass extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            count: 1,
            count2: 2
        }
        console.log(this.props.name+" other user child constructor called");
    }

    componentDidMount() {
        console.log(this.props.name+" other user child componentDidMount called");
    }
    
    render(){
        console.log(this.props.name+" other user child render called");
        
        return (
            <div className="second-user-card">
            </div>
        )
    }
}

export default SecondUserClass;