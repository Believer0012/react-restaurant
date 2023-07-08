import { React, useEffect, useState } from 'react'
import Rcard from './Rcard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { restList } from '../actions/restaction'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


// function Restaurats() {

//     // var [restaurantList, setRestaurant] = useState([])


//     //fuction to call api

//     // const fetchData = async () => {
//     //     const result = await fetch('./restaurants.json')
//     //     result.json().then(data => {
//     //         setRestaurant(data.restaurants)
//     //     })}
//     //     console.log(restaurantList);

//          const dispatch=useDispatch()
//         useEffect(() => {
//             // fetchData()

//             dispatch(restList())
//         }, [])


// ---------------------------------------------------------------------------------------------------------
function Restaurats() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(restList())
    }, [])
   const {restaurantList}=useSelector(state=>state. restaurantReducer)
  

    return (
        <Row>
            {
            restaurantList.map(item => (
                <Col className='p-5' lg={4} md={6}>
                    <Rcard restdata={item} ></Rcard>
                </Col>
            ))}
        </Row>
    )
}

export default Restaurats