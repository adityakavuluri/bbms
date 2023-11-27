import React, {useState} from 'react';
import '../assets/css/AppointmentPage.css';

function AppointmentPage() {
    const [selectedOption, setSelectedOption] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        bloodType: '',
        medicalInjuries: '',
        bloodAmount: '',
        phoneNumber: '',
        location: '', dateNeeded: ''

    });

    const handleOptionChange = (option: string) => {
        setSelectedOption(option);
        setFormData({
            name: '',
            age: '',
            bloodType: '',
            dateNeeded: '',
            medicalInjuries: '',
            bloodAmount: '',
            phoneNumber: '',
            location: '',
        });
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        // Handle form submission based on selected option
        console.log('Form Data:', formData);
        // You can add your logic for handling the form data here
    };

    return (
        <div className="app-container">
            <h1>Blood Donation Application</h1>
            <label>Select Role:</label>
            <select
                className="select-role"
                value={selectedOption}
                onChange={(e) => handleOptionChange(e.target.value)}
            >
                <option value="">Select</option>
                <option value="donor">Donor</option>
                <option value="recipient">Recipient</option>
            </select>

            {selectedOption === 'donor' && (
                <form className="form-container" onSubmit={handleSubmit}>
                    <h2>Donor Application</h2>
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
                    </div>

                    <div className="form-group">
                        <label>Age:</label>
                        <input type="number" name="age" value={formData.age} onChange={handleInputChange} required />
                    </div>

                    <div className="form-group">
                        <label>Blood Type:</label>
                        <input
                            type="text"
                            name="bloodType"
                            value={formData.bloodType}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Date Needed:</label>
                        <input
                            type="date"
                            name="dateNeeded"
                            value={formData.dateNeeded}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Phone Number:</label>
                        <input
                            type="text"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Previous Medical Injuries:</label>
                        <textarea
                            name="medicalInjuries"
                            value={formData.medicalInjuries}
                            onChange={handleInputChange}
                        ></textarea>
                    </div>

                    <button type="submit" className="submit-button">
                        Submit
                    </button>
                </form>
            )}

            {selectedOption === 'recipient' && (
                <form className="form-container" onSubmit={handleSubmit}>
                    <h2>Recipient Application</h2>
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
                    </div>

                    <div className="form-group">
                        <label>Blood Type:</label>
                        <input
                            type="text"
                            name="bloodType"
                            value={formData.bloodType}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Blood Amount Needed:</label>
                        <input
                            type="text"
                            name="bloodAmount"
                            value={formData.bloodAmount}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Date Needed:</label>
                        <input
                            type="date"
                            name="dateNeeded"
                            value={formData.dateNeeded}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Phone Number:</label>
                        <input
                            type="text"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Location:</label>
                        <input type="text" name="location" value={formData.location} onChange={handleInputChange} required />
                    </div>

                    <button type="submit" className="submit-button">
                        Submit
                    </button>
                </form>
            )}
        </div>
    );
}


export default AppointmentPage;
