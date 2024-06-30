import React, { useContext, useEffect, useState } from 'react'
import Ct from './Ct'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Home = () => {
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
    let del=(id)=>{
        axios.delete(`http://localhost:5000/trip/del/${id}`).then((res)=>{
            if(res.data.msg=="trip deleted"){
                axios.get("http://localhost:5000/trip/getall").then((res)=>{
                    setData(res.data)
                })
            }
        })
    }
    let edit=(item)=>{
        obj.updcont({"item":item})
        navigate("/add")

    }
    let addToFavourites=(id)=>{
      axios.post("http://localhost:5000/trip/addToFavourites",{"_id":id,"favourites":"Yes"}).then((res)=>{
        if(res.data.msg=="added to favourites"){
          navigate("/fav")
          

        }
      })

    }
    let removeFavourites=(id)=>{
      axios.post("http://localhost:5000/trip/removeFromFavourites",{"_id":id,"favourites":"No"}).then((res)=>{
        if(res.data.msg=="removed from favourites"){
          fun()
          

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
            {/* <button onClick={()=>add(item)}>Add Cart</button> */}
            <button onClick={()=>{edit(item)}}>Edit</button>
            <button onClick={()=>{del(item._id)}}>Delete</button>
           {item.favourites==="Yes" && <button onClick={()=>removeFavourites(item._id)} >Remove fav</button>}
           {(item.favourites==undefined || item.favourites==="No") && <button onClick={()=>addToFavourites(item._id)} >add fav</button>}


          </div>)
        })
      }
       
    </div>
  )
}

export default Home