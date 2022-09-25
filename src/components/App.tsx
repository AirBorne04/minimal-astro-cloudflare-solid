import { Route, Router } from "@solidjs/router";
import { isServer } from "solid-js/web";
import { TestComp } from "./TestComp";

export const App = () => {
  let routerProps = {};

  console.log("isServer: ", isServer);

  return (
    <Router {...routerProps}>
      
      <Route path="/" component={TestComp}>
        
      </Route>
      
    </Router>
  );
};