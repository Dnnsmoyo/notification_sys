import { signIn, signOut, useSession } from 'next-auth/client'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Toast from 'react-bootstrap/Toast';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ListGroup from 'react-bootstrap/ListGroup';

import 'bootstrap/dist/css/bootstrap.min.css';
import react from 'react';
import Checkout from './button.js';

import Graph from './step2.js';

export default function Page() {
  const [session, loading] = useSession()

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <>
      {!session && (
        <>
          Not signed in <br />
          <Button onClick={signIn} variant="primary">GOOGLE</Button>
                        <a style={{textDecoration:"none",color:"#32a8a2",fontSize:"20px",marginLeft:"70px",paddingRight:"25px"}} href="#">Home</a>              <a style={{textDecoration:"none",color:"#32a8a2",fontSize:"20px",paddingRight:"25px"}} href="#">About</a>              <a style={{textDecoration:"none",color:"#32a8a2",fontSize:"20px",paddingRight:"25px"}} href="#">Pricing</a>              
              <div>
<img src="shopify.png" style={{float:'left'}}/><br></br>
<Toast style={{float:'left'}}>
  <Toast.Header>
    <strong className="me-auto">New Notification</strong>
    <small>11 mins ago</small>
  </Toast.Header>
  <Toast.Body>Josh ordered a siutcase!.</Toast.Body>
</Toast>
<br></br><br></br>
<Toast style={{float:'left'}}>
  <Toast.Header>
    <strong className="me-auto">New Notification</strong>
    <small>11 mins ago</small>
  </Toast.Header>
  <Toast.Body>Josh ordered a travel bag!.</Toast.Body>
</Toast>
<br></br><br></br>
<Toast style={{float:'left'}}>
  <Toast.Header>
    <strong className="me-auto">New Notification</strong>
    <small>11 mins ago</small>
  </Toast.Header>
  <Toast.Body>Jack ordered a brown boots!.</Toast.Body>
</Toast>
<img src="office.svg" style={{float:'left'}} width="900" height="900"/><br></br>
<p style={{float:'right',marginRight:'260px',marginTop:'50px'}}>Keep up to date with your shopify store performance.<br></br>Find out how!</p>
<Form style={{float:'right',marginRight:'-350px',marginTop:'160px'}}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button><br></br><br></br>

<Toast>
  <Toast.Header>
    <strong className="me-auto">New Notification</strong>
    <small>11 mins ago</small>
  </Toast.Header>
  <Toast.Body>Josh ordered a siutcase!.</Toast.Body>
</Toast>
<br></br><br></br>
<Toast>
  <Toast.Header>
    <strong className="me-auto">New Notification</strong>
    <small>11 mins ago</small>
  </Toast.Header>
  <Toast.Body>Josh ordered a travel bag!.</Toast.Body>
</Toast>
<br></br><br></br>
<Toast>
  <Toast.Header>
    <strong className="me-auto">New Notification</strong>
    <small>11 mins ago</small>
  </Toast.Header>
  <Toast.Body>Jack ordered brown boots!.</Toast.Body>
</Toast>
<br></br><br></br>
  </Form>

</div>
</>
      )}
    </>
  )
}
