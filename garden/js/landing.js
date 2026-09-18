document.addEventListener("DOMContentLoaded", function () {
  // --- Saloon Doors & Tooltip Logic ---
  const saloonDoors = document.getElementById("saloonDoors");
  const doorTooltip = document.getElementById("doorTooltip");

  if (saloonDoors) {
    // 1. Door Click & Redirection Animation
    saloonDoors.addEventListener("click", function () {
      // Trigger the opening transition
      saloonDoors.classList.add("open");

      // Hide the tooltip immediately on click
      if (doorTooltip) {
        doorTooltip.style.opacity = "0";
      }

      // Delay redirect to match CSS transition time (850ms)
      setTimeout(function () {
        // Adjust path to "../index.html" if index.html is located in the parent directory
        window.location.href = "landing.html";
      }, 850);
    });

    // 2. Cursor Tooltip Tracking
    saloonDoors.addEventListener("mousemove", function (e) {
      if (doorTooltip && !saloonDoors.classList.contains("open")) {
        doorTooltip.style.opacity = "1";
        doorTooltip.style.left = e.clientX + 15 + "px";
        doorTooltip.style.top = e.clientY + 15 + "px";
      }
    });

    saloonDoors.addEventListener("mouseleave", function () {
      if (doorTooltip) {
        doorTooltip.style.opacity = "0";
      }
    });
  }

  // --- Image Gallery Modal Logic ---
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const captionText = document.getElementById("modalCaption");
  const closeBtn = document.querySelector(".modal-close");

  if (modal) {
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
  }
});