(function () {
  "use strict";

  const one = (selector, root = document) => root.querySelector(selector);
  const all = (selector, root = document) => [...root.querySelectorAll(selector)];

  const scrollToSection = (selector) => {
    const target = one(selector);
    if (!target) return;
    const header = one("#header");
    window.scrollTo({
      top: target.offsetTop - (header ? header.offsetHeight : 0),
      behavior: "smooth",
    });
  };

  const installGlobalStyles = () => {
    if (one("#ip-homepage-2026-styles")) return;
    const style = document.createElement("style");
    style.id = "ip-homepage-2026-styles";
    style.textContent = `
      :root{--ip-navy:#0b2948;--ip-blue:#164f78;--ip-gold:#c98a25;--ip-ink:#172b3d;--ip-muted:#607080;--ip-soft:#f4f7fa;--ip-border:#dfe7ee}
      body{color:var(--ip-ink);background:#fff}
      #header{background:rgba(255,255,255,.97)!important;backdrop-filter:blur(12px);border-bottom:1px solid rgba(16,49,78,.08);box-shadow:0 8px 28px rgba(8,35,62,.08)!important}
      #header .logo-brand{display:flex;align-items:center;background:transparent!important}
      #header .logo-brand img{height:64px!important;width:64px!important;object-fit:contain}
      #navbar>ul>li>a{font-weight:700;color:#17334d!important}
      #navbar>ul>li>a:hover,#navbar>ul>li>a.active{color:var(--ip-gold)!important}
      .ip-home-section{padding:86px 0}
      .ip-home-section.ip-soft{background:linear-gradient(180deg,#f5f8fb 0%,#fff 100%)}
      .ip-section-kicker{font-size:12px;font-weight:800;letter-spacing:1.8px;text-transform:uppercase;color:var(--ip-gold);margin-bottom:10px}
      .ip-section-title{font-family:Poppins,sans-serif;font-size:40px;line-height:1.18;font-weight:800;color:var(--ip-navy);margin:0 0 15px}
      .ip-section-lead{max-width:820px;color:var(--ip-muted);font-size:17px;line-height:1.75;margin:0}
      .ip-intro-grid{display:grid;grid-template-columns:1.08fr .92fr;gap:44px;align-items:center}
      .ip-intro-points{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:25px}
      .ip-intro-point{padding:18px;border:1px solid var(--ip-border);border-radius:15px;background:#fff;box-shadow:0 8px 24px rgba(13,49,85,.06)}
      .ip-intro-point i{font-size:22px;color:var(--ip-gold)}
      .ip-intro-point strong{display:block;margin:10px 0 5px;color:var(--ip-navy)}
      .ip-intro-point span{font-size:13px;color:var(--ip-muted);line-height:1.55}
      .ip-assurance-card{background:linear-gradient(145deg,#0b2948,#174f77);border-radius:23px;padding:33px;color:#fff;box-shadow:0 25px 55px rgba(10,39,69,.22)}
      .ip-assurance-card h3{font-family:Poppins,sans-serif;font-size:25px;font-weight:800;color:#fff;margin-bottom:13px}
      .ip-assurance-card>p{color:rgba(255,255,255,.78);line-height:1.7}
      .ip-assurance-list{display:grid;gap:13px;margin-top:23px}
      .ip-assurance-list div{display:flex;gap:10px;align-items:flex-start;padding:12px 0;border-top:1px solid rgba(255,255,255,.12)}
      .ip-assurance-list i{color:#efbd61;margin-top:2px}
      .ip-services-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:20px;margin-top:38px}
      .ip-service-card{display:flex;flex-direction:column;min-height:255px;padding:25px;border:1px solid var(--ip-border);border-radius:18px;background:#fff;text-decoration:none;color:var(--ip-ink);box-shadow:0 10px 30px rgba(13,49,85,.06);transition:.24s ease}
      .ip-service-card:hover{transform:translateY(-6px);border-color:#d8aa59;box-shadow:0 20px 42px rgba(13,49,85,.13)}
      .ip-service-icon{width:49px;height:49px;display:grid;place-items:center;border-radius:13px;background:#edf4f8;color:var(--ip-gold);font-size:24px;margin-bottom:19px}
      .ip-service-card h3{font-family:Poppins,sans-serif;font-size:19px;font-weight:800;color:var(--ip-navy);margin-bottom:9px}
      .ip-service-card p{font-size:14px;line-height:1.65;color:var(--ip-muted);margin-bottom:18px}
      .ip-service-card span{margin-top:auto;font-size:13px;font-weight:800;color:var(--ip-blue)}
      .ip-process{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;margin-top:38px;counter-reset:steps}
      .ip-process article{position:relative;padding:24px 20px;border:1px solid var(--ip-border);border-radius:17px;background:#fff;counter-increment:steps}
      .ip-process article:before{content:"0" counter(steps);display:block;font-family:Poppins,sans-serif;font-size:31px;font-weight:800;color:#d9e2e9;margin-bottom:12px}
      .ip-process h3{font-size:17px;font-weight:800;color:var(--ip-navy)}
      .ip-process p{font-size:13px;line-height:1.65;color:var(--ip-muted);margin:0}
      .ip-trust-strip{background:#0b2948;color:#fff;padding:28px 0}
      .ip-trust-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
      .ip-trust-item{display:flex;align-items:center;gap:12px}
      .ip-trust-item i{font-size:25px;color:#efbd61}
      .ip-trust-item strong{display:block;color:#fff;font-size:14px}
      .ip-trust-item span{font-size:12px;color:rgba(255,255,255,.66)}
      .ip-home-cta{padding:78px 0;background:radial-gradient(circle at 88% 20%,rgba(222,164,68,.22),transparent 30%),linear-gradient(135deg,#092541,#154d74);color:#fff}
      .ip-cta-shell{display:flex;align-items:center;justify-content:space-between;gap:35px}
      .ip-home-cta h2{font-family:Poppins,sans-serif;font-size:36px;font-weight:800;color:#fff;margin-bottom:10px}
      .ip-home-cta p{max-width:720px;color:rgba(255,255,255,.76);font-size:16px;line-height:1.7;margin:0}
      .ip-cta-actions{display:flex;gap:12px;flex-wrap:wrap;flex-shrink:0}
      .ip-cta-actions a{display:inline-flex;align-items:center;justify-content:center;min-height:49px;padding:0 20px;border-radius:9px;text-decoration:none;font-weight:800}
      .ip-cta-primary{background:#d99b31;color:#092541!important}.ip-cta-secondary{border:1px solid rgba(255,255,255,.45);color:#fff!important}
      #team.ip-team-section{background:linear-gradient(180deg,#f7f9fb 0%,#fff 100%);padding:88px 0}
      #team .ip-team-eyebrow{font-size:12px;font-weight:800;letter-spacing:1.8px;text-transform:uppercase;color:var(--ip-gold);margin-bottom:10px}
      #team .ip-team-title{font-family:Poppins,sans-serif;font-size:40px;line-height:1.18;font-weight:800;color:var(--ip-navy);margin:0 0 14px}
      #team .ip-team-subtitle{max-width:860px;color:var(--ip-muted);font-size:16px;line-height:1.7;margin:0 auto 42px}
      #team .ip-team-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:22px}
      #team .ip-profile-card{overflow:hidden;background:#fff;border:1px solid var(--ip-border);border-radius:19px;box-shadow:0 10px 30px rgba(13,49,85,.07);height:100%;transition:.24s ease}
      #team .ip-profile-card:hover{transform:translateY(-5px);box-shadow:0 20px 42px rgba(13,49,85,.13)}
      #team .ip-profile-body{padding:24px}
      #team .ip-profile-name{font-family:Poppins,sans-serif;font-size:21px;font-weight:800;color:var(--ip-navy);margin:0 0 5px}
      #team .ip-profile-role{font-size:14px;font-weight:800;color:#b87817;margin-bottom:11px}
      #team .ip-experience{display:inline-flex;align-items:center;gap:6px;padding:6px 10px;border-radius:999px;background:#edf4f8;color:#1b4f77;font-size:11px;font-weight:800;margin-bottom:14px}
      #team .ip-profile-bio{font-size:13px;line-height:1.7;color:var(--ip-muted);margin-bottom:16px}
      #team .ip-tags{display:flex;flex-wrap:wrap;gap:6px}
      #team .ip-tag{font-size:10px;font-weight:800;color:#17334d;background:#f4f7f9;border:1px solid var(--ip-border);border-radius:7px;padding:6px 8px}
      @media(max-width:991px){.ip-intro-grid{grid-template-columns:1fr}.ip-services-grid{grid-template-columns:repeat(2,1fr)}.ip-process{grid-template-columns:repeat(2,1fr)}.ip-trust-grid{grid-template-columns:repeat(2,1fr)}.ip-cta-shell{align-items:flex-start;flex-direction:column}#team .ip-team-grid{grid-template-columns:repeat(2,1fr)}}
      @media(max-width:575px){.ip-home-section{padding:64px 0}.ip-section-title,#team .ip-team-title{font-size:31px}.ip-intro-points,.ip-services-grid,.ip-process,.ip-trust-grid,#team .ip-team-grid{grid-template-columns:1fr}.ip-home-cta h2{font-size:29px}.ip-cta-actions{width:100%}.ip-cta-actions a{width:100%}}
    `;
    document.head.appendChild(style);
  };

  const simplifyNavigation = () => {
    const nav = one("#navbar ul");
    if (!nav || nav.dataset.ipCurrentNav === "true") return;
    nav.dataset.ipCurrentNav = "true";
    nav.innerHTML = `
      <li><a class="nav-link scrollto active" href="#carouselExampleCaptions">Home</a></li>
      <li><a class="nav-link scrollto" href="#services">Services</a></li>
      <li><a class="nav-link scrollto" href="#team">Experts</a></li>
      <li><a class="nav-link scrollto" href="#ip-process">How We Work</a></li>
      <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
    `;
  };

  const installHomepageSections = () => {
    const hero = one("#carouselExampleCaptions");
    const services = one("#services");
    if (!hero || !services) return;

    if (!one("#ip-current-intro")) {
      const intro = document.createElement("section");
      intro.id = "ip-current-intro";
      intro.className = "ip-home-section ip-soft";
      intro.innerHTML = `
        <div class="container ip-intro-grid">
          <div>
            <div class="ip-section-kicker">Professional support, built around your business</div>
            <h2 class="ip-section-title">One coordinated team for compliance, tax, audit and business decisions.</h2>
            <p class="ip-section-lead">Instant Professionals combines specialised professionals with practical execution. We help founders, established businesses and individuals understand obligations, resolve issues and move forward with greater control.</p>
            <div class="ip-intro-points">
              <div class="ip-intro-point"><i class="bi bi-diagram-3"></i><strong>Integrated advice</strong><span>Tax, corporate, audit and business matters considered together.</span></div>
              <div class="ip-intro-point"><i class="bi bi-chat-square-check"></i><strong>Clear communication</strong><span>Actionable guidance without unnecessary complexity.</span></div>
              <div class="ip-intro-point"><i class="bi bi-calendar2-check"></i><strong>Deadline discipline</strong><span>Structured tracking for recurring and event-based compliance.</span></div>
              <div class="ip-intro-point"><i class="bi bi-lock"></i><strong>Confidential handling</strong><span>Professional care for financial, legal and business information.</span></div>
            </div>
          </div>
          <aside class="ip-assurance-card">
            <div class="ip-section-kicker">Why clients engage us</div>
            <h3>Advice that goes beyond form filing.</h3>
            <p>We focus on the commercial context, regulatory risk and practical next step—not merely the document or return in front of us.</p>
            <div class="ip-assurance-list">
              <div><i class="bi bi-check-circle-fill"></i><span>Senior professional oversight on material assignments</span></div>
              <div><i class="bi bi-check-circle-fill"></i><span>Support for notices, assessments, audits and transactions</span></div>
              <div><i class="bi bi-check-circle-fill"></i><span>Scalable assistance for startups, SMEs and established enterprises</span></div>
            </div>
          </aside>
        </div>`;
      hero.insertAdjacentElement("afterend", intro);
    }

    services.className = "ip-home-section";
    services.innerHTML = `
      <div class="container">
        <div class="ip-section-kicker">Core capabilities</div>
        <h2 class="ip-section-title">Professional services for every stage of business.</h2>
        <p class="ip-section-lead">From formation and routine compliance to audits, disputes, restructuring and strategic advice, our services are organised around the decisions clients actually need to make.</p>
        <div class="ip-services-grid">
          <a class="ip-service-card" href="companyregistration.html"><div class="ip-service-icon"><i class="bi bi-building"></i></div><h3>Business Setup</h3><p>Company, LLP and entity formation, registrations, structuring and commencement support.</p><span>Explore setup services →</span></a>
          <a class="ip-service-card" href="companyannualfilling.html"><div class="ip-service-icon"><i class="bi bi-building-check"></i></div><h3>Corporate & Secretarial</h3><p>Governance, annual filings, director matters, share capital, restructuring and event-based compliance.</p><span>Explore corporate services →</span></a>
          <a class="ip-service-card" href="GSTreturns.html"><div class="ip-service-icon"><i class="bi bi-receipt-cutoff"></i></div><h3>GST & Indirect Tax</h3><p>Registrations, returns, reconciliations, advisory, notices, assessments and litigation support.</p><span>Explore GST services →</span></a>
          <a class="ip-service-card" href="incometaxreturns.html"><div class="ip-service-icon"><i class="bi bi-calculator"></i></div><h3>Direct Tax</h3><p>Income-tax compliance, planning, assessments, capital gains, international reporting and advisory.</p><span>Explore tax services →</span></a>
          <a class="ip-service-card" href="#team"><div class="ip-service-icon"><i class="bi bi-clipboard2-check"></i></div><h3>Audit & Assurance</h3><p>Statutory audit, internal audit, financial reporting reviews, controls testing and risk-focused assurance.</p><span>Meet the audit team →</span></a>
          <a class="ip-service-card" href="Trademark-registration.html"><div class="ip-service-icon"><i class="bi bi-shield-check"></i></div><h3>Intellectual Property</h3><p>Trademark, copyright and related advisory from application through objection, opposition and renewal.</p><span>Explore IP services →</span></a>
        </div>
      </div>`;

    if (!one("#ip-process")) {
      const process = document.createElement("section");
      process.id = "ip-process";
      process.className = "ip-home-section ip-soft";
      process.innerHTML = `
        <div class="container">
          <div class="ip-section-kicker">How we work</div>
          <h2 class="ip-section-title">A clear process from question to completion.</h2>
          <p class="ip-section-lead">Every engagement starts with understanding the facts and ends with a documented, usable outcome.</p>
          <div class="ip-process">
            <article><h3>Understand</h3><p>We review the facts, documents, timelines and commercial objective.</p></article>
            <article><h3>Assess</h3><p>We identify applicable requirements, risks, alternatives and dependencies.</p></article>
            <article><h3>Execute</h3><p>Our team coordinates drafting, filings, representations and follow-up.</p></article>
            <article><h3>Close & Track</h3><p>We confirm completion, share records and flag the next relevant action.</p></article>
          </div>
        </div>`;
      services.insertAdjacentElement("afterend", process);
    }

    if (!one("#ip-trust-strip")) {
      const trust = document.createElement("section");
      trust.id = "ip-trust-strip";
      trust.className = "ip-trust-strip";
      trust.innerHTML = `
        <div class="container ip-trust-grid">
          <div class="ip-trust-item"><i class="bi bi-people"></i><div><strong>Multidisciplinary team</strong><span>Specialists across key advisory areas</span></div></div>
          <div class="ip-trust-item"><i class="bi bi-briefcase"></i><div><strong>Business-first approach</strong><span>Advice aligned to practical outcomes</span></div></div>
          <div class="ip-trust-item"><i class="bi bi-shield-lock"></i><div><strong>Professional confidentiality</strong><span>Responsible information handling</span></div></div>
          <div class="ip-trust-item"><i class="bi bi-lightning-charge"></i><div><strong>Responsive execution</strong><span>Clear ownership and follow-through</span></div></div>
        </div>`;
      process.insertAdjacentElement("afterend", trust);
    }
  };

  const team = [
    {name:"Ayush Pipalwa",role:"Founder & Principal Advisor",experience:"10+ Years",bio:"Practising professional and founder with over a decade of experience in corporate and secretarial compliance, risk advisory and business consulting.",expertise:["Corporate Compliance","Risk Advisory","Business Consulting"]},
    {name:"CA Renu Sharma",role:"Indirect Tax & GST Advisor",experience:"Senior Professional",bio:"Specialises in indirect taxation, GST advisory and litigation, including notices, assessments, departmental proceedings and dispute resolution.",expertise:["GST Advisory","Indirect Tax","Tax Litigation"]},
    {name:"CA Navdha Puri",role:"Audit & Assurance Advisor",experience:"15+ Years",bio:"Focuses on statutory and internal audits, assurance engagements, risk assessment, internal controls and reliable financial reporting.",expertise:["Statutory Audit","Internal Audit","Risk & Controls"]},
    {name:"CA Rohit Sharma",role:"Audit & Assurance Advisor",experience:"10+ Years",bio:"Supports organisations with auditing, assurance, financial reporting, audit readiness and compliance-focused control reviews.",expertise:["Audit & Assurance","Financial Reporting","Internal Controls"]},
    {name:"CA Mayank Jain",role:"Direct Tax Advisor",experience:"Tax Professional",bio:"Advises individuals and businesses on income-tax compliance, planning, assessments and practical tax-efficient structuring.",expertise:["Direct Tax","Tax Advisory","Assessments"]},
    {name:"CA Mayank Hoiyani",role:"Tax & Compliance Advisor",experience:"Professional Expert",bio:"Advises clients on GST, income tax, statutory compliance, financial reporting and ongoing business support.",expertise:["GST","Income Tax","Financial Reporting"]},
    {name:"CMA Surbhi Sharma",role:"Cost & Management Advisor",experience:"5+ Years",bio:"Works on budgeting, costing, MIS reporting, financial planning and operational efficiency for growing businesses.",expertise:["Costing","Budgeting","MIS & Analysis"]},
    {name:"Nisha Pal",role:"Manager — Client Operations",experience:"Client Operations",bio:"Coordinates client engagements, compliance calendars, documentation and timely delivery across professional assignments.",expertise:["Client Management","Operations","Compliance Coordination"]},
    {name:"Yash Sharma",role:"Accounts Executive",experience:"Accounts & Compliance",bio:"Supports bookkeeping, GST reconciliations, financial records and recurring statutory compliance.",expertise:["Bookkeeping","GST Reconciliation","Documentation"]},
    {name:"Vishal",role:"Accounts Executive",experience:"Accounts & Compliance",bio:"Assists with accounting operations, financial documentation, GST support and compliance processes.",expertise:["Accounting Support","GST","Compliance"]},
    {name:"Aaradhya",role:"Accounts Executive",experience:"Accounts & Compliance",bio:"Supports financial record-keeping, accounting documentation and day-to-day compliance execution.",expertise:["Record Keeping","Accounts Support","Compliance"]}
  ];

  const renderTeam = () => {
    const section = one("#team");
    if (!section) return;
    section.className = "team ip-team-section";
    section.innerHTML = `
      <div class="container">
        <div class="text-center">
          <div class="ip-team-eyebrow">Professionals behind the work</div>
          <h2 class="ip-team-title">Specialised expertise. Coordinated delivery.</h2>
          <p class="ip-team-subtitle">Our team brings together experience across corporate compliance, taxation, audit, financial management and client operations.</p>
        </div>
        <div class="ip-team-grid">${team.map((member,index)=>`
          <article class="ip-profile-card" data-aos="fade-up" data-aos-delay="${Math.min(index*40,240)}">
            <div class="ip-profile-body">
              <h3 class="ip-profile-name">${member.name}</h3>
              <div class="ip-profile-role">${member.role}</div>
              <div class="ip-experience"><i class="bi bi-award"></i>${member.experience}</div>
              <p class="ip-profile-bio">${member.bio}</p>
              <div class="ip-tags">${member.expertise.map(item=>`<span class="ip-tag">${item}</span>`).join("")}</div>
            </div>
          </article>`).join("")}</div>
      </div>`;

    if (!one("#ip-home-cta")) {
      const cta = document.createElement("section");
      cta.id = "ip-home-cta";
      cta.className = "ip-home-cta";
      cta.innerHTML = `
        <div class="container ip-cta-shell">
          <div><h2>Need clarity on a compliance, tax or business matter?</h2><p>Share the situation with our team. We will help identify the relevant requirement, practical options and the next step.</p></div>
          <div class="ip-cta-actions"><a class="ip-cta-primary" href="#contact">Start a Discussion</a><a class="ip-cta-secondary" href="incometaxreturns.html">View Key Services</a></div>
        </div>`;
      section.insertAdjacentElement("afterend", cta);
    }
  };

  const bindNavigation = () => {
    all("#navbar .scrollto, .ip-hero-actions a[href^='#'], .ip-cta-actions a[href^='#']").forEach((link) => {
      link.addEventListener("click", (event) => {
        const hash = link.getAttribute("href");
        if (!hash || hash === "#" || !one(hash)) return;
        event.preventDefault();
        const navbar = one("#navbar");
        if (navbar && navbar.classList.contains("navbar-mobile")) navbar.classList.remove("navbar-mobile");
        scrollToSection(hash);
      });
    });

    const toggle = one(".mobile-nav-toggle");
    if (toggle) toggle.addEventListener("click", function(){
      const navbar = one("#navbar");
      if (!navbar) return;
      navbar.classList.toggle("navbar-mobile");
      this.classList.toggle("bi-list");
      this.classList.toggle("bi-x");
    });
  };

  const init = () => {
    installGlobalStyles();
    simplifyNavigation();
    installHomepageSections();
    renderTeam();
    bindNavigation();
    if (typeof AOS !== "undefined") {
      AOS.init({duration:750,easing:"ease-in-out",once:true,mirror:false});
      window.setTimeout(()=>AOS.refresh(),300);
    }
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
