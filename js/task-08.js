const form = document.querySelector(".login-form");

const submitForm = (e) => {
  e.preventDefault();
  const {
    elements: { email, password },
  } = e.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Kindly fill all of the form fields.");
  } else {
    const loginData = [
      [email.name, email.value],
      [password.name, password.value],
    ];

    const dataToObject = Object.fromEntries(loginData);

    e.currentTarget.reset();

    return console.log(dataToObject);
  }
};

form.addEventListener("submit", submitForm);
