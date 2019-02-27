import React, {Component} from "react";

class Td extends Component{
    render(){
        return(
           <td>{this.props.tdName}</td>
        );
    }
}
export default Td