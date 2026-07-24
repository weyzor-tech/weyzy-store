// Get elements
 localStorage.setItem('currentuser',JSON.stringify({}));
const fileInput = document.getElementById("file");

const email_input_log = document.getElementById("email_log");
const password_input_log = document.getElementById("password_log");

const nameinputreg = document.getElementById("name_input_reg");
const lastnameinputreg = document.getElementById("lastname_input_reg");
const emailinputreg = document.getElementById("email_input_reg");
const passwordinputreg = document.getElementById("password_input_reg");

const akk_chunes = document.getElementById("chunes");
const akk_unes = document.getElementById("unes");

const login = document.getElementById("login");
const register_form = document.getElementById("register_form");

// Toggle forms
akk_chunes.style.textDecoration="underline";
akk_unes.style.textDecoration="underline";
akk_chunes.addEventListener("click", () => {
    register_form.style.display = "flex";
    login.style.display = "none";
});

akk_unes.addEventListener("click", () => {
    login.style.display = "flex";
    register_form.style.display = "none";
});

// Load users
let all_users = JSON.parse(localStorage.getItem('allusers')) || [];

// User class
class User {
    constructor(firstname, lastname, email, password, img) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.img = img;
    }
}

// Registration function
function Registration() {
    const firstname = nameinputreg.value.trim();
    const lastname = lastnameinputreg.value.trim();
    const email = emailinputreg.value.trim();
    const password = passwordinputreg.value.trim();

    // Validation
    if (!firstname) return animateerror(nameinputreg);
    if (!lastname) return animateerror(lastnameinputreg);
    if (!email) return animateerror(emailinputreg);
    if (!password) return animateerror(passwordinputreg);

    // Check duplicate email
    const exists = all_users.find(user => user.email === email);
    if (exists) {
        alert("Email already registered!");
        return;
    }

    // Check image
    const file = fileInput.files[0];
    if (!file) {
        alert("Please select an image");
        return;
    }

    const reader = new FileReader();

    reader.onload = function() {
        const img = reader.result;

        const newUser = new User(firstname, lastname, email, password, img);

        all_users.push(newUser);
        localStorage.setItem('allusers', JSON.stringify(all_users));

        // Reset form
        nameinputreg.value = "";
        lastnameinputreg.value = "";
        emailinputreg.value = "";
        passwordinputreg.value = "";
        fileInput.value = "";

        // Switch to login
        register_form.style.display = "none";
        login.style.display = "flex";
    };

    reader.readAsDataURL(file);
}

// Register submit
register_form.addEventListener("submit", (e) => {
    e.preventDefault();
    Registration();
});

// Login
login.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = email_input_log.value.trim();
    const password = password_input_log.value.trim();

    const user = all_users.find(
        u => u.email === email && u.password === password
    );

    if (!user) {
        alert("User not found. Please register.");
        return;
    }

    localStorage.setItem("currentuser", JSON.stringify(user));
    window.location.href = "./profile.html";
});