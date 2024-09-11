/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      backgroundColor: {
        'custom-bg': '#274DCC',
        'custom-bg-darkblue-opacity': 'rgba(2, 31, 135, 0.5)',
        'custom-bg-3': '#C1D3FF'

      },
      colors: {
        'custom-color': ' #27429B',
        'custom-color-2': '#69DBFF',
        'custom-color-3': '#D8DFF4 ',
        'ccc-color': '#F5F6F8'
      },
      borderColor: {
        'custom-border': '#657DE1',
        'custom-border-2': '#ABBCEB',
        'custom-border-3': '#D8DFF4',
      },
      boxShadowColor: {
        'custom-shadow': '#CAD4F2',
      },
    },
  },
  plugins: [],
}