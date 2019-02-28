import React, { Component } from 'react';
import {LineChart ,Line, CartesianGrid,XAxis,YAxis} from 'recharts';
import {BarChart, Bar} from 'recharts';

const data =[{name:'Boopathi', age:28},{name:'Krishnan', age:48},{name:'Dinesh', age:25},{name:'Rajesh', age:30}];

class ChartComp extends React.Component{
    
    render(){

        return(
            <div>
                    <LineChart width={600} height={300} data={data}>
                        <Line type="monotone" dataKey="age" stroke="#8884a8"/>
                        <CartesianGrid stroke="#ccc"/>
                        <XAxis dataKey="name"/>
                        <YAxis/>
                    </LineChart> 
            </div>
        )
    }
}
export default ChartComp;