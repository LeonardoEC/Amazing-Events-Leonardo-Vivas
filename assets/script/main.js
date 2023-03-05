// Filtros

function filtEvent(info) {

    const event = info.map(e => {
        let i = {
            _id: e._id,
            name: e.name,
            category: e.category,
            date: e.date,
            description: e.description,
            image: e.image,
            place: e.place,
            price: e.price,
            capacity: e.capacity,
            assistance: e.assistance
        }
        return i
    })
    return event
}

function filtCategory(evento) {
    const categorysfilter = evento.map(eventos => eventos.category)

    const category = categorysfilter.reduce((c, e) => {
        if (!c.includes(e)) {
            c.push(e)
        }
        return c
    }, [])

    return category
}

function filtName(evento) {
    const namesfilter = evento.map(eventos => eventos.name)
    return namesfilter
}

function filtDate(evento) {
    const datesfilter = evento.map(eventos => eventos.date)

    const date = datesfilter.reduce((c, e) => {
        if (!c.includes(e)) {
            c.push(e)
        }
        return c
    }, [])

    return date
}

// Categorias

function createCategory(evento) {
    const bodyform = document.getElementById("main-form")

    let bform = ""
    for (let check of evento) {
        bform += `<label id="label-switch" for="category[]"><input class="check-box" type="checkbox" name="${check}" id="${check}" value=${check}> ${check}</label> `
    }

    bodyform.innerHTML = bform
}

createCategory(filtCategory(filtEvent(data.events)))

/* -------------------------------------------------- */

// Cartas
let contenedorHome = document.getElementById("container-main-bot-home")

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

contenedorHome.innerHTML = createcards(filtEvent(data.events))

// Buscador

function barSearch(evento) {
    let serach = document.getElementById("serach")

    serach.addEventListener("keyup", (e) => {
        datoInput = e.target.value.toLowerCase()
        
        let filtro = evento.filter(f => f.category.toLowerCase().includes(datoInput) || f.name.toLowerCase().includes(datoInput) || f.date.includes(datoInput) )
        if(filtro.length > 0){
            contenedorHome.innerHTML = createcards(filtro)
        }
        else{
            contenedorHome.innerHTML = `<section class="container-search-fail">
            <h3 class="title-search-fail">Search Failed</h3>
            <img class="img-search-fail" src="assets/img/pngwing.com.png" alt="">
            <p class="text-search-fail">sorry but "${datoInput}" not found</p>
            <p class="text-search-fail">
                Try to search by the title, date or category of the event
                example: Food or Jurassic Park
            </p>
        </section>`
        }
    })
    
}

barSearch(filtEvent(data.events))


/* checkbox */

function checkboxCategory(evento) {
    let checkboxes = document.querySelectorAll("input[type=checkbox]")
    

    for (let checkbox of checkboxes) {
        checkbox.addEventListener("click", (e) => {

            if(e.target.checked){
                let controlador = evento.filter( c => c.category.includes(e.target.value))
                contenedorHome.innerHTML = createcards(controlador)
            }
            else{
                contenedorHome.innerHTML = createcards(evento)
            }
        })
    }
}

checkboxCategory(filtEvent(data.events))








