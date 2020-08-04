import React from 'react';



function SearchBox(props){
   
     
  return (
          <input placeholder="find any news outlet" onChange={props.handleInput}
          type="text" className="input" />
    )
  }

export default SearchBox;
        