import React, {   Suspense } from "react";
import "./index.css";
import * as serviceWorker from "./serviceWorker";    

const App = React.lazy(() => import("./app"));

  
async function boot() { 
 const ReactDOM = await import("react-dom");

  ReactDOM.render( 
      <Suspense fallback={<>...</>}>
        <App />
      </Suspense> ,
    document.getElementById("root")
  );
}

export default boot;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
