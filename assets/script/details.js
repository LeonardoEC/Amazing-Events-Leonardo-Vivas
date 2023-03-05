let contenedorDetails = document.getElementById("container-main")

function createcards_details(evento) {

    let queryString = location.search
    let params = new URLSearchParams(queryString)
    const id = params.get("id")
    const details = evento.find(d => d._id == id)
    
    let card = `<section class="container-details">
                <figure class="details-left">
                    <img class="details-img" src="${details.image}" alt="photo">
                </figure>
                <article class="details-right">
                    <h2 class="details-title">${details.name}</h2>
                    <p class="details-text"><span class= "items">Category:</span> ${details.category}</p>
                    <p class="details-text"><span class= "items">Date:</span> ${details.date}</p>
                    <p class="details-text"><span class= "items">Place:</span> ${details.place}</p>
                    <p class="details-text"><span class= "items">Capacity:</span> ${details.capacity}</p>
                    <p class="details-text"><span class= "items">Assistance:</span>${details.assistance}</p>
                    <p class="details-text">${details.description}</p>
                    <p class="details-text"><span class= "items">Price: </span> $${details.price}</p>
                    <div class="cont-det-but">
                        <button class= "but-details"><a href="../index.html">Home</a></button>
                    </div>
                </article>
            </section>`
    
    return card
}

contenedorDetails.innerHTML = createcards_details(data.events)