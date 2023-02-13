import React, { Component } from 'react';
import { Button, Form } from "react-bootstrap";


class Interest extends Component {
    constructor(props){
        super(props);
        this.state = {element: ""};
        this.calculateInterest = this.calculateInterest.bind(this);
    }
    calculateInterest(){
        let form = document.getElementById("interest");
        let amount = Number(form[0].value);
        let months = Number(form[1].value);
        let rate = 1.2;
        let result;
        if (isNaN(amount) || isNaN(months)) {
            alert("Wrong input")
            this.setState({element: <h3>Wrong input, please try again.</h3>})
        } else {
            let total = amount*rate;
            result = total/months;
            this.setState({element: <h3>Your total loan will be of £{total}. The payments will be splitted over {months} months. Your monthly payment will be of £{result}.</h3>})
        }
    }

    render() {
        return (
            <div>
            <Form style={{display:"block",padding:"1rem", width:"50rem", margin:"auto"}} id="interest">
                <h2 style={{padding:"none"}}>Interes rate calculator</h2>
                <h4 style={{padding:"none"}}>Non-compounding interest rate of 20% to calculate their monthly payments</h4>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Total shopping cost</Form.Label>
                    <Form.Control type="name" placeholder="Enter in pounds" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicSurname">
                    <Form.Label>Number of months for load</Form.Label>
                    <Form.Control type="surname" placeholder="Enter number of months" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                </Form.Group>

                <Button onClick={()=>this.calculateInterest()} variant="primary" type="button">
                    Calculate
                </Button>
                {this.state.element}
            </Form>
            </div>
        );
    }
}

export default Interest;
