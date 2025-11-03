export default function initScroll() {
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");
  const htmlElement = document.documentElement;

  // --- Theme Logic ---
  const storedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const initTheme = () => {
    if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
      htmlElement.classList.add("dark");
      if (themeIcon) {
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
      }
    } else {
      htmlElement.classList.remove("dark");
      if (themeIcon) {
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
      }
    }
  };

  const toggleTheme = () => {
    if (htmlElement.classList.contains("dark")) {
      htmlElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      if (themeIcon) {
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
      }
    } else {
      htmlElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      if (themeIcon) {
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
      }
    }
  };

  if (themeToggle) themeToggle.addEventListener("click", toggleTheme);
  initTheme();

  // --- Mobile Menu Logic ---
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });

    document.querySelectorAll("#mobile-menu a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
      });
    });
  }

  // --- Skill Tag Highlighting Logic ---
  // --- Anchor fragment handling (delegated click handler) ---
  // Use event delegation to reliably catch clicks on anchors, including
  // dynamically rendered ones. This prevents timing issues if handlers
  // are attached before React has rendered the DOM.
  document.addEventListener("click", (e) => {
    const anchor = e.target.closest && e.target.closest('a[href^="#"]');
    if (!anchor) return;

    const href = anchor.getAttribute("href");
    if (!href || !href.startsWith("#")) return;
    const id = href.slice(1);

    // Debug: log anchor clicks in the console to help troubleshooting
    // (safe to remove later)
    // console.debug(`anchor click: ${href}`);

    // If href="#" (empty id), scroll to top
    if (!id) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      try {
        history.replaceState(null, "", "#");
      } catch (err) {}
      if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.add("hidden");
      }
      return;
    }

    const target = document.getElementById(id);
    if (target) {
      e.preventDefault();
      const y = target.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      try {
        history.replaceState(null, "", `#${id}`);
      } catch (err) {}
      if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.add("hidden");
      }
    }
  });

  const skillsContainer = document.getElementById("skills-container");
  if (!skillsContainer) return;

  const skillTags = skillsContainer.querySelectorAll(".skill-tag");
  const highlightableItems = document.querySelectorAll(".highlightable");
  let activeSkill = null;

  skillTags.forEach((tag) => {
    tag.classList.add(
      "px-4",
      "py-2",
      "bg-slate-200",
      "text-slate-700",
      "dark:bg-slate-700",
      "dark:text-slate-200",
      "rounded-full",
      "font-semibold",
      "text-sm",
      "cursor-pointer",
      "transition-all",
      "duration-300",
      "hover:bg-sky-500",
      "hover:text-white",
      "hover:shadow-md"
    );

    tag.addEventListener("click", () => {
      const skill = tag.dataset.skill;

      if (activeSkill === skill) {
        // Deactivate
        activeSkill = null;
        tag.classList.remove("active");
        highlightableItems.forEach((item) => {
          item.classList.remove("dimmed", "highlighted");
        });
      } else {
        // Activate
        activeSkill = skill;
        skillTags.forEach((t) => t.classList.remove("active"));
        tag.classList.add("active");

        highlightableItems.forEach((item) => {
          const itemSkills = (item.dataset.skills || "").split(" ");
          if (itemSkills.includes(skill)) {
            item.classList.remove("dimmed");
            item.classList.add("highlighted");
          } else {
            item.classList.remove("highlighted");
            item.classList.add("dimmed");
          }
        });
      }
    });
  });
}
