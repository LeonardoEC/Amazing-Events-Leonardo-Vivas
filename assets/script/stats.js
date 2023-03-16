const url = "https://mindhub-xj03.onrender.com/api/amazing"
fetch(url)
.then(res => res.json())
.then(dato => {
    const events = dato.events
    const currentDate = dato.currentDate

    // Esta constante almacena los eventos que tengan assitencia y de ellos uso algunas propiedades
    const asistPorcentaje = events.filter(ev => ev.assistance !== undefined).map(ev => {return{
        name:ev.name,
        assistance: ev.assistance,
        capacity: ev.capacity,
        percentage: Math.round((ev.assistance / ev.capacity ) * 100)
    }})

    // Primera tabla
    // Esta constante ordena de mayor a menor porcentaje y guarda solo los datos utiles
    const asistOrder = asistPorcentaje.sort((a,b) => b.percentage - a.percentage).map(ev => {return`${ev.name}: ${ev.percentage}%`})

    // Esta constante toma solo los ultimos 3 eventos
    const latestEvents = asistOrder.slice(-3)
    
    const pastCap = events.filter(ev => ev.date < currentDate)
    // Esta constante ordena de mayor a menor segun la capacidad
    const capacityOrder = pastCap.sort((a,b) => b.capacity - a.capacity).map(ev => {return `${ev.name}: ${ev.capacity}`})

    // Render Tabla 1
    const firstTable = document.getElementById("firstTable")
    firstTable.innerHTML = ` 
    <thead>
        <tr>
            <th colspan="3">Events statistics</th>
        </tr>
        <tr>
            <th>Events with the highest percentage of attendance</th>
            <th>Events with the lowest percentage of attendance</th>
            <th>Event with larger capacity</th>
        </tr>
    </thead>
    <tbody id="firstTable">
        <tr>
            <td>${asistOrder[0]}</td>
            <td>${latestEvents[2]}</td>
            <td>${capacityOrder[0]}</td>
        </tr>
        <tr>
            <td>${asistOrder[1]}</td>
            <td>${latestEvents[1]}</td>
            <td>${capacityOrder[1]}</td>
        </tr>
        <tr>
            <td>${asistOrder[2]}</td>
            <td>${latestEvents[0]}</td>
            <td>${capacityOrder[2]}</td>
        </tr>
    </tbody>
    `
    //--------------------------------------------------------------------------------//
    // Esta constante filtra los eventos por fecha -> Upcoming-events
    //Base
    const upCEvents = events.filter(ev => ev.date > currentDate).map(ev => {return{
        name: ev.name,
        category: ev.category,
        capacity: ev.capacity,
        estimate: ev.estimate,
        percentage: Math.round((ev.estimate / ev.capacity)*100),
        price: ev.price,
        revenues: ev.price * ev.estimate,
    }})

    //Lo que quiero hacer
    // const algo = upCEvents.forEach(e => "A partir de aca un filter y dentro la esctructura")
    // Race
    let ucRaceR = 0
    let ucRaceC = 0
    let ucRaceE = 0
    let ucRaceP = 0
    for(x of upCEvents){
        if(x.category.includes("Race")){
            ucRaceR += x.revenues
            ucRaceC += x.capacity
            ucRaceE += x.estimate
            ucRaceP = Math.round((ucRaceE / ucRaceC) * 100)
            race = ["Race",ucRaceR,ucRaceP]
        }
    }
    //Concert
    let ucConcertR = 0
    let ucConcertC = 0
    let ucConcertE = 0
    let ucConcertP = 0
    for(x of upCEvents){
        if(x.category.includes("Concert")){
            ucConcertR += x.revenues
            ucConcertC += x.capacity
            ucConcertE += x.estimate
            ucConcertP = Math.round((ucConcertE / ucConcertC) * 100)
            concert = ["Concert",ucConcertR,ucConcertP]
        }
    }
    // Food
    let ucFoodR = 0
    let ucFoodC = 0
    let ucFoodE = 0
    let ucFoodP = 0
    for(x of upCEvents){
        if(x.category.includes("Food")){
            ucFoodR += x.revenues
            ucFoodC += x.capacity
            ucFoodE += x.estimate
            ucFoodP = Math.round((ucFoodE / ucFoodC) * 100)
            food = ["Food",ucFoodR,ucFoodP]
        }
    }
    // Books
    let ucBooksR = 0
    let ucBooksC = 0
    let ucBooksE = 0
    let ucBooksP = 0
    for(x of upCEvents){
        if(x.category.includes("Books")){
            ucBooksR += x.revenues
            ucBooksC += x.capacity
            ucBooksE += x.estimate
            ucBooksP = Math.round((ucBooksE / ucBooksC) * 100)
            book = ["Books",ucBooksR,ucBooksP]
        }
    }
    // Party
    let ucPartyR = 0
    let ucPartyC = 0
    let ucPartyE = 0
    let ucPartyP = 0
    for(x of upCEvents){
        if(x.category.includes("Party")){
            ucPartyR += x.revenues
            ucPartyC += x.capacity
            ucPartyE += x.estimate
            ucPartyP = Math.round((ucPartyE / ucPartyC) * 100)
            party = ["Party",ucPartyR,ucPartyP]
        }
    }
    // Museum
    let ucMuseumR = 0
    let ucMuseumC = 0
    let ucMuseumE = 0
    let ucMuseumP = 0
    for(x of upCEvents){
        if(x.category.includes("Museum")){
            ucMuseumR += x.revenues
            ucMuseumC += x.capacity
            ucMuseumE += x.estimate
            ucMuseumP = Math.round((ucMuseumE / ucMuseumC) * 100)
            museum = ["Museum",ucMuseumR,ucMuseumP]
            console.log(ucMuseumR)
        }
    }
    console.log(currentDate)
    console.log(events)
    console.log(ucMuseumR)
    console.log(upCEvents)



    // Segunda tabla - version vieja
    // const revenuesOrder = upCEvents.sort((a,b) => b.revenues - a.revenues).map(ev => {return `${ev.name}: ${ev.category} $${ev.revenues} ${ev.percentage}%`})


    // const revenuesOrderN = upCEvents.sort((a,b) => b.revenues - a.revenues).map(ev => {return `${ev.name}: `})
    // const revenuesOrderC = upCEvents.sort((a,b) => b.revenues - a.revenues).map(ev => {return `${ev.category}`})
    // const revenuesOrderR = upCEvents.sort((a,b) => b.revenues - a.revenues).map(ev => {return `$ ${ev.revenues}`})
    // const revenuesOrderP = upCEvents.sort((a,b) => b.revenues - a.revenues).map(ev => {return `${ev.percentage}%`})
    
    // Render Tabla 2
    const secondTable = document.getElementById("secondTable")
    secondTable.innerHTML = `
        <thead>
            <tr>
                <th colspan="3">Upcoming events statistics by category</th>
            </tr>
            <tr>
                <th>Categories</th>
                <th>Revenues</th>
                <th>Percentage of attendance</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>${concert[0]}</td>
                <td>$ ${concert[1]}</td>
                <td>${concert[2]}%</td>
            </tr>
            <tr>
                <td>${race[0]}</td>
                <td>$ ${race[1]}</td>
                <td>${race[2]}%</td>
            </tr>
            <tr>
                <td>${party[0]}</td>
                <td>$ ${party[1]}</td>
                <td>${party[2]}%</td>
            </tr>
            <tr>
                <td>${food[0]}</td>
                <td>$ ${food[1]}</td>
                <td>${food[2]}%</td>
            </tr>
            <tr>
                <td>${book[0]}</td>
                <td>$ ${book[1]}</td>
                <td>${book[2]}%</td>
            </tr>
            <tr>
                <td>${museum[0]}</td>
                <td>$ ${museum[1]}</td>
                <td>${museum[2]}%</td>
            </tr>
        </tbody>
    `
    //--------------------------------------------------------------------------------//
    // Esta constante filtra los eventos por fecha -> Past-events
    const pastEvents = events.filter(ev => ev.date < currentDate).map(ev => {return{
        name: ev.name,
        category: ev.category,
        capacity: ev.capacity,
        assistance: ev.assistance,
        percentage: Math.round((ev.assistance / ev.capacity)*100),
        price: ev.price,
        revenues: ev.price * ev.assistance
    }})

    // Race
    let pasRaceR = 0
    let pasRaceC = 0
    let pasRaceA = 0
    let pasRaceP = 0
    for(x of pastEvents){
        if(x.category.includes("Race")){
            pasRaceR += x.revenues
            pasRaceC += x.capacity
            pasRaceA += x.assistance
            pasRaceP = Math.round((pasRaceA / pasRaceC) * 100)
            pasrace = ["Race",pasRaceR,pasRaceP]
        }
    }
    //Concert
    let pasConcertR = 0
    let pasConcertC = 0
    let pasConcertA = 0
    let pasConcertP = 0
    for(x of pastEvents){
        if(x.category.includes("Concert")){
            pasConcertR += x.revenues
            pasConcertC += x.capacity
            pasConcertA += x.assistance
            pasConcertP = Math.round((pasConcertA / pasConcertC) * 100)
            pasconcert = ["Concert",pasConcertR,pasConcertP]
        }
    }
    // Food
    let pasucFoodR = 0
    let pasucFoodC = 0
    let pasucFoodA = 0
    let pasucFoodP = 0
    for(x of pastEvents){
        if(x.category.includes("Food")){
            pasucFoodR += x.revenues
            pasucFoodC += x.capacity
            pasucFoodA += x.assistance
            pasucFoodP = Math.round((pasucFoodA / pasucFoodC) * 100)
            pasfood = ["Food",pasucFoodR,pasucFoodP]
        }
    }
    // Books
    let pasBooksR = 0
    let pasBooksC = 0
    let pasBooksA = 0
    let pasBooksP = 0
    for(x of pastEvents){
        if(x.category.includes("Books")){
            pasBooksR += x.revenues
            pasBooksC += x.capacity
            pasBooksA += x.assistance
            pasBooksP = Math.round((pasBooksA / pasBooksC) * 100)
            pasbook = ["Books",pasBooksR,pasBooksP]
        }
    }
    // Party
    let pasPartyR = 0
    let pasPartyC = 0
    let pasPartyA = 0
    let pasPartyP = 0
    for(x of pastEvents){
        if(x.category.includes("Party")){
            pasPartyR += x.revenues
            pasPartyC += x.capacity
            pasPartyA += x.assistance
            pasPartyP = Math.round((pasPartyA / pasPartyC) * 100)
            pasparty = ["Party",pasPartyR,pasPartyP]
        }
    }
    // Museum
    let pasMuseumR = 0
    let pasMuseumC = 0
    let pasMuseumA = 0
    let pasMuseumP = 0
    for(x of pastEvents){
        if(x.category.includes("Museum")){
            pasMuseumR += x.revenues
            pasMuseumC += x.capacity
            pasMuseumA += x.assistance
            pasMuseumP = Math.round((pasMuseumA / pasMuseumC) * 100)
            pasmuseum = ["Museum",pasMuseumR,pasMuseumP]
        }
    }
    // Cinema
    let pasCinemaR = 0
    let pasCinemaC = 0
    let pasCinemaA = 0
    let pasCinemaP = 0
    for(x of pastEvents){
        if(x.category.includes("Cinema")){
            pasCinemaR += x.revenues
            pasCinemaC += x.capacity
            pasCinemaA += x.assistance
            pasCinemaP = Math.round((pasCinemaA / pasCinemaC) * 100)
            pascinema = ["Cinema",pasCinemaR,pasCinemaP]
        }
    }

    
    // Tercera tabla - version vieja
    // const revenuesOrderPast = pastEvents.sort((a,b) => b.revenues - a.revenues).map(ev => {return `${ev.name}: ${ev.category} $${ev.revenues} ${ev.percentage}%`})
    // const revenuesOrderNPast = pastEvents.sort((a,b) => b.revenues - a.revenues).map(ev => {return `${ev.name}: `})
    // const revenuesOrderCPast = pastEvents.sort((a,b) => b.revenues - a.revenues).map(ev => {return `${ev.category}`})
    // const revenuesOrderRPast = pastEvents.sort((a,b) => b.revenues - a.revenues).map(ev => {return `$ ${ev.revenues}`})
    // const revenuesOrderPPast = pastEvents.sort((a,b) => b.revenues - a.revenues).map(ev => {return `${ev.percentage}%`})

    // Render Tabla 3
    const thirdTable = document.getElementById("thirdTable")
    thirdTable.innerHTML = `
    <thead>
        <tr>
            <th colspan="3">Past Eventes statistics by category</th>
        </tr>
        <tr>
            <th>Categories</th>
            <th>Revenues</th>
            <th>Percentage of attendance</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>${pasconcert[0]}</td>
            <td>$ ${pasconcert[1]}</td>
            <td>${pasconcert[2]}%</td>
        </tr>
        <tr>
            <td>${pasrace[0]}</td>
            <td>$ ${pasrace[1]}</td>
            <td>${pasrace[2]}%</td>
        </tr>
        <tr>
            <td>${pasfood[0]}</td>
            <td>$ ${pasfood[1]}</td>
            <td>${pasfood[2]}%</td>
        </tr>
        <tr>
            <td>${pasparty[0]}</td>
            <td>$ ${pasparty[1]}</td>
            <td>${pasparty[2]}%</td>
        </tr>
        <tr>
            <td>${pasbook[0]}</td>
            <td>$ ${pasbook[1]}</td>
            <td>${pasbook[2]}%</td>
        </tr>
        <tr>
            <td>${pasmuseum[0]}</td>
            <td>$ ${pasmuseum[1]}</td>
            <td>${pasmuseum[2]}%</td>
        </tr>
        <tr>
            <td>${pascinema[0]}</td>
            <td>$ ${pascinema[1]}</td>
            <td>${pascinema[2]}%</td>
        </tr>
    </tbody>
    `

})
.catch(error => console.log(error))






























