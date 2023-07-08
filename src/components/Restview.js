import { React, useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { ListGroup } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import './Rcard.css'
import Reviews from './Reviews'
import OperatingTime from './OperatingTime'
import { useSelector } from 'react-redux'


//function Restview() {

  // var [Allrestaurants, setRestaurant] = useState([])

  // const fetchRest = async () => {
  //   const result = await fetch('/restaurants.json')
  //   result.json().then(data => {
  //     setRestaurant(data.restaurants)
  //   })
  // }
  // const params = useParams()
  // // console.log(Allrestaurants);
  // const restaurant = Allrestaurants.find(item => item.id == params.id)
  // console.log(restaurant);

  // useEffect(() => {
  //   fetchRest()
  // }, [])

  //----------------------------------------------------------------------------------------------------
 function Restview(){
  const params = useParams()

 
   useEffect(() => {
  
  }, [])
  const {restaurantList}=useSelector(state=>state.restaurantReducer)
  const restaurant = restaurantList.find(item => item.id == params.id)

 

  return (
    <>
    <>
      {
        restaurant ? (
          <Row>
            <Col id='cal' lg={6} md={6} className='ps-5 pt-5 pb-5 ms-5 text-center'>
              <img className='rounded border border-warning' style={{ height:'600px' }} src={restaurant.photograph}/>
            </Col>
            <Col id='cal' className='me-5 mt-5'>
            <ListGroup>  
            <ListGroup.Item><h1 className='text-warning'>{restaurant.name}</h1></ListGroup.Item>
            <ListGroup.Item><p> Neighborhood :<strong className='fs-5'>{restaurant.neighborhood}</strong></p></ListGroup.Item>
            <ListGroup.Item><p> Cuisine :<strong className='fs-5'>{restaurant.cuisine_type}</strong></p></ListGroup.Item>
            <ListGroup.Item><p> Address :<strong className='fs-5'>{restaurant.address}</strong></p></ListGroup.Item>
            <Reviews reviewData={restaurant.reviews}></Reviews>
            <OperatingTime timeData={restaurant.operating_hours}></OperatingTime>
            </ListGroup>


            </Col>

          </Row>) : ""


      }
    </>
      </>
  )
    }


export default Restview




