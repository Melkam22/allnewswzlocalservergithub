import React, { Component } from 'react';
import './App.css';
import ServerInfo from './ResourceServer/server.json';

class App extends Component{
  constructor(){
    super();
    var today = new Date(),
    date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
   
    this.state = {
      currentDate: date
    }
  }
  render(){
     
  return (
    <div className="App">
      <h2>All Medias with Server</h2>
      {/* date function on top of the page */}
        {this.state.currentDate}
        {ServerInfo.map((item,a)=>{
          return(
            <div key={a}>
              <p>{item.id}</p>
              <p>{item.name}</p>
              <p>{item.language}</p>
                 <a href={item.url} target="_blank"><img src={`/Images/${item.givenImage}`} alt='mesel' className="mesel"/></a>
                <p><a href={item.url} target="_blank">{item.url}</a></p>
            </div>
          )
        })}
        
    </div>
  )
}
}

export default App;
