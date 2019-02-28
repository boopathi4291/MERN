import React, { Component } from 'react';

class Home extends React.Component {
    constructor(props) {
       super(props);
       this.state = {
          register:[]
       };
    }
 
    componentDidMount() {
       fetch('http://192.168.0.13:8080/students/records').then((a) => a.json()).then(b => {
          this.setState({
             register: b,
          })
 
 
       });
    }
 
 
    render() {
       return (
          <div>
             <h2><center>Students List</center></h2>
             <table className="table  table-striped" border="1">
             <thead>
                <tr>
                   <th scope="col">Name</th>
                   <th scope="col">E-Mail</th>
                   <th scope="col">Mobile</th> 
                </tr>
             </thead>
                <tbody>
             {this.state.register.map((d, k) =>
                
                   <tr>
                      <td>{d.name}</td>
                      <td>{d.email}</td>
                      <td>{d.mobile}</td>
                      </tr>
                )}
                </tbody>
                </table>
          </div>
       );
    }
 }
 
 export default Home
 
 