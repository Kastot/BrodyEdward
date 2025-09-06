// === Background Fade-In ===
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// === Smooth Scroll for Navigation ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});



// === Scroll-to-Top Button ===
const scrollBtn = document.createElement("button");
scrollBtn.textContent = "↑";
scrollBtn.id = "scrollTopBtn";
document.body.appendChild(scrollBtn);

Object.assign(scrollBtn.style, {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  display: "none",
  padding: "10px",
  borderRadius: "50%",
  border: "none",
  cursor: "pointer",
  background: "#8a2be2",
  color: "#fff",
  fontSize: "18px",
  boxShadow: "0 2px 6px rgba(0,0,0,0.3)"
});

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// === Section Fade-In on Scroll ===
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));
