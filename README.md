Acceptance Test Case for Sign-Up:
• Objective: Verify that a user can successfully sign up by providing valid information and adhering to the specified validation rules.
• Preconditions:
o Ensure the application is accessible and the sign-up page is displayed.
• Test Steps: a. Input Valid Data:
o Enter a valid First Name with at least 4 characters.
o Enter a valid Last Name with at least 4 characters.
o Enter a 10-digit valid phone number.
o Enter a valid address with at least 4 characters.
o Enter a 5-digit valid Zip Code.
o Enter a valid age greater than 5.
o Select a gender.
o Enter a valid email address.
o Enter a valid password containing at least one numeric digit, one capital letter, and is at least 6 characters long.
o Select a valid Blood Group.
o Enter a valid Last Donated Date.
o Enter a valid medical history with at least 3 characters.
• b. Submit the Form:
o Click on the "Sign Up" button.
• c. Validation and Confirmation:
o Verify that the user is successfully signed up if all fields are valid.
o Check for successful registration message and redirection to the user login page.
• Expected Results:
o The user should be able to submit the sign-up form successfully without encountering any validation errors.
o Upon successful sign-up, the user should receive confirmation.
• Postconditions:
o Ensure the user data is correctly stored in the database.
o Verify that the user can log in with the newly created credentials.
• Alternate Scenario:
o If any field is not filled correctly or violates the validation rules, an alert should be displayed, stating: "Please fill all the fields correctly and try again."
 
 
 
 
Acceptance Test Case for User Login:
• Objective: Verify that a signed-up user or a user with an existing account can successfully log in. Upon successful login, the user should be redirected to the user dashboard. If the provided username or password is incorrect, an alert should be displayed with the message "Incorrect Email or Password."
• Preconditions:
o Ensure the application is accessible.
o At least one user account should be signed up or existing in the system.
• Test Steps: a. Navigate to Login Page:
o Open the application.
o Navigate to the login page.
• b. Provide Login Credentials:
o Enter a valid email address or username (associated with a signed-up account).
o Enter a valid password for the corresponding account.
• c. Submit Login Form:
o Click on the "Login" button.
• d. Validation and Confirmation:
▪ If the login is successful:
▪ Verify that the user is redirected to the user dashboard.
▪ If the login fails (incorrect username or password):
▪ Verify that an alert is displayed with the message "Incorrect Email or Password."
• Expected Results:
▪ Successful Login:
▪ The user should be redirected to the user dashboard.
▪ Failed Login:
▪ An alert should be displayed with the message "Incorrect Email or Password."
▪ The user should remain on the login page.
• Postconditions:
o Ensure the user's login status is correctly reflected in the system.
o Verify that the user has appropriate access to the dashboard upon successful login.
 
 
 
 
 
 
Acceptance Test Case for Admin Login:
• Objective: Verify that the admin, using the predefined username "admin" and password "admin," can successfully log in. Upon successful login, the admin should be redirected to the admin dashboard. If the provided username or password is incorrect, an alert should be displayed with the message "Incorrect Email or Password."
• Preconditions:
o Ensure the application is accessible.
o The system has an admin account with the username "admin" and password "admin."
• Test Steps: a. Navigate to Admin Login Page:
o Open the application.
o Navigate to the admin login page.
• b. Provide Admin Login Credentials:
o Enter the username "admin."
o Enter the password "admin."
• c. Submit Admin Login Form:
o Click on the "Login" button.
• d. Validation and Confirmation:
▪ If the admin login is successful:
▪ Verify that the page is redirected to the Admin Dashboard.
▪ Confirm that the Admin Dashboard is displayed with relevant information.
▪ If the admin login fails (incorrect username or password):
▪ Verify that an alert is displayed with the message "Incorrect Email or Password."
▪ Confirm that the admin is not redirected, and the login page remains accessible.
• Postconditions:
o Ensure the application state is as expected after a successful or unsuccessful admin login.
 
 
 
 
 
 
 
 
 
