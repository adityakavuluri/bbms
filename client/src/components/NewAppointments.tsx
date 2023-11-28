import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../assets/css/NewAppointments.css';

interface Appointment {
    customerId: string;
    name: string;
    age: number;
    sex: string;
    category: string;
    bloodType: string;
    quantity: number;
}

const NewAppointments: React.FC = () => {
    const [newAppointments, setNewAppointments] = useState<Appointment[]>([]);

    useEffect(() => {
        // Fetch new appointments from the backend API
        const fetchNewAppointments = async () => {
            try {
                const response = await axios.get<Appointment[]>('/api/new-appointments'); // Adjust the API endpoint
                setNewAppointments(response.data);
            } catch (error) {
                console.error('Error fetching new appointments:', error);
            }
        };

        fetchNewAppointments();
    }, []);

    return (
        <div className="new-appointments">
            <h2 style={{padding: '25px', color: 'rgb(173, 15, 15)'}}>New Appointments</h2>
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
                {newAppointments.map(appointment => (
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

export default NewAppointments;
