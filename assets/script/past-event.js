function createcards(eventos){

    let contenedorPast = document.getElementById("container-main-bot-past-event")

    let card = ""
    for(let evento of eventos){

        if(evento.date < data.currentDate){
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
                            <button class="card-but"><a href="details.html">More Info</a></button>
                        </div>
                    </section>`
        }


    }

    contenedorPast.innerHTML = card
}

createcards(data.events)
