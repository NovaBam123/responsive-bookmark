
const exportToHd= ()=> {
    const data= {};
    const pickedColor= applyBtn.dataset.color || 'fff';
    const keys= ['Bootstrap-bookmark'];
    keys.forEach(key=> {
        const value= localStorage.getItem(key);
        if(value){
            data[key]= value;
        }
    })
    if(Object.keys(data).length=== 0){
        showToastBs(pickedColor, 'Tidak ada data untuk diekspor..!', 'bi bi-exclamation-triangle-fill text-danger fs-6 me-2')
        return;
    }
    const blob= new Blob([JSON.stringify(data, null, 2)], {
        type: 'application/json',
    })

    if(window.navigator.msSaveBlob) {
        window.navigator.msSaveBlob(blob, 'Bs-Bookmark');
        showToastBs(pickedColor, 'Transfer Berhasil.');
    }else {
        const link= document.createElement('a');
        link.href= URL.createObjectURL(blob);
        link.download= 'Bs-Bookmark';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        showToastBs(pickedColor, 'Transfer Berhasil.');
    }
}

const importToBrowser= ()=> {
    const pickedColor= applyBtn.dataset.color || 'fff';
    if(fileInput.files.length=== 0) {
        showToastBs(pickedColor, 'Silahkan pilih file..!', 'bi bi-exclamation-triangle-fill text-danger fs-6 me-2')
    }
    const file= fileInput.files[0];
    const reader= new FileReader();
    
    reader.onload= (e)=> {
        try {
             const data = JSON.parse(e.target.result);
            Object.keys(data).forEach(key => {
                localStorage.setItem(key, data[key]);
            });
            showToastBs(pickedColor, 'Upload data bookmark ke browser berhasil.');
        }catch(err){
            showToastBs(pickedColor, 'Gagal upload data bookmark kebrowser..!');
        }
    };
    reader.readAsText(file);
}

const deleteLocalStorage= ()=> {
    const pickedColor= applyBtn.dataset.color || 'fff';
    let konfirmasi= confirm('Peringatan! Seluruh data localStorage akan dihapus?')
    if(konfirmasi){
        localStorage.clear();
        showToastBs(pickedColor, 'Data Berhasil dihapus.','bi bi-trash3 text-info fs-6 me-2');
        data= [];
        displayData(data);
    }
}

exportBtn.addEventListener('click', exportToHd);
importBtn.addEventListener('click', importToBrowser);
deleteBtn.addEventListener('click', deleteLocalStorage);