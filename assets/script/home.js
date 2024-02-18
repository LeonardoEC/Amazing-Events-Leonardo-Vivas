import { events, getEventCategory } from "./data.js";

const category__container = document.getElementById("category__container")
const card__container = document.getElementById("card__container")
const searchBar = document.getElementById("searchBar")

// Render
async function renderCategory(categorias) {

    for (let intemCheck of categorias) {

        let checkbox = `
        <label>
            <input class="checkItem" type="checkbox" value=${intemCheck} name=${intemCheck}>
            ${intemCheck}
        </label>
    `

        category__container.innerHTML += checkbox
    }
}

async function renderCard(event) {
    for (let item of event) {
        let card = `
        <div class="card">
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
                <button class="card__button">Detalles</button>
            </div>
        </div>
        `


        card__container.innerHTML += card
    }
}

// funcion principal
async function mainHome() {
    const CATEGORY = await getEventCategory()
    const EVENTS = await events()

    // DataSearch
    let dataInput = "";
    searchBar.addEventListener("keyup", (e) => {
        dataInput = e.target.value.toLowerCase();
        processData(dataInput); 
    });

    function processData(input) {

        let searchFilter = EVENTS.filter(e => e.name.toLowerCase().includes(input))

        console.log(searchFilter)

        if(input === undefined){
            renderCard(EVENTS)
        } else if (searchFilter.length == 0){
            card__container.innerHTML = "no encontre nada"
        } else {
            card__container.innerHTML = ""
            renderCard(searchFilter)
        }
    }
    



    renderCategory(CATEGORY)
    
    processData()

}



mainHome()