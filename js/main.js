const colorEl= document.querySelectorAll('.color-box'),
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
toastProgress= document.getElementById('toast-progress'),
toastIcon= document.getElementById('toast-icon'),

//Util 
settingBtn= document.getElementById('btn-setting');

// Modal
let modalPopup= document.getElementById('bs-modal'),
modalTitle= document.getElementById('modal-title'),
btnCancelSubmit= document.getElementById('btn-cancel'),
btnSubmit= document.getElementById('btn-submit');

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
        showToastBs(pickedColor, 'Data tidak boleh kosong...!', 'bi bi-exclamation-triangle-fill text-danger fs-6 me-2');
    }else if(!patternURL.test(dataUrl)){
        showToastBs(pickedColor, 'Url tidak valid..!', 'bi bi-exclamation-triangle-fill text-danger fs-6 me-2')
    }else {
        const myData= {
            id: `id-${timeStamp}`,
            nama: nameUrl, 
            url: dataUrl, 
            color: colorUrl,
        }
        if(activeId !== null){
            const index= data.findIndex(val=> val.id=== activeId)
            if(index< -1){
                data.push(myData)
            }else {
                data[index]= myData
                activeId= null;
            }
        }
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

// simulasi update data
let arr1 = [{
    id: 1,
    firstName: 'john',
    lastName: 'Doe'
}]
let arr2={
    id: 2,
    firstName: 'Steve',
    age: 25,
    date: new Date().toLocaleString(),
}
arr1[1]= arr2; // id kita cari dengan find index.
// console.log(arr1);
// let array= [1, 2, 3];
// array["name"]= "value"; // membuat properti object
// console.log("02.", array["name"]);
// console.log("03.", array.name)

let js1= [
    { id: 1, nama: "Andi", age: 25},
    { id: 2, name: "Budi", age: 27}
];

let newData=  {id: 1, nama: "Andrew"}
let noteId= 0;
js1[noteId]= newData;
// console.log(js1)