Acceptance Test Case for Booking Appointment:
• Objective:
• Verify that a user can successfully book an appointment by filling out the donor or recipient form in the user dashboard. The form should include client-side validation for each field. Upon successful submission, an alert with the message "Registration Successful" should be displayed, and the user should be redirected to the user dashboard.
• Preconditions:
• Ensure the application is accessible.
• The user is logged in.
• Navigate to the user dashboard.
• Test Steps:
• Select Donor Role:
o Click on the "Book Appointment" button in the user dashboard.
o Choose the role "Donor."
• Complete Donor Form:
▪ Fill in the following details in the donor form:
▪ Name (at least 4 characters long)
▪ Age (greater than 16)
▪ Blood Type (valid selection)
▪ Date Needed
▪ Phone Number (10-digit numeric value)
▪ Email
▪ Previous Medical Injuries
• Submit Donor Form:
o Click on the "Submit" button.
• Validation and Confirmation (Donor Form):
▪ If the form submission is successful:
▪ Verify that an alert is displayed with the message "Registration Successful."
▪ Confirm that the user is redirected to the user dashboard.
▪ If there are validation errors or issues with the form submission:
▪ Verify that appropriate validation messages are displayed for invalid fields.
▪ Confirm that the user remains on the donor form page.
• Select Recipient Role:
o Click on the "Book Appointment" button in the user dashboard.
o Choose the role "Recipient."
• Complete Recipient Form:
▪ Fill in the following details in the recipient form:
▪ Name (at least 4 characters long)
▪ Blood Type (valid selection)
▪ Blood Amount
▪ Date Needed
▪ Phone Number (10-digit numeric value)
▪ Email
▪ Location
• Submit Recipient Form:
o Click on the "Submit" button.
• Validation and Confirmation (Recipient Form):
▪ If the form submission is successful:
▪ Verify that an alert is displayed with the message "Registration Successful."
▪ Confirm that the user is redirected to the user dashboard.
▪ If there are validation errors or issues with the form submission:
▪ Verify that appropriate validation messages are displayed for invalid fields.
▪ Confirm that the user remains on the recipient form page.
• Postconditions:
• Confirm that the user dashboard is accessible after a successful submission.
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Acceptance Test Case for Upcoming Appointments and Donation History:
• Objective:
• Verify that a user can access their upcoming appointments and donation history from the user dashboard. Additionally, confirm that clicking the browser back button redirects the user to the user dashboard.
• Preconditions:
• Ensure the application is accessible.
• The user is logged in.
• Navigate to the user dashboard.
• Test Steps:
• Click on "Upcoming Appointments" Button:
o Click on the "Upcoming Appointments" button in the user dashboard.
• View Upcoming Appointments:
o Confirm that the user is redirected to a page displaying their upcoming appointments.
o Verify that the displayed information includes appointment details such as role, blood type, email, age, phone, date.
• Click on Browser Back Button:
o Click on the browser's back button.
• Verify Redirection to User Dashboard:
o Confirm that the user is redirected to the user dashboard.
• Click on "Donation History" Button:
o Click on the "Donation History" button in the user dashboard.
• View Donation History:
o Confirm that the user is redirected to a page displaying the donation history.
o Verify that the displayed information includes donation details such as name, role, blood type, email, age, phone, date.
• Click on Browser Back Button:
o Click on the browser's back button.
• Verify Redirection to User Dashboard:
o Confirm that the user is redirected to the user dashboard.
• Postconditions:
• Ensure the application state is as expected after navigating through the upcoming appointments and donation history pages.
• Confirm that clicking the browser back button from either page redirects the user to the user dashboard.
 
 
Acceptance Test Case for Blood Availability:
• Objective:
• Verify that a user can check blood availability from the user dashboard, and the system provides a response based on the entered blood type and quantity required. Additionally, confirm that clicking the browser back button redirects the user to the user dashboard.
• Preconditions:
• Ensure the application is accessible.
• The user is logged in.
• Navigate to the user dashboard.
• Test Steps:
• Click on "Blood Availability" Button:
o Click on the "Blood Availability" button in the user dashboard.
• Enter Blood Type and Quantity:
o Input a valid blood type (e.g., A+) in the designated field.
o Input a valid quantity (e.g., 5) in the quantity field.
• Click on Submit Button:
o Click on the "Submit" button to check blood availability.
• Verify Response:
o If the blood type is available in the required quantity, confirm that the system responds with: "This blood type is available."
o If the blood type is not available in the required quantity, confirm that the system responds with: "This blood type is not available."
• Click on Browser Back Button:
o Click on the browser's back button.
• Verify Redirection to User Dashboard:
o Confirm that the user is redirected to the user dashboard.
• Postconditions:
• Ensure the application state is as expected after checking blood availability.
• Confirm that clicking the browser back button redirects the user to the user dashboard.
 
 
 
 
 
 
 
 
 
