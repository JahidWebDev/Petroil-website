
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Fill': '#282828;',
        'blackpearl': '#F40404',
        'red': ': #F40404',
        'white:': '#FFF',
        'gray:': '#6C6C6C',
        'black:': '#6C6C6C',
        'black2:': '#1F1F1F',
      },
      maxWidth: {
        'container': '1141px',
      },
      fontFamily: {
        'Poppins': ['Poppins', 'serif']
    },
    backgroundImage: {
      'hero-bannar': "url('.//src/assets/bannar.png')",
      'Services': "url('.//src/assets/Services.jpg')",
      'Services2': "url('.//src/assets/Services2.jpg')",
      'Services3': "url('.//src/assets/Services-3.jpg')",
      'Companyimg': "url('.//src/assets/Company-img.jpg')",
      'Cardimg': "url('.//src/assets/Cradimg1.png')",
      'Cardimg1': "url('.//src/assets/Cradimg2.png')",
      'Cardimg2': "url('.//src/assets/Cradimg3.png')",
      'Map': "url('.//src/assets/Maps.png')",
      'Chat1': "url('.//src/assets/Cert1.png')",
      'Chat2': "url('.//src/assets/Cert2.png')",
         
    },
    },
  },
  plugins: [],
}