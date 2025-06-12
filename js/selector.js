// Bookmark content
const colorEl= document.querySelectorAll('.color-box'),
bookmarkedUser= document.getElementById('bookmarked'),
bookmarkedContent= document.querySelectorAll('.div-content'),
settingToggle= document.querySelectorAll('.dropdown-toggle'),

// Color-picker
colorChoose= document.getElementById('color-choose'),
copyBtn= document.getElementById('copy-btn'),
applyBtn= document.getElementById('apply-btn'), 
header= document.getElementById('header'),

// Toast Bootstrap
toastBs = document.getElementById('liveToast'),
toastMessage= document.getElementById('toast-message'),
toastProgress= document.getElementById('toast-progress'),
toastIcon= document.getElementById('toast-icon'),

// LocalStorage to lokal harddisk
exportBtn= document.getElementById('export-btn'),
importBtn= document.getElementById('import-btn'),
deleteBtn= document.getElementById('delete-btn');
fileInput= document.getElementById('file-input');

// Modal
let modalPopup= document.getElementById('bs-modal'),
modalTitle= document.getElementById('modal-title'),
btnCancelSubmit= document.getElementById('btn-cancel'),
btnSubmit= document.getElementById('btn-submit');

// Form input
let nameSite= document.getElementById('name-site');
let urlSite= document.getElementById('url-address');
let selectedColor= document.getElementById('selected-color');