Acceptance Test Case for Admin New Appointments and Past  Appointments View:
• Objective:
• Verify that the admin can view both upcoming and past appointments, and the system provides the relevant information. Additionally, confirm that clicking the browser back button redirects the admin to the admin dashboard.
• Preconditions:
• Ensure the application is accessible.
• The admin is logged in.
• Navigate to the admin dashboard.
• Test Steps:
• Click on "New Appointments" Button:
o Click on the "New Appointments" button in the admin dashboard.
• Verify Display of Upcoming Appointments:
o Confirm that the admin can see a list of upcoming appointments.
o Check that each appointment displays the role, email, age, phone, blood type, and date.
• Click on Browser Back Button:
o Click on the browser's back button.
• Verify Redirection to Admin Dashboard:
o Confirm that the admin is redirected to the admin dashboard.
• Click on "Past Appointments" Button:
o Click on the "Past Appointments" button in the admin dashboard.
• Verify Display of Past Appointments:
o Confirm that the admin can see a list of past appointments.
o Check that each appointment displays the role, email, age, phone, blood type, and date.
• Click on Browser Back Button:
o Click on the browser's back button.
• Verify Redirection to Admin Dashboard:
o Confirm that the admin is redirected to the admin dashboard.
• Postconditions:
• Ensure the application state is as expected after viewing upcoming and past appointments.
• Confirm that clicking the browser back button redirects the admin to the admin dashboard.
 
 
 
Acceptance Test Case for Admin View Records(Recipient, Donor, Blood Bank data):
• Objective:
Verify that the admin can view recipient records, donor records, and blood bank data. Confirm that the system provides the relevant information for each category. Additionally, check that clicking the browser back button redirects the admin to the admin dashboard.
Preconditions:
• Ensure the application is accessible.
• The admin is logged in.
• Navigate to the admin dashboard.
Test Steps:
• Click on "Recipient Records" Button:
• Click on the "Recipient Records" button in the admin dashboard.
• Verify Display of Recipient Records:
• Confirm that the admin can see a list of recipient records.
• Check that each record displays the name, role, email, age, phone, blood type, and date.
• Click on Browser Back Button:
• Click on the browser's back button.
• Verify Redirection to Admin Dashboard:
• Confirm that the admin is redirected to the admin dashboard.
• Click on "Donor Records" Button:
• Click on the "Donor Records" button in the admin dashboard.
• Verify Display of Donor Records:
• Confirm that the admin can see a list of donor records.
• Check that each record displays the name, role, email, age, phone, blood type, and date.
• Click on Browser Back Button:
• Click on the browser's back button.
• Verify Redirection to Admin Dashboard:
• Confirm that the admin is redirected to the admin dashboard.
• Click on "Blood Bank Data" Button:
• Click on the "Blood Bank Data" button in the admin dashboard.
• Verify Display of Blood Bank Data:
• Confirm that the admin can see the current blood type and quantity available in the blood bank.
• Click on Browser Back Button:
• Click on the browser's back button.
• Verify Redirection to Admin Dashboard:
• Confirm that the admin is redirected to the admin dashboard.
Postconditions:
• Ensure the application state is as expected after viewing recipient records, donor records, and blood bank data.
• Confirm that clicking the browser back button redirects the admin to the admin dashboard in all cases.
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Acceptance Test Case for Footer Links:
• Objective:
• Verify that the footer links for "About," "Contact," and "Directions" function correctly. Confirm that clicking on each link opens the corresponding page or map. Additionally, check that the browser back button works as expected.
• Preconditions:
• Ensure the application is accessible.
• Navigate to any page containing the footer.
• Test Steps:
• Click on "About" Link:
o Click on the "About" link in the footer.
• Verify Opening of "About" Page:
o Confirm that a new page opens containing information about the blood bank.
o Check for relevant details and content.
• Click on Browser Back Button:
o Click on the browser's back button.
• Verify Return to Previous Page:
o Confirm that the user is returned to the previous page.
• Click on "Contact" Link:
o Click on the "Contact" link in the footer.
• Verify Opening of "Contact" Page:
o Confirm that a new page opens containing the blood bank's address and contact details.
• Click on Browser Back Button:
o Click on the browser's back button.
• Verify Return to Previous Page:
o Confirm that the user is returned to the previous page.
• Click on "Directions" Link:
o Click on the "Directions" link in the footer.
• Verify Opening of Map:
o Confirm that a new page or map opens, displaying the blood bank's location.
• Click on Browser Back Button:
o Click on the browser's back button.
• Verify Return to Previous Page:
o Confirm that the user is returned to the previous page.
• Postconditions:
• Ensure the application state is as expected after testing the footer links.
• Confirm that clicking the browser back button returns the user to the previous page in all cases.
