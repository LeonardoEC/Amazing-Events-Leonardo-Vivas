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

// Buscador
search.addEventListener("keyup", (e) => {
    dataInput = e.target.value.toLowerCase()
    filtroSerach = events.filter(f => f.category.toLowerCase().includes(dataInput) 
                                || f.name.toLowerCase().includes(dataInput) 
                                || f.date.includes(dataInput))
})

// Checkbox
formCheck.addEventListener("click", e =>{
    if(e.target.checked){
        checked.push(e.target.value.toLowerCase())
    }
    else{
        checked = checked.filter(notCheck => notCheck !== e.target.value)
    }
    
})

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
    //console.log(checked.includes(filtroSerach.category))
    //console.log(filtroSerach.includes(checked))
}



// render
createCategory(categoryFilter(events))
contenedorHome.innerHTML = createcards(events)

renderFilter()

