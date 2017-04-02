import React, { Component } from 'react';
import {Link} from 'react-router'; 
import '../../main.css';
import { Button } from '@sketchpixy/rubix';


class Lp extends Component {
    
    render() {
        
        //const zoneStyle = styles.zone; // needs to be inside the render func!
        
        return(<div>
        <Link to= "/">Home</Link>
                <h2> Landing page is here </h2>
                <Link to="/dashboard">Dashboard</Link>&emsp;&emsp;
                
                
                <Link to="/login">Login</Link>
                <Link to="/waste">   Waste</Link>
                <Link to="/header">Header</Link>
                <Link to="/footer">Footer</Link>
                <Link to="/sidebar">Sidebar</Link>
                            <p>
            		  Adding some Rubix related code here :
            		</p>
            		<div>
            		  <div><Button bsStyle='green'>Green Button!</Button></div>
            		  <div><Button bsStyle='red'>Red Button!</Button></div>
            		  <div><Button bsStyle='blue' outlined>Blue Button!</Button></div>
            		  <Button bsStyle="warning">Warning</Button>
            		</div>
                </div>)
    }
}

export default Lp