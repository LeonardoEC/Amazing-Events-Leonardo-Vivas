// Recorredor

function createcards(eventos){

    let contenedorHome = document.getElementById("container-main-bot-home")
    let contenedorPast = document.getElementById("container-main-bot-past-event")
    let contenedorUpcoming = document.getElementById("container-main-bot-upcoming-events")

    let card = ""
    for(let evento of eventos){


        card += `<section class="card">
                    <figure>
                        <img class="card-body-img" src="${evento.image}" alt="">
                    </figure>
                    <div class="card-body-top">
                        <h2 class="card-title">${evento.name}</h2>
                        <p class="card-descr">${evento.description}</p>
                    </div>
                    <div class="card-body-bot">
                        <p>$ ${evento.price}</p>
                        <button class="card-but"><a href="pages/details.html">More Info</a></button>
                    </div>
                </section>`
    }

    contenedorHome.innerHTML = card
}

createcards(data.events)





/*

Estructura de carta

<section class="card">
                <figure>
                    <img class="card-body-img" src="assets/img/Cinema.jpg" alt="">
                </figure>
                <div class="card-body-top">
                    <h2 class="card-title">Title</h2>
                    <p class="card-descr">text descript</p>
                </div>
                <div class="card-body-bot">
                    <p>$9999</p>
                    <button class="card-but">Mas info</button>
                </div>
            </section>

*/



/*

        funciona

        if(evento.date < "2022-01-01"){
            console.log("Hola mundo")
        }
        else if(evento.date > "2022-01-01"){
            console.log("No es un hola mundo")
        }

        let card = document.createElement("div")

        card.innerHTML = `<section class="card">
                    <figure>
                        <img class="card-body-img" src="" alt="">
                    </figure>
                    <div class="card-body-top">
                        <h2 class="card-title">${evento.name}</h2>
                        <p class="card-descr">${evento.description}</p>
                    </div>
                    <div class="card-body-bot">
                        <p>$ ${evento.price}</p>
                        <button class="card-but">Mas info</button>
                    </div>
                </section>`
        
        contenedorHome.appendChild(card)
        
        */