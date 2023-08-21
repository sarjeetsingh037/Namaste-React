import React from 'react'
import UserChild from './UserChild';

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props.name+"Child construcotr");
        this.state = {
            count:0,
            count1:0
        };
    }
    componentDidMount() {
        console.log(this.props.name+"Child componentDidMount");
    }

    componentDidUpdate() {
        console.log("Component Updated");
    }
    render() {
        const {name,location} = this.props;
        console.log(this.props.name+"Child render");
        return (
            <div className="user-card">
                <h1>Name: {name}</h1>
                <h2>Location: {location}</h2>
                <h3>Count: {this.state.count}</h3>
                <h4>Count 1: {this.state.count1}</h4>
                <button onClick={()=> {
                    this.setState({count:this.state.count+1,count1:this.state.count1+1})
                }}>Increment</button>
                <UserChild />
            </div>
        )
    }
}

export default UserClass;