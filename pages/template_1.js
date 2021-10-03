import { signIn, signOut, useSession } from 'next-auth/client'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import react from 'react';
import Checkout from './button.js';
import React, { useState } from 'react';

export default function Page(){
  const [post, setPost] = React.useState(null);

    React.useEffect(() => {
    axios.get('http://localhost:8000/api/headers').then((response) => {
      setPost(response.data);
    });
  }, []);
  return (

              <div>

    <br></br><center><h1 style={{color:setPost.color}}>Shopify Analytics with Vonage</h1></center>
<img src="hero.png"/>
<p style={{float:'right',marginRight:'260px',marginTop:'50px'}}>Get real time updates via activity streams for your shopify store..<br></br>Find out how!</p>
<Form style={{float:'right',marginRight:'490px',marginTop:'-350px'}}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
  </Form>
    <br></br>    <br></br>
  
<br></br><br></br>
</div>


 )
 }
 
  

