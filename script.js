// Function to generate a random hexadecimal color code
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  // Adding event listener to the button
  document.getElementById('change-color-btn').addEventListener('click', () => {
    const colorBox = document.getElementById('colorBox');
    const randomColor = getRandomColor();
    colorBox.style.backgroundColor = randomColor;
  });
  