import React, { useState } from 'react'
import axios from 'axios'

const Feedback = () => {

    let [data,setData]=useState({"_id":"","name":"","experiance":"","suggestions":""})
    let [submit,setSubmit]=useState("")

    let fun=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }

    let add=()=>{
        axios.post("http://localhost:5000/feed/add",data).then((res)=>{
            if(res.data.msg=="Feedback Added"){
                console.log("feed")
                // setData({"_id":"","name":"","experiance":"","suggestions":""})
                setSubmit("Feedback Submitted")
            }
            
        })
    }
  return (
    <div className='logincon'>
        {submit.length!=0&&<div>Feedback submited</div>}
        {submit.length==0&&<div className='login'>
        
        <input type='text' placeholder='EmailId' name='_id' value={data._id} onChange={fun}/>
        <input type='text' placeholder='Name' name='name' value={data.name} onChange={fun}/>
        <input type='text' placeholder='Travel Experiance' name='experiance' value={data.experiance} onChange={fun}/>
        <input type='text' placeholder='Suggestions' name='suggestions' value={data.suggestions} onChange={fun}/>
        <button onClick={add}>Submit</button>

    </div>}
    </div>
  )
}

export default Feedback