// Custom Bootstrap Modal and Toast 
settingToggle.forEach(toggle => {
	new bootstrap.Dropdown(toggle);
});

const newToggle = bookmarkedUser.querySelector('.dropdown-toggle:last-of-type');
if(newToggle) new bootstrap.Dropdown(newToggle);

const resetModal= ()=> {
	nameSite.value= '';
	urlSite.value= '';
	formControls.forEach(input=> removeColorProperty(input, '#fff'));
	selectedColor.value= '';
}

copyBtn.addEventListener('click', ()=> {
    const pickedColor= colorChoose.value
    navigator.clipboard.writeText(pickedColor)
    .then(()=> {
        applyBtn.dataset.color= pickedColor;
        showToastBs(pickedColor, 'Copied color..!');
        }).catch(err=> console.log('Failed to Copy', err));
    console.log(pickedColor);
})

applyBtn.addEventListener('click', ()=> {
    const pickedColor= colorChoose.value;
    header.classList.remove('bg-primary');
    header.style.background= pickedColor;
    showToastBs(pickedColor, 'Applying color to navbar!');
})

const showToastBs= (picked, message)=> {
    // Reset animasi
    toastProgress.style.animation = 'none';
    toastProgress.offsetHeight; // reflow
    toastProgress.style.animation = null;

    toastMessage.innerText= message;
    toastBs.classList.add('show');
    toastBs.style.background= `linear-gradient(90deg, black, ${picked}, black)`;
    const toastBootstrap= bootstrap.Toast.getOrCreateInstance(toastBs, {
        autohide: true,
        delay: 3000,
        animation: false
    })
    toastBootstrap.show();
}