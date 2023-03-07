// Variables
let contenedorHome = document.getElementById("container-main-bot-home")
let search = document.getElementById("serach") 
let checked = [] 
let filtro
let datoInput

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

/* ---------------------------------------------------------------------------------------------------------------- */


function createCategory(evento) {
    const bodyform = document.getElementById("main-form")
    let bform = ""
    for (let check of evento) {
        bform += `
        <label id="label-switch" for="category[]"><input class="check-box" type="checkbox" name="${check}" id="${check}" value=${check}> ${check}</label>
        `
    }
    bodyform.innerHTML = bform
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

/* ---------------------------------------------------------------------------------------------------------------- */

// Buscador

function barSearch(eventos) {

    search.addEventListener("keyup", (e) => {
        datoInput = e.target.value.toLowerCase()
        
        filtro = eventos.filter(f => f.category.toLowerCase().includes(datoInput) 
                                    || f.name.toLowerCase().includes(datoInput) 
                                    || f.date.includes(datoInput))
        
        EventsFilterByCategory(eventos)
        
        if (filtro.length > 0) {
            contenedorHome.innerHTML = createcards(filtro)
        }
        else {
            contenedorHome.innerHTML = `<section class="container-search-fail">
            <h3 class="title-search-fail">Search Failed</h3>
            <img class="img-search-fail" src="assets/img/pngwing.com.png" alt="image">
            <p class="text-search-fail">sorry but "${datoInput}" not found</p>
            <p class="text-search-fail">
                Try to search by the title, date or category of the event
                example: Food or Jurassic Park
            </p>
        </section>`
        }
        
    })
}

/* checkbox */
function EventsFilterByCategory(eventos) {

    //cartas 
    /*
    if (filtro.length > 0) {
        contenedorHome.innerHTML = createcards(filtro)
    } else if(filtro.length == 0) {
        contenedorHome.innerHTML = `<section class="container-search-fail">
        <h3 class="title-search-fail">Search Failed</h3>
        <img class="img-search-fail" src="assets/img/pngwing.com.png" alt="image">
        <p class="text-search-fail">sorry but "${datoInput}" not found</p>
        <p class="text-search-fail">
            Try to search by the title, date or category of the event
            example: Food or Jurassic Park
        </p>
    </section>`
    }
    */

    if (checked.length == 0) {
        contenedorHome.innerHTML = createcards(eventos)

    } else {
        let rencheck = eventos.filter(evento => checked.includes(evento.category))
        contenedorHome.innerHTML = createcards(rencheck)
    } 
    
}



function checkboxCategory() {
    let checkboxes = document.querySelectorAll("input[type=checkbox]")

    for (let checkbox of checkboxes) {
        checkbox.addEventListener("click", (e) => {

            if (e.target.checked) {
                checked.push(e.target.value)
                EventsFilterByCategory(events)
            } else {
                checked = checked.filter(notcheck => notcheck !== e.target.value)
                EventsFilterByCategory(events)
            }
        })
    }
}




createCategory(categoryFilter(events))
checkboxCategory()
barSearch(events)

contenedorHome.innerHTML = createcards(events)

