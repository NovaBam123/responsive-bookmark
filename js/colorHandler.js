// get dan remove color from user choice
const formControls= [nameSite, urlSite];

const setInputColor = (input, color) => {
  input.classList.add('custom-colored');
  input.style.setProperty('--user-color', color);
};
const removeColorProperty= (input, color)=>{
  input.classList.remove('custom-colored');
  input.style.removeProperty('--user-color', color);
}
document.querySelectorAll('.color-box').forEach(el => {
  el.addEventListener('click', () => {
    const color = el.style.backgroundColor;
    formControls.forEach(input => setInputColor(input, color));
    selectedColor.value = color; 
  });
});

const isLightColor= (color)=> {
    // Ubah ke format RGB dulu
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);

    // Hitung brightness (rumus standard W3C)
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    
    // Kalo brightness > 128 berarti warna terang
    return brightness > 128;
}

const rgbToHex = (rgb) => {
    const result = rgb.match(/\d+/g);
    if (!result || result.length !== 3) return '#ffffff'; // fallback warna terang

    return (
        '#' +
        result.map(num => {
            const hex = parseInt(num).toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        }).join('')
    );
};
