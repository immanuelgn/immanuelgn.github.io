// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});

// Helpers to stop media
function stopMedia(modal) {
  // Stop videos
  modal.querySelectorAll("video").forEach(v => {
    try {
      v.pause();
      v.currentTime = 0;
    } catch (_) {}
  });

  // Reset iframes (stops YouTube playback)
  modal.querySelectorAll("iframe").forEach(f => {
    const src = f.getAttribute("src");
    f.setAttribute("src", src);
  });
}

// Open Modal
function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;

  modal.style.display = "block";
  document.body.classList.add("modal-open");
  modal.setAttribute("aria-hidden", "false");
}

// Close Modal
function closeModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;

  stopMedia(modal);
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

// Close if clicking outside modal content
window.addEventListener("click", (event) => {
  document.querySelectorAll(".modal").forEach(modal => {
    if (event.target === modal) {
      stopMedia(modal);
      modal.style.display = "none";
      modal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("modal-open");
    }
  });
});

// Close with ESC key
window.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  document.querySelectorAll(".modal").forEach(modal => {
    if (modal.style.display === "block") {
      stopMedia(modal);
      modal.style.display = "none";
      modal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("modal-open");
    }
  });
});

// Make project cards keyboard-activatable
document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      card.click();
    }
  });
});
