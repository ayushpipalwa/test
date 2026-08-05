(function () {
  "use strict";

  const select = (el, all = false) =>
    all ? [...document.querySelectorAll(el.trim())] : document.querySelector(el.trim());

  const on = (type, el, listener, all = false) => {
    const elements = select(el, all);
    if (!elements) return;
    if (all) elements.forEach((element) => element.addEventListener(type, listener));
    else elements.addEventListener(type, listener);
  };

  const onscroll = (el, listener) => el.addEventListener("scroll", listener);

  const hideTeamPhotos = () => {
    if (!document.getElementById("ip-hide-team-photos")) {
      const style = document.createElement("style");
      style.id = "ip-hide-team-photos";
      style.textContent = `
        #team .member-img,
        #team .ip-profile-photo,
        #team img {
          display: none !important;
        }
      `;
      document.head.appendChild(style);
    }

    document
      .querySelectorAll("#team .member-img, #team .ip-profile-photo, #team img")
      .forEach((element) => element.remove());
  };

  hideTeamPhotos();

  const navbarlinks = select("#navbar .scrollto", true);
  const navbarlinksActive = () => {
    const position = window.scrollY + 200;
    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;
      const section = select(navbarlink.hash);
      if (!section) return;
      navbarlink.classList.toggle(
        "active",
        position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight
      );
    });
  };

  window.addEventListener("load", navbarlinksActive);
  onscroll(document, navbarlinksActive);

  const scrollto = (el) => {
    const header = select("#header");
    const element = select(el);
    if (!element) return;
    window.scrollTo({
      top: element.offsetTop - (header ? header.offsetHeight : 0),
      behavior: "smooth",
    });
  };

  const header = select("#header");
  if (header) {
    const headerScrolled = () =>
      header.classList.toggle("header-scrolled", window.scrollY > 100);
    window.addEventListener("load", headerScrolled);
    onscroll(document, headerScrolled);
  }

  const backtotop = select(".back-to-top");
  if (backtotop) {
    const toggleBacktotop = () =>
      backtotop.classList.toggle("active", window.scrollY > 100);
    window.addEventListener("load", toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  on("click", ".mobile-nav-toggle", function () {
    select("#navbar").classList.toggle("navbar-mobile");
    this.classList.toggle("bi-list");
    this.classList.toggle("bi-x");
  });

  on(
    "click",
    ".navbar .dropdown > a",
    function (e) {
      if (select("#navbar").classList.contains("navbar-mobile")) {
        e.preventDefault();
        this.nextElementSibling.classList.toggle("dropdown-active");
      }
    },
    true
  );

  on(
    "click",
    ".scrollto",
    function (e) {
      if (!select(this.hash)) return;
      e.preventDefault();
      const navbar = select("#navbar");
      if (navbar.classList.contains("navbar-mobile")) {
        navbar.classList.remove("navbar-mobile");
        const navbarToggle = select(".mobile-nav-toggle");
        navbarToggle.classList.toggle("bi-list");
        navbarToggle.classList.toggle("bi-x");
      }
      scrollto(this.hash);
    },
    true
  );

  window.addEventListener("load", () => {
    if (window.location.hash && select(window.location.hash)) {
      scrollto(window.location.hash);
    }
  });

  window.addEventListener("load", () => {
    const portfolioContainer = select(".portfolio-container");
    if (portfolioContainer && typeof Isotope !== "undefined") {
      const portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: ".portfolio-item",
      });
      const portfolioFilters = select("#portfolio-flters li", true);
      on(
        "click",
        "#portfolio-flters li",
        function (e) {
          e.preventDefault();
          portfolioFilters.forEach((el) => el.classList.remove("filter-active"));
          this.classList.add("filter-active");
          portfolioIsotope.arrange({ filter: this.getAttribute("data-filter") });
        },
        true
      );
    }
  });

  if (typeof GLightbox !== "undefined") {
    GLightbox({ selector: ".portfolio-lightbox" });
  }

  if (typeof Swiper !== "undefined") {
    new Swiper(".portfolio-details-slider", {
      speed: 400,
      loop: true,
      autoplay: { delay: 5000, disableOnInteraction: false },
      pagination: { el: ".swiper-pagination", type: "bullets", clickable: true },
    });
  }

  const team = [
    {
      name: "Ayush Pipalwa",
      role: "Founder & Principal Advisor",
      experience: "10+ Years",
      bio: "Practising professional and founder of Instant Professionals with over a decade of experience in corporate and secretarial compliance, risk advisory and business consulting. He works closely with businesses on governance, regulatory strategy and practical growth-oriented solutions.",
      expertise: ["Corporate Compliance", "Risk Advisory", "Business Consulting"],
    },
    {
      name: "CA Renu Sharma",
      role: "Indirect Tax & GST Advisor",
      experience: "Senior Professional",
      bio: "Specialises in indirect taxation, GST advisory and tax litigation, helping businesses manage complex compliance matters, departmental proceedings, notices, assessments and dispute resolution.",
      expertise: ["GST Advisory", "Indirect Tax", "Tax Litigation"],
    },
    {
      name: "CA Navdha Pahwa",
      role: "Audit & Assurance Advisor",
      experience: "15+ Years",
      bio: "Experienced Chartered Accountant focused on statutory audits, internal audits and assurance engagements, with an emphasis on strong controls, accurate reporting and practical risk-based recommendations.",
      expertise: ["Statutory Audit", "Internal Audit", "Risk & Controls"],
    },
    {
      name: "CA Rohit Sharma",
      role: "Audit & Assurance Advisor",
      experience: "10+ Years",
      bio: "Chartered Accountant specialising in auditing and assurance, supporting organisations with reliable financial reporting, audit readiness, internal controls and compliance-focused reviews.",
      expertise: ["Audit & Assurance", "Financial Reporting", "Internal Controls"],
    },
    {
      name: "CA Mayank Jain",
      role: "Direct Tax Advisor",
      experience: "Tax Professional",
      bio: "Direct tax professional advising individuals and businesses on income-tax compliance, tax planning, assessments and practical tax-efficient structuring.",
      expertise: ["Direct Tax", "Tax Advisory", "Income-tax Compliance"],
    },
    {
      name: "CA Mayank Hoiyani",
      role: "Chartered Accountant",
      experience: "Professional Expert",
      bio: "Advises clients on GST, income tax, statutory compliance, financial reporting and business support.",
      expertise: ["GST", "Income Tax", "Financial Reporting"],
    },
    {
      name: "CMA Surbhi Sharma",
      role: "Cost & Management Accountant",
      experience: "5+ Years",
      bio: "Cost and management accounting professional focused on budgeting, costing, MIS reporting, financial planning and operational efficiency.",
      expertise: ["Costing", "Budgeting", "MIS & Analysis"],
    },
    {
      name: "Nisha Pal",
      role: "Manager",
      experience: "Client Operations",
      bio: "Manages client engagements, compliance coordination and timely delivery of professional assignments.",
      expertise: ["Client Management", "Operations", "Compliance Coordination"],
    },
    {
      name: "Yash Sharma",
      role: "Accounts Executive",
      experience: "Accounts & Compliance",
      bio: "Supports bookkeeping, GST reconciliations, financial records and routine statutory compliance assignments.",
      expertise: ["Bookkeeping", "GST Reconciliation", "Documentation"],
    },
    {
      name: "Vishal",
      role: "Accounts Executive",
      experience: "Accounts & Compliance",
      bio: "Assists with accounting operations, financial documentation, GST support and compliance processes.",
      expertise: ["Accounting Support", "GST", "Compliance"],
    },
    {
      name: "Aaradhya",
      role: "Accounts Executive",
      experience: "Accounts & Compliance",
      bio: "Supports accurate financial record-keeping, accounting documentation and day-to-day compliance execution.",
      expertise: ["Record Keeping", "Accounts Support", "Compliance"],
    },
  ];

  const renderTeam = () => {
    const section = document.getElementById("team");
    if (!section) return;

    if (!document.getElementById("ip-team-refresh-styles")) {
      const style = document.createElement("style");
      style.id = "ip-team-refresh-styles";
      style.textContent = `
        #team.ip-team-section{background:linear-gradient(180deg,#f8fafc 0%,#fff 100%);padding:88px 0}
        #team .ip-team-eyebrow{font-size:13px;font-weight:800;letter-spacing:2px;text-transform:uppercase;color:#bb7a16;margin-bottom:10px}
        #team .ip-team-title{font-family:Poppins,sans-serif;font-size:42px;line-height:1.15;font-weight:800;color:#0d2747;margin:0 0 14px}
        #team .ip-team-subtitle{max-width:850px;color:#5c6675;font-size:17px;line-height:1.7;margin:0 auto 44px}
        #team .ip-team-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:24px}
        #team .ip-profile-card{background:#fff;border:1px solid #e2e8f0;border-radius:20px;box-shadow:0 12px 36px rgba(13,39,71,.08);transition:transform .25s ease,box-shadow .25s ease;height:100%}
        #team .ip-profile-card:hover{transform:translateY(-6px);box-shadow:0 20px 44px rgba(13,39,71,.14)}
        #team .ip-profile-body{padding:26px}
        #team .ip-profile-name{font-family:Poppins,sans-serif;font-size:22px;font-weight:800;color:#0d2747;margin:0 0 5px}
        #team .ip-profile-role{font-size:15px;font-weight:700;color:#b87917;margin-bottom:12px}
        #team .ip-experience{display:inline-flex;align-items:center;gap:7px;padding:7px 11px;border-radius:999px;background:#eef5fb;color:#1b4f7a;font-size:12px;font-weight:800;margin-bottom:16px}
        #team .ip-profile-bio{font-size:14px;line-height:1.7;color:#5c6675;margin-bottom:17px}
        #team .ip-tags{display:flex;flex-wrap:wrap;gap:7px}
        #team .ip-tag{font-size:11px;font-weight:700;color:#0d2747;background:#f4f7fa;border:1px solid #e2e8f0;border-radius:7px;padding:6px 8px}
        @media(max-width:991px){#team .ip-team-grid{grid-template-columns:repeat(2,minmax(0,1fr))}#team .ip-team-title{font-size:36px}}
        @media(max-width:575px){#team.ip-team-section{padding:64px 0}#team .ip-team-grid{grid-template-columns:1fr}#team .ip-team-title{font-size:30px}}
      `;
      document.head.appendChild(style);
    }

    section.className = "team ip-team-section";
    section.innerHTML = `
      <div class="container">
        <div class="text-center" data-aos="fade-up">
          <div class="ip-team-eyebrow">Our Team / Experts</div>
          <h2 class="ip-team-title">Meet Our Professionals</h2>
          <p class="ip-team-subtitle">Trusted advisors delivering excellence in taxation, accounting, corporate compliance and business advisory. Our multidisciplinary team combines experience, technical expertise and a client-first approach.</p>
        </div>
        <div class="ip-team-grid">
          ${team
            .map(
              (member, index) => `
                <article class="ip-profile-card" data-aos="fade-up" data-aos-delay="${Math.min(index * 50, 300)}">
                  <div class="ip-profile-body">
                    <h3 class="ip-profile-name">${member.name}</h3>
                    <div class="ip-profile-role">${member.role}</div>
                    <div class="ip-experience"><i class="bi bi-award"></i>${member.experience}</div>
                    <p class="ip-profile-bio">${member.bio}</p>
                    <div class="ip-tags">${member.expertise
                      .map((item) => `<span class="ip-tag">${item}</span>`)
                      .join("")}</div>
                  </div>
                </article>
              `
            )
            .join("")}
        </div>
      </div>`;

    hideTeamPhotos();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderTeam);
  } else {
    renderTeam();
  }

  window.addEventListener("load", () => {
    hideTeamPhotos();
    if (typeof AOS !== "undefined") {
      AOS.init({ duration: 850, easing: "ease-in-out", once: true, mirror: false });
      AOS.refresh();
    }
  });
})();
