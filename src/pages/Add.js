import React from "react";
import '../styles/pages.css'
import { useState } from 'react';
import { getValue } from "@testing-library/user-event/dist/utils";

let items = [{

}]

function Item({ data }) {
    return (
      <div className="card">
        <img src={data.img} align="center" />
        <h1>{data.name}</h1>
        <p>${data.price}</p>
        <p>{data.description}</p>
      </div>
    )
}

const Add = () => {
    const increaseValue = () => {
        let newValue = value + 1
        setValue(newValue)
      }
    
    const decreaseValue = () => {
        let newValue = value - 1
        setValue(newValue)
    }

    const getValue = () => {
        let newValue = 0
        setValue(newValue)
    }

    const [description, setDescription] = useState('');

    const [updated, setUpdated] = useState([]);

    const handleChange = (event) => {
        setDescription(event.target.value);
    };

    const handleClick = () => {
        let time = document.getElementById("time")
        let taskName = document.getElementById("taskName")
        setUpdated([taskName, time]);
    };

    
      const [value, setValue] = useState(0)
      return (
        <main>
        <div>
            <input type="text" id="taskName" placeholder="Task Name"/>
            <input type="text" id="time" placeholder="Time"/>
            <input
                type="text"
                id="description"
                onChange={handleChange}
                value={description}
                placeholder="Description"
            />

            <h2>Description: {description}</h2>

            <h2>Updated: {updated}</h2>

            <button onClick={handleClick}>Update</button>
        </div>
        </main>
      )
}   

export default Add