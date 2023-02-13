// Legal page simply displaying legal message

import React, { Component } from 'react';

class Legal extends Component {
    render() {
        return (
        <div style={{paddingRight:"20rem", paddingLeft:"20rem"}}>
            <h1>Legal note</h1>
            <p>
            Welcome to Made to Measure, the premier online furniture store! We are committed to providing our customers with quality furniture and excellent service. At Made to Measure, we take pride in offering a wide range of furniture options to meet any lifestyle. By using this website, you agree to the following terms of use:
            </p>
            <ul style={{display:"flex" , flexDirection:"column"}}>
                <li>
                    You must be at least 18 years of age to use this website, and you are solely responsible for any activity that takes place while using this website.
                </li>
                <li>          
                    You agree not to use this website for any illegal or fraudulent activity, or to violate any local, state, or international laws.
                </li>
                <li>
                    You agree not to use this website to transmit any material that is inappropriate, offensive, or otherwise contrary to the spirit of Made to Measure.
                </li>
                <li>
                    Made to Measure reserves the right to modify, suspend, or terminate your
                </li>
              </ul>
        </div>
        );
    }
}

export default Legal;
