function checkfunction() {
    let pwd = document.getElementById("password").value;

    let hasUpper = false;
    let hasLower = false;
    let hasNumber = false;
    let hasSymbol = false;

    // Regular expressions to check for letters, numbers, and symbols
    const upperletters = /[A-Z]/;  // Matches any upper case letter
    const lowerletters = /[a-z]/;
    const numbers = /[0-9]/;     // Matches any digit
    const symbols = /[!@#$%^&*(),.?":{}|<>]/;  // Matches any common symbol
    const space = /\s/;

    // Check for spaces first
    if (space.test(pwd)) {
        // If spaces are not allowed, show an alert and stop further execution
        // strengthIndicator.textContent = 'Password should not contain spaces';
        // strengthIndicator.style.color = 'red';
        // // Reset all icons
        // weakIcon.style.display = 'none';
        // mediumIcon.style.display = 'none';
        // strongIcon.style.display = 'none';
        window.alert("Password contain spaces!");
        return; // Stop further execution

    }

    let score=0;
    let len=pwd.length;
    if(len===0)
    {
        window.alert("Please Enter a Password");
        return;
    }
    if(len<8)
    {
        score=1;
    }
    else if(len>=8 && len <16)
    {
        score+=2;
    }
    else 
    {
        score+=3;
    }

  
    if (upperletters.test(pwd)) {
        hasUpper = true;
        document.getElementById("uppercase").classList.add("gact");
        score++;
    }
    else
    {
        document.getElementById("uppercase").classList.remove("gact");
    }

    if (lowerletters.test(pwd)) {
        hasLower = true;
        document.getElementById("lowercase").classList.add("gact");
        score++;
    }
    else
    {
        document.getElementById("lowercase").classList.remove("gact");
    }

    if (numbers.test(pwd)) {
        hasNumber = true;
        document.getElementById("numbers").classList.add("gact");
        score++;
    }
    else
    {
        document.getElementById("numbers").classList.remove("gact");
    }

    if (symbols.test(pwd)) {
        hasSymbol = true;
        document.getElementById("symbols").classList.add("gact");
        score++;
    }
    else
    {
        document.getElementById("symbols").classList.remove("gact");
    }

    // Containers for password strength
    let weakContainer = document.getElementById("weakContainer");
    let mediumContainer = document.getElementById("mediumContainer");
    let strongContainer = document.getElementById("strongContainer");

    // Reset all containers
    weakContainer.style.display = 'none';
    mediumContainer.style.display = 'none';
    strongContainer.style.display = 'none';


    if (score<= 2) {
        weakContainer.style.display = 'flex';
    } else if (score === 3 || score === 4) {
        mediumContainer.style.display = 'flex'; 
    } else if(score>=5){
        strongContainer.style.display = 'flex'; 
    }

}

// Add an event listener to the input field
document.getElementById("password").addEventListener("keydown", function(event) {
    // Check if the pressed key is Enter
    if (event.key === "Enter") {
        // Prevent the default action of Enter key (if necessary)
        event.preventDefault();
        
        // Trigger the button click function
        document.getElementById("checkbutton").click();
    }
});


const passwordInput = document.getElementById("password");
const togglePasswordButton = document.getElementById("togglePassword");
const eyeIcon = document.getElementById("eyeIcon");

togglePasswordButton.addEventListener("click", function () {
    // Toggle the type attribute of the password input
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash"); 
    } else {
        passwordInput.type = "password";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    }
});
