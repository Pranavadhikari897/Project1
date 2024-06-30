import { useParams } from 'react-router-dom'
import React, { useContext, useEffect, useState } from 'react'
import Ct from './Ct'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Search = () => {
    let [data,setData]=useState([])
    let obj=useContext(Ct)
    let navigate=useNavigate()
    let params=useParams()
    let fun=()=>{
       
        console.log(params)
       axios.get(`http://localhost:5000/trip/search/${params.params}`).then((res)=>{
        setData(res.data)
       })
    

    }
    useEffect(()=>{
    fun()

    },[params])
  
    return (
        <div className='con'>
            {data.length==0 && <div>no result found</div>}
          {
            data.map((item)=>{
              console.log(item.favourites)
              return(<div className='prodcon'>
                {/* <div className='img'><img src={`http://localhost:5000/imgs/${item.pimg}`}/></div> */}
                <p>From : {item.startLocation}</p>
                <p>To : {item.destination}</p>
                <p>Start Date : {item.startDate}</p>
                <p>End Date : {item.endDate}</p>
                <p>Mode : {item.modeOfTravel}</p>
                <p>Activities : {item.activities}</p>
                <p>Notes : {item.notes}</p>
                
              </div>)
            })
          }
           
        </div>
      )
  
}

export default Search