import React from 'react';
import StyledApp from "../styled/StyledApp";
import { Route } from 'react-router-dom';


const App = ()=> {
  return ( 
   <StyledApp>
       <Route path = '/filter' component = {<h1>Hello</h1>}/> 
   </StyledApp>  
  );
}

export default App;