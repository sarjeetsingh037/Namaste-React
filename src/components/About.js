import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
    constructor(props) {
        super(props);
        console.log("Parent constructor");
    }
    componentDidMount() {
        console.log("Parent componentDidMount");
    }
    render() {
        console.log("Parent render");
        return (
            <div>
                <h1>This is about page</h1>
                <UserClass name={"Frist"} location={"Jaipur"} />
                <UserClass name={"Second"} location={"Jaipur"} />
            </div>
        )
    }
}
// const About = ()=> {
//     return (
//         <div>
//             <h1>This is about page</h1>
//             <UserClass name={"Sarjeet Singh"} location={"Jaipur"} />
//         </div>
//     )
// }

export default About;