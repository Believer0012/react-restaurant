import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Footer() {
  return (
    <div>
        <Row>
            <Col>
           <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
           &copy; {new Date().getFullYear()} Copyright:{'All rights are reserved to Jchef Restaurant'}
        
           </div>
          
            </Col>
        </Row>
    </div>
  )
}

export default Footer