const choices = document.querySelector(".choices");
const submit = document.querySelector(".submit");
const buttons = document.querySelectorAll(".choice-button");

choices.addEventListener("click", (event) => {
  // This check if the selector has active if that has active then remove otherwise put nothing
  document.querySelector(".active")
    ? document.querySelector(".active").classList.remove("active")
    : "";

  // Add the classlist active
  event.target.classList.add("active");
});

submit.addEventListener("click", (e) => {
  e.preventDefault();

  buttons.forEach((button) => {
    // if button contains .active adjust the style for the selected elements
    if (button.classList.contains("active")) {
      const ratingState = document.querySelector(".rating-state");
      const thanksState = document.querySelector(".thanks-state");
      const thanksMessage = document.querySelector(".thanks-message span");

      ratingState.style.display = "none";
      thanksState.style.display = "flex";

      thanksMessage.textContent = `You selected ${button.textContent} out of ${buttons.length}`;
    }
  });
});
