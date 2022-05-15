import React from "react";
import { ACTION_UPDATE_TOKEN } from "store/actions";
import   store,{ dispatch } from "store"; 

function DashBoard(){
    const { pageTitle } = store.getState();
    const handleClickLogOut=()=>{ 
          dispatch({
              type: ACTION_UPDATE_TOKEN,
              payload: "",
            });
      }

    return(
     <div style={{margin:100}}>
        <div>
            {pageTitle}
        </div>
        <div>
        <button  style={{backgroundColor:"red"}} onClick={handleClickLogOut}>clear token and logout</button>
        </div>
     </div>
    )
}

export default DashBoard;