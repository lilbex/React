// import Home from './components/practiceuseState'
import Todo from "./components/practiceUseEffect.js";
import PracticeUseRef from "./components/useRef/PracticeUseRef";
import Table from "./components/useRef/practiceUseRefTable";
import { Routes, Route } from "react-router-dom";
import { UserContext } from "./context/createContext";
import React,{useState} from "react";
import PracticeMemo from "./components/useMemo/practiceMemo";
import ParentComponent from "./components/useCallBack/practiceUseCallBack";
import Button from "./components/styledComponents.js/Button";

function App() {
  const [name, setName] = useState("")

  return (
    <UserContext.Provider value={{ name,setName }}>
      <div className="App">
        <Routes>
          <Route path="/login"  />
          <Route path="/" element={<PracticeUseRef />} />
          <Route path="/todos" element={<Todo />} />
          <Route path="/table" element={<Table />} />
          <Route path="/memo" element={<PracticeMemo />} />
          <Route path="/callback" element={<ParentComponent />} />
          <Route path="/button" element={<Button borderRadius="50px" width="500px">Click</Button>} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
