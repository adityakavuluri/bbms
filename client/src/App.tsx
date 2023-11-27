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
import AdminDashboard from "./components/AdminDashboard";
import PastAppointments from "./components/PastAppointments";
import NewAppointments from "./components/NewAppointments";
import PatientRecords from "./components/PatientRecords";
import BloodBankData from "./components/BloodBankData";
import ManageDonors from "./components/ManageDonors";

    import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import UserDashboard from "./components/UserDashboard";



import SignUpForm from "./components/SignUp";
import AdminDashboard from "./components/AdminDashboard";
import PastAppointments from "./components/PastAppointments";
import NewAppointments from "./components/NewAppointments";
import PatientRecords from "./components/PatientRecords";
import BloodBankData from "./components/BloodBankData";
import ManageDonors from "./components/ManageDonors";


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

                <Route path="/signUp" element={<SignUpForm />} />
                <Route path="/adminDashboard" element={<AdminDashboard />} />
                <Route path="/pastAppointment" element={<PastAppointments />} />
                <Route path="/newAppointment" element = {<NewAppointments />} />
                <Route path="/patientRecords" element = {<PatientRecords />} />
                <Route path="/bloodBankData" element = {<BloodBankData />} />
                <Route path="/manageDonors" element = {<ManageDonors />} />

                <Route path="*" element={<div>Page Not Found</div>} />

            </Routes>

            <AppFooter />

        </Router>
);

  return (
      <Router basename={"BloodBankManagementSystem"}>
        <AppHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          {/*<Route path="/categories" element={<CategoryBookList />} />*/}
            <Route path="/adminLogin" element={<AdminLogin />} />
            <Route path="/userLogin" element={<UserLogin />} />
            <Route path="/signUp" element={<SignUpForm />} />
            <Route path="/adminDashboard" element={<AdminDashboard />} />
            <Route path="/pastAppointment" element={<PastAppointments />} />
            <Route path="/newAppointment" element = {<NewAppointments />} />
            <Route path="/patientRecords" element = {<PatientRecords />} />
            <Route path="/bloodBankData" element = {<BloodBankData />} />
            <Route path="/manageDonors" element = {<ManageDonors />} />

            <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>

        <AppFooter />

      </Router>
  );

}

export default App;

