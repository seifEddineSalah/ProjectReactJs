import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from 'react-google-login';

class Login extends Component {
  state = {
    redirect: false
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/home' />
    }
    
   
    
  }
  
  render() {
    const color={
     
      marginTop:'60px',
      marginLeft:'550px',
      justifyContent: 'center',
      width:'500px',
    

    }
    
     const div2={
      justifyContent: 'center', marginLeft:'580px',
     }
    
    const responseGoogle = (response) => {
      console.log(response);
      if (response.error !== "popup_closed_by_user") {
        this.setState({
          redirect: true
        })}
    
    }

    const responseFacebook = response => {
      console.log(response);
      if (response.status !== "unknown") {
      this.setState({
        redirect: true
      })}
      // this.renderRedirect();
      
      /*
      if (response.status !== "unknown") 
      {
         
          else {
            
              return<Redirect to="/" />;
          }*/
          
      //console.log(response);
    };

    return (
    <div className="App" >
        <h1 style={{textAlign:'center', fontWeight: 400}}>Sign in</h1>
       
        <br />
      <br />
      <div style={color}>
         <FacebookLogin
          appId="2512431309038709" 
          fields="name,email,picture"
          buttonText="LOGIN WITH GOOGLE"
          callback={responseFacebook}
          
        />
        {this.renderRedirect()}
        
       
        </div>
        <div style={div2}>
        <GoogleLogin
        clientId="1038489734876-d15o9fk0r90o3ua5t5edpjdparfj83vn.apps.googleusercontent.com" 
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
        </div>
       
       


     
        <br />
        <br />
      </div>
     
    );
  }
}

export default Login;