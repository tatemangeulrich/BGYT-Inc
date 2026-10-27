/**
 * BGYT Inc™ — Theme Controller (Dark / Light Mode)
 */

class ThemeManager {
  constructor() {
    this.theme = localStorage.getItem("bgyt_theme") || "dark";
  }

  init() {
    this.applyTheme(this.theme, false);
    this.bindEvents();
  }

  applyTheme(theme, persist = true) {
    this.theme = theme;
    if (persist) {
      localStorage.setItem("bgyt_theme", theme);
    }

    const root = document.documentElement;
    if (theme === "light") {
      root.classList.remove("dark");
      root.classList.add("light");
    } else {
      root.classList.remove("light");
      root.classList.add("dark");
    }

    // Update icons
    document.querySelectorAll(".theme-toggle-icon").forEach(icon => {
      icon.textContent = theme === "light" ? "dark_mode" : "light_mode";
    });

    window.dispatchEvent(new CustomEvent("bgyt_theme_changed", { detail: { theme } }));
  }

  toggle() {
    const nextTheme = this.theme === "dark" ? "light" : "dark";
    this.applyTheme(nextTheme);
  }

  bindEvents() {
    document.querySelectorAll("[data-theme-toggle]").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        this.toggle();
      });
    });
  }
}

window.bgytTheme = new ThemeManager();
document.addEventListener("DOMContentLoaded", () => {
  window.bgytTheme.init();
});
