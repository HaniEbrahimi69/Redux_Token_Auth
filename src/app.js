import React from "react";
import { BrowserRouter } from "react-router-dom"; 
import StoreProvider from "providers/store"; 
import PersistGateProvider from "providers/persist";
import Router from "providers/router"; 
import store, { persistor } from "store"; 

function App() {
  return (
    <StoreProvider store={store}>
      <PersistGateProvider
        loading={<>...</>}
        persistor={persistor}
      > 
            <BrowserRouter>  
                <Router /> 
            </BrowserRouter> 
      </PersistGateProvider>
    </StoreProvider>
  );
}

export default App;
