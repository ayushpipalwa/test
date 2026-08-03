// Homepage announcement text
var floating_text = document.getElementById("slider-text");
var given_text = "Trusted tax, legal, compliance and business advisory — all in one place.";
if (floating_text) floating_text.innerHTML = given_text;

// Folder-based team photo system.
// To add or replace a portrait, upload one JPEG to:
// assets/img/team/live/<member-name>.jpg
// Example: CMA Surbhi Sharma -> surbhi-sharma.jpg
(function () {
  "use strict";

  const PHOTO_FOLDER = "assets/img/team/live/";
  const PAGE_CACHE_KEY = Date.now().toString(36);

  const slugifyMemberName = (name) =>
    name
      .replace(/^(CA|CMA|CS)\s+/i, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const installPhotoStyles = () => {
    if (document.getElementById("ip-team-photo-folder-styles")) return;

    const style = document.createElement("style");
    style.id = "ip-team-photo-folder-styles";
    style.textContent = `
      #team .ip-profile-card-with-photo { overflow: hidden; }
      #team .ip-folder-team-photo {
        width: 100%;
        height: 330px;
        overflow: hidden;
        background: #eef2f7;
        border-radius: 20px 20px 0 0;
      }
      #team .ip-folder-team-photo img {
        display: block !important;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center top;
      }
      @media (max-width: 575px) {
        #team .ip-folder-team-photo { height: 360px; }
      }
    `;
    document.head.appendChild(style);
  };

  const addPhotoToCard = (card) => {
    const heading = card.querySelector(".ip-profile-name");
    if (!heading) return;

    const memberName = heading.textContent.trim();
    const slug = slugifyMemberName(memberName);
    if (!slug) return;

    let wrapper = card.querySelector(".ip-folder-team-photo");
    if (!wrapper) {
      wrapper = document.createElement("div");
      wrapper.className = "ip-folder-team-photo";
      const body = card.querySelector(".ip-profile-body");
      card.insertBefore(wrapper, body || card.firstChild);
    }

    let image = wrapper.querySelector("img");
    if (!image) {
      image = document.createElement("img");
      wrapper.appendChild(image);
    }

    const photoUrl = `${PHOTO_FOLDER}${slug}.jpg?v=${PAGE_CACHE_KEY}`;
    if (image.getAttribute("src") !== photoUrl) image.src = photoUrl;

    image.alt = memberName;
    image.width = 280;
    image.height = 350;
    image.loading = slug === "ayush-pipalwa" ? "eager" : "lazy";
    image.decoding = "async";

    image.onload = () => {
      wrapper.hidden = false;
      card.classList.add("ip-profile-card-with-photo");
    };

    image.onerror = () => {
      wrapper.remove();
      card.classList.remove("ip-profile-card-with-photo");
    };
  };

  const loadTeamPhotos = () => {
    const section = document.getElementById("team");
    if (!section) return false;

    const oldHideStyle = document.getElementById("ip-hide-team-photos");
    if (oldHideStyle) oldHideStyle.remove();

    installPhotoStyles();
    const cards = section.querySelectorAll(".ip-profile-card");
    if (!cards.length) return false;

    cards.forEach(addPhotoToCard);
    return true;
  };

  const keepPhotosSynced = () => {
    loadTeamPhotos();
    const section = document.getElementById("team");
    if (!section || section.dataset.photoFolderObserver === "active") return;

    section.dataset.photoFolderObserver = "active";
    const observer = new MutationObserver(() => {
      window.requestAnimationFrame(loadTeamPhotos);
    });
    observer.observe(section, { childList: true, subtree: true });
  };

  const start = () => {
    let attempts = 0;
    const timer = window.setInterval(() => {
      attempts += 1;
      if (loadTeamPhotos() || attempts >= 60) {
        window.clearInterval(timer);
        keepPhotosSynced();
      }
    }, 100);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }

  window.addEventListener("load", () => {
    window.setTimeout(keepPhotosSynced, 50);
    window.setTimeout(keepPhotosSynced, 500);
  });
})();
