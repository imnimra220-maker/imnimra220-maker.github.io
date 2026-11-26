
/* =========================================
   NIMRA ZAHEER - PORTFOLIO
   Main JavaScript
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {
  // Automatically update the copyright year
  const copyright = document.querySelector("footer p");

  if (copyright) {
    copyright.textContent =
      `© ${new Date().getFullYear()} Nimra Zaheer. All rights reserved.`;
  }

  // Smooth scrolling for internal navigation links
  const internalLinks = document.querySelectorAll('a[href^="#"]');

  internalLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") {
        return;
      }

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        event.preventDefault();

        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // Project gallery filters will be added here
  // when portfolio projects are added.

  // Theme toggle functionality will be added here
  // when the theme button is added to the website.
});
