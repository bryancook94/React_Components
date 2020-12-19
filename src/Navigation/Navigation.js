import React from "react";
import ReactDOM from "react-dom";

import styles from "./css/nav.css";

class Navigation extends React.Component{
constructor(props){
  super(props)
}

render(){
  return(
    <div className={styles.example}>
      <p>Navigation</p>
    </div>
  )
}

}


export {Navigation}
