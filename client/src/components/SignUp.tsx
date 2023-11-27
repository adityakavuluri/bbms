// SignUpForm.jsx
import '../assets/css/SignupForm.css'
import React, {ChangeEvent, FormEvent, useState} from 'react';
import Select,{ ActionMeta, SingleValue } from 'react-select';

const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

const SignUpForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        age: '',
        address: '',
        gender: 'male',
        email: '',
        country: '',
        phone: '',
        bloodType: 'A+',
        medicalHistory: '',
    });

    interface FormData {
        firstName: string;
        lastName: string;
        age: string;
        address: string;
        gender: string;
        email: string;
        country: string;
        phone: string;
        bloodType: string;
        medicalHistory: string;
    }

    const [countryCode, setCountryCode] = useState('+1');

    const handleCountryCodeChange = (
        selectedOption: SingleValue<{ label: string; value: string }>,
        actionMeta: ActionMeta<{ label: string; value: string }>
    ) => {
        if (selectedOption) {
            setCountryCode(selectedOption.value);
        }
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setFormData((prevData) => ({ ...prevData, phone: `${countryCode}${value}` }));
    };

    const countryCodes = [
        { label: '+1', value: '+1' },
        // Add more country codes as needed
    ];



    interface CountryOption {
        value: string;
        label: string;
    }

// Assuming your countries array has this structure:
    const countries: CountryOption[] = [
        { value: 'US', label: 'United States' },
        // Add more country options as needed
    ];

    function handleInputChange(event:ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) {

        const { name, value } = event.target;


        switch (name) {
            case 'firstName':
                setFormData((prevFormData) => ({...prevFormData, [name]: value}));
                if(value.length < 4 || value.length > 45) {
                    setFirstNameError("First Name must be at least 4 characters long!");
                }
                else {
                    setFirstNameError("");
                }
                break;
            case 'lastName':
                setFormData((prevFormData) => ({...prevFormData, [name]: value}));
                if(value.length < 4 || value.length > 45) {
                    setLastNameError("Last Name must be at least 4 characters long!");
                }
                else {
                    setLastNameError("");
                }
                break;
            case 'address':
//addressError
                setFormData((prevFormData) => ({...prevFormData, [name]: value}));
                if(value.length < 4 || value.length > 45) {
                    setAddressError("Address must be at least 4 characters long!");
                }
                else {
                    setAddressError("");
                }


                break;
            case 'phone':
//phoneError
                setFormData((prevFormData) => ({...prevFormData, [name]: value}));
                if (!/^\d+$/.test(value) || value.length !== 10) {
                    setPhoneError("Phone number must be a 10-digit numeric value.");
                } else {
                    setPhoneError("");
                }



                break;
            case 'email':
//emailError
                setFormData((prevFormData) => ({...prevFormData, [name]: value}));
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    setEmailError("Invalid email address");
                } else {
                    setEmailError("");
                }

                break;

            case 'age':
                setFormData((prevFormData) => ({...prevFormData, [name]: value}));
                if (!/^\d+$/.test(value)) {
                    setAgeError("Age must be a valid number");
                } else if (parseInt(value, 10) <= 5) {
                    setAgeError("Age must be greater than 5");
                } else {
                    setAgeError("");
                }
                break;

            case 'gender':
                setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
                if (!['male', 'female', 'other'].includes(value.toLowerCase())) {
                    setGenderError("Invalid gender selection");
                } else {
                    setGenderError("");
                }
                break;
            case 'medicalHistory':
                setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
                if(value.length < 4 || value.length > 45) {
                    setMedicalHistoryError("Medical History must be at least 3 characters long!");
                }
                else {
                    setMedicalHistoryError("");
                }
                break;
            case 'bloodType':
                setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
                if (!bloodTypes.includes(value)) {
                    setBloodTypeError("Invalid blood type selection");
                } else {
                    setBloodTypeError("");
                }
                break;

            default:
                break;
        }
    }

    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");

    const [addressError, setAddressError] = useState("");
    const [genderError, setGenderError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [ageError, setAgeError] = useState("");
    const [medicalHistoryError, setMedicalHistoryError] = useState("");
    const [bloodTypeError, setBloodTypeError] = useState("");


    const [emailError, setEmailError] = useState("");

    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newEmail = e.target.value;
        setEmail(newEmail);

        // Check the validity of the email and update the state
        const isValid = validateEmail(newEmail);
        setIsEmailValid(isValid);
    };

    const validateEmail = (email: string): boolean => {
        // Regular expression for basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Test if the provided email matches the regex pattern
        return emailRegex.test(email);
    };


