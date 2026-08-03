// Homepage announcement text
var floating_text = document.getElementById("slider-text");
var given_text = "Trusted tax, legal, compliance and business advisory — all in one place.";
if (floating_text) floating_text.innerHTML = given_text;

// Add the approved Ayush Pipalwa portrait only to his team card.
(function () {
  "use strict";

  const PHOTO_SRC =
    "assets/img/team/ayush-pipalwa-20260804.jpg?v=20260804-003";

  const installPhotoStyles = () => {
    if (document.getElementById("ip-ayush-photo-styles")) return;

    const style = document.createElement("style");
    style.id = "ip-ayush-photo-styles";
    style.textContent = `
      #team .ip-profile-card-with-photo { overflow: hidden; }
      #team .ip-ayush-photo {
        width: 100%;
        height: 330px;
        overflow: hidden;
        background: #eef2f7;
        border-radius: 20px 20px 0 0;
      }
      #team .ip-ayush-photo img {
        display: block !important;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center top;
      }
      @media (max-width: 575px) {
        #team .ip-ayush-photo { height: 360px; }
      }
    `;
    document.head.appendChild(style);
  };

  const createImage = () => {
    const image = document.createElement("img");
    image.src = PHOTO_SRC;
    image.alt = "Ayush Pipalwa";
    image.width = 280;
    image.height = 350;
    image.loading = "eager";
    image.decoding = "async";
    return image;
  };

  const addAyushPhoto = () => {
    const section = document.getElementById("team");
    if (!section) return false;

    const cards = Array.from(section.querySelectorAll(".ip-profile-card"));
    const card = cards.find((item) => {
      const name = item.querySelector(".ip-profile-name");
      return name && name.textContent.trim() === "Ayush Pipalwa";
    });

    if (!card) return false;

    const oldHideStyle = document.getElementById("ip-hide-team-photos");
    if (oldHideStyle) oldHideStyle.remove();

    installPhotoStyles();

    let wrapper = card.querySelector(".ip-ayush-photo");
    if (!wrapper) {
      wrapper = document.createElement("div");
      wrapper.className = "ip-ayush-photo";
      const body = card.querySelector(".ip-profile-body");
      card.insertBefore(wrapper, body || card.firstChild);
    }

    let image = wrapper.querySelector("img");
    if (!image) {
      image = createImage();
      wrapper.appendChild(image);
    } else if (image.getAttribute("src") !== PHOTO_SRC) {
      image.src = PHOTO_SRC;
    }

    card.classList.add("ip-profile-card-with-photo");
    return true;
  };

  const keepPhotoVisible = () => {
    addAyushPhoto();

    const section = document.getElementById("team");
    if (!section || section.dataset.ayushPhotoObserver === "active") return;

    section.dataset.ayushPhotoObserver = "active";
    const observer = new MutationObserver(() => {
      window.requestAnimationFrame(addAyushPhoto);
    });
    observer.observe(section, { childList: true, subtree: true });
  };

  document.addEventListener("DOMContentLoaded", () => {
    let attempts = 0;
    const timer = window.setInterval(() => {
      attempts += 1;
      if (addAyushPhoto() || attempts >= 50) {
        window.clearInterval(timer);
        keepPhotoVisible();
      }
    }, 100);
  });

  window.addEventListener("load", () => {
    window.setTimeout(keepPhotoVisible, 50);
    window.setTimeout(keepPhotoVisible, 500);
  });
})();
