import React from 'react'

class UserChild extends React.Component {

    constructor(props) {
        super(props);
        console.log("Grand Child construcotr");
        this.state = {
            count:0,
            count1:0
        };
    }
    componentDidMount() {
        console.log("Grand Child componentDidMount");
    }
    render() {
        const {name,location} = this.props;
        console.log("Grand Child render");
        return (
            <div className="user-card">
              <h1>This is grand Child</h1>
            </div>
        )
    }
}

export default UserChild;