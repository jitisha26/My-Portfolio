// read more - read less
const parentContainer = document.querySelector('.content');
parentContainer.addEventListener('click', event=>{
    const current =event.target;
    const isReadmorebtn = current.className.includes('read-more-btn');
    if(!isReadmorebtn) return;
    const currentText = event.target.parentNode.querySelector('.read-more-content');
    currentText.classList.toggle('read-more-content--show');
    current.textContent = current.textContent.includes('Read More')? "Read Less" : "Read More";
})


const parentContainer1 = document.querySelector('.skills-tools');
parentContainer1.addEventListener('click', event=>{
    const current =event.target;
    const isReadmorebtn = current.className.includes('read-more-btn');
    if(!isReadmorebtn) return;
    const currentText = event.target.parentNode.querySelector('.read-more-content');
    currentText.classList.toggle('read-more-content--show');
    current.textContent = current.textContent.includes('Read More')? "Read Less" : "Read More";
})
 

// contact
const fname = document.getElementById("full-name");
const email = document.getElementById("email-add");
const mobNum = document.getElementById("mobile-number");
const subject = document.getElementById("subject");
const message = document.getElementById("txt-msg");
const form = document.querySelector("form");


function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

function isValidNumber(mobNum){
    let num = parseInt(mobNum);
    return num.toString().length;
}

function checkValidInput(arr){
    arr.forEach(element => {
        const errorMsg = element.nextElementSibling;
        if(element.value.trim()===""){
            
            errorMsg.style.display = "block";
            element.style.border = "2px solid red";
        }
        else{
            errorMsg.style.display = "none";
            element.style.border = "";
        }

        // check for email
        if (element.id === "email-add" && !isValidEmail(element.value.trim())) {
            errorMsg.style.display = "block";
            errorMsg.innerText = "Enter a valid email address"; // Show error message
            element.style.border = "2px solid red";
        }

        // check for mobile number
        if(element.id === "mobile-number" && isValidNumber(element.value.trim())!=10){
            errorMsg.style.display = "block";
            errorMsg.innerText = "Enter a valid phone number"; // Show error message
            element.style.border = "2px solid red";
        }
    });
}

form.addEventListener('submit', (evt)=>{
    evt.preventDefault();
    checkValidInput([fname, email, mobNum, subject, message]);
});


const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });