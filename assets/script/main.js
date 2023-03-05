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
        bform += `<label id="label-switch" for="${check}"><input class="check-box" type="checkbox" name="${check}" id="${check}" value=${check}> ${check}</label> `
    }

    bodyform.innerHTML = bform
}

createCategory(filtCategory(filtEvent(data.events)))

/* -------------------------------------------------- */

// Cartas
let contenedorHome = document.getElementById("container-main-bot-home")

function createcards(evento) {
    //console.log(evento)
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
                        <button class="card-but"><a href="pages/details.html">More Info</a></button>
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
        console.log(filtro)
        contenedorHome.innerHTML = createcards(filtro)
        
    })
    
}

barSearch(filtEvent(data.events))

// codigo muerto
        //|| filtName(evento).includes(datoInput) || filtDate(evento).includes(datoInput)

        /*
        if (filtCategory(evento).includes(datoInput)) {

            console.log(filtCategory(evento))
            
            let morevent = []
            morevent.push(evento)
            console.log(morevent)
            let card = ""
            for (let x of evento) {
                console.log(x)
                card += `<section id="card">
                    <figure>
                        <img class="card-body-img" src="${x.image}" alt="">
                    </figure>
                    <div class="card-body-top">
                        <h2 class="card-title">${x.name}</h2>
                        <p class="card-category">Category: ${x.category}</p>
                        <p class="card-date">${x.date}</p>
                        <p class="card-descr">${x.description}</p>
                    </div>
                    <div class="card-body-bot">
                        <p>$ ${x.price}</p>
                        <button class="card-but"><a href="pages/details.html">More Info</a></button>
                    </div>
                </section>`
            }
            contenedorHome.innerHTML = card
        }
        */

/* checkbox */

function checkboxCategory(evento) {
    let checkboxes = document.querySelectorAll("input[type=checkbox]")
    let checked = []

    console.log(evento)

    for (let checkbox of checkboxes) {
        checkbox.addEventListener("change", () => {

            //console.log(checkbox.value)

            //console.log(filtCategory(data.event))
            if(checkbox.target.checked){
                controlador = evento.filter( c => c.category.includes(checkbox.value))
                console.log(controlador)
                contenedorHome.innerHTML = createcards(controlador)
            }

            //appet separar por funciones/checker

            /*
            if (event.target.checked) {
                checked.push(event.target.value)


            }
            //crear un eliminador para el array
            else {
                checked.pop()
            }
            //console.log(checked)
            */
        })// metodo set
    }

}

checkboxCategory(data.events)








