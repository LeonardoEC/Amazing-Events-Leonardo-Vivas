const url = "https://mindhub-xj03.onrender.com/api/amazing"
fetch(url)
.then(res => res.json())
.then(dato => {
    let events = dato.events
    let currentDate = dato.currentDate
    let eventCategory = events.map(ecategory => ecategory.category)
    let filtByCategory = eventCategory.reduce((a,e) => {
        if(!a.includes(e)){
            a.push(e)
        }
        return a
    },[])


    let contenedorUpcoming = document.getElementById("card__container")
    const formCheck = document.getElementById("category__container")
    
    const search = document.getElementById("searchBar")
    
    let dataInput = ""
    let filtroSerach = []
    let checked = []
    let filtroCheck = [] 
    
    // Buscador
    search.addEventListener("keyup", (e) => {
        dataInput = e.target.value.toLowerCase()
        
        renderFilter()
    })
    
    formCheck.addEventListener("click", e =>{
        if(e.target.checked){
            checked.push(e.target.value)
        }
        else{
            checked = checked.filter(notCheck => notCheck !== e.target.value)
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
    
    
    
    function createcards_UpEvent(evento){
    
        let upCEvents = evento.filter(e => e.date > currentDate)
    
        let card = ""
        for(let item of upCEvents){
    
                card += `<div class="card">
            <div class="cardTop__container">
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
                <button class="card__button">Detalles</button>
            </div>
        </div>`
    
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
            contenedorUpcoming.innerHTML = createcards_UpEvent(filtroSerach)
            let finalControl = filtroSerach.filter(e => e.category.includes(checked.toString()))
            contenedorUpcoming.innerHTML = createcards_UpEvent(finalControl)
        } else if(filtroSerach == 0){
            contenedorUpcoming.innerHTML = `<section class="container-search-fail">
                                            <h3 class="title-search-fail">Search Failed</h3>
                                            <img class="img-search-fail" src="../assets/img/AmazingNotFound.png" alt="image">
                                            <p class="text-search-fail">sorry but "${dataInput}" not found</p>
                                            <p class="text-search-fail">
                                                Try to search by the title, date or category of the event
                                                example: Food or Jurassic Park
                                            </p>
                                        </section>`
            } if(filtroCheck.length > 0){
                contenedorUpcoming.innerHTML = createcards_UpEvent(filtroCheck);
                let finalControlBy = filtroCheck.filter(ch => ch.name.toLowerCase().includes(dataInput.toString()));
                contenedorUpcoming.innerHTML = createcards_UpEvent(finalControlBy);
            }
        
    }
    
    
    // render
    createCategory(filtByCategory)
    renderFilter()




})
.catch(error => console.log(error))






