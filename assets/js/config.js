/**
 * BGYT Inc™ — Tailwind CSS Configuration & Theme Engine
 */
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface-container-highest": "#313540",
        "on-tertiary": "#00354a",
        "tertiary-container": "#6bccff",
        "on-tertiary-container": "#005575",
        "surface-dim": "#0f131d",
        "inverse-on-surface": "#2c303b",
        "on-tertiary-fixed": "#001e2c",
        "surface-container": "#1c1f2a",
        "on-tertiary-fixed-variant": "#004c69",
        "on-primary-container": "#00566a",
        outline: "#859399",
        "error-container": "#93000a",
        "on-secondary-fixed": "#001849",
        "surface-variant": "#313540",
        "inverse-primary": "#00677f",
        "surface-bright": "#353944",
        tertiary: "#b8e3ff",
        "on-secondary": "#002b75",
        "surface-container-low": "#171b26",
        "on-primary": "#003543",
        error: "#ffb4ab",
        "surface-container-lowest": "#0a0e18",
        "on-surface-variant": "#bbc9cf",
        "on-error-container": "#ffdad6",
        "on-surface": "#dfe2f1",
        secondary: "#b3c5ff",
        "outline-variant": "#3c494e",
        primary: "#a5e7ff",
        "primary-fixed-dim": "#47d6ff",
        "on-primary-fixed-variant": "#004e60",
        "primary-container": "#00d2ff",
        "on-primary-fixed": "#001f28",
        "on-error": "#690005",
        "surface-tint": "#47d6ff",
        "on-background": "#dfe2f1",
        "on-secondary-fixed-variant": "#003fa4",
        "inverse-surface": "#dfe2f1",
        "secondary-fixed-dim": "#b3c5ff",
        "secondary-container": "#0266ff",
        "secondary-fixed": "#dae1ff",
        "tertiary-fixed-dim": "#7bd0ff",
        "tertiary-fixed": "#c4e7ff",
        surface: "#0f131d",
        "surface-container-high": "#262a35",
        background: "#0f131d",
        // Extended cyber palette
        cyber: {
          void: "#05070B",
          obsidian: "#0B0F19",
          slate: "#111827",
          cyan: "#00D2FF",
          blue: "#0266FF",
          sky: "#38BDF8",
        }
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem"
      },
      spacing: {
        "margin-mobile": "1.25rem",
        "gutter-mobile": "1rem",
        margin: "3rem",
        "space-sm": "0.5rem",
        gutter: "1.5rem",
        "space-md": "1rem",
        "space-xl": "2.5rem",
        "space-lg": "1.5rem",
        "space-xs": "0.25rem"
      },
      fontFamily: {
        "display-hero": ["Space Grotesk", "sans-serif"],
        "headline-lg": ["Space Grotesk", "sans-serif"],
        "headline-md": ["Space Grotesk", "sans-serif"],
        "headline-sm": ["Space Grotesk", "sans-serif"],
        "title-md": ["Space Grotesk", "sans-serif"],
        "body-lg": ["Geist", "sans-serif"],
        "body-md": ["Geist", "sans-serif"],
        "body-sm": ["Geist", "sans-serif"],
        "label-code": ["JetBrains Mono", "monospace"],
        "label-badge": ["JetBrains Mono", "monospace"]
      },
      fontSize: {
        "display-hero": ["4.5rem", { lineHeight: "5rem", letterSpacing: "-0.04em", fontWeight: "700" }],
        "display-hero-mobile": ["2.75rem", { lineHeight: "3.25rem", letterSpacing: "-0.03em", fontWeight: "700" }],
        "headline-lg": ["3rem", { lineHeight: "3.5rem", letterSpacing: "-0.03em", fontWeight: "700" }],
        "headline-lg-mobile": ["2rem", { lineHeight: "2.5rem", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-md": ["2rem", { lineHeight: "2.5rem", letterSpacing: "-0.02em", fontWeight: "600" }],
        "headline-sm": ["1.5rem", { lineHeight: "2rem", letterSpacing: "-0.01em", fontWeight: "600" }],
        "title-md": ["1.125rem", { lineHeight: "1.75rem", letterSpacing: "0em", fontWeight: "600" }],
        "body-lg": ["1.125rem", { lineHeight: "1.75rem", letterSpacing: "-0.01em", fontWeight: "400" }],
        "body-md": ["1rem", { lineHeight: "1.6rem", letterSpacing: "-0.01em", fontWeight: "400" }],
        "body-sm": ["0.875rem", { lineHeight: "1.4rem", letterSpacing: "0em", fontWeight: "400" }],
        "label-code": ["0.8125rem", { lineHeight: "1.25rem", letterSpacing: "0.06em", fontWeight: "500" }],
        "label-badge": ["0.75rem", { lineHeight: "1rem", letterSpacing: "0.1em", fontWeight: "600" }]
      }
    }
  }
};
