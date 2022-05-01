import { useState } from "react";
import "../App.css"
export const Form = () => {
  // const { formData, setformData } = useState({
    const [formData ,setformData] = useState({
        username: "",
    age: "",
    address: "",
    department:"",
    salary:"",
    marital_state:"",
  });
  const handleChange = (e) => {
   
const {id ,value} =e.target;
setformData({
    ...formData,
    [id]:value,
  })  
  };
  const hendleSubmit = (e)=>{
      e.preventDefault();
      console.log("formData",formData)
      fetch("http://localhost:4000/users/",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(formData)
      })
  }
 

  return (
    // username.............
    <form onSubmit ={hendleSubmit}>
      <input
        onChange={handleChange}
        // value={formData.username}
        type="text"
        placeholder="enter unsername"
        id="username"
      />
    {/* age ........ .......*/}
      <input
        // value={formData.age}
        onChange={handleChange}
        type="number"
        placeholder="enter age"
        id="age"
      />

{/* address.................. */}
      <textarea
        // value={formData.address}
        onChange={handleChange}
        type="text"
        placeholder="enter your address"
        id="address"/>

{/* department..................... */}
       <input
        //  value={formData.department}
        onChange={handleChange}
        type="text"
        placeholder="enter your department"
        id="department"
      ></input>
{/* salary.................. */}
<input
  // value={formData.salary}
        onChange={handleChange}
        type="number"
        placeholder="enter your salary"
        id="salary"
      ></input>

    {/* marital_state............... */}
<input
  // value={formData.marital_state}
        onChange={handleChange}
        type="text"
        placeholder="enter your marital_state"
        id="marital_state"
      ></input>
      <input type="submit" value ="submit"/>
    </form>
  );
};
