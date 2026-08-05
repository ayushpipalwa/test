// Homepage announcement text
var floating_text = document.getElementById("slider-text");
var given_text = "Trusted tax, legal, compliance and business advisory — all in one place.";
if (floating_text) floating_text.innerHTML = given_text;

// Replace the legacy promotional carousel with an evergreen, conversion-focused hero.
(function () {
  "use strict";

  const installHero = () => {
    const hero = document.getElementById("carouselExampleCaptions");
    if (!hero || hero.dataset.ipHeroUpdated === "true") return;

    hero.dataset.ipHeroUpdated = "true";
    hero.removeAttribute("data-bs-ride");
    hero.className = "ip-modern-hero";
    hero.removeAttribute("style");
    hero.innerHTML = `
      <div class="ip-hero-shell container">
        <div class="ip-hero-copy">
          <span class="ip-hero-kicker">Professional Advisory • India</span>
          <h1>Compliance made clear.<br><span>Business decisions made stronger.</span></h1>
          <p>Practical support for taxation, corporate and secretarial compliance, audits, risk advisory, intellectual property and business consulting—all coordinated through one professional team.</p>
          <div class="ip-hero-actions">
            <a class="ip-primary-action" href="#services">Explore Services</a>
            <a class="ip-secondary-action" href="#contact">Speak with an Advisor</a>
          </div>
          <div class="ip-hero-trust">
            <span><i class="bi bi-shield-check"></i> Confidential & reliable</span>
            <span><i class="bi bi-people"></i> Multidisciplinary experts</span>
            <span><i class="bi bi-lightning-charge"></i> Timely execution</span>
          </div>
        </div>
        <div class="ip-hero-panel" aria-label="Core advisory services">
          <div class="ip-panel-heading">How we support your business</div>
          <div class="ip-service-grid">
            <a href="#services"><i class="bi bi-building-check"></i><strong>Corporate Compliance</strong><small>Companies, LLPs and governance</small></a>
            <a href="#services"><i class="bi bi-receipt"></i><strong>Tax & GST Advisory</strong><small>Compliance, advisory and litigation</small></a>
            <a href="#team"><i class="bi bi-clipboard2-check"></i><strong>Audit & Assurance</strong><small>Statutory, internal and risk reviews</small></a>
            <a href="#services"><i class="bi bi-graph-up-arrow"></i><strong>Business Consulting</strong><small>Controls, strategy and growth support</small></a>
          </div>
          <div class="ip-panel-note"><i class="bi bi-check-circle-fill"></i> Advice designed around your actual business needs—not generic checklists.</div>
        </div>
      </div>`;

    if (!document.getElementById("ip-modern-hero-styles")) {
      const style = document.createElement("style");
      style.id = "ip-modern-hero-styles";
      style.textContent = `
        .ip-modern-hero{position:relative;overflow:hidden;padding:150px 0 82px;background:radial-gradient(circle at 88% 14%,rgba(202,147,53,.20),transparent 29%),linear-gradient(135deg,#071a31 0%,#0d3155 58%,#124a72 100%);color:#fff;min-height:700px;display:flex;align-items:center}
        .ip-modern-hero:before{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px);background-size:42px 42px;mask-image:linear-gradient(to bottom,black,transparent 90%)}
        .ip-modern-hero:after{content:"";position:absolute;width:520px;height:520px;border:1px solid rgba(255,255,255,.11);border-radius:50%;right:-230px;bottom:-290px;box-shadow:0 0 0 70px rgba(255,255,255,.025),0 0 0 140px rgba(255,255,255,.018)}
        .ip-hero-shell{position:relative;z-index:2;display:grid;grid-template-columns:minmax(0,1.18fr) minmax(360px,.82fr);gap:66px;align-items:center}
        .ip-hero-kicker{display:inline-flex;align-items:center;padding:8px 13px;border:1px solid rgba(255,255,255,.24);border-radius:999px;background:rgba(255,255,255,.08);font-size:12px;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;color:#f2c978;margin-bottom:22px}
        .ip-hero-copy h1{font-family:Poppins,sans-serif;font-size:58px;line-height:1.08;font-weight:800;letter-spacing:-1.8px;margin:0 0 22px;color:#fff}
        .ip-hero-copy h1 span{color:#efbd5f}
        .ip-hero-copy>p{max-width:760px;color:rgba(255,255,255,.82);font-size:18px;line-height:1.75;margin:0 0 30px}
        .ip-hero-actions{display:flex;gap:13px;flex-wrap:wrap;margin-bottom:30px}
        .ip-hero-actions a{display:inline-flex;align-items:center;justify-content:center;min-height:50px;padding:0 22px;border-radius:9px;font-weight:800;transition:.22s ease;text-decoration:none}
        .ip-primary-action{background:#d99b30;color:#071a31!important;box-shadow:0 12px 30px rgba(0,0,0,.2)}
        .ip-primary-action:hover{transform:translateY(-2px);background:#efb44a}
        .ip-secondary-action{border:1px solid rgba(255,255,255,.45);color:#fff!important;background:rgba(255,255,255,.06)}
        .ip-secondary-action:hover{background:#fff;color:#0d3155!important}
        .ip-hero-trust{display:flex;flex-wrap:wrap;gap:18px;color:rgba(255,255,255,.78);font-size:13px;font-weight:700}
        .ip-hero-trust span{display:inline-flex;align-items:center;gap:7px}.ip-hero-trust i{color:#f0bd5d;font-size:16px}
        .ip-hero-panel{background:rgba(255,255,255,.96);color:#102a43;border-radius:24px;padding:26px;box-shadow:0 30px 70px rgba(0,0,0,.26);border:1px solid rgba(255,255,255,.65)}
        .ip-panel-heading{font-family:Poppins,sans-serif;font-size:20px;font-weight:800;margin-bottom:17px;color:#0d3155}
        .ip-service-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
        .ip-service-grid a{display:flex;flex-direction:column;min-height:150px;padding:17px;border:1px solid #e0e8ef;border-radius:14px;background:#fff;text-decoration:none;transition:.22s ease;color:#102a43}
        .ip-service-grid a:hover{transform:translateY(-3px);border-color:#d7a24c;box-shadow:0 12px 24px rgba(13,49,85,.10)}
        .ip-service-grid i{font-size:25px;color:#bd7d18;margin-bottom:12px}.ip-service-grid strong{font-size:14px;margin-bottom:5px}.ip-service-grid small{color:#687787;line-height:1.45}
        .ip-panel-note{margin-top:15px;padding:13px 14px;border-radius:11px;background:#eef5f9;color:#345269;font-size:12px;font-weight:700;line-height:1.5}.ip-panel-note i{color:#2f7b5b;margin-right:6px}
        @media(max-width:991px){.ip-modern-hero{padding:135px 0 70px}.ip-hero-shell{grid-template-columns:1fr;gap:38px}.ip-hero-copy h1{font-size:48px}.ip-hero-panel{max-width:720px}}
        @media(max-width:575px){.ip-modern-hero{padding:120px 0 55px;min-height:auto}.ip-hero-copy h1{font-size:37px;letter-spacing:-1px}.ip-hero-copy>p{font-size:16px}.ip-service-grid{grid-template-columns:1fr}.ip-service-grid a{min-height:auto}.ip-hero-panel{padding:18px}.ip-hero-trust{flex-direction:column;gap:9px}}
      `;
      document.head.appendChild(style);
    }
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", installHero);
  else installHero();
  window.addEventListener("load", installHero);
})();

// Approved team portraits and clean display names.
(function () {
  "use strict";

  const PHOTO_VERSION = "20260806-0248";
  const APPROVED_PHOTOS = {
    "Ayush Pipalwa": "assets/img/team/live/ayush-pipalwa.jpg",
    "Renu Sharma": "assets/img/team/live/renu-sharma.jpg",
    "Navdha Puri": "assets/img/team/live/navdha-puri.jpg",
    "Rohit Sharma": "assets/img/team/live/rohit-sharma.jpg",
    "Mayank Jain": "assets/img/team/live/mayank-jain.jpg",
    "Mayank Hoiyani": "assets/img/team/live/mayank-hoiyani.jpg",
    "Surbhi Sharma": "assets/img/team/live/surbhi-sharma.png"
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
        image-rendering: auto !important;
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
