import React,{Fragment,useState,useRef, useEffect, useContext} from "react";
import { data } from './data'
import "./popup.css"
import { UserContext } from "../../context/createContext";

const Table = () => {
  const [idOfTable, setIdOfTable] = useState(-1)
  const {name} = useContext(UserContext)
  const setContext = useContext(UserContext)

  useEffect(() => {
    setContext.setName("Elias Imokhai")
  }, [name])

  const ref = useRef(null)
  
  const handleClickOutside = (e)=>{
    if(ref.current && !ref.current.contains(e.target)){
      setIdOfTable(-1)
    }
  }

  useEffect(()=>{
    document.addEventListener("click", handleClickOutside, true)
  })

  return (
    <div>
      <p>My name is {name}</p>
      <table>
        <tr>
          <th>s/n</th>
          <th>name</th>
          <th>age</th>
          <th>skill</th>
          <th>Action</th>
        </tr>
        {data && data.length > 0 ? data.map((item,index)=>(
          <tr>
            <td>{index}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.skill}</td>
            <td 
            style={{fontWeight:"bold",fontSize:"20px"}} 
            onClick={()=>setIdOfTable(item.id)}
            >...
            {idOfTable === item.id &&  <Fragment>
                <span ref={ref} className="pop">
                  <p>View Detail</p>
                  <p>Edit</p>
                  <p style={{color:"red"}}>Delete</p>
                </span>
              </Fragment>
              }
             
            </td>
          </tr>
        )):<p>No data to display</p>}
      </table>
    </div>
  )
}

export default Table