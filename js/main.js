const btnSubmit= document.getElementById('btn-submit'),
modalEl = document.getElementById('url-submit'),
colorEl= document.querySelectorAll('.color-box'),
bookmarkedUser= document.getElementById('bookmarked'),
bookmarkedContent= document.querySelectorAll('.div-content'),
settingToggle= document.querySelectorAll('.dropdown-toggle'),
// Color-picker
colorChoose= document.getElementById('color-choose'),
copyBtn= document.getElementById('copy-btn'),
applyBtn= document.getElementById('apply-btn'), 
header= document.getElementById('header'),
//Toast Bootstrap
toastBs = document.getElementById('liveToast'),
toastMessage= document.getElementById('toast-message'),
toastProgress= document.getElementById('toast-progress');

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
    const pickedColor= applyBtn.dataset.color || 'fff';

    let patternURL= /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;  

    if(nameUrl=== '' || dataUrl=== ''){
        showToastBs(pickedColor, 'Data tidak boleh kosong...!')
    }else if(!patternURL.test(dataUrl)){
        showToastBs(pickedColor, 'Url tidak valid..!')
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