// Your handleCountryChange function
//     const handleCountryCodeChange = (selectedOption: { label: string; value: string ) => {
//         setCountryCode(selectedOption.value);
//     };

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    //     // const { name, value } = e.target;
    //     // setFormData((prevData) => ({ ...prevData, [name]: value }));
    //     const { value } = e.target;
    //     setFormData((prevData) => ({ ...prevData, phone: `${countryCode}${value}` }));
    //
    // };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };


    async function handleSubmit(event:FormEvent) {
        event.preventDefault();
        console.log("Submit order");
        // Add logic for form submission (e.g., API call or further processing)
        console.log('Form Data:', formData);
        const isFormCorrect =  isValidForm(formData, firstNameError, lastNameError, addressError, phoneError, emailError,  genderError, ageError, medicalHistoryError, bloodTypeError);
        console.log(isFormCorrect);


    };

    function isValidForm(
        formData: FormData,
        firstNameError: string,
        lastNameError: string,
        addressError: string,
        phoneError: string,
        emailError: string,
        genderError: string,
        ageError: string,
        medicalHistoryError: string,
        bloodTypeError: string
    ): boolean {
        if (
            !formData.firstName ||
            formData.firstName.trim() === "" ||
            !formData.lastName ||
            formData.lastName.trim() === "" ||
            !formData.address ||
            formData.address.trim() === "" ||
            !formData.phone ||
            formData.phone.trim() === "" ||
            !formData.email ||
            formData.email.trim() === "" ||
            !formData.gender ||
            formData.gender.trim() === "" ||
            !formData.age ||
            formData.age.trim() === "" ||
            !formData.medicalHistory ||
            formData.medicalHistory.trim() === "" ||
            !formData.bloodType ||
            formData.bloodType.trim() === "" ||
            firstNameError !== "" ||
            lastNameError !== "" ||
            addressError !== "" ||
            phoneError !== "" ||
            emailError !== "" ||
            genderError !== "" ||
            ageError !== "" ||
            medicalHistoryError !== "" ||
            bloodTypeError !== ""
        ) {
            // There is an error in the form
            return false;
        }

        // All form fields are filled out and there are no validation errors
        return true;
    }



    return (
        <div id = 'signUp' className="signup-form-container" style={{ textAlign: 'center', padding:'3em' }}>

            <form  onSubmit={(event)=>handleSubmit(event)} method="post">
                <h2 style={{ padding:'18px',color: 'rgb(173, 15, 15)'}}>Sign Up</h2>
            {/*<label>*/}
            {/*    First Name:*/}
            {/*    <input type="text" className="signUpField" name="firstName" value={formData.firstName} onChange={handleChange} required />*/}
            {/*</label>*/}

            {/*<div>*/}
            {/*    <label htmlFor="name">First Name</label>*/}
            {/*    <input style={{ borderRadius: '8px' }}*/}
            {/*           type="text"*/}
            {/*           name="name"*/}
            {/*           id="fname"*/}
            {/*           value={formData.firstName}*/}
            {/*           onChange={handleInputChange}*/}
            {/*    />*/}
            {/*</div>*/}
            {/*<> {nameError && <div className="error"> {nameError}</div>}</>*/}

            <div style={{ padding: '0.5em' }}>
                <label htmlFor="firstName">First Name</label>
                <input  style={{borderRadius: '8px',marginLeft: '36px', width: '20%'}}
                        type="text"
                        size={20}
                        name="firstName"
                        id="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                />
            </div>
            <> {firstNameError && <div className="error"> {firstNameError}</div>}</>

            <div style={{ padding: '0.5em' }}>
                <label htmlFor="lastName">Last Name</label>
                <input  style={{borderRadius: '8px',marginLeft: '36px', width: '20%'}}
                       type="text"
                       name="lastName"
                       id="lastName"
                       value={formData.lastName}
                       onChange={handleInputChange}
                />
            </div>
            <> {lastNameError && <div className="error"> {lastNameError}</div>}</>


            <div style={{ padding: '0.5em' }}>
                <label htmlFor="phone">Phone</label>
                <input  style={{borderRadius: '8px',marginLeft: '69px', width: '20%'}}
                       type="text"
                       name="phone"
                       id="phone"
                       value={formData.phone}
                       onChange={handleInputChange}
                />
            </div>
            <> {phoneError && <div className="error"> {phoneError}</div>}</>

            <div style={{ padding: '0.5em' }}>
                <label htmlFor="address">Address</label>
                <textarea  style={{borderRadius: '8px',marginLeft: '64px', width: '20%'}}
                          name="address"
                          id="address"
                          value={formData.address}
                          onChange={handleInputChange}
                />
            </div>
            <> {addressError && <div className="error"> {addressError}</div>}</>


            {/*<label>*/}
            {/*    Last Name:*/}
            {/*    <input type="text" className="signUpField" name="lastName" value={formData.lastName} onChange={handleChange} required />*/}
            {/*</label>*/}

            <div style={{ padding: '0.5em' }}>
                <label htmlFor="age">Age</label>
                <input  style={{borderRadius: '8px',marginLeft: '96px', width: '20%'}}
                       type="text"
                       name="age"
                       id="age"
                       value={formData.age}
                       onChange={handleInputChange}
                />
            </div>
            <> {ageError && <div className="error"> {ageError}</div>}</>

            {/*<label>*/}
            {/*    Age:*/}
            {/*    <input type="number" className="signUpField" name="age" value={formData.age} onChange={handleChange} required />*/}
            {/*</label>*/}

            <div style={{ padding: '0.5em' }}>
                <label htmlFor="gender">Gender</label>
                <select
                    style={{borderRadius: '8px',marginLeft: '75px', width: '20%'}}
                    name="gender"
                    id="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                >

                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <> {genderError && <div className="error"> {genderError}</div>}</>



            {/*<label>*/}
            {/*    Gender:*/}
            {/*    <select name="gender" className="signUpField" value={formData.gender} onChange={handleChange}>*/}
            {/*        <option value="male">Male</option>*/}
            {/*        <option value="female">Female</option>*/}
            {/*        <option value="other">Other</option>*/}
            {/*    </select>*/}
            {/*</label>*/}

            {/*<label>*/}
            {/*    Email:*/}
            {/*    <input type="email" className="signUpField" name="email" value={formData.email} onChange={handleChange} required />*/}
            {/*</label>*/}

            <div style={{ padding: '0.5em' }}>
                <label htmlFor="email">Email</label>
                <input  style={{borderRadius: '8px',marginLeft: '90px', width: '20%'}}
                       type="text"
                       name="email"
                       id="email"
                       value={formData.email}
                       onChange={handleInputChange}
                />
            </div>
            <> {emailError && <div className="error"> {emailError}</div>}</>


            {/*<label>*/}
            {/*    Email:*/}
            {/*    <input*/}
            {/*        type="email"*/}
            {/*        name="email"*/}
            {/*        value={email}*/}
            {/*        onChange={handleEmailChange}*/}
            {/*        className={isEmailValid ? 'valid' : 'invalid'}*/}
            {/*    />*/}
            {/*</label>*/}
            {/*{!isEmailValid && <p className="error-message" style={{color: 'brown', fontStyle: 'italic'}}>Please enter a valid email address</p>}*/}

            <div style={{ padding: '0.5em' }}>
                <label htmlFor="bloodType">Blood Type:</label>
                <select
                    style={{borderRadius: '8px',marginLeft: '47px', width: '20%'}}
                    name="bloodType"
                    className="signUpField"
                    value={formData.bloodType}
                    onChange={handleInputChange}
                >
                    <option value="">Select</option>
                    {bloodTypes.map((type) => (
                        <option key={type} value={type}>
                            {type}
                        </option>
                    ))}
                </select>
            </div>
            <> {bloodTypeError && <div className="error"> {bloodTypeError}</div>}</>

            {/*<label>*/}
            {/*    Blood Type:*/}
            {/*    <select name="bloodType" className="signUpField" value={formData.bloodType} onChange={handleChange}>*/}
            {/*        {bloodTypes.map((type) => (*/}
            {/*            <option key={type} value={type}>*/}
            {/*                {type}*/}
            {/*            </option>*/}
            {/*        ))}*/}
            {/*    </select>*/}
            {/*</label>*/}

            {/*<label>*/}
            {/*    Medical History:*/}
            {/*    <textarea className="signUpField" name="medicalHistory" value={formData.medicalHistory}  />*/}
            {/*</label>*/}

            <div style={{ padding: '0.5em' }}>
                <label htmlFor="medicalHistory">Medical History</label>
                <textarea  style={{borderRadius: '8px',marginLeft: '14px', width: '20%'}}
                          name="medicalHistory"
                          id="medicalHistory"
                          value={formData.medicalHistory}
                          onChange={handleInputChange}
                />
            </div>
            <> {medicalHistoryError && <div className="error"> {medicalHistoryError}</div>}</>


            <button className="button" type="submit" style={{ width: 'fit-content', marginTop: '4px', marginLeft: '48%',borderRadius: '8px'}} onClick={(event) => handleSubmit(event)}>Sign Up</button>
        </form>
        </div>
    );
};

export default SignUpForm;
