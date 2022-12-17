import React from "react";
import '../styles/pages.css'
import { useState } from 'react';


const Add = () => {
    const increaseValue = () => {
        let newValue = value + 1
        setValue(newValue)
      }
    
    const decreaseValue = () => {
        let newValue = value - 1
        setValue(newValue)
    }
    const [value, setValue] = useState(0)

    const [description, setDescription] = useState('');
    
    const [name, setName] = useState('')

    const handleChanger = (event) => {
      setName(event.target.value)
    }
    const handleChange = (event) => {
        setDescription(event.target.value);
    };

    const [list, setList] = useState([])

    const handleUpdate = () => {
      
      let time = value
      let taskName = name
      let desc = description
      //const data = {"id":Math.random(), "name":taskName, "time":time, "description":desc}

      //setList([...list, data])
      /*
        let time = value
        let taskName = document.getElementById("taskName")
        let desc = document.getElementById("description")
        */
      data.push({"name":taskName, "time":time, "description":desc})
        
      console.log(data)
      setValue(0)
    };
      return (
        <main>
        <div>
            <input type="text" id="taskName" onChange={handleChanger} placeholder="Task Name"/>
            <button onClick={decreaseValue}>-</button>
            <span>Hours: {value}</span>  
            <button onClick={increaseValue}>+</button>
            <input
                type="text"
                id="description"
                onChange={handleChange}
                value={description}
                placeholder="Description"
            />

            <h2>Description: {description}</h2>

            <button onClick={handleUpdate}>Update</button>
        </div>
        </main>
      )
}   

export default Add

export let data = [
  
]