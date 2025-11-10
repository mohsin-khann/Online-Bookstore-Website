// ===== script.js =====

// When the page loads, show a welcome message in the console
console.log("📚 Welcome to Book Zone!");

// Sticky navbar effect on scroll
window.addEventListener("scroll", function() {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 50);
});

// Scroll to top button
const scrollTopBtn = document.createElement("button");
scrollTopBtn.innerText = "↑";
scrollTopBtn.id = "scrollTopBtn";
document.body.appendChild(scrollTopBtn);

scrollTopBtn.style.cssText = `
  position: fixed;
  bottom: 25px;
  right: 25px;
  padding: 8px 12px;
  font-size: 18px;
  border: none;
  background: #333;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  display: none;
  z-index: 100;
`;

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Simple alert for contact form (if you have one)
const contactForm = document.querySelector("form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thanks for contacting Book Zone! We'll get back to you soon.");
    contactForm.reset();
  });
}