// Codigo muerto

    // let cat = []
    // let suma = []
    // for(x of upCEvents){
        
    //     if(!cat.includes(x.category)){
    //         cat.push(x.category)
    //     }

    //     if(x.category.includes("Race")){
    //         suma.push(x.revenues)
    //     }
    // }

    // console.log(cat)
    // console.log(suma)



// Respuesta pero larga - No sirve
    //Obteniendo valores de cada categoria
    //Concert------------------------------------------
    // const catConcertrev = upCEvents.map(x => {
    //     console.log(x.category)
    //     if(x.category === "Concert"){
    //         return x.revenues
    //     }
    // }).filter(x => x !== undefined)

    // const catConcertEsti = upCEvents.map(x => {

    //     if(x.category === "Concert"){
    //         return x.estimate
    //     }
    // }).filter(x => x !== undefined)

    // const catConcertCap = upCEvents.map(x => {
    //     if(x.category === "Concert"){
    //         return x.capacity
    //     }
    // }).filter(x => x !== undefined)

    // const percConcert = ((catConcertCap[0] + catConcertCap[1]) /  (catConcertEsti[0] + catConcertEsti[1]) * 100)
    // const revConcert = catConcertrev[0] + catConcertrev[1]
    // const consert = ["Concert",revConcert, percConcert]

    // //Race-------------------------------------------------------
    // const catRacerev = upCEvents.map(x => {
    //     if(x.category === "Race"){
    //         return x.revenues
    //     }
    // }).filter(x => x !== undefined)

    // const catRaceEsti = upCEvents.map(x => {
    //     if(x.category === "Race"){
    //         return x.estimate
    //     }
    // }).filter(x => x !== undefined)

    // const catRaceCap = upCEvents.map(x => {
    //     if(x.category === "Race"){
    //         return x.capacity
    //     }
    // }).filter(x => x !== undefined)
    
    // console.log(catRacerev)
    // console.log(catRaceEsti)
    // console.log(catRaceCap[0] + catRaceCap[1] + catRaceCap[2] + catRaceCap[3] + catRaceCap[4])
    // let suma = 0
    // for(x of catRaceCap){
    //     suma += x
    // }
    // console.log(suma)