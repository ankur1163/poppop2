

import React, { Component } from 'react';
import { Button,Grid,Row,Col,Sidebar,SidebarControlBtn,SidebarNavItem,
PageHeader,Nav,NavItem,PanelBody,Panel,PanelContainer,LoremIpsum } from '@sketchpixy/rubix';
import Avatar from './src/components/layout/files/avatar.js';


class Dashboard extends Component {
  
  handleSelect(){
    console.log("selected nav")
  }
    
    render() {
      
      var handleSelect = this.handleSelect.bind(this)
        
        //const zoneStyle = styles.zone; // needs to be inside the render func!
        return(
          <div className="wrapper">
            <div id="sidebar">
              <Avatar />
              
            </div>
            
            <div id="body"></div>
          </div>
        // <div>
        //         <Grid>
        //   	<Row className="show-grid headerank">
        //   	  <Col className="headerank visible-xs" xs={3}>
          	  
        //   	  this is the cool
        //   	  </Col>
        //   	 </Row>
          
        //   	<Row className="show-grid">
        //   	  <Col xs={3}>
        //         <Nav bsStyle="pills" className='nav-green' stacked activeKey={2} onSelect={handleSelect}>
        //       	<NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
        //       	<NavItem eventKey={2} href="/buttons">NavItem 2 content</NavItem>
        //       	<NavItem eventKey={3} title="Item">NavItem 3 content</NavItem>
        //       	<NavItem eventKey={4} disabled>NavItem 4 content</NavItem>
        //         </Nav>
          	  
          	  
        //   	  </Col>
        //   	  <Col xs={15} md={10}>this is great</Col>
          	  
        //   	</Row>
          
          	
        //     </Grid>
            		
        //     		</div>
            		
        )
        ;
    }
}

export default Dashboard
