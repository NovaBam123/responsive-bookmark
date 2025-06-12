// Manipulate DOM, update element
const displayData= (newData)=> {
    bookmarkedContent.forEach(el=> el.remove());
    // bookmarkedUser.innerHTML= '';
    const newEl= newData.map(({ id, nama, url, color, timeCreated})=> {
        const hexColor = color.startsWith('rgb') ? rgbToHex(color): color;
        const isLight = isLightColor(hexColor);
        const textClass = isLight ? 'text-dark' : 'text-light';
        const textGray= isLight ? 'text-secondary': 'text-light';
        
        //Add Date dan Time
        const options = {
            year: 'numeric', month: 'long',
            day: 'numeric', hour: 'numeric',
            minute: 'numeric', second: 'numeric',
            hour12: true
        }
        const createdAt= new Date(timeCreated).toLocaleString('en-US', options);
        
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
                    <p class="mb-0 bookmark-name ${textClass}">${nama}</p>
                    <small class="fw-bold small-date ${textGray}">
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

displayData(data);
btnSubmit.addEventListener('click', ()=> getData());
btnCancelSubmit.addEventListener('click', ()=> resetModal());
