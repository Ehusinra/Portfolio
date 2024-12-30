const text = "Hello, I'm";
let i = 0;
const speed = 150;
const typingElement = document.getElementById('typing-text');
function typeText() {
  if (i < text.length) {
    typingElement.innerHTML += text.charAt(i); 
    i++;
    setTimeout(typeText, speed); 
  }
}

window.onload = typeText;
