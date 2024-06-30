import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Ct from './Ct'

const Nav = () => {
    let obj=useContext(Ct)
    let navigate=useNavigate()
    let [data,setData]=useState("")
    let fun1=(e)=>{
      setData(e.target.value)
      

    }
    let fun=(e)=>{
      e.preventDefault()
      navigate(`/search/${data}`)
      


    }
    useEffect(()=>{
      let data=localStorage.getItem("key")
      data=JSON.parse(data)
      obj.updcont(data)
    },[])
  return (
    <nav>
        {obj.cont.token==""&&<Link to='/'>Login</Link>}
        {obj.cont.token==""&&<Link to='/reg'>Register</Link>}
        {obj.cont.token!=""&&<Link to='/home'>Home</Link>}
        {obj.cont.token!=""&&<Link to='/add'>Add Trip</Link>}
        {obj.cont.token!=""&&<Link to='/fav'>Fav</Link>}
        {obj.cont.token!=""&&
        <div className='search'>
          <form onSubmit={fun}>
        <input type='text' placeholder='search' name='search'  onChange={fun1}/>
        </form>
        
        </div>
        }
         {obj.cont.token!=""&&<Link to='/feedback'>FeedBack</Link>}
        {obj.cont.token!=""&&<div>{obj.cont.name}</div>}
       

        
    </nav>
  )
}

export default Nav