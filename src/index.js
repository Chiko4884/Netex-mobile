import React, {useContext, useEffect} from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import App from './App';
import NotSupport from './Components/NotSupport'
import  {Context}  from './Context';

const winInnerWidth = window.innerWidth

if (winInnerWidth > 430) {
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
    <NotSupport/>
     </HashRouter>
)
  }

else {
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter> 
<Context>
  <App/>
</Context>
</HashRouter> 

)
}







