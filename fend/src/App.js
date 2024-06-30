import React, { useContext, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './Component/Nav'
import Ct from './Component/Ct'
import Home from './Component/Home'
import Reg from './Component/Reg'
import Login from './Component/Login'
import './App.css'

import AddTrip from './Component/AddTrip'
import Fav from './Component/Fav'
import Search from './Component/Search'
import Date from './Component/Date'
import View from './Component/View'
import DetailedView from './Component/DetailedView'
import ListView from './Component/ListView'
import Feedback from './Component/Feedback'




const App = () => {

  let [cont,setCont]=useState({"_id":"","token":"","name":""})
  useEffect(()=>{
    let data=localStorage.getItem("key")
    data=JSON.parse(data)
    updcont(data)
  },[])
  let updcont=(obj)=>{
    setCont({...cont,...obj})
  }
  let obj={"cont":cont,"updcont":updcont}
  return (
    <BrowserRouter>
    <Ct.Provider value={obj}>
    <Nav/>
    <Routes>
    <Route path='/' element={<Login/>}/>
     
      <Route path='/reg' element={<Reg/>}/>
    
      <Route path='/fav' element={<Fav/>}/>
      <Route path='/add' element={<AddTrip/>}/>
      <Route path='/search/:params' element={<Search/>}/>
      <Route path='/feedback' element={<Feedback/>}/>
      <Route path="/date" element={<Date/>}/>
      <Route path="/home" element={<View/>}>
      <Route path="date" element={<Date/>}/>
      <Route path="detail" element={<DetailedView/>}/>
      <Route path="list" element={<ListView/>}/>

      </Route>
      
   
      
    </Routes>

    </Ct.Provider>
    </BrowserRouter>
  )
}

export default App