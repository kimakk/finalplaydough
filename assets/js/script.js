// Remove these lines
// const circleY1 = document.getElementById("circle-y1");
// const popupY1 = document.getElementById("popup-y1");
// const closePopup = document.getElementById("close-popup");

// Show the pop-up when the circle is clicked
circleY1.addEventListener("click", () => {
  popupY1.style.display = "block";
});

// Close the pop-up when the close button is clicked
closePopup.addEventListener("click", () => {
  popupY1.style.display = "none";
});

// Close the pop-up if the background overlay is clicked
popupY1.addEventListener("click", (event) => {
  if (event.target === popupY1) {
    popupY1.style.display = "none";
  }
});

const userInput = document.getElementById("user-input");
const submitButton = document.getElementById("submit-button");
const submittedMessages = document.getElementById("submitted-messages");

submitButton.addEventListener("click", () => {
  const userText = userInput.value;

  if (userText.trim() !== "") {
    const messageElement = document.createElement("div");
    messageElement.className = "message";
    messageElement.textContent = userText;
    submittedMessages.appendChild(messageElement);

    // Clear the input field after submitting
    userInput.value = "";
  }
});
