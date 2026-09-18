document.addEventListener("DOMContentLoaded", function () {
  const saloonDoors = document.getElementById("saloonDoors");
  const doorTooltip = document.getElementById("doorTooltip");

  if (saloonDoors) {
    saloonDoors.addEventListener("click", function () {
      saloonDoors.classList.add("open");

      if (doorTooltip) {
        doorTooltip.style.opacity = "0";
      }

      setTimeout(function () {
        window.location.href = "../html/landing.html";
      }, 850);
    });

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