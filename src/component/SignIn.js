import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import "./SignIn.css"; // import CSS file
import {auth} from "./config/firebase"
import Resit from "../Resit.js";
import {QuizContext} from "../helper/Context"
import {signInWithEmailAndPassword}from "firebase/auth"

function SignIn(props) {
  const{setIsLoged}=useContext(QuizContext)



  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle sign-in logic
//     setChanger("exept")
//   };
async function hundleSigin (e){
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log(auth.currentUser.email);
      setIsLoged(true)

    } catch (error) {
      console.error(error);
      // Handle authentication errors
      if (error.code === "auth/user-not-found" || error.code === "auth/wrong-password") {
        alert("Invalid email or password. Please try again.");
      } else {
        alert("An error occurred. Please try again later.");
      }
    }
  }
  

  return (
   <div className="container">
     <div className="sign-in">
      <FiUser size={32} color="blue" />
      <h2>Sign In</h2>
      <form  >
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
   
          {/* <Link to="/Resit"> */}
          <button type="submit" onClick={hundleSigin}>Sign IN</button>


          {/* </Link> */}
    
                
          </form>
      <p>
        {/* Don't have an account? <Link to="/signup">Sign up</Link> */}
      </p>
    </div>

   </div>
  );
}

export default SignIn;
