let contenedorPast = document.getElementById("container-main-bot-past-event")
const formCheck = document.getElementById("main-form")

const search = document.getElementById("serach")

let dataInput = ""
let filtroSerach = []
let checked = []
let minchecked = []
let filtroCheck = [] 

search.addEventListener("keyup", (e) => {
    dataInput = e.target.value.toLowerCase()
    
    renderFilter()
})

formCheck.addEventListener("click", e =>{
    if(e.target.checked){
        checked.push(e.target.value)
        minchecked.push(e.target.value.toLowerCase())
    }
    else{
        checked = checked.filter(notCheck => notCheck !== e.target.value)
        minchecked = minchecked.filter(notCheck => notCheck !== e.target.value.toLowerCase())
    }
    renderFilter()
})

function createCategory(evento) {

    let bform = ""
    for (let check of evento) {
        bform += `
        <label id="label-switch" for="category[]"><input class="check-box" type="checkbox" name="${check}" id="${check}" value=${check}> ${check}</label>
        `
    }
    formCheck.innerHTML = bform
}



function createcards(evento){

    pasEvents = evento.filter(e =>e.date < eventsCDate)


    let card = ""
    for(let eventos of pasEvents){

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
                            <button class="card-but"><a href="details.html?id=${eventos._id}">More Info</a></button>
                        </div>
                    </section>`
    }
    return card
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
        contenedorPast.innerHTML = createcards(filtroSerach)
        let finalControl = filtroSerach.filter(e => e.category.includes(checked.toString()))
        contenedorPast.innerHTML = createcards(finalControl)
    } else if(filtroSerach == 0){
        contenedorPast.innerHTML = `<section class="container-search-fail">
                                        <h3 class="title-search-fail">Search Failed</h3>
                                        <img class="img-search-fail" src="assets/img/pngwing.com.png" alt="image">
                                        <p class="text-search-fail">sorry but "${dataInput}" not found</p>
                                        <p class="text-search-fail">
                                            Try to search by the title, date or category of the event
                                            example: Food or Jurassic Park
                                        </p>
                                    </section>`
        }
    
}


// render
createCategory(category)
renderFilter()





