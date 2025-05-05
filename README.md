#  Volunteer Hub - CPIT405 Final Project

##  Project Description

**Volunteer Hub** is a web application that connects volunteers with meaningful opportunities. It enables users to explore, filter, and apply for volunteering tasks through a modern, user-friendly interface.

This platform aims to make it easier for volunteers and organizations to connect, using features like smart filters, Google login, and email notifications.

##  Key Features

-  **Explore Opportunities**: Search and filter by title, type, skill, and payment.
-  **Interactive Map**: Displays each opportunity’s location using Leaflet.js.
-  **Application Form**: Modal with prefilled user info and Firebase integration.
-  **Google & Manual Login**: Authentication through Firebase.
-  **Email Confirmation**: Sent automatically to volunteers using EmailJS.
-  **Contact Form**: Integrated with a PHP backend for inquiries.
-  **Modern UI**: Responsive design using React components.
-  **Deployment**: Live using GitHub Pages.


##  Technologies Used

| Technology        | Description                                           |
|-------------------|-------------------------------------------------------|
| React             | Frontend component-based development                  |
| Firebase          | Firestore database and authentication                 |
| Leaflet.js        | Display interactive maps for opportunity locations    |
| EmailJS           | Send confirmation emails from frontend                |
| PHP               | Handle and store messages from the contact form       |
| CSS / HTML        | Layout and styling                                    |
| JavaScript        | Form logic and dynamic rendering                      |

---

##  File Structure Highlights

| File                                | Purpose                                                |
|-------------------------------------|--------------------------------------------------------|
| `Explore.jsx`                       | Main page to display and filter volunteer roles        |
| `Login.jsx`                         | Manual and Google-based login                          |
| `Signup.jsx`                        | Manual signup and save to Firebase                     |
| `VolunteerFormModal.jsx`           | Modal with form to apply to opportunities              |
| `sendEmail.js`                      | Sends confirmation email using EmailJS                 |
| `submit_contact.php`               | Saves contact form messages to a text file             |

---

## 📚 Course Requirements Coverage

| Requirement                          | Implemented In                                         |
|--------------------------------------|--------------------------------------------------------|
|  HTML5                             | All React components use valid semantic HTML           |
| External CSS                      | `App.css` + component-level styles                     |
|  JavaScript Validation             | `Signup.jsx`, `Login.jsx`, and form input checks       |
|  JSON Used in HTML                 | Fetched Firebase data rendered via JSX                 |
|  Reusable Components               | Navbar, Footer, Modals, Cards                          |
|  API using Fetch (AJAX)           | PHP backend, EmailJS, optional: LibreTranslate         |
|  Routing                           | `react-router-dom` for navigation                      |
|  Deployment                        | Project deployed on GitHub Pages                       |
|  Accessibility                     | Inputs, labels, alt text, clean tab order              |
|  README.md                         | ✔ This file                                            |

