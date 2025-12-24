// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});

function stopEmbeds(modal) {
  // Stop YouTube by resetting iframe src
  modal.querySelectorAll("iframe").forEach((f) => {
    const src = f.getAttribute("src");
    f.setAttribute("src", src);
  });
}

function openModal(modal) {
  modal.style.display = "grid";
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal(modal) {
  stopEmbeds(modal);
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

// Open modal from project cards
document.querySelectorAll("[data-modal]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const id = btn.getAttribute("data-modal");
    const modal = document.getElementById(id);
    if (modal) openModal(modal);
  });
});

// Close modal via X button
document.querySelectorAll(".modal [data-close]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const modal = btn.closest(".modal");
    if (modal) closeModal(modal);
  });
});

// Close modal by clicking background
document.querySelectorAll(".modal").forEach((modal) => {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal(modal);
  });
});

// Close on ESC
window.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  document.querySelectorAll(".modal").forEach((modal) => {
    if (modal.style.display === "grid") closeModal(modal);
  });
});
