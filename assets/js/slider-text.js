// Homepage announcement text
var floating_text = document.getElementById("slider-text");
var given_text = "Trusted tax, legal, compliance and business advisory — all in one place.";
if (floating_text) floating_text.innerHTML = given_text;

// Publish only the team portraits that have been individually approved.
(function () {
  "use strict";

  const APPROVED_PORTRAITS = [
    {
      name: "Ayush Pipalwa",
      src: "assets/img/team/ayush-pipalwa-20260804.jpg?v=20260804-003",
      position: "center top",
      eager: true,
    },
    {
      name: "CMA Surbhi Sharma",
      src: "assets/img/team/surbhi-sharma-20260804-v2.jpg?v=20260804-004",
      position: "center 30%",
      eager: false,
    },
  ];

  const installPhotoStyles = () => {
    if (document.getElementById("ip-approved-team-photo-styles")) return;

    const style = document.createElement("style");
    style.id = "ip-approved-team-photo-styles";
    style.textContent = `
      #team .ip-profile-card-with-photo { overflow: hidden; }
      #team .ip-approved-team-photo {
        width: 100%;
        height: 330px;
        overflow: hidden;
        background: #eef2f7;
        border-radius: 20px 20px 0 0;
      }
      #team .ip-approved-team-photo img {
        display: block !important;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      @media (max-width: 575px) {
        #team .ip-approved-team-photo { height: 360px; }
      }
    `;
    document.head.appendChild(style);
  };

  const findCard = (section, memberName) =>
    Array.from(section.querySelectorAll(".ip-profile-card")).find((card) => {
      const name = card.querySelector(".ip-profile-name");
      return name && name.textContent.trim() === memberName;
    });

  const addPortrait = (section, portrait) => {
    const card = findCard(section, portrait.name);
    if (!card) return false;

    let wrapper = card.querySelector(
      `.ip-approved-team-photo[data-member="${portrait.name}"]`
    );

    if (!wrapper) {
      wrapper = document.createElement("div");
      wrapper.className = "ip-approved-team-photo";
      wrapper.dataset.member = portrait.name;
      const body = card.querySelector(".ip-profile-body");
      card.insertBefore(wrapper, body || card.firstChild);
    }

    let image = wrapper.querySelector("img");
    if (!image) {
      image = document.createElement("img");
      wrapper.appendChild(image);
    }

    if (image.getAttribute("src") !== portrait.src) image.src = portrait.src;
    image.alt = portrait.name;
    image.width = 280;
    image.height = 350;
    image.loading = portrait.eager ? "eager" : "lazy";
    image.decoding = "async";
    image.style.objectPosition = portrait.position;

    card.classList.add("ip-profile-card-with-photo");
    return true;
  };

  const addApprovedPortraits = () => {
    const section = document.getElementById("team");
    if (!section) return false;

    const oldHideStyle = document.getElementById("ip-hide-team-photos");
    if (oldHideStyle) oldHideStyle.remove();

    installPhotoStyles();
    return APPROVED_PORTRAITS.every((portrait) => addPortrait(section, portrait));
  };

  const keepPortraitsVisible = () => {
    addApprovedPortraits();

    const section = document.getElementById("team");
    if (!section || section.dataset.approvedPhotoObserver === "active") return;

    section.dataset.approvedPhotoObserver = "active";
    const observer = new MutationObserver(() => {
      window.requestAnimationFrame(addApprovedPortraits);
    });
    observer.observe(section, { childList: true, subtree: true });
  };

  const startPortraitLoader = () => {
    let attempts = 0;
    const timer = window.setInterval(() => {
      attempts += 1;
      if (addApprovedPortraits() || attempts >= 60) {
        window.clearInterval(timer);
        keepPortraitsVisible();
      }
    }, 100);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", startPortraitLoader);
  } else {
    startPortraitLoader();
  }

  window.addEventListener("load", () => {
    window.setTimeout(keepPortraitsVisible, 50);
    window.setTimeout(keepPortraitsVisible, 500);
  });
})();
