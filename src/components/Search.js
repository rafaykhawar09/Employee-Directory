import React from 'react';

function Search(props){

     return(
          <div className="search-wrapper">
               <input 
                    onChange = {props.handleInputChange}
                    type = "text"
                    name = "search"
                    value = {props.search} 
                    id = "search" 
                    placeholder = "Search for an employee..."
               />
          </div>
     );
}

export default Search;