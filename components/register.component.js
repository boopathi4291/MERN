import React, { Component } from 'react';


// const FormFields = (props)=>{
// return(
//    <input type={props.type} placeholder={props.placeholder} value={props.val} className='form-control'/>
// )
// }


class Aboutus extends React.Component {

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
       //console.log('****'+this.state.uname);
       e.preventDefault();
       fetch('http://192.168.0.13:8080/students/ins/' + this.state.name + '/' + this.state.email + '/' + this.state.mobile ).
       then((a) => a.json()).
       then(b =>{
          this.setState({
             name: '',
             email:'',
             mobile:''
          }
          )
       });
      
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
 export default Aboutus 