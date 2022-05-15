import React from "react";
import { ACTION_UPDATE_TOKEN } from "store/actions";
import   store,{ dispatch } from "store"; 

function Login(){
    const { pageTitle } = store.getState();
    const setTocken=()=>{
      const token=  "1561v651vdsvdsvsd156156vdsvdsvsd";
        dispatch({
            type: ACTION_UPDATE_TOKEN,
            payload: token,
          });
    }

    return(
        <div style={{margin:100}}>
        <div>
            {pageTitle}
        </div>

<button style={{backgroundColor:"green"}} onClick={setTocken}>set token and login</button>
        </div>
    )
}

export default Login;