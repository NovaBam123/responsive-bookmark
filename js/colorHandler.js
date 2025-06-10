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