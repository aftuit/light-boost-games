import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {ToastContainer} from "react-toastify";
import { routes } from './tools/routes';
import ScrollToTop from './components/ScrollToTop';
function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Switch>
          {
            routes.map(({path, component}) => {   
                return (
                  <Route key={path} path={path} exact component={component} />
                )
            })
          }
      </Switch>

      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
