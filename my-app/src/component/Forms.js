import axios from 'axios';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';


class Forms extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            arr:[],
            m: ''
        }
    }

    getMovie = async (event) => {
        event.preventDefault();
        const searchQuery = event.target.name.value;
        const URL = `http://localhost:3001/getCity?cityName=${searchQuery}`;
        // const serverRes = await axios.get(URL);
        // console.log(serverRes.data);

        // this.setState({
        //     arr: serverRes.data
        // })
        const url = `http://localhost:3001/movie?cityName=${searchQuery}`


        axios
        .get(url)
        .then(result =>{
            this.setState({
                m: JSON.stringify(result.data)
            })
        })
        .catch(error =>{
            console.log(error);
        })





        axios
        .get(URL)
        .then(result =>{
            this.setState({
                arr: result.data
            })
        })
        .catch(error =>{
            console.log(error);
        })




    }



  render(){
    return(

<>
    <Form onSubmit={this.getMovie}>
      <Form.Group className="mb-3" controlId="cityName">
        <Form.Label>City Name</Form.Label>
        <Form.Control input type='text' name='name' placeholder='enter city name' />
      </Form.Group>
      <Button variant="primary" type="submit">
        Search
      </Button>
    </Form>
    <br></br>
    <br></br>
    {this.state.arr.map( (item, index)=> {
    return(
        <div>
        <Card style={{ width: '100rem' }}>
      <Card.Body>
        <Card.Title>Day {index +1}</Card.Title>
        <Card.Text>
        Description: {item.des}
        </Card.Text>
        <Card.Text>
        Date: {item.date}
        </Card.Text>
      </Card.Body>
    </Card>
           
        </div>
    )
})
}
      <h1>Movie: {this.state.m}</h1>
      </>
    )
    
  }
}






        
       
      
    
export default Forms;




