# Holidaze

## Description

Holidaze is a web application for a fintional company. This is a Demo project and deliverable for project exam no 4 

## Features


### All Users

* **Venue Discovery:** Easily view a comprehensive list of available Venues.
* **Venue Search:** Utilize a powerful search feature to find specific Venues based on criteria.
* **Detailed Venue Pages:** Access individual Venue pages by ID to view full details, including descriptions, amenities, and available dates.
* **Customer Registration:** Register an account as a customer using a valid `stud.noroff.no` email address and a secure password.
* **Venue Manager Registration:** Register an account as a Venue Manager using a valid `stud.noroff.no` email address and a secure password, gaining access to management functionalities.
* **Calendar Availability:** View an interactive calendar on each Venue page, clearly indicating available and booked dates.

### Customers

* **Secure Authentication:** Login and logout securely after registration.
* **Booking Creation:** Effortlessly create new bookings at any desired Venue.
* **Upcoming Bookings Overview:** View a personalized list of all their upcoming bookings.
* **Profile Management:** Update their avatar/profile picture to personalize their account (a default placeholder is provided).

### Venue Managers

* **Secure Authentication:** Login and logout securely after registration.
* **Venue Creation:** Create and list new Venues for booking.
* **Venue Management:** Edit and update details of Venues they own or manage.
* **Venue Deletion:** Delete Venues they own or manage from the platform.
* **Booking Overview:** View upcoming bookings made at the Venues they manage.
* **Profile Management:** Update their avatar/profile picture to personalize their account (a default placeholder is provided).

## Technologies Used

This project is built using modern web technologies to deliver a fast, responsive, and maintainable application:

* **Frontend Framework:** [React](https://react.dev/) (with JSX)
* **Routing:** [React Router DOM](https://reactrouter.com/en/main) for seamless client-side navigation.
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS styling and responsive design.
* **State Management:** [Zustand](https://zustand-bear.github.io/zustand/) for efficient and simple state management.
* **API Communication:** [Fetch API]  for interacting with the backend API.
* **Deployment:** [Netlify](https://www.netlify.com/) for continuous deployment and hosting.
* **Build Tool:** [Vite]) for fast development and optimized builds.

## Setup Instructions

Follow these steps to get a local copy of the project up and running on your machine.

### 1. Prerequisites

Before you begin, ensure you have the following installed:

* [Node.js](https://nodejs.org/en/download/) (LTS version recommended)
* [npm](https://www.npmjs.com/get-npm) 

### 2. Installation

1.  **Clone the repository:**
    ```bash
    git clone [Your Repository URL]
    cd [your-project-folder-name]
    ```

2.  **Install dependencies:**
    ```bash
    npm install
   

### 3. Environment Variables

This project requires API keys and potentially other configuration variables. You'll need to set these up in a `.env` file locally and on your Netlify deployment.

1.  **Create a `.env` file:**
    In the root of your project directory, create a file named `.env`.

2.  **Add your API key(s):**
    Add your API key(s) to this file. **Remember to use the correct prefix for your build tool:**
    * **Vite:** `VITE_YOUR_API_KEY_NAME=your_actual_api_key`
    * **Create React App (CRA):** `REACT_APP_YOUR_API_KEY_NAME=your_actual_api_key`
    * **Next.js:** `NEXT_PUBLIC_YOUR_API_KEY_NAME=your_actual_api_key`

    

3.  **Netlify Environment Variables:**
    For deployment, you must configure these same environment variables directly in your Netlify site settings.
    * Log in to your [Netlify dashboard](https://app.netlify.com/).
    * Navigate to your site **> Site settings > Build & deploy > Environment variables**.
    * Add each variable with the **exact same Key (name)** and its corresponding **Value** as in your `.env` file. Ensure the **Scope** is set to "Builds" or "All scopes".

### 4. Running the Project

To start the development server:

```bash
npm run dev
npm start
