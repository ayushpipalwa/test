// Homepage announcement text
var floating_text = document.getElementById("slider-text");
var given_text = "Trusted tax, legal, compliance and business advisory — all in one place.";
if (floating_text) floating_text.innerHTML = given_text;

// Production hotfix: load the verified Ayush portrait from the canonical
// base64 source. This avoids the previously corrupted JPEG asset and works
// regardless of browser/CDN caching of that broken file.
(function () {
  "use strict";

  const SOURCE = "assets/img/team/ayush-pipalwa-20260802.jpg.b64?v=202608022300";
  let verifiedDataUrl = "";
  let loadingPromise = null;

  const getVerifiedPhoto = () => {
    if (verifiedDataUrl) return Promise.resolve(verifiedDataUrl);
    if (loadingPromise) return loadingPromise;

    loadingPromise = fetch(SOURCE, { cache: "no-store" })
      .then((response) => {
        if (!response.ok) throw new Error("Ayush photo source not found");
        return response.text();
      })
      .then((base64) => {
        const clean = base64.replace(/\s+/g, "");
        if (!clean.startsWith("/9j/")) throw new Error("Invalid JPEG source");
        verifiedDataUrl = "data:image/jpeg;base64," + clean;
        return verifiedDataUrl;
      });

    return loadingPromise;
  };

  const applyAyushPhoto = () => {
    const images = Array.from(document.querySelectorAll("#team img"));
    const ayush = images.find((img) =>
      (img.alt || "").trim() === "Ayush Pipalwa" ||
      /(?:^|\/)Ayush\.jpeg(?:\?|$)/i.test(img.getAttribute("src") || "") ||
      /ayush-pipalwa\.jpg/i.test(img.getAttribute("src") || "")
    );

    if (!ayush) return false;

    getVerifiedPhoto()
      .then((dataUrl) => {
        ayush.onerror = null;
        ayush.dataset.fallback = "";
        ayush.src = dataUrl;
        ayush.style.objectFit = "cover";
        ayush.style.objectPosition = "top center";
      })
      .catch((error) => console.error("Unable to load Ayush photo:", error));

    return true;
  };

  document.addEventListener("DOMContentLoaded", () => {
    applyAyushPhoto();

    // main.js rebuilds the team section dynamically. Observe it briefly so
    // the verified image is reapplied after any rerender.
    const observer = new MutationObserver(() => applyAyushPhoto());
    observer.observe(document.body, { childList: true, subtree: true });
    window.setTimeout(() => observer.disconnect(), 15000);
  });

  window.addEventListener("load", applyAyushPhoto);
})();
