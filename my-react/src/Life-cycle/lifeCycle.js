import React, {Component} from 'react';




class Loop extends Component{
    state = {
        time: 0
    }
    componentDidMount(){
        this.date = setInterval(()=> this.setState({time: this.state.time + 1}), 1000)
    }
    componentDidUpdate(preProps,preState){
        if(preState.time !== this.state.time){
            console.log(this.state.time)
        }
        
    }
    componentWillUnmount(){
        clearInterval(this.date)
    }
    render(){
        return(
             <div>
                 <p>the time is {this.state.time}</p>
             </div>
        );
    }
}



export default Loop