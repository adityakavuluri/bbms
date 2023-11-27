import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../assets/css/PatientRecords.css'; // Adjust the CSS file name as needed

interface PatientRecord {
    patientId: string;
    name: string;
    age: number;
    sex: string;
    diagnosis: string;
    treatment: string;
}

const PatientRecords: React.FC = () => {
    const [patientRecords, setPatientRecords] = useState<PatientRecord[]>([]);

    useEffect(() => {
        // Fetch patient records from the backend API
        const fetchPatientRecords = async () => {
            try {
                const response = await axios.get<PatientRecord[]>('/api/patient-records'); // Adjust the API endpoint
                setPatientRecords(response.data);
            } catch (error) {
                console.error('Error fetching patient records:', error);
            }
        };

        fetchPatientRecords();
    }, []);

    return (
        <div className="patient-records">
            <h1>Patient Records</h1>
            <table>
                <thead>
                <tr>
                    <th>Patient ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Sex</th>
                    <th>Diagnosis</th>
                    <th>Treatment</th>
                </tr>
                </thead>
                <tbody>
                {patientRecords.map(record => (
                    <tr key={record.patientId}>
                        <td>{record.patientId}</td>
                        <td>{record.name}</td>
                        <td>{record.age}</td>
                        <td>{record.sex}</td>
                        <td>{record.diagnosis}</td>
                        <td>{record.treatment}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default PatientRecords;
