# PTAnywhere Web App

This is a simple web app built with HTML, JavaScript, and Python to provide a customizable popper trainer utilizing randomized timer lengths.

# BE SAFE AND KNOW YOUR LIMITS

## Prerequisites

- Python 3.x
- Flask (Python web framework)
- Web browser

## Getting Started

1. **Clone the Repository:**
2. **Navigate to the Project Directory:**
3. **Install Flask:**
    - If you don't have Flask installed, install it using: 
    - > pip install flask
4. **Run the Application:**
    - Run the Flask app: 
    - > python app.py
5. **Access the App:**
    - Open your web browser and go to: http://localhost:5000

## Usage

1. Set the minimum and maximum lengths for each timer.
2. Press the "FUCK ME UP" button to begin the timer sequence.
3. The background color changes based on the active timer.
4. Press the "STOP THE MADNESS" button to stop the timers.
5. Stopping the program will display the total number of hits completed

## Security Considerations

### none of this has been done
- Input validation and sanitization have been implemented to prevent injection attacks and cross-site scripting vulnerabilities.
- Server-side validation is used for critical user inputs and database queries.
- DOMPurify is used for client-side input sanitization to prevent XSS attacks.

## Contributing
Notification sound from freesound.org https://freesound.org/people/suyashjemar/sounds/618608/

Contributions are welcome! Feel free to fork this repository, make changes, and submit pull requests.
