document.addEventListener("DOMContentLoaded", () => {
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
      themeIcon.classList.remove("fa-sun");
      themeIcon.classList.add("fa-moon");
    } else {
      htmlElement.classList.remove("dark");
      themeIcon.classList.remove("fa-moon");
      themeIcon.classList.add("fa-sun");
    }
  };

  const toggleTheme = () => {
    if (htmlElement.classList.contains("dark")) {
      htmlElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      themeIcon.classList.remove("fa-moon");
      themeIcon.classList.add("fa-sun");
    } else {
      htmlElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      themeIcon.classList.remove("fa-sun");
      themeIcon.classList.add("fa-moon");
    }
  };

  initTheme();

  themeToggle.addEventListener("click", toggleTheme);

  // --- Mobile Menu Logic ---

  mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  document.querySelectorAll("#mobile-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });

  // --- Skill Tag Highlighting Logic ---

  const skillsContainer = document.getElementById("skills-container");
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
          const itemSkills = item.dataset.skills.split(" ");
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
});
