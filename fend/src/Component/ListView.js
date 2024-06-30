import React, { useContext, useEffect, useState } from 'react'
import Ct from './Ct'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ListView = () => {
    let [data,setData]=useState([])
    let obj=useContext(Ct)
    let navigate=useNavigate()
    let fun=()=>{
      if(obj.cont.token){
        axios.get("http://localhost:5000/trip/getall").then((res)=>{
            setData(res.data)
        })
    }

    }
    useEffect(()=>{
      fun()
        
    },[])
  return (
    <div className='con'>
      {
        data.map((item)=>{
          console.log(item.favourites)
          return(<div className='prodcon'>
            {/* <div className='img'><img src={`http://localhost:5000/imgs/${item.pimg}`}/></div> */}
            <p>From : {item.startLocation}</p>
            <p>To : {item.destination}</p>
            </div>
      )})
      }
      </div>
  )
}

export default ListView