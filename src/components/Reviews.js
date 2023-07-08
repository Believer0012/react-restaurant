import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';


function Reviews({ reviewData}) {
    const [open, setOpen] = useState(false);

    return (
        <>
          <Button
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            Reviews
          </Button>
          <div style={{ minHeight: '150px' }}>
            <Collapse in={open} dimension="width">
              <div id="example-collapse-text">
              {  
                reviewData.map(item=>(
                    <Card style={{ width: '600px' }}>
                        <h6>{item.name} : {item.date}</h6>
                        <p>Rating  :{item.rating}</p>
                        <p>Comments:{item.comments}</p>
                
                    </Card>
                ))

  
                }

              </div>
            </Collapse>
          </div>
        </>
      );
    }
export default Reviews