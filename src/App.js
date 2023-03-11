import React, { useState } from "react";
import PrintableReceipt from "./component/PrintableReceipt";
import SignIn from "./component/SignIn.js";
import Resit from "./Resit.js";
import "./styles.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {QuizContext} from "./helper/Context"

function App() {
  const [changer, setChanger] = useState("auth");
  const [isloged, setIsLoged] = useState(false);
  console.log(isloged)

  const handleLogin = () => {
    setIsLoged(true);
    setChanger("accept");
  };

  return (
    <> <QuizContext.Provider value={{setIsLoged}}>

{/*         
        <BrowserRouter>
            <Routes>
            {isloged ? (
                <Route path="Resit" element={<Resit />} />
                ) : (
                <Route path="/" element={<SignIn />} />
      )}
              
            </Routes>
          </BrowserRouter> */}

          
      {isloged ? (
        <Resit />
      ) : (
        <SignIn setIsLoged={setIsLoged} onLogin={handleLogin} />
      )}
 

      </QuizContext.Provider>
    

{/* 
      {isloged ? (
        <Resit />
      ) : (
        <SignIn setIsLoged={setIsLoged} onLogin={handleLogin} />
      )} */}
    </>
  );
}

export default App;
