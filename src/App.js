// import Home from './components/practiceuseState'
import Timer from "./components/practiceUseEffect.js";
import PracticeUseRef from "./components/useRef/PracticeUseRef";
import PracticeUseMemo from "./components/useMemo/practiceUseMemo";
import PracticeUseCallBack from "./components/useCallBack/practiceUseCallBack";
import PracticeUseCallBack2 from "./components/useCallBack/practiceUseCallBack2";
import Table from "./components/useRef/practiceUseRefTable";
import { Routes, Route } from "react-router-dom";
import { UserContext } from "./context/createContext";
import React,{useState} from "react";

function App() {
  const [name, setName] = useState("")

  return (
    <UserContext.Provider value={{ name,setName }}>
      <div className="App">
        <Routes>
          <Route path="/login"  />
          <Route path="/" element={<PracticeUseRef />} />
          <Route path="/table" element={<Table />} />
          <Route path="/memo" element={<PracticeUseMemo />} />
          <Route path="/callback" element={<PracticeUseCallBack />} />
          <Route path="/callback2" element={<PracticeUseCallBack2 />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
