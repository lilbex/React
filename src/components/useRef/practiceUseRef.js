import React,{useState,useRef,useEffect} from "react";
import { Link } from "react-router-dom";


const PracticeUseRef = () => {
  const [inputValue, setInputValue] = useState("");
  const countRef = useRef(0);

  useEffect(() => {
    countRef.current = countRef.current + 1;
  })

  // console.log(countRef.current) 

  return (
    <div>
      <input 
      type="text"
      value={inputValue}
      onChange={(e)=>setInputValue(e.target.value)}

      style={{width:"200px", height:"50px", fontSize:"20px", padding:"10px"}}

       />
       <p>the DOM updated {countRef.current} </p>
        <Link to="/table">Go to table</Link>
    </div>
  );
};

export default PracticeUseRef;
