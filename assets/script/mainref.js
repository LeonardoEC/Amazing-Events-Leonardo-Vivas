console.log("Estoy en mainref")
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
//funciones de filtrado
function categoryFilter(evento) {
    const categorysfilter = evento.map(eventos => eventos.category)
    const category = categorysfilter.reduce((c, e) => {
        if (!c.includes(e)) {
            c.push(e)
        }
        return c
    }, [])
    return category
}
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
    }
    else{
        checked = checked.filter(notCheck => notCheck !== e.target.value)
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

function renderFilter(){
    //console.log(checked.includes("food"))
    //console.log(checked)
    //console.log(filtroSerach)
    //console.log(checked.includes(dataInput))
    //console.log(filtroSerach.includes(checked))

    //filtrar searh
    filtroSerach = events.filter(f => f.category.toLowerCase().includes(dataInput) 
    || f.name.toLowerCase().includes(dataInput) 
    || f.date.includes(dataInput))

    //filtroCheck
    filtroCheck = events.filter(evento => checked.includes(evento.category))
    console.log(filtroCheck);

    //renderCard
    
    if(filtroSerach.length > 0){
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
    
   
    
    

}


// render
createCategory(categoryFilter(events))
renderFilter()

