// ===== Smooth Scroll for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


// ===== Basic Form Handling =====
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent page reload

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  console.log("Form Submitted");
  console.log("Name:", name);
  console.log("Email:", email);

  alert("Thank you " + name + "! Your message has been received.");

  form.reset();
});