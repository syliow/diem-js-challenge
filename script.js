//Name

//Declare variable for Name and Birthday input field
var userName = document.getElementById("name");
var userNameOutput = document.getElementById("nameOutput");
var birthDate = document.getElementById("date");
var userAge = document.getElementById("ageOutput");
var userTheme = document.getElementById("themeOutput");


// Text displayed when user places cursor on Birthday field.
userName.addEventListener("focus", () => {
    userNameOutput.innerText = "Hello there! Whats your name?"
});

userName.addEventListener("blur", () => {
    userNameOutput.innerText = "Please enter name";
    var nameTextField = document.getElementById("name").value;

    if (nameTextField === '') {
        userNameOutput.innerText = "Please enter your name.";
    } else {
        userNameOutput.innerText = "Hi," + nameTextField;
    }
});

// Birthday

// Text displayed when user places cursor on Birthday field.
birthDate.addEventListener("focus", () => {
    userAge.innerText = "Lemme guess, your age is....";
});

// Text displayed when user places cursor outside of Birthday field
birthDate.addEventListener("blur", (birth_date) => {

    var birthday = document.getElementById("date").value;
    
    if (birthday === '') {
        userAge.innerText = "Would you mind entering your birthday?";
    } else {
        
        var dob_split = birth_date.target.value.split("-");
        var dateObj = new Date();
        var day = dateObj.getDate();
        var month = dateObj.getMonth() + 1; 
        var year = dateObj.getFullYear();
        var age;

        if (year > dob_split[0]){
            if (month < dob_split[1]){
                age= year - dob_split[0] - 1;
            } else if (month == dob_split[1]){
                if (day < dob_split[2]){
                age= year - dob_split[0] - 1;
                } else {
                  age= year - dob_split[0];
                }
            } else {
                age= year - dob_split[0];
              }
        
    }
        userAge.innerText = "Your age is " + age + "!";
    
    }
});


//Toggle Light / Dark Mode


//Toggle Dark Mode

dark.onclick = function () {
    var toggleOptions = document.querySelector('input[name="modeOptions"]:checked').value;

    document.getElementById("rightSection").classList.remove("bg-white", "text-dark");
    document.getElementById("rightSection").classList.add("bg-dark", "text-white");
    userTheme.innerText = "You choose Dark Mode!";
}

//Toggle Light Mode

light.onclick = function () {
    var toggleOptions = document.querySelector('input[name="modeOptions"]:checked').value;

    document.getElementById("rightSection").classList.remove("bg-dark", "text-white");
    document.getElementById("rightSection").classList.add("bg-white", "text-dark");
    userTheme.innerText = "You choose Light Mode!";
}

// Skills

//Declare variables for skill buttons
var htmlBtn = document.getElementById("html");
var cssBtn = document.getElementById("css");
var jsBtn = document.getElementById("javascript");
skillButton = document.getElementsByTagName('button');

let leftSection = htmlBtn.parentNode;
let rightArea = document.getElementById("rightArea");

//Initial state of checked status is false
let htmlChecked = false;
let cssChecked = false;
let jsChecked = false;

//HTML Button

htmlBtn.onclick = function () {

    if (htmlChecked == false) {
        rightArea.appendChild(htmlBtn);
        htmlChecked = true;

        //Add btn-danger class to HTML button class when hovered
        htmlBtn.onmouseover = function () {
            this.classList.remove("btn-success");
            this.classList.add("btn-danger");
        }
        htmlBtn.onmouseout = function () {
            this.classList.remove("btn-danger");
            this.classList.add("btn-success");
        }
    } else {
        //Return HTML button to left section of the page
        leftSection.appendChild(htmlBtn);
        htmlChecked = false;
    }

}
//CSS Button

cssBtn.onclick = function () {


    if (cssChecked == false) {
        rightArea.appendChild(cssBtn);
        cssChecked = true;

        //Add btn-danger class to CSS button class when hovered
        cssBtn.onmouseover = function () {
            this.classList.remove("btn-success");
            this.classList.add("btn-danger");
        }
        cssBtn.onmouseout = function () {
            this.classList.remove("btn-danger");
            this.classList.add("btn-success");
        }
    } else {
        //Return CSS button to left section of the page
        leftSection.appendChild(cssBtn);
        cssChecked = false;
    }
}

//Javascript Button

jsBtn.onclick = function () {

    if (jsChecked == false) {
        rightArea.appendChild(jsBtn);
        jsChecked = true;

        //Add btn-danger class to Javascript button class when hovered
        jsBtn.onmouseover = function () {
            this.classList.remove("btn-success");
            this.classList.add("btn-danger");
        }
        jsBtn.onmouseout = function () {
            this.classList.remove("btn-danger");
            this.classList.add("btn-success");
        }
    } else {
        //Return Javascript button to left section of the page
        leftSection.appendChild(jsBtn);
        jsChecked = false;
    }
}
