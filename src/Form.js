import { useState , useEffect } from "react";

const Form1 = () => {
  const [name, setName] = useState("");
  const [reem, setReem] = useState();
const nn = [2,4,6,8,10]
  useEffect(() => {
  // storing input name
  localStorage.setItem("name", JSON.stringify(name));
}, []); 

const setInStorage = (()=>{
  localStorage.setItem("name", JSON.stringify(nn));
})

const RetriveStorage = (()=>{
    
    const a = JSON.parse(localStorage.getItem("name"))
  setReem(a)
//   console.log("fffffff",reem)
})

useEffect(() => {
    if(reem){
console.log("Updated reem:", reem);
    }
  
}, [reem]);


  return (
    <form>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Full name"
        aria-label="fullname"
      />
      <input type="submit" value="Submit" onClick={()=>{setInStorage()}} ></input>
      <input type="button" value="Retrive" onClick={()=>{RetriveStorage()}} ></input>
    </form>
  );
};

export default Form1;