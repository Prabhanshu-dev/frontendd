import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import {Component} from 'react';
import { useState, useEffect } from "react";

export function SignupForm(props) {

  
  const { switchToSignin } = useContext(AccountContext);
  this.state={text:"",email:"",number:"",number1:"",password:"",password1:""};
     
  inputChanged=(event)=>{this.setState({[event.target.name]:event.target.value})};
  handleSubmit=(event)=>{event.preventDefault();
    var newuser = {text:this.state.text,email:this.state.email,number:this.state.number1,number1:this.state.number1,
      password:this.state.password,password1:this.state.password1};
    const myHeaders = new Headers({'content-Type':'application/JSON',
         'Accept':'application/json'});

      fetch('http://localhost:9090/user/',
      {
        method:'POST',mode:'no-cors',body:JSON.stringify(newuser),
        headers:myHeaders,
      })
      .then(response=>console.log('Success',JSON.stringify(response)))
      .catch(error=>console.error('Error:',error));   

    };
 /* const Signup = async () => {
    
      console.log("I am here....");
      const url = "http://localhost:9090/user/";

      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
    };*/


  return (
    <form onSubmit={this.handleSubmit}>
    <BoxContainer>
      <FormContainer>
        <Input type="text" name="text" placeholder="Full Name"onChange={this.inputChanged}value={this.state.text} />
        <Input type="email"name="email" placeholder="Email"onChange={this.inputChanged}value={this.state.email} required />
        <Input type="number"name="number" placeholder="Mobile"onChange={this.inputChanged}value={this.state.number} />
        <Input type="number"name="number1" placeholder="Card Id"onChange={this.inputChanged}value={this.state.number1} />
        <Input type="password" name="password" placeholder="Password"onChange={this.inputChanged}value={this.state.password} />
        <Input type="password"name="password1" placeholder="Confirm Password"onChange={this.inputChanged}value={this.state.password1} />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="Submit">Signup</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Sign In
        </BoldLink>
      </MutedLink>
    </BoxContainer>
    </form>
  );
};
