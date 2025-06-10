// Manipulate DOM, update element
const displayData= (newData)=> {
    // console.log('Data diSimpan: ', data);
    bookmarkedContent.forEach(el=> el.remove());
    const newEl= newData.map(({ id, nama, url, color })=> {
        //Add Date dan Time
        const options = {
            year: 'numeric', month: 'long',
            day: 'numeric', hour: 'numeric',
            minute: 'numeric', second: 'numeric',
            hour12: true
        }
        const createdAt= new Date().toLocaleString('en-US', options);
        // // Add warna Text
        // const textColor= isLightColor(color)? '#000 !important' : '#fff !important';


        return `
            <div 
                class="col-10 col-md-4 d-flex justify-content-between align-items-center rounded-pill url ps-4 py-2 div-content m-1" 
                    style="background-color: ${color}"
                    data-id= "${id}"
                    data-name= "${nama}"
                    data-color= "${color}"
                    data-url= "${url}"
                >
                <div class="content">
                    <p class="mb-0 bookmark-name">${nama}</p>
                    <small class="text-secondary fw-bold small-date">
                        ${createdAt}
                    </small>
                </div>        
                <div class="dropdown dropup setting">
                    <button 
                        type="button"
                        id="btn-setting"
                        class="btn btn-secondary rounded-circle dropdown-toggle custom"
                        data-bs-toggle="dropdown"
                        >
                        <i class="bi bi-gear-wide-connected fs-6 text-dark icon"></i>
                    </button>
                    <ul class="dropdown-menu bg-altblue list-custom">
                        <li>
                            <a href="${url}" target="_blank" class="text-decoration-none text-light">
                                <i class="bi bi-bookmark-star text-light me-1"></i> Visit
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-decoration-none text-light">
                                <i class="bi bi-pencil text-light me-2"></i>Edit
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-decoration-none text-light">
                                <i class="bi bi-trash3 text-light me-2"></i>Delete
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        `
    }).join('');
    bookmarkedUser.innerHTML = newEl;
}    

const isLightColor= (color)=> {
    // Ubah ke format RGB dulu
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);

    // Hitung brightness (rumus standard W3C)
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    
    // Kalo brightness > 128 berarti warna terang
    return brightness > 128;
}


displayData(data);
btnSubmit.addEventListener('click', ()=> getData());
btnCancelSubmit.addEventListener('click', ()=> resetModal());
