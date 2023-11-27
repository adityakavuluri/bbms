// ContactUs.js

import React from 'react';

const ContactUs = () => {
    return (
        <div style={styles.contactUsFrame}>
            <div style={styles.contactUsContainer}>
                <h1 id="heading">Contact Us</h1>
                <p>
                    If you have any questions, concerns, or feedback, please feel free to reach out to us. We are here to assist you in any way we can.
                </p>
                <p id="contactinfo">
                    Contact Information:
                </p>
                <ul>
                    <li>Email: info@bloodbank.com</li>
                    <li>Phone: +1 123-456-7890</li>
                    <li>Address: 123 Blood Donation St, Cityville</li>
                </ul>
                {/* You can add a form for users to submit inquiries */}
            </div>
        </div>
    );
};

const styles = {
    contactUsFrame: {
        border: '2px solid #ccc',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    contactUsContainer: {
        // Add styles for the content container
    },
};

export default ContactUs;
