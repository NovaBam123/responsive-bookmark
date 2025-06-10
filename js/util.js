// edit, Delete dsb
bookmarkedUser.addEventListener('click', e=> {
    const isEdit= e.target.classList.contains('bi-pencil');
    const divContent= e.target.closest('.div-content');
    
    // let titleUrl=  e.target.classList.contains('bookmark-name');
    if(!divContent) return;
    if(isEdit || e.target.textContent.trim()=== 'Edit'){
        handleEdit(divContent);
    }
    
    // if(divContent){
    //     activeId= id;
 
    //     if(isEdit || e.target.textContent.trim()=== 'Edit'){
           
    //     }
    // }
})

const handleEdit= (element)=> {
        let id = element.dataset.id;``
        let nameUrl= element.dataset.name;
        let color= element.dataset.color;
        let url= element.dataset.url;
        const modalEdit= new bootstrap.Modal(modalPopup);
        
        modalEdit.show();
        activeId = id;
        modalTitle.textContent= 'Edit For a New URL';
        modalTitle.classList.add('fs-5');
        btnSubmit.textContent= 'Update Data';
        nameSite.value= nameUrl;
        urlSite.value= url;
        formControls.forEach(input => setInputColor(input, color));
}



  
 