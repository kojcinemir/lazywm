const body = document.body;
const menuButton = document.querySelector(".menu-button");
const navLinks = [...document.querySelectorAll(".nav a")];
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

menuButton?.addEventListener("click", () => {
  const isOpen = body.classList.toggle("nav-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    body.classList.remove("nav-open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

const updateActiveLink = () => {
  const marker = window.scrollY + window.innerHeight * 0.3;
  let activeSection = sections[0];

  sections.forEach((section) => {
    if (section.offsetTop <= marker) activeSection = section;
  });

  navLinks.forEach((link) => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${activeSection?.id}`
    );
  });
};

window.addEventListener("scroll", updateActiveLink, { passive: true });
updateActiveLink();

document.querySelectorAll(".copy-button").forEach((button) => {
  button.addEventListener("click", async () => {
    const code = button.parentElement?.querySelector("code");
    if (!code) return;

    try {
      await navigator.clipboard.writeText(code.innerText);
      button.textContent = "Copied";
      window.setTimeout(() => {
        button.textContent = "Copy";
      }, 1500);
    } catch {
      button.textContent = "Select";
    }
  });
});
