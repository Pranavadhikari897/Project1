
import React, { useContext, useEffect, useState } from 'react'
import Ct from './Ct'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Fav = () => {
 

    let [data,setData]=useState([])
    let obj=useContext(Ct)
    let navigate=useNavigate()
    let fun1=()=>{
      axios.get("http://localhost:5000/trip/favourites").then((res)=>{
        setData(res.data)
      })

    }
    useEffect(()=>{
      fun1()
   
    },[])
    let removeFavourites=(id)=>{
      axios.post("http://localhost:5000/trip/removeFromFavourites",{"_id":id,"favourites":"No"}).then((res)=>{
        if(res.data.msg=="removed from favourites"){
          fun1()
          

        }
      })

    }
  
    return (
      <div className='con'>
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
              <button onClick={()=>removeFavourites(item._id)} >Remove fav</button>
              
  
  
            </div>)
          })
        }
         
      </div>
    )
}

export default Fav