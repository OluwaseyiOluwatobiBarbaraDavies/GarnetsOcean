document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const captionText = document.getElementById("modalCaption");
  const closeBtn = document.querySelector(".modal-close");

  document.querySelectorAll(".gallery img").forEach((img) => {
    img.style.cursor = "pointer";
    img.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = this.src;

      const desc = this.nextElementSibling;
      captionText.innerHTML = desc ? desc.innerHTML : this.alt;
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });
  }

  // Close modal when clicking outside the image
  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.style.display === "block") {
      modal.style.display = "none";
    }
  });
});