import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../assets/css/ManageDonors.css'; // Adjust the CSS file name as needed

interface Donor {
    donorId: string;
    name: string;
    address: string;
    phoneNumber: string;
    email: string;
    bloodGroup: string;
    height: number;
    weight: number;
    rbcCount: number;
    wbcCount: number;
    plateletsCount: number;
    bpLevel: string;
    medicalHistory: string;
}

const ManageDonors: React.FC = () => {
    const [donors, setDonors] = useState<Donor[]>([]);

    useEffect(() => {
        // Fetch donor data from the backend API
        const fetchDonors = async () => {
            try {
                const response = await axios.get<Donor[]>('/api/manage-donors'); // Adjust the API endpoint
                setDonors(response.data);
            } catch (error) {
                console.error('Error fetching donor data:', error);
            }
        };

        fetchDonors();
    }, []);

    return (
        <div className="manage-donors">
            <h1>Manage Donors</h1>
            <table>
                <thead>
                <tr>
                    <th>Donor ID</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    <th>Blood Group</th>
                    <th>Height</th>
                    <th>Weight</th>
                    <th>RBC Count</th>
                    <th>WBC Count</th>
                    <th>Platelets Count</th>
                    <th>BP Level</th>
                    <th>Medical History</th>
                </tr>
                </thead>
                <tbody>
                {donors.map(donor => (
                    <tr key={donor.donorId}>
                        <td>{donor.donorId}</td>
                        <td>{donor.name}</td>
                        <td>{donor.address}</td>
                        <td>{donor.phoneNumber}</td>
                        <td>{donor.email}</td>
                        <td>{donor.bloodGroup}</td>
                        <td>{donor.height}</td>
                        <td>{donor.weight}</td>
                        <td>{donor.rbcCount}</td>
                        <td>{donor.wbcCount}</td>
                        <td>{donor.plateletsCount}</td>
                        <td>{donor.bpLevel}</td>
                        <td>{donor.medicalHistory}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageDonors;
