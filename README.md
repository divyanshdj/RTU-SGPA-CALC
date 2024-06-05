# RTU SGPA Calculator

## About
The RTU SGPA Calculator is a web application developed using React, Vite, Tailwind CSS, and JavaScript. It provides a user-friendly interface for students to input their semester grades and credits, automatically calculating the SGPA based on RTU's grading system. The tool supports all semesters and subjects, making it an essential utility for RTU students.

## Features
- **User-Friendly Interface**: Simple and intuitive design for easy input of grades and credits.
- **Automatic Calculation**: Computes the SGPA based on RTU's grading system.
- **Support for All Semesters and Subjects**: Versatile tool accommodating all semesters and subjects within the RTU curriculum.
- **Responsive Design**: Ensures usability across various devices and screen sizes.
- **Built with Modern Technologies**: Utilizes React, Vite, and Tailwind CSS for a smooth and efficient user experience.

## Prerequisites
- Node.js (version 14 or higher)
- npm (version 6 or higher)

## Project Structure
- `src/`
  - `components/`
    - `GradeInput.js`: Component for inputting grades.
    - `SGPACalculator.js`: Main calculator component.
  - `App.js`: Main app component.
  - `index.js`: Entry point of the application.
  - `styles/`
    - `tailwind.css`: Custom Tailwind CSS styles.
- `public/`
  - `index.html`: The main HTML file.
- `package.json`: The npm package configuration file.
- `vite.config.js`: Configuration file for Vite.

## Steps to Run
1. **Clone the Repository:**
    ```bash
    git clone <repository-url>
    cd rtu-sgpa-calculator
    ```
2. **Install the Dependencies:**
    ```bash
    npm install
    ```
3. **Run the Application:**
    ```bash
    npm run dev
    ```
4. **Open the Application:**
    - Open your web browser and go to `http://localhost:3000` to view the calculator.

## Usage
- Enter the grades and credits for each subject in the provided fields.
- The SGPA will be calculated automatically based on the entered values.
- Use the "Add Subject" button to include more subjects as needed.

## Expected Output
- A web page where users can input their semester grades and credits.
- Automatic display of the calculated SGPA based on the input data.

## Features in Detail
### User-Friendly Interface
- **Grade Input Fields**: Allows students to enter grades and credits for each subject.
- **Real-Time Calculation**: SGPA is computed and displayed in real-time as inputs are entered.

### Responsive Design
- Tailwind CSS ensures the application is responsive and looks great on all devices.

### Built with Modern Technologies
- **React**: For building the user interface.
- **Vite**: For a fast and efficient development environment.
- **Tailwind CSS**: For modern and responsive styling.

## Troubleshooting
- **Development server not starting**: Ensure that you have installed all dependencies using `npm install`.
- **Styles not applied**: Verify that Tailwind CSS is correctly configured in your `tailwind.config.js` and imported in your `index.js` file.

## Contributions
Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License
This project is licensed under the MIT License.

## Contact
For any questions or feedback, please contact [Your Name] at [your-email@example.com].

