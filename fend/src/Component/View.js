import React, { useEffect, useState } from 'react'
import Home from './Home'
import { Outlet, useNavigate } from 'react-router-dom'

const View = () => {
    let [f,setF]=useState(true)
    let [f1,setF1]=useState(false)
    let [f2,setF2]=useState(false)
    let navigate=useNavigate()

    let fun=()=>{
        navigate("/home/detail")

    }
    useEffect(()=>{
        fun()
    },[])
    let fun1=()=>{
        navigate("/home/date")
    }
    let fun2=()=>{
        navigate("/home/list")
    }
  return (
    <div>
    <button onClick={fun}>Detailed View</button>
    <button onClick={fun2}>List View</button>
    <button onClick={fun1}>sort by date</button>
    <Outlet/>
    </div>
  )
}

export default View