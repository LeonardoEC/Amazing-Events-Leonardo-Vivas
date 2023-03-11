// posiciones en el html
const contenedorHome = document.getElementById("container-main-bot-home") 
const formCheck = document.getElementById("main-form")
// elementos HTML
const search = document.getElementById("serach")
// variables
let dataInput = ""
let filtroSerach = []
let checked = []
let filtroCheck = [] 

//-----------------------------------------------
// Buscador
search.addEventListener("keyup", (e) => {
    dataInput = e.target.value.toLowerCase()
    
    renderFilter()
})

// Checkbox
formCheck.addEventListener("click", e =>{
    if(e.target.checked){
        checked.push(e.target.value)
        //minchecked.push(e.target.value.toLowerCase())
    }
    else{
        checked = checked.filter(notCheck => notCheck !== e.target.value)
        //minchecked = minchecked.filter(notCheck => notCheck !== e.target.value.toLowerCase())
    }
    renderFilter()
})

//---------------------------------------------
//funciones de render
function createCategory(evento) {

    let bform = ""
    for (let check of evento) {
        bform += `
        <label id="label-switch" for="category[]"><input class="check-box" type="checkbox" name="${check}" id="${check}" value=${check}> ${check}</label>
        `
    }
    formCheck.innerHTML = bform
}

function createcards(evento) {
    let card = ""
    for (let eventos of evento) {

        card += `<section id="card">
                    <figure>
                        <img class="card-body-img" src="${eventos.image}" alt="">
                    </figure>
                    <div class="card-body-top">
                        <h2 class="card-title">${eventos.name}</h2>
                        <p class="card-category">Category: ${eventos.category}</p>
                        <p class="card-date">${eventos.date}</p>
                        <p class="card-descr">${eventos.description}</p>
                    </div>
                    <div class="card-body-bot">
                        <p>$ ${eventos.price}</p>
                        <button class="card-but"><a href="pages/details.html?id=${eventos._id}">More Info</a></button>
                    </div>
                </section>`
    }
    return card
}

function addcards(evento) {
    evento.forEach(even => {let secction = document.createElement("section")
        secction.setAttribute("id","card")
        secction.innerHTML = `
                            <figure>
                                <img class="card-body-img" src="${even.image}" alt="">
                            </figure>
                            <div class="card-body-top">
                                <h2 class="card-title">${even.name}</h2>
                                <p class="card-category">Category: ${even.category}</p>
                                <p class="card-date">${even.date}</p>
                                <p class="card-descr">${even.description}</p>
                            </div>
                            <div class="card-body-bot">
                                <p>$ ${even.price}</p>
                                <button class="card-but"><a href="pages/details.html?id=${even._id}">More Info</a></button>
                            </div>
                            `
        contenedorHome.appendChild(secction)
    })
}

function renderFilter(){

    //filtrar searh --> Devuelve los nombres - fechas - categorias de lo ingresado en searchbar
    filtroSerach = events.filter(f => f.category.toLowerCase().includes(dataInput) 
    || f.name.toLowerCase().includes(dataInput) 
    || f.date.includes(dataInput))
    //----------------------------------------------------------------------------//
    //filtroCheck --> Devuelve los elementos chequeados
    filtroCheck = events.filter(evento => checked.includes(evento.category))
    //---------------------------------------------------------------------------//

    //renderCard
    if(filtroSerach.length > 0){
        contenedorHome.innerHTML = createcards(filtroSerach)
        let finalControl = filtroSerach.filter(e => e.category.includes(checked.toString()))
        contenedorHome.innerHTML = createcards(finalControl)
        //contenedorHome.innerHTML = createcards(filtroCheck)
    } 
    else if(filtroSerach == 0){
        contenedorHome.innerHTML = `<section class="container-search-fail">
                                        <h3 class="title-search-fail">Search Failed</h3>
                                        <img class="img-search-fail" src="assets/img/pngwing.com.png" alt="image">
                                        <p class="text-search-fail">sorry but "${dataInput}" not found</p>
                                        <p class="text-search-fail">
                                            Try to search by the title, date or category of the event
                                            example: Food or Jurassic Park
                                        </p>
                                    </section>`
        } 
        if(filtroCheck.length > 0){
            contenedorHome.innerHTML = createcards(filtroCheck);
            let finalControlBy = filtroCheck.filter(ch => ch.name.toLowerCase().includes(dataInput.toString()));
            contenedorHome.innerHTML = createcards(finalControlBy);
        }
}
//---------------------------------------------
// render
createCategory(category)
renderFilter()

































/*
    if(filtroCheck.length > 0){
        contenedorHome.innerHTML = createcards(filtroCheck)
        if(filtroSerach.length < 34){
            addcards(filtroSerach)
        }
    } else if(filtroCheck.length == 0){
        createcards(events)
    }
    */






    /*
    if(filtroSerach.length > 0 ){
        contenedorHome.innerHTML = createcards(filtroSerach)
        if(checked.length > 0){
            contenedorHome.innerHTML = createcards(filtroCheck)
        }
    }else if(filtroSerach.length == 0){
        contenedorHome.innerHTML = `<section class="container-search-fail">
        <h3 class="title-search-fail">Search Failed</h3>
        <img class="img-search-fail" src="assets/img/pngwing.com.png" alt="image">
        <p class="text-search-fail">sorry but "${dataInput}" not found</p>
        <p class="text-search-fail">
            Try to search by the title, date or category of the event
            example: Food or Jurassic Park
        </p>
    </section>`
    }else if(checked.length > 0){
        contenedorHome.innerHTML = createcards(filtroCheck)
    }
    */
    