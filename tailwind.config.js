/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        cheefImage:"url('./src/assets/home/chef-service.jpg')",
        fechardMenu:"url('./src/assets/home/featured.jpg')"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

