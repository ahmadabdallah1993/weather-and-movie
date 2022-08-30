import React from 'react';


class Forms extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            arr:[]
        }
    }

    getMovie = (event) => {
        event.preventDefault();
        // const searchQuery = event.target.name.value;
    }



  render(){
    return(
        <>
        <h1>welcome to movie Weather website</h1>
        <form onSubmit={this.getMovie}>
            <input type='text' name='name' placeholder='enter your favourite movie' />
            <button type='submit'>Search</button>
        </form>
        </>
      
    )
  }
}

export default Forms;




