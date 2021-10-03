import { signIn, signOut, useSession } from 'next-auth/client'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';
import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import {react,useState} from 'react';
import Checkout from './button.js';

export default function Page() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return(
              <div><br></br>

    <center><h1>Schedule Email</h1></center><br></br>
    <center>
<Card style={{ width: '18rem'}}>

  <Card.Body style={{backgroundColor:"#0356fc" }}>
   <Form style={{paddingBottom:"0px" }}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Your email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  </Form>
     <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Recipient email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  </Form>
     <Form style={{paddingBottom:"60px",marginBottom:"0px" }}>
    <Form.Label>Message</Form.Label>
    <InputGroup size='lg'>
    <FormControl as="textarea" aria-label="With textarea" />
  </InputGroup>>
  <h3>Time:</h3>
  <Button>Weekly</Button><br></br><br></br>
    <Button>Monthly</Button>
    <br></br><br></br><br></br>
        <Button variant="success" size="lg" style={{width:"200px"}} onClick={handleShow}>Submit</Button>
  </Form>
  </Card.Body>
</Card>
</center>
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Congratulations!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your email has been saved!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
</div>
)
}
