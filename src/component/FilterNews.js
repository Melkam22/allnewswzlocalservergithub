/* import React from 'react';



function FilterNews(props){
   let fromAppJs = props.ServerInfo.map((item,a)=>{
    return(
      <div key={a}>
        <p>{item.id}</p>
        <p>{item.name}</p>
        <p>{item.language}</p>
           <a href={item.url} target="_blank"><img src={`/Images/${item.givenImage}`} alt='mesel' className="mesel"/></a>
          <p><a href={item.url} target="_blank">{item.url}</a></p>
      </div>
    )
  })
     
  return (
  <p>{fromAppJs}</p>  
    )
  }

export default FilterNews;
         */