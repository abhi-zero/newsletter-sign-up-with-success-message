// HTML Element references in the DOM
const mainSection = document.querySelector("#main-section");  // Main section where the form is located
const email = document.querySelector("#email");  // Input field for the email address
const errorMsg = document.querySelector("#error-msg");  // Error message element
const subBtn = document.querySelector("#subscribe-btn");  // Submit button for the form
const dismissBtn = document.querySelector("#dismiss-btn");  // Dismiss button to hide the success message
const thanksMsg = document.querySelector(".thanks-msg-container");  // Container for the thank you message
const userId = document.querySelector("#user");  // Element to display the entered email after successful submission

// Regular expression for validating email format
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Function to validate the email input
function validateEmail() {
  // Check if the email field is empty
  if (!email.value) {
    throw new Error("EMPTY_EMAIL");  // Throw an error if the email is empty
  }

  // Check if the email contains the "@" symbol
  if (!email.value.includes("@")) {
    throw new Error("MISSING_AT_SYMBOL");  // Throw an error if "@" symbol is missing
  }

  // Check if the email matches the regex format
  if (!emailRegex.test(email.value)) {
    throw new Error("INVALID_EMAIL_FORMAT");  // Throw an error if email format is invalid
  }
}

// Function to handle validation errors and show appropriate messages
function validateError() {
  try {
    validateEmail(email);  // Validate the email
    thanksMsg.style.display = "block";  // Show the thank you message
    mainSection.style.display = "none";  // Hide the form section
    document.body.style.backgroundColor = "hsl(234, 29%, 20%)";  // Change background color to blue
    userId.innerHTML = `${email.value}`;  // Display the email in the userId element
  } catch (error) {
    // Switch statement to handle different error messages
    switch (error.message) {
      case "EMPTY_EMAIL":
        setError("Empty Field");  // Call setError to display message for empty email field
        break;

      case "MISSING_AT_SYMBOL":
        setError("@ Symbol missing");  // Call setError for missing "@" symbol
        break;

      case "INVALID_EMAIL_FORMAT":
        setError("Invalid Email");  // Call setError for invalid email format
        break;

      default:
        setError("Unknown Error Occurred");  // Call setError for any unknown errors
        break;
    }
  }
}

// Function to display error messages and apply error styling to the email field
function setError(message) {
    email.classList.add("error-style");  // Add error styling to the email input
    errorMsg.textContent = `${message}`;  // Display the error message
}

// Function to clear error messages and reset the email input styling
function clearError() {
    email.classList.remove("error-style");  // Remove error styling from the email input
    errorMsg.textContent = "";  // Clear the error message text
}

// Event listener for the submit button to trigger email validation
subBtn.addEventListener("click", validateError);

// Event listener for the dismiss button to reset the form and hide the thank you message
dismissBtn.addEventListener("click", ()=>{
    thanksMsg.style.display = "none";  // Hide the thank you message
    mainSection.style.display = "grid";  // Show the form section again
    email.value = "";  // Clear the email input field
    clearError();  // Clear any error messages
    document.body.style.backgroundColor = "white";
});
