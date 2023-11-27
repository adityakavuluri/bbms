import React, { useEffect, useState } from 'react';
import axios from "axios";
import '../assets/css/BloodBankData.css'; // Adjust the CSS file name as needed

interface BloodBankData {
    bloodBankId: string;
    address: string;
    phoneNumber: string;
    email: string;
    unitRequired: number;
}

const BloodBankData: React.FC = () => {
    const [bloodBankData, setBloodBankData] = useState<BloodBankData[]>([]);

    useEffect(() => {
        // Fetch blood bank data from the backend API
        const fetchBloodBankData = async () => {
            try {
                const response = await axios.get<BloodBankData[]>('/api/blood-bank-data'); // Adjust the API endpoint
                setBloodBankData(response.data);
            } catch (error) {
                console.error('Error fetching blood bank data:', error);
            }
        };

        fetchBloodBankData();
    }, []);

    return (
        <div className="blood-bank-data">
            <h1>Blood Bank Data</h1>
            <table>
                <thead>
                <tr>
                    <th>Blood Bank ID</th>
                    <th>Address</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    <th>Units Required</th>
                </tr>
                </thead>
                <tbody>
                {bloodBankData.map(data => (
                    <tr key={data.bloodBankId}>
                        <td>{data.bloodBankId}</td>
                        <td>{data.address}</td>
                        <td>{data.phoneNumber}</td>
                        <td>{data.email}</td>
                        <td>{data.unitRequired}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default BloodBankData;
