import { events, getEventCategory } from "./data.js";

const category__container = document.getElementById("category__container")
const card__container = document.getElementById("card__container")


async function mainHome() {
    const CATEGORY = await getEventCategory()
    const EVENTS = await events()

    console.log(EVENTS)

    renderCategory(CATEGORY)
    renderCard(EVENTS)
}

async function renderCategory(categorias) {

    for (let intemCheck of categorias) {

        let checkbox = `
        <input type="checkbox"> ${intemCheck}
    `

        category__container.innerHTML += checkbox
    }
}

async function renderCard(event) {
    for (let item of event) {
        let card = `
        <div class="card">
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

        </div>
        `

                    // <div class="cardBot__container">
            //     <button class="card__button">Detalles</button>
            // </div>

        card__container.innerHTML += card
    }
}

mainHome()