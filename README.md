# React + Vite

- npm create vite@latest .
- gut react stuff not used
- npm i react-icons
- npm install -D tailwindcss postcss autoprefixer 
- npx tailwindcss init -p

***in tailwind.config.js***
- content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}",]

- in src/index.css  
@tailwind base;  
@tailwind components;  
@tailwind utilities;

***In the items.json file, the path to the image must be from the public folder or sub folder of public***
- "imgUrl": "/imgs/special.jpg"
- dataArray[index].imgUrl

### I used .map(() => (dataArray.key)) to render buttons href and id for items and decided to not do a carousel
🐾