const formData = {
    email: "",
    message: "",
}

const form = document.querySelector(".feedback-form");
const email = document.querySelector(".feedback-form > label > input");
const message = document.querySelector(".feedback-form > label > textarea");
const button = form.lastChild;

form.addEventListener("input", () => {
    formData.email = email.value.trim();
    formData.message = message.value.trim();
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
})

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (email.value === "" || message.value === "") {
        alert("Fill please all fields");
    } else {
        console.log(formData);
        localStorage.removeItem("feedback-form-state");
        form.reset();
    }
}
)

const fillInfo = () => {
    const savedInfo = localStorage.getItem("feedback-form-state");
    if (savedInfo !== null) {
        const info = JSON.parse(savedInfo);
        email.value = info.email;
        message.value = info.message;
    }
};

window.addEventListener("load", fillInfo);