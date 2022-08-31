import axios from 'axios';
import React from 'react';


class Forms extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            arr:[]
        }
    }

    getMovie = async (event) => {
        event.preventDefault();
        const searchQuery = event.target.name.value;
        const URL = `http://localhost:3001/getCity?cityName=${searchQuery}`;
        const serverRes = await axios.get(URL);
        console.log(serverRes.data);

        this.setState({
            arr: serverRes.data
        })
    }



  render(){
    return(
        <>
        <h1>welcome to movie Weather website</h1>
        <form onSubmit={this.getMovie}>
            <input type='text' name='name' placeholder='enter your favourite movie' />
            <button type='submit'>Search</button>
        </form>

        {
            this.state.arr.map( (item, index)=> {
                return(
                    
                    <div>
                        <h3>Day {index +1} :</h3>
                        <h4>Description: {item.des}</h4>
                        <h4>Date: {item.date}</h4>
                        <br>
                        </br>
                        <br></br>
                    </div>
                )
            })
        }
        </>
      
    )
  }
}

export default Forms;




