// edit, Delete dsb
bookmarkedUser.addEventListener('click', e=> {
    const isEdit= e.target.classList.contains('bi-pencil');
    const isDelete= e.target.classList.contains('bi-trash');
    const divContent= e.target.closest('.div-content');
    let id=  divContent.dataset.id;
    let nameUrl= divContent.dataset.name;
    let url= divContent.dataset.url;
    let color= divContent.dataset.color;
    activeId= id;
    
    if(!divContent) return;
    if(isEdit || e.target.textContent.trim()=== 'Edit'){
        handleEdit(nameUrl, url, color);
    }else if(isDelete || e.target.textContent.trim()=== 'Delete'){
        handleDelete(id);
    }
})
// Editing
const handleEdit= (nameUrl, url, color)=> {
    const modalEdit= new bootstrap.Modal(modalPopup);
    
    modalEdit.show();
    modalTitle.textContent= 'Edit For a New URL';
    modalTitle.classList.add('fs-5');
    btnSubmit.textContent= 'Update Data';
    nameSite.value= nameUrl;
    urlSite.value= url;
    selectedColor.value= color;
    formControls.forEach(input => setInputColor(input, color));
}
// Deleting
const handleDelete= (id)=> {
    // const myNewdata= {
    //     id: 'id-007',
    //     nama: 'Nova',
    //     url: 'https://nov-codingnote.netlify.app/',
    //     color: '#505658',
    //     timeCreated: Date.now(),
    // };
    let idForDelete= data.findIndex(val=> val.id=== id);
    let konfirmasi= confirm('Are you sure want delete this bookmark?')
    if(!konfirmasi) return;
    if(idForDelete> -1){
        const pickedColor= applyBtn.dataset.color || 'fff';
        data.splice(idForDelete, 1);
        localStorage.setItem('Bootstrap-bookmark', JSON.stringify(data));
        displayData(data);
        showToastBs(pickedColor, 'Data Berhasil dihapus.','bi bi-trash3 text-info fs-6 me-2');
    }
}





  
 