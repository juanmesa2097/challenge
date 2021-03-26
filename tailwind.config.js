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
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
