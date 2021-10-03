import { signIn, signOut, useSession } from 'next-auth/client'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import 'bootstrap/dist/css/bootstrap.min.css';
import react from 'react';
import Checkout from './button.js';

export default function Page() {
  return(
              <div><br></br>
    <center><h1>Market,imporove,market</h1></center><br></br>
<section>
<article>Now that you have your idea in place its time to test it in the real world.There are differnet ways that you can do this .You can use ay method of your choice.The purpose of  testing your idea is to determine whether or not you should pursue it long term or short term. Is an idea worth pursuing if you have zero customers after x amount of time?</article></section><br></br>
    <center><h1>Creating a validation website</h1></center><br></br>
    <p>A landing page is the best way to validate your idea for the first time.Advantages of having a website are:</p>
 <ul>
 <li>Your idea is exposed to real people</li><br></br>
 <li>Quick feedback</li><br></br>
 <li>Instantly builds reputation</li><br></br>
  <li>You quickly have an email list of potential paying customers</li><br></br>
   <li>Opportunity to improve based on feedback</li><br></br>
    <li>Boosts your confidence in the idea</li><br></br>
 </ul>

     <p>Building a landing page is not that difficult and you dont have to do it from scratch. Use prebuilt templates to make your life easier.:</p>
  
 <Button styles={{float:'right'}} variant="primary">I have built a website</Button>
</div>
)
}
