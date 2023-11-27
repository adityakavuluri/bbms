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
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import UserDashboard from "./components/UserDashboard";




function App() {
  return (
      <Router basename={"BloodBankManagementSystem"}>
        <AppHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          {/*<Route path="/categories" element={<CategoryBookList />} />*/}
            <Route path="/adminLogin" element={<AdminLogin />} />
            <Route path="/userLogin" element={<UserLogin />} />
            <Route path="/userDashboard" element={<UserDashboard />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/contactUs" element={<ContactUs />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>

        <AppFooter />

      </Router>
  );
}

export default App;

