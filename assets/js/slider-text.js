// Homepage announcement text
var floating_text = document.getElementById("slider-text");
var given_text = "Trusted tax, legal, compliance and business advisory — all in one place.";
if (floating_text) floating_text.innerHTML = given_text;

// Approved team portraits and clean display names.
(function () {
  "use strict";

  const PHOTO_VERSION = "20260805-0235";
  const APPROVED_PHOTOS = {
    "Ayush Pipalwa": "assets/img/team/live/ayush-pipalwa.jpg",
    "Surbhi Sharma": "assets/img/team/live/surbhi-sharma.jpg",
    "Mayank Jain": "assets/img/team/live/mayank-jain.jpg"
  };

  const cleanDisplayName = (name) =>
    name.trim().replace(/^(CA|CMA|CS)\s+/i, "").trim();

  const installStyles = () => {
    if (document.getElementById("ip-approved-team-photo-styles")) return;
    const style = document.createElement("style");
    style.id = "ip-approved-team-photo-styles";
    style.textContent = `
      #team .ip-folder-team-photo {
        width: 100%;
        height: 350px;
        overflow: hidden;
        background: #eef2f7;
        border-radius: 20px 20px 0 0;
      }
      #team .ip-folder-team-photo img,
      #team .member-img > img.ip-approved-photo {
        display: block !important;
        width: 100% !important;
        height: 100% !important;
        object-fit: cover !important;
        object-position: center top !important;
      }
      #team .member-img { height: 350px; overflow: hidden; }
      @media (max-width: 575px) {
        #team .ip-folder-team-photo,
        #team .member-img { height: 380px; }
      }
    `;
    document.head.appendChild(style);
  };

  const normalizeHeading = (heading) => {
    const cleanName = cleanDisplayName(heading.textContent);
    if (heading.textContent.trim() !== cleanName) heading.textContent = cleanName;
    return cleanName;
  };

  const updateLegacyCard = (card) => {
    const heading = card.querySelector(".member-info h4, h4");
    if (!heading) return;
    const memberName = normalizeHeading(heading);
    const path = APPROVED_PHOTOS[memberName] || null;
    if (!path) return;

    const holder = card.querySelector(".member-img");
    if (!holder) return;
    let image = holder.querySelector(":scope > img");
    if (!image) {
      image = document.createElement("img");
      holder.insertBefore(image, holder.firstChild);
    }
    image.src = `${path}?v=${PHOTO_VERSION}`;
    image.alt = memberName;
    image.classList.add("img-fluid", "ip-approved-photo");
    image.width = 400;
    image.height = 500;
    image.loading = "eager";
    image.decoding = "async";
  };

  const updateProfileCard = (card) => {
    const heading = card.querySelector(".ip-profile-name");
    if (!heading) return;
    const memberName = normalizeHeading(heading);
    const path = APPROVED_PHOTOS[memberName] || null;
    if (!path) return;

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
    image.src = `${path}?v=${PHOTO_VERSION}`;
    image.alt = memberName;
    image.width = 400;
    image.height = 500;
    image.loading = "eager";
    image.decoding = "async";
    wrapper.hidden = false;
    card.classList.add("ip-profile-card-with-photo");
  };

  const syncTeam = () => {
    const section = document.getElementById("team");
    if (!section) return false;

    const oldHideStyle = document.getElementById("ip-hide-team-photos");
    if (oldHideStyle) oldHideStyle.remove();
    installStyles();

    section.querySelectorAll(".ip-profile-card").forEach(updateProfileCard);
    section.querySelectorAll(".member").forEach(updateLegacyCard);
    section.querySelectorAll(".ip-profile-name, .member-info h4").forEach(normalizeHeading);
    return true;
  };

  const start = () => {
    syncTeam();
    const section = document.getElementById("team");
    if (!section || section.dataset.approvedPhotoObserver === "active") return;
    section.dataset.approvedPhotoObserver = "active";
    const observer = new MutationObserver(() => window.requestAnimationFrame(syncTeam));
    observer.observe(section, { childList: true, subtree: true });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
  window.addEventListener("load", () => {
    window.setTimeout(start, 50);
    window.setTimeout(start, 500);
  });
})();
