import React, { useState, useEffect } from "react";
import Item from "./Items";
import {data} from "./Add";
import "../styles/tasks.css"

const Tasks = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        async function fetchData() {
          // Get data from our endpoint
          const res = await fetch("https://frasercodes.vercel.app/fakeapi/products.json");
          const hello = await res.json();
    
          // Change state
          setProducts(data);
        }
    
        fetchData();
      }, [] /* THIS IS REALLY IMPORTANT */);
    

    return (
        <div> 
            <h1>Here Are All Of Your Tasks</h1>
        <div className="grid">
            {products.map(data => <Item data={data} />)}
        </div>
        </div>
    )
}

export default Tasks