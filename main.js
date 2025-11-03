// Mostrar año actual
document.getElementById("year").textContent = new Date().getFullYear();

// Animación de entrada
const appears = document.querySelectorAll(".appear");
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("visible");
    });
  },
  { threshold: 0.12 }
);
appears.forEach((el) => io.observe(el));

// Filtro del portafolio
const filters = document.querySelectorAll(".btn-filter");
const projects = document.querySelectorAll(".project");

filters.forEach((btn) => {
  btn.addEventListener("click", () => {
    filters.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const f = btn.dataset.filter;
    projects.forEach((p) => {
      p.style.display = f === "all" || p.dataset.cat === f ? "" : "none";
    });
  });
});

// Validación del formulario de contacto
const form = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formMsg.style.color = "#9aa4b2";
  formMsg.textContent = "Validando...";

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  const emailRe = /^[^@]+@[^@]+\.[^@]+$/;

  if (!name || !email || !message) {
    formMsg.style.color = "#ffb4b4";
    formMsg.textContent = "Por favor completa todos los campos.";
    return;
  }
  if (!emailRe.test(email)) {
    formMsg.style.color = "#ffb4b4";
    formMsg.textContent = "Introduce un correo válido.";
    return;
  }

  setTimeout(() => {
    formMsg.style.color = "#b7ffd6";
    formMsg.textContent =
      "Gracias — tu mensaje ha sido enviado. Nos pondremos en contacto pronto.";
    form.reset();
  }, 900);
});

// Navegación accesible con teclado
document.querySelectorAll(".btn-filter").forEach((b) => {
  b.addEventListener("keyup", (e) => {
    if (e.key === "Enter" || e.key === " ") b.click();
  });
});
