// Custom Bootstrap Modal and Toast 
settingToggle.forEach(toggle => {
	new bootstrap.Dropdown(toggle);
});

const newToggle = bookmarkedUser.querySelector('.dropdown-toggle:last-of-type');
if(newToggle) new bootstrap.Dropdown(newToggle);

const resetModal= ()=> {
	formControls.forEach(input=> removeColorProperty(input, '#fff'));
    modalTitle.textContent= 'Add New URL';
    modalTitle.classList.add('fs-5');
    btnSubmit.textContent= 'Submit';
	nameSite.value= '';
	urlSite.value= '';
	selectedColor.value= '';
}

copyBtn.addEventListener('click', ()=> {
    const pickedColor= colorChoose.value
    navigator.clipboard.writeText(pickedColor)
    .then(()=> {
        applyBtn.dataset.color= pickedColor;
        showToastBs(pickedColor, 'Copied color.');
        }).catch(err=> console.log('Failed to Copy', err));
})

applyBtn.addEventListener('click', ()=> {
    const pickedColor= colorChoose.value;
    header.classList.remove('bg-primary');
    header.style.background= pickedColor;
    showToastBs(pickedColor, 'Applying color to navbar.');
})

const showToastBs= (picked, message, iconClass= 'bi bi-check-circle text-info fs-6 me-2')=> {
    // Reset animasi
    toastProgress.style.animation = 'none';
    toastProgress.offsetHeight; // reflow
    toastProgress.style.animation = null;

    toastIcon.className= iconClass;
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

//threshold bootstrap warna text untuk latar belakang gelap atau terang:
