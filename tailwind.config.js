
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        WhiteTheme: {
          primary: "#41CDEC",
          secondary: "#32D4AE",
          accent: "#37cdbe",
          neutral: "#3D3F57",
          "base-100": "#ffffff",
        },
      },
      "light",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
  
}
