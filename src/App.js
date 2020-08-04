import React, { Component } from 'react';
import './App.css';
import ServerInfo from './ResourceServer/server.json';
import SearchBox from './component/SearchBox';

class App extends Component{
  constructor(props){
    super(props);
    var today = new Date(),
    date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
   
    this.state = {
      currentDate: date,
      searchedWord: '',
      //ServerInfo: []
    }
  }

handleInput = (e)=>{
  console.log(e.target.value);
  this.setState({
    searchedWord: e.target.value,
    //ServerInfo: <ServerInfo/>
  })
}

  render(){
    /* filter function */
     /* let newServerInfo = this.state.ServerInfo.filter(eachNews=>{
      return eachNews.name.toUpperCase().includes(this.state.searchedWord.toUpperCase())
    })   */
     
  return (
    <div className="App">
      <h2>All Medias with Integrated Server</h2>
      {/* date function on top of the page */}
        <p className="date">{this.state.currentDate}</p> 
        <SearchBox handleInput={this.handleInput} />

{/* frame for all news */}
        <div className="allNewsFrame">

    {/*new filter func */}
   {/*  <ServerInfo newServerInfo={newServerInfo} /> */}

       {ServerInfo.map((item,a)=>{
          return(
            <div key={a} className="eachNews">
              <p>{item.id}</p>
              <p>{item.name}</p>
              <p>{item.language}</p>
                 <a href={item.url} target="_blank"><img src={`/Images/${item.givenImage}`} alt='mesel' className="mesel"/></a>
                <p><a href={item.url} target="_blank">{item.url}</a></p>
            </div>
          )
        })} 
      
      </div>

    </div>
  )}
}

export default App;
