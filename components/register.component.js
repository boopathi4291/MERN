import React, { Component } from 'react';


// const FormFields = (props)=>{
// return(
//    <input type={props.type} placeholder={props.placeholder} value={props.val} className='form-control'/>
// )
// }


class Register extends React.Component {

    constructor() {
       super();
       this.state = {
          name: '',
          email: '',
          mobile: ''
       };
 
       this.uchange = this.uchange.bind(this);
       this.echange = this.echange.bind(this);
       this.mchange = this.mchange.bind(this);
       this.onsub = this.onsub.bind(this);
 
    }
 
 
    uchange(e) {
       this.setState({
          name: e.target.value
       }
       )
    }
    
    echange(e) {
       this.setState({
          email: e.target.value
       }
       )
    }
    mchange(e) {
       this.setState({
          mobile: e.target.value
       }
       )
    }
    onsub(e) {
       let data ={
          name: this.state.name,
          email: this.state.email,
          mobile: this.state.mobile
       }
       e.preventDefault();
       fetch('http://192.168.0.13:8080/students/ins', {
         method: 'POST', // or 'PUT'
         body: JSON.stringify(data), // data can be `string` or {object}!
         headers:{
           'Content-Type': 'application/json'
         }
       }).then(res => {res.json()});
    }
 
    render() {
       return (
          <div className="myForm">
             <h2> <center>Registration Form</center></h2>
         <form onSubmit={this.onsub}>
         <div className="form-group" >
                  {/* <FormFields type="text" val={this.state.name} placeholder="Name"/> */}
                <input type="text" className='form-control' placeholder="Name" value={this.state.name} onChange={this.uchange} />
                </div>
                <div className="form-group">
                <input type="text"  className='form-control'  placeholder="Email" value={this.state.email} onChange={this.echange} />
                </div>
                <div className="form-group">
                <input type="text"  className='form-control'  placeholder="Mobile" value={this.state.mobile} onChange={this.mchange} />
                
                </div>
                <center><input type="submit" className='btn btn-primary' value="Register" /></center>
 
             </form>
          </div>
       );
    }
 }
 export default Register 
