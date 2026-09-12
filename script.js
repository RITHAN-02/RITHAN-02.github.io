/*
  EDIT THIS SECTION FIRST. Replace every item in quotes with your real details.
  Keep the empty values until you have the information; the website will show
  clear placeholders rather than made-up details.
*/
const business = {
  name: "Vaanam Threads",
  phone: "+919486478027",
  email: "chithrarajen84@gmail.com",
  location: "Mugalivakkam, Chennai",
  directionsUrl: "https://maps.app.goo.gl/uYCrytFmeVKU6CdD6"
};

document.querySelectorAll("[data-business-name]").forEach(el => el.textContent = business.name);
document.querySelectorAll("[data-location]").forEach(el => el.textContent = business.location);

const usablePhone = business.phone && !business.phone.startsWith("[");
const usableEmail = business.email && !business.email.startsWith("[");
document.querySelectorAll("[data-phone]").forEach(el => {
  el.textContent = business.phone;
  if (usablePhone) el.href = `tel:${business.phone.replace(/[^+\d]/g, "")}`;
});
document.querySelectorAll("[data-email]").forEach(el => {
  el.textContent = business.email;
  if (usableEmail) el.href = `mailto:${business.email}`;
});
document.querySelectorAll("[data-whatsapp]").forEach(el => {
  if (usablePhone) {
    el.href = `https://wa.me/${business.phone.replace(/\D/g, "")}`;
    el.target = "_blank";
    el.rel = "noopener";
  }
});
document.querySelectorAll("[data-call]").forEach(el => {
  if (usablePhone) el.href = `tel:${business.phone.replace(/[^+\d]/g, "")}`;
});
document.querySelectorAll("[data-directions]").forEach(el => {
  if (business.directionsUrl && business.directionsUrl !== "#") {
    el.href = business.directionsUrl; el.target = "_blank"; el.rel = "noopener";
  }
});

document.getElementById("year").textContent = new Date().getFullYear();

const menuButton = document.querySelector(".nav-toggle");
const nav = document.querySelector("#site-nav");
menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  nav.classList.toggle("is-open", !open);
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  menuButton.setAttribute("aria-expanded", "false"); nav.classList.remove("is-open");
}));

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
}), { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
