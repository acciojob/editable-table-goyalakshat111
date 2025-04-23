import React, { useRef } from "react";
import "./../styles/App.css";

const rows = [
  { id: 1, name: "Ram", age: 25 },
  { id: 2, name: "Shyam", age: 30 },
  { id: 3, name: "Ali", age: 35 },
  { id: 4, name: "Shaw", age: 20 },
  { id: 5, name: "Tavneet", age: 50 },
  { id: 6, name: "Lakshmi", age: 40 },
];


const App = () => {

  const dataRef = useRef({});
 
  function handleChange(id,e){

    let key = e.target.name;
    let value = e.target.value;

    if (!dataRef.current[id]) {
      dataRef.current[id] = {};
    }

    dataRef.current[id][key] = value;

  }
  
  function handleSubmit(e) {
    e.preventDefault();
    console.log('Edited rows:', Object.keys(dataRef.current).map(value=>Number(value)));

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => {
              return (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>
                    <input type="text" defaultValue={row.name} name="name" onChange={(e)=>handleChange(row.id,e)}  />
                  </td>
                  <td>
                    <input type="number" defaultValue={row.age} name="age" onChange={(e)=>handleChange(row.id,e)} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default App;
