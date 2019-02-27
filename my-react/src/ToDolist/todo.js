import React, { Component, Fragment } from 'react';
import Th from './th';
import data from './data';


class ToDo extends Component{
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
          trArr2.push(<Th trName = {trArr[i]}/>)
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
               console.log(info)
          });
          
    }
    render(){
        
        return( 
            <Fragment>
                <table>
                    <tbody>
                        <tr>
                    {this.createTr()}
                        </tr>
                    </tbody>
                </table>
                <button onClick = {this.getData}>Reload</button>
            </Fragment>
        );
    }
}

export default ToDo