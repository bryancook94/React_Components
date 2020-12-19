import React from "react";
import ReactDOM from "react-dom";


import {Navigation} from "./Navigation/Navigation.js";

class App extends React.Component{
constructor(props){
  super(props)
}

render(){
  return(
    <div>
      <p>hello there</p>
      <Navigation/>
    </div>
  )
}

}

  ReactDOM.render(<App/>,document.getElementById('render'))
