// Home page with all components
// Importing necessary scripts, images and components.
import React from "react"
import logo from "../img/03.png";
import Button from 'react-bootstrap/Button';
import { Container, Form } from "react-bootstrap";

// Header function with logo and about text
function Header() {
    return (
    <div className="logo">
         <img src={logo} alt="Logo"/>
         <p>Made to Measure is an innovative bespoke furniture company that specializes in creating custom furniture pieces that are tailored to fit the exact needs and preferences of their customers. With a team of experienced and passionate designers, the company has developed a unique approach to furniture design that allows them to create unique and stylish pieces that are tailored to fit any space.</p>
    </div> 
  )}

  // Creating JS object for user.
function User(name, surname, age){
  this.name = name;
  this.surname = surname;
  this.age = age;
};

// Getting user from local storage if user has signed up
let users = JSON.parse(localStorage.getItem("user"));

// checking if user is signed out.
if (users === null) {
  users = new User("Not Logged so log in text is difficult so it won't get confused", "NA", 0)
} 

// Setting boolead to use later to pick what is shown in screen.
let boolean;
if (users.name === "Not Logged so log in text is difficult so it won't get confused"){
  boolean = false;
} else {
  boolean = true;
}

// function to display welcome message
  function addUsers(users) {
    function User(props) {
      let element;
      if (boolean === false){
        element = <h3 style={{textAlign:"center", margin:"1rem"}}>Welcome, please sign up.</h3>;
      } else {
          element = <h3 style={{textAlign:"center", margin:"1rem"}}>Welcome back {props.name} {props.surname}</h3>;
      }
      return (
          <div>
              {element}
          </div>
      )
  }
      return (
        <div key={users.name + users.age}>
          <User name={users.name} surname={users.surname} birthYear={users.age} />
        </div>
  )}

// class component Home with on click React events for showing the sign up form and submitting the form
class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {isLoggedIn: false};
    this.userSignedUp = this.userSignedUp.bind(this);
    this.visible = this.visible.bind(this);
    }

    userSignedUp() {
      users = JSON.parse(localStorage.getItem("user"));
      let form = document.getElementById("signin");
      let name = form[0].value;
      let surname = form[1].value;
      let age = form[2].value;
      let user = new User(name,surname, age);
      localStorage.setItem("user", JSON.stringify(user));
    }

    visible(){
      let form = document.querySelector("form");
      form.style.display = "block";
    }

    render() {
    return (
    <div>
      <Container className="container" fluid="sm">
          <Header/>
              {addUsers(users) }
          {boolean ? 
            <div className="text-white bg-success mb-3">
              <p style={{textAlign:"center", margin:"auto"}}> You are signed in {users.name}</p>
            </div>
          : 
            <div className="button">
            <Button style={{width:"100px", margin:"auto", padding:"1rem"}} onClick={()=>this.visible()} variant="primary">Sign Up</Button>{' '}
            </div>
          }
          <Form style={{padding:"1rem"}} id="signin">
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" placeholder="Enter name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicSurname">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="surname" placeholder="Last Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAge">
              <Form.Label>Age</Form.Label>
              <Form.Control type="age" placeholder="Age" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
            </Form.Group>

            <Button onClick={()=>this.userSignedUp()} variant="primary" type="submit">
              Submit
            </Button>
          </Form>
      </Container>
    </div>
)}}

export default Home