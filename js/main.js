const btnSubmit= document.getElementById('btn-submit'),
modalEl = document.getElementById('url-submit'),
colorEl= document.querySelectorAll('.color-box'),
bookmarkedUser= document.getElementById('bookmarked'),
bookmarkedContent= document.querySelectorAll('.div-content');
settingToggle= document.querySelectorAll('.dropdown-toggle');

let nameSite= document.getElementById('name-site');
let urlSite= document.getElementById('url-address');
let selectedColor= document.getElementById('selected-color');
let activeId= null;
let isUpdate= false; 

let data= JSON.parse(localStorage.getItem('Bootstrap-bookmark')) || [];
const getData= ()=> {
    let nameUrl= nameSite.value.trim();
    let dataUrl= urlSite.value.trim();
    let colorUrl= selectedColor.value || 'fff';
    let timeStamp= Date.now();

    let patternURL= /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;  

    if(nameUrl=== '' || dataUrl=== ''){
        alert('input tidak boleh kosong..!');
    }else if(!patternURL.test(dataUrl)){
        alert('Url site tidak valid..!')
    }else {
        const myData= {
            id: `id-${timeStamp}`,
            nama: nameUrl, 
            url: dataUrl, 
            color: colorUrl,
        }
        data.push(myData)    
        localStorage.setItem('Bootstrap-bookmark', JSON.stringify(data));
    }
    displayData(data);
    resetModal();
}

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


// const urlModal = document.getElementById('url-submit');
// urlModal.addEventListener('hidden.bs.modal', () => {
//   // Pastikan semua element di dalam modal kehilangan fokus
//   if (urlModal.contains(document.activeElement)) {
//     document.activeElement.blur(); // Lepas fokus
//   }
// });
// urlModal.addEventListener('hidden.bs.modal', () => {
//   document.getElementById('openModalBtn')?.focus(); // tombol di luar modal
// });
// dark: #34495E;





