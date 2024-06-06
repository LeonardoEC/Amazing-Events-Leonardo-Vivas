const url = "https://mindhub-xj03.onrender.com/api/amazing"
fetch(url)
    .then(res => res.json())
    .then(dato => {
        let events = dato.events
        let currentDate = dato.currentDate
        let eventCategory = events.map(ecategory => ecategory.category)
        let filtByCategory = eventCategory.reduce((a, e) => {
            if (!a.includes(e)) {
                a.push(e)
            }
            return a
        }, [])

        console.log(currentDate)

        for (let dateEvents of events) {
            if (dateEvents.date >= currentDate) {
                dateEvents.time = "past"
                dateEvents.assistancepercentage = Number(((dateEvents.assistance / dateEvents.capacity) * 100).toFixed(2))
                dateEvents.revenues = dateEvents.price * dateEvents.assistance
            }
        }

        // propiedades de futuro
        for (let dateEvents of events) {
            if (dateEvents.date <= currentDate) {
                dateEvents.time = "upcoming"
                dateEvents.estimatepercentage = Number(((dateEvents.estimate / dateEvents.capacity) * 100).toFixed(2))
                dateEvents.revenues = dateEvents.price * dateEvents.estimate
            }
        }



        // posiciones en el html
        const contenedorHome = document.getElementById("card__container")
        const formCheck = document.getElementById("category__container")
        // elementos HTML
        const search = document.getElementById("searchBar")
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
        formCheck.addEventListener("click", e => {
            if (e.target.checked) {
                checked.push(e.target.value)
                //minchecked.push(e.target.value.toLowerCase())
            }
            else {
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
            for (let item of evento) {


                card += `<div class="card">
            <div class="cardTop__container">
            ${item.time == "past" ? "" : "<h3>EVENT FINISHED</h3>"}
                <figure class="cardimg__container">
                    <img class="card__img" src="${item.image}" alt="">
                </figure>
                <section>
                    <h2>${item.name}</h2>
                    <p>${item.date}</p>
                </section>
            </div>

            <div class="cardMid__container">
                <div class="cardparagraph__container">
                    <p class="card__paragraph">${item.description}</p>
                </div>
                <div class="cont_pricen_and_category">
                    <p>
                        Place: ${item.place}
                    </p>
                    <p>
                        Category: ${item.category}
                    </p>
                </div>
                <div>
                    <p>
                        Price: $${item.price}
                    </p>
                </div>
            </div>
            <div class="cardBot__container">
                <button class="card__button"><a class="btn_more_info" href="../pages/details.html?id=${item._id}">More Info</a></button>
            </div>
        </div>`
            }
            return card
        }

        function addcards(evento) {
            evento.forEach(even => {
                let secction = document.createElement("section")
                secction.setAttribute("id", "card")
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

        function renderFilter() {

            //filtrar searh --> Devuelve los nombres - fechas - categorias de lo ingresado en searchbar
            filtroSerach = events.filter(f => f.category.toLowerCase().includes(dataInput)
                || f.name.toLowerCase().includes(dataInput)
                || f.date.includes(dataInput))
            //----------------------------------------------------------------------------//
            //filtroCheck --> Devuelve los elementos chequeados
            filtroCheck = events.filter(evento => checked.includes(evento.category))
            //---------------------------------------------------------------------------//

            //renderCard
            if (filtroSerach.length > 0) {
                contenedorHome.innerHTML = createcards(filtroSerach)
                let finalControl = filtroSerach.filter(e => e.category.includes(checked.toString()))
                contenedorHome.innerHTML = createcards(finalControl)
                //contenedorHome.innerHTML = createcards(filtroCheck)
            }
            else if (filtroSerach == 0)  {
                contenedorHome.innerHTML = `<section class="container-search-fail">
                                        <h3 class="title-search-fail">Search Failed</h3>
                                        <img class="img-search-fail" src="../assets/img/AmazingNotFound.png" alt="image">
                                        <p class="text-search-fail">sorry but "${dataInput}" not found</p>
                                        <p class="text-search-fail">
                                            Try to search by the title, date or category of the event
                                            example: Food or Jurassic Park
                                        </p>
                                    </section>`
            }
            if (filtroCheck.length > 0) {
                contenedorHome.innerHTML = createcards(filtroCheck);
                let finalControlBy = filtroCheck.filter(ch => ch.name.toLowerCase().includes(dataInput.toString()));
                contenedorHome.innerHTML = createcards(finalControlBy);
            }
            
            
        }
        //---------------------------------------------
        // render
        createCategory(filtByCategory)
        renderFilter()

    })
    .catch(error => console.log(error))