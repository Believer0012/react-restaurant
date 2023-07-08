import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Rcard({restdata}) {
  return (
    <> 
   <Link to={`/view-restaurant/${restdata.id}`} style={{textDecoration:'none'}}>
      <Card id='cal' style={{ width: '18rem'  }}>
      <Card.Img variant="top" src={restdata.photograph} />
      <Card.Body>
        <Card.Title>{restdata.name}</Card.Title>
        <Card.Text>
        <p><strong>Cusine Type:</strong> {restdata.cuisine_type}</p>
        <p><strong>NeighborHood:</strong> {restdata.neighborhood}</p>
        </Card.Text>
        
      </Card.Body>
    </Card>
   </Link>
  </>
  )
}

export default Rcard