# Frontend Mentor - Newsletter sign-up form with success message solution

## First page

### Desktop version

![Desktop Main page](./design/own%20design/main.jpeg)

### Mobile version

![Mobile Main page](./design/own%20design/mobile-main.jpeg)

## Error msg

#### Empty field

![Empty field](./design/own%20design/empty-field.jpeg)

#### @ Missing symbol

![@ Missing symbol](./design/own%20design/missing-field.jpeg)

#### Invalid Email

![Invalid Email](./design/own%20design/invalid-email.jpeg)

## Success message and 2nd Page

### Desktop message

![Desktop Succes Message](./design/own%20design/desktop-thanks-msg.jpeg)

### Mobile message

![Mobile Succes Message](./design/own%20design/mobile-thanks-msg.jpeg)

## Project Functionality

- **Creating DOM Elements**: I created DOM elements to manipulate the HTML document dynamically.

- **Email Validation Regex**: I developed a regular expression (regex) to test the validity of email addresses.

- **Email Validation Function**: I created a function that validates the email input by checking:
  - If the input is empty.
  - If the "@" symbol is included in the email.
  - If the email matches the regex pattern.

- **Error Handling Function**: I implemented a function for handling errors that occur during the email validation process.

- **Error Display Functions**: I created two functions, `setError` and `clearError`, which:
  - **setError** : This function adds error styles and displays the error message according to the validation result.
  - **clearError**: This function reverts the input field and error message to their initial state.
  
- **Event Listeners**: Finally, I added event listeners to trigger the functions and handle user interactions such as form submission or input changes.
