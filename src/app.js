import React from 'react'
import ReactDOM from 'react-dom'

import Home from './components/layout/Home.js'

import Allpins from './components/layout/Allpins';
import Lp from './components/layout/Lp'
import Totalbooks from './components/layout/Totalbooks'
import Mypins from './components/layout/Mypins';
import SB from './components/layout/SB';
import Dashboard from './components/layout/Dashboard'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Sidebar from './components/layout/Sidebar'



import Waste from './Login/Waste.js'
import Login from './Login/Login.js'



import Container from './components/containers/Container.js';


import {Route,Router,browserHistory,hashHistory,IndexRoute} from 'react-router'
//import makeMainRoutes from './components/routes'
import AuthService from './utils/AuthService'



const mountNode = document.getElementById('root');
const auth = new AuthService('A2TQZJEMJOpPXQK0975lBzkke7YNWVrl', 'popunder.auth0.com');

// validate authentication for private routes
//onEnter={requireAuth}
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' })
  }
}


ReactDOM.render( 
<Router history={browserHistory}>
    <Route path="/" component={Container} auth={auth}>
    
    <IndexRoute component={Lp}  />
    <Route path="Allpins" component={Allpins} />
    <Route path="Mypins" component={Mypins} onEnter={requireAuth}/>
    <Route path="SB" component={SB} />
    <Route path="dashboard" component={Dashboard} />
   <Route path="login" component={Login} />
   <Route path="waste" component={Waste} />
   <Route path="header" component={Header} />
   <Route path="sidebar" component={Sidebar} />
   <Route path="footer" component={Footer} />
     </Route>
    
    
    
  </Router>,mountNode);