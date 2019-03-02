import React, { Component, Fragment } from 'react';
import Th from './th';
import data from './data';


class ToDo extends Component{
    state = {
            myData:[]
        }
    
    
    
    createTr = () => {
        let trArr = ['Game Number',
            'Status',
            'Player 1',
            'Player 2',
            'Round',
            'Amount',
            'Time',
            'Action'
        ];
        let trArr2 = [];
        for(let i = 0; i < trArr.length; i++){
          trArr2.push(<Th key ={i} trName = {trArr[i]}/>)
        }
        return trArr2

    
    }
   

   
    getData = () => {
        fetch('http://rest.learncode.academy/api/learncode/friends', {
            method: 'POST',
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify(data),
          })
          .then (info => info.json())
          .then ((info) => {
               this.setState({
                   myData: info
               })
              
          });
        this.createTd = () =>{
            let trTag =[];
            for(let i = 0; this.state.myData.length > i; i++ ){
               let tdTag =[];
               for (let j in this.state.myData[i] ){
                   tdTag.push(<td key = {j}>{this.state.myData[i][j]}</td>)
               }
               trTag.push(<tr key = {i}>{tdTag}</tr>)
            }
            return trTag;
        }
          return this.createTd();
    }
    render(){
        
        return( 
            
            <Fragment>
                <table>
                    <tbody>
                        <tr>
                    {this.createTr()}
                        </tr>
                        {this.getData()}
                    </tbody>
                </table>
                <button>Reload</button>
            </Fragment>
        );
    }
}

export default ToDo