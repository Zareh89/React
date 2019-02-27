import React, {Component} from "react";

class Th extends Component{
    render(){
        return(
           <th>{this.props.trName}</th>
        );
    }
}

export default Th