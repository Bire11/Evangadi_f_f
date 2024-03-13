import React, { useContext, useEffect, useState, createContext } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { UserContext } from "./component/Dataprovide/DataProvider";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import axios from "./axiosConfig";
import Question from "./pages/Question/Question";
// import Register from "./pages/Register/Register";
import Answer from "./pages/Answer/Answer";
import axiosBase from "./axiosConfig";
import NotFound from "./pages/NotFound/NotFound";
import HowItWorks from  "./pages/HowItWorks/HowItWorks"
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";



export const AppState = createContext();

function App() {
  const [user, setUser] = useContext(UserContext);
  let token = localStorage.getItem("token");
  const navigate = useNavigate();




  const checkUser2 = async () => {
    try {
      const { data } = await axios.get("/users/check", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      // setUser({ data });
      setUser({ data });
      // console.log(data);
    } catch (error) {
      // console.log(error);
      navigate("/login");
    }
  };

  // console.log(user.user.display_name.length ,"kkkk")
  useEffect(() => {
    checkUser2();
  }, []);


  return (
    <AppState.Provider value={{ user, setUser }}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/question" element={<Question />} />
        <Route path="/question/:id" element={<Answer />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route
          path="*"
          element={
           
            <NotFound/>
            
          }
        />
      </Routes>
    </AppState.Provider>
  );
}

export default App;
