document.addEventListener("DOMContentLoaded", () => {
    const introScreen = document.querySelector(".intro-screen");
    const typingText = document.getElementById("typing-text");
    const cursor = document.getElementById("cursor");
    const mainContent = document.querySelector(".main-content");
    const video = document.getElementById("fade-in-video");
  
    // Intro screen text
    const text = "GOLDEN BULLRUN"; // Add line breaks for smaller screens
    const ellipsis = "...";
    let index = 0;
  
    // Contract address text
    const contractText = "Contract Address: ";
    const contractTypingText = document.getElementById("contract-typing");
    const contractCursor = document.getElementById("contract-cursor");
    let contractIndex = 0;
  
    // Typing effect for intro text
    function typeText() {
      if (index < text.length) {
        typingText.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 100); // Adjust typing speed here
      } else {
        setTimeout(typeEllipsis, 500);
      }
    }
  
    function typeEllipsis() {
      let ellipsisIndex = 0;
      function addDot() {
        if (ellipsisIndex < ellipsis.length) {
          typingText.textContent += ellipsis.charAt(ellipsisIndex);
          ellipsisIndex++;
          setTimeout(addDot, 300);
        } else {
          setTimeout(() => {
            introScreen.classList.add("fade-out");
            mainContent.style.display = "flex";
            setTimeout(() => {
              video.style.opacity = 1;
              typeContractText(); // Start typing the contract address after intro
            }, 500);
          }, 2000);
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
  
    typeText(); // Start the typing effect for intro
  });
  