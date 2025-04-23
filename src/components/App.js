import React, { useRef } from "react";
import "./../styles/App.css";

const rows = [
  { id: 1, name: "Akshat", age: 23 },
  { id: 2, name: "Ajay", age: 21 },
  { id: 3, name: "Arun", age: 22 },
  { id: 4, name: "Aryan", age: 20 },
  { id: 5, name: "Akash", age: 22 },
  { id: 6, name: "Atul", age: 23 },
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
    console.log(Object.keys(dataRef.current));

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
