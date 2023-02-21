// Profile page showing profile information if user is logged in, showing message to log in if user is logged out.

import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

let user = JSON.parse(localStorage.getItem("user"));

function User(name, surname, age){
    this.name = name;
    this.surname = surname;
    this.age = age;
  };
  
  function LogOut(){
    user = new User(undefined, undefined, undefined)
    localStorage.setItem("user", JSON.stringify(user));
    alert("You have logged out. See you later!")
    window.location.reload();
  }

let element;
if (user?.name === undefined){
    element = <h1 style={{ width: '50rem', margin:"auto", marginTop:"2rem" }}>You are not logged in, please log in and come back</h1>
  } else {
    element = 
        <Card bg='dark' style={{ width: '18rem', margin:"auto", marginTop:"2rem" }}>
            <Card.Body>
                <Card.Title style={{color:"white"}}>Welcome {user?.name} {user?.surname}</Card.Title>
                <Card.Text>Name: {user?.name}</Card.Text>
                <Card.Text>Last name: {user?.surname}</Card.Text>
                <Card.Text>Age: {user?.age}</Card.Text>
            </Card.Body>
            <Button onClick={()=>LogOut()} className="ml-auto" style={{margin:"auto", marginBottom:"1rem"}}>Log out</Button>
        </Card>
  }

class Profile extends Component {
    render() {
        return (
            <div>
            {element}
            </div>
        );
    }
}

export default Profile;
