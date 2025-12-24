// Smooth scroll for in-page links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", (e) => {
    const target = document.querySelector(a.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// Open modal
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

// Close modal + stop media (YouTube/video)
function closeModal(modal) {
  if (!modal) return;
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";

  // Stop HTML5 videos if any
  modal.querySelectorAll("video").forEach(v => {
    v.pause();
    v.currentTime = 0;
  });

  // Stop YouTube iframe by resetting src
  modal.querySelectorAll("iframe").forEach(frame => {
    const src = frame.getAttribute("src");
    frame.setAttribute("src", src);
  });
}

// Click handlers for project cards
document.querySelectorAll("[data-modal]").forEach(btn => {
  btn.addEventListener("click", () => openModal(btn.dataset.modal));
});

// Close handlers
document.querySelectorAll(".modal [data-close]").forEach(btn => {
  btn.addEventListener("click", () => closeModal(btn.closest(".modal")));
});

// Click outside modal box closes it
document.querySelectorAll(".modal").forEach(modal => {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal(modal);
  });
});

// ESC closes any open modal
window.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  document.querySelectorAll(".modal[aria-hidden='false']").forEach(m => closeModal(m));
});
