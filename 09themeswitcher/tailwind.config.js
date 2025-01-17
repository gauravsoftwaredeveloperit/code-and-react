/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  plugins: [],
}

// reember the tailwind.config.js file is a js file so we can use the module.exports or export default syntax to export the configuration object. In this case, we are using the export default syntax. The configuration object has a content property that specifies the files to scan for classes. We are scanning the index.html file and all js, ts, jsx, and tsx files in the src directory. The darkMode property is set to class, which means we will be using the class-based dark mode. The theme property is empty for now, but we can extend it with custom styles later on. The plugins property is also empty for now, but we can add plugins to extend Tailwind CSS functionality.