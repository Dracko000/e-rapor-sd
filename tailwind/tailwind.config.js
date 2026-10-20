/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.css'],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        erp: {
          teal: {
            50: "#f0fdfa",
            100: "#ccfbf1",
            500: "#14b8a6",
            600: "#0d9488",
            700: "#0f766e",
            800: "#115e59",
            900: "#134e4a",
            950: "#042f2e",
          },
          slate: {
            400: "#94a3b8",
            500: "#64748b",
            600: "#475569",
            700: "#334155",
            800: "#1e293b",
            900: "#0f172a",
            950: "#020617",
          },
          amber: {
            500: "#f59e0b",
            600: "#d97706",
            700: "#b45309",
          },
          bg: "#f3f7f6",
          surface: "#ffffff",
          "surface-muted": "#f7faf9",
          border: "#e2e9e7",
          "border-strong": "#d5dfdd",
        },
      },
      fontFamily: {
        sans: [
          "Segoe UI Variable Text",
          "Segoe UI",
          "system-ui",
          "-apple-system",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        display: [
          "Segoe UI Variable Display",
          "Segoe UI",
          "system-ui",
          "-apple-system",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      borderRadius: {
        control: "10px",
        card: "16px",
        panel: "18px",
        hero: "24px",
      },
      boxShadow: {
        "erp-xs": "0 1px 2px rgba(15, 23, 42, 0.05)",
        "erp-sm":
          "0 1px 2px rgba(15, 23, 42, 0.04), 0 10px 24px -20px rgba(15, 23, 42, 0.28)",
        "erp-md": "0 18px 40px -24px rgba(15, 23, 42, 0.38)",
      },
      ringColor: {
        erp: "rgba(13, 148, 136, 0.18)",
      },
    },
  },
  plugins: [],
};
