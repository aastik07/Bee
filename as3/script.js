const form = document.getElementById("feedbackForm");
const output = document.getElementById("output");
const sessionUser = document.getElementById("sessionUser");

displayData();

const currentUser = sessionStorage.getItem("studentName");

if(currentUser){
    sessionUser.innerHTML = "Current Session User: " + currentUser;
}

form.addEventListener("submit", function(e){

    e.preventDefault();

    clearErrors();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let course = document.getElementById("course").value;
    let feedback = document.getElementById("feedback").value.trim();

    let valid = true;

    if(name === ""){
        document.getElementById("nameError").innerHTML = "Student Name is required";
        valid = false;
    }

    if(email === ""){
        document.getElementById("emailError").innerHTML = "Email is required";
        valid = false;
    }
    else if(!email.includes("@") || !email.includes(".")){
        document.getElementById("emailError").innerHTML = "Invalid Email";
        valid = false;
    }

    if(course === ""){
        document.getElementById("courseError").innerHTML = "Select Course";
        valid = false;
    }

    if(feedback === ""){
        document.getElementById("feedbackError").innerHTML = "Feedback is required";
        valid = false;
    }

    if(valid){

        const data = {
            name,
            email,
            course,
            feedback
        };

        localStorage.setItem("feedbackData", JSON.stringify(data));

        sessionStorage.setItem("studentName", name);

        sessionUser.innerHTML = "Current Session User: " + name;

        displayData();

        form.reset();
    }

});

function displayData(){

    let stored = localStorage.getItem("feedbackData");

    if(stored){

        let data = JSON.parse(stored);

        output.innerHTML = `
        <h3>Stored Feedback</h3>

        <p><b>Name:</b> ${data.name}</p>

        <p><b>Email:</b> ${data.email}</p>

        <p><b>Course:</b> ${data.course}</p>

        <p><b>Feedback:</b> ${data.feedback}</p>
        `;

    }
    else{

        output.innerHTML = "<h3>No feedback stored.</h3>";

    }

}

document.getElementById("deleteBtn").addEventListener("click", function(){

    localStorage.removeItem("feedbackData");

    sessionStorage.removeItem("studentName");

    sessionUser.innerHTML = "";

    output.innerHTML = "<h3>No feedback stored.</h3>";

});

function clearErrors(){

    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("courseError").innerHTML = "";
    document.getElementById("feedbackError").innerHTML = "";

}

document.getElementById("name").addEventListener("input", function(){
    document.getElementById("nameError").innerHTML = "";
});

document.getElementById("email").addEventListener("input", function(){
    document.getElementById("emailError").innerHTML = "";
});

document.getElementById("course").addEventListener("change", function(){
    document.getElementById("courseError").innerHTML = "";
});

document.getElementById("feedback").addEventListener("input", function(){
    document.getElementById("feedbackError").innerHTML = "";
});