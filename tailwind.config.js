module.exports = {
  prefix: "",
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["./src/**/*.{html,ts}"],
  },
  darkMode: "media",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
    extend: {
      colors: {
        inherit: "inherit",
        transparent: "transparent",
        current: "currentColor",

        "gray-900": "var(--tui-base-01)",
        "gray-800": "var(--tui-base-02)",
        "gray-700": "var(--tui-base-03)",
        "gray-600": "var(--tui-base-04)",
        "gray-500": "var(--tui-base-05)",
        "gray-400": "var(--tui-base-06)",
        "gray-300": "var(--tui-base-07)",
        "gray-200": "var(--tui-base-08)",
        "gray-100": "var(--tui-base-09)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
