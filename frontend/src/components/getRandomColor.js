
function getRandomColor() {
    // Generate random RGB values
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    
    // Construct the RGB color string
    return `rgb(${r},${g},${b})`;
  }
  export default getRandomColor;