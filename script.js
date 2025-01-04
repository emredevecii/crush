const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
  question.innerHTML = "I knew you’d say yes 😎";
  gif.src = "https://i.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif"; // Masculine, confident gif
});

// Change text when the No button is clicked
noBtn.addEventListener("click", () => {
  question.innerHTML = "Too bad, I already like you 😏";
  gif.src = "https://i.giphy.com/media/l0HlBO7eyXzSZkJri/giphy.gif"; // Keep the same gif or change to one that fits
});
