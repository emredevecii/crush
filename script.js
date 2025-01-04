const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// When the Yes button is clicked
yesBtn.addEventListener("click", () => {
  question.innerHTML = "I love you too, Romina 💚";
  gif.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGJ5ZXJ5ZmoxNDZmYmtwdWo2bzIwMm9jNTM2NHc5eG54aTgyejM2cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oz8xsaLjLVqVXr3tS/giphy.gif"; // Green hearts gif
  yesBtn.innerHTML = "You're my everything 💕";
  noBtn.style.display = "none"; // Hide No button after clicking Yes
});

// Make the No button move randomly on hover
noBtn.addEventListener("mouseover", () => {
  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  // Calculate max positions to ensure the button stays within the wrapper
  const maxX = wrapperRect.width - noBtnRect.width;
  const maxY = wrapperRect.height - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.position = "absolute";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
