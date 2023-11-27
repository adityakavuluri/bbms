import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../assets/css/PastAppointments.css';
interface Appointment {
    customerId: string;
    name: string;
    age: number;
    sex: string;
    category: string;
    bloodType: string;
    quantity: number;
}

const PastAppointments: React.FC = () => {
    const [pastAppointments, setPastAppointments] = useState<Appointment[]>([]);

    useEffect(() => {
        // Fetch past appointments from the backend API
        const fetchPastAppointments = async () => {
            try {
                const response = await axios.get<Appointment[]>('/api/past-appointments'); // Adjust the API endpoint
                setPastAppointments(response.data);
            } catch (error) {
                console.error('Error fetching past appointments:', error);
            }
        };

        fetchPastAppointments();
    }, []);

    return (
        <div className="past-appointments">
            <h1>Past Appointments</h1>
            <table>
                <thead>
                <tr>
                    <th>Customer ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Sex</th>
                    <th>Category</th>
                    <th>Blood Type</th>
                    <th>Quantity</th>
                </tr>
                </thead>
                <tbody>
                {pastAppointments.map(appointment => (
                    <tr key={appointment.customerId}>
                        <td>{appointment.customerId}</td>
                        <td>{appointment.name}</td>
                        <td>{appointment.age}</td>
                        <td>{appointment.sex}</td>
                        <td>{appointment.category}</td>
                        <td>{appointment.bloodType}</td>
                        <td>{appointment.quantity}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default PastAppointments;
