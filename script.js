function checkfunction() {
    let pwd = document.getElementById("password").value;

    let hasUpper = false;
    let hasLower = false;
    let hasNumber = false;
    let hasSymbol = false;

    const upperletters = /[A-Z]/; 
    const lowerletters = /[a-z]/;
    const numbers = /[0-9]/;    
    const symbols = /[!@#$%^&*(),.?":{}|<>]/;  
    const space = /\s/;

    if (space.test(pwd)) {
        window.alert("Password contain spaces!");
        return; 
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

    let weakContainer = document.getElementById("weakContainer");
    let mediumContainer = document.getElementById("mediumContainer");
    let strongContainer = document.getElementById("strongContainer");

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

document.getElementById("password").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        document.getElementById("checkbutton").click();
    }
});


const passwordInput = document.getElementById("password");
const togglePasswordButton = document.getElementById("togglePassword");
const eyeIcon = document.getElementById("eyeIcon");

togglePasswordButton.addEventListener("click", function () {
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
