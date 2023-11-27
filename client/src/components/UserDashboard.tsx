import React, { useState } from 'react';
import '../assets/css/UserDashboard.css';
import {Link} from "react-router-dom";

const UserDashboard = () => {
    const [bloodAvailability, setBloodAvailability] = useState<null | string>(null);

    const handleBookAppointment = () => {
        // Implement appointment booking logic
        console.log('Book Appointment button clicked');
    };

    const handleUpcomingAppointments = () => {
        // Implement logic to fetch and display upcoming appointments
        console.log('Upcoming Appointments button clicked');
    };

    const handleCheckAvailability = () => {
        // Implement blood availability check logic
        // For example, you might make an API call to fetch the availability
        // and update the state to display the information
        setBloodAvailability('Available');
    };

    const handleDonationHistory = () => {
        // Implement donation history logic
        console.log('Donation History button clicked');
    };

    const backgroundImageStyle = {
        backgroundImage: 'url("/images/userDashboard/bloodDonation.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
    };

    return (
        <div>
            <h1 id="title">User Dashboard</h1>
            <Link to="/AppointmentPage">

            <button id="userdasfbtm" className="button" onClick={handleBookAppointment}>
                Book Appointment
            </button>
            </Link>
            <button id="userdasfbtm" className="button" onClick={handleUpcomingAppointments}>
                Upcoming Appointments
            </button>
            <button id="userdasfbtm" className="button" onClick={handleCheckAvailability}>
                Blood Availability
            </button>
            <button id="userdasfbtm" className="button" onClick={handleDonationHistory}>
                Donation History
            </button>

            <div style={backgroundImageStyle}></div>
        </div>
    );
};

export default UserDashboard;
