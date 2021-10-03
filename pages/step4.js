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
    <center><h1>Final steps</h1></center><br></br>
<section>
<article>By now i assume you have a resonable amount of paying customers? Great!Now depending on your workload you my need to get help if you havent already.You may also need to do site management, improving grey areas in your business,customer retention and more marketing. </article></section><br></br>
<p>Now that you know the basics of buildiing your business you can now start your journey!</p>
  
 <Button styles={{float:'right'}} variant="primary">Start building</Button>
</div>
)
}
