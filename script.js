const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// When the Yes button is clicked
yesBtn.addEventListener("click", () => {
  question.innerHTML = "I love you too, Romina 💚";
  gif.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXNhb3BkeWMycWF3c3hrdmxyaDQ4OHphYXlkY3c4Y281MzV2MjMxZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LTcau7EnQLhHkxxG2u/giphy.gif"; // Green hearts gif
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
