import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Ct from './Ct'

const AddTrip = () => {
    let obj=useContext(Ct)
    let datacon=obj.cont.item
    console.log(datacon)
    let [data,setData]=useState({"startLocation":"","destination":"","startDate":"","endDate":"","modeOfTravel":"","activities":"","notes":""})
    let [dataobj,setDataobj]=useState({...datacon})
    let navigate=useNavigate()
    
    let fun=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    let add=()=>{
        axios.post("http://localhost:5000/trip/add",data).then((res)=>{
            navigate("/home")
        })
    }
     
    let fun1=(e)=>{
        setDataobj({...dataobj,[e.target.name]:e.target.value})
    }
    let update=()=>{
        // console.log(datacon._id)
        obj.updcont({"item":""})
        let x={...dataobj,"_id":datacon._id}
        axios.post("http://localhost:5000/trip/edit",x).then((res)=>{
            if(res.data.msg=="trip edited"){
                navigate("/home")
            }
        })
    }
  return (
    <div className='logincon'>
        {(obj.cont.item=="" || obj.cont.item==undefined)&&<div className='login'>
        
        <input type='text' placeholder='From' name='startLocation' value={data.startLocation} onChange={fun}/>
        <input type='text' placeholder='To' name='destination' value={data.destination} onChange={fun}/>
        <input type='date' placeholder='Start Date' name='startDate' value={data.startDate} onChange={fun}/>
        <input type='date' placeholder='End Date' name='endDate' value={data.endDate} onChange={fun}/>
        <input type='text' placeholder='Mode' name='modeOfTravel' value={data.modeOfTravel} onChange={fun}/>
        <input type='text' placeholder='Activities' name='activities' value={data.activities} onChange={fun}/>
        <input type='text' placeholder='Notes' name='notes' value={data.notes} onChange={fun}/>
        {/* <input type='file' name="pimg" onChange={fun1}/> */}
        <button onClick={add}>AddTrip</button>
    </div>}

    {(obj.cont.item!="" && obj.cont.item!==undefined)&&<div className='login'>
        
        <input type='text' placeholder='From' name='startLocation' value={dataobj.startLocation} onChange={fun1}/>
        <input type='text' placeholder='To' name='destination' value={dataobj.destination} onChange={fun1}/>
        <input type='date' placeholder='Start Date' name='startDate' value={dataobj.startDate} onChange={fun1}/>
        <input type='date' placeholder='End Date' name='endDate' value={dataobj.endDate} onChange={fun1}/>
        <input type='text' placeholder='Mode' name='modeOfTravel' value={dataobj.modeOfTravel} onChange={fun1}/>
        <input type='text' placeholder='Activities' name='activities' value={dataobj.activities} onChange={fun1}/>
        <input type='text' placeholder='Notes' name='notes' value={dataobj.notes} onChange={fun1}/>
        {/* <input type='file' name="pimg" onChange={fun1}/> */}
        <button onClick={update}>UpdateTrip</button>
    </div>}
</div>
  )
}

export default AddTrip