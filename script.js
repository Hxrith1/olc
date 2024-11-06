document.addEventListener("DOMContentLoaded", () => {
  // Select the necessary elements
  const introScreen = document.querySelector(".intro-screen");
  const typingText = document.getElementById("typing-text");
  const cursor = document.getElementById("cursor");
  const mainContent = document.querySelector(".main-content");
  const video = document.getElementById("fade-in-video");

  // Intro screen text
  const text = "GOLDEN BULLRUN"; // Main text to type out
  const ellipsis = "..."; // Ellipsis to add after the main text
  let index = 0;

  // Contract address text (if additional typing effect for contract address is needed)
  const contractText = "Contract Address: ";
  const contractTypingText = document.getElementById("contract-typing");
  const contractCursor = document.getElementById("contract-cursor");
  let contractIndex = 0;

  // Typing effect for the main intro text
  function typeText() {
      if (index < text.length) {
          typingText.textContent += text.charAt(index);
          index++;
          setTimeout(typeText, 100); // Adjust typing speed here
      } else {
          setTimeout(typeEllipsis, 500); // After main text, add ellipsis
      }
  }

  // Typing effect for ellipsis after the main text
  function typeEllipsis() {
      let ellipsisIndex = 0;
      function addDot() {
          if (ellipsisIndex < ellipsis.length) {
              typingText.textContent += ellipsis.charAt(ellipsisIndex);
              ellipsisIndex++;
              setTimeout(addDot, 300); // Adjust ellipsis typing speed here
          } else {
              // Pause, then fade out the intro screen and show the main content
              setTimeout(() => {
                  introScreen.classList.add("fade-out");
                  mainContent.style.display = "flex";
                  setTimeout(() => {
                      video.style.opacity = 1; // Fade in the video
                      typeContractText(); // Start typing the contract address after intro
                  }, 500);
              }, 2000); // 2-second pause after ellipsis
          }
      }
      addDot();
  }

  // Typing effect for contract address text
  function typeContractText() {
      if (contractIndex < contractText.length) {
          contractTypingText.textContent += contractText.charAt(contractIndex);
          contractIndex++;
          setTimeout(typeContractText, 100); // Adjust typing speed here
      }
  }

  // Start the typing effect for the intro text
  typeText();
});
