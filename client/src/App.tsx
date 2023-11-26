import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import Home from './components/Home'
import CategoryBookList from './components/CategoryBookList';
 import AdminLogin from './components/AdminLogin';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import React from "react";
import UserLogin from "./components/UserLogin";
import SignUpForm from "./components/SignUp";




function App() {
  return (
      <Router basename={"BloodBankManagementSystem"}>
        <AppHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          {/*<Route path="/categories" element={<CategoryBookList />} />*/}
            <Route path="/adminLogin" element={<AdminLogin />} />
            <Route path="/userLogin" element={<UserLogin />} />
            <Route path="/signUp" element={<SignUpForm />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>

        <AppFooter />

      </Router>
  );
}

export default App;

