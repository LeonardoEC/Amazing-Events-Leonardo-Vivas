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
        percentage: ((ev.assistance / ev.capacity ) * 100).toFixed(2)
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
    `
    //--------------------------------------------------------------------------------//
    // Esta constante filtra los eventos por fecha -> Upcoming-events
    //Base
    const upCEvents = events.filter(ev => ev.date > currentDate).map(ev => {return{
        name: ev.name,
        category: ev.category,
        capacity: ev.capacity,
        estimate: ev.estimate,
        price: ev.price,
        revenues: ev.price * ev.estimate,
    }})

    // // Race
    // let ucRaceR = 0
    // let ucRaceC = 0
    // let ucRaceE = 0
    // let ucRaceP = 0
    // for(x of upCEvents){
    //     if(x.category.includes("Race")){
    //         ucRaceR += x.revenues
    //         ucRaceC += x.capacity
    //         ucRaceE += x.estimate
    //         ucRaceP = ((ucRaceE / ucRaceC) * 100).toFixed(2)
    //         race = [x.category,ucRaceR,ucRaceP]
    //     }
    // }
    // //Concert
    // let ucConcertR = 0
    // let ucConcertC = 0
    // let ucConcertE = 0
    // let ucConcertP = 0
    // for(x of upCEvents){
    //     if(x.category.includes("Concert")){
    //         ucConcertR += x.revenues
    //         ucConcertC += x.capacity
    //         ucConcertE += x.estimate
    //         ucConcertP = ((ucConcertE / ucConcertC) * 100).toFixed(2)
    //         concert = [x.category,ucConcertR,ucConcertP]
    //     }
    // }
    // // Food
    // let ucFoodR = 0
    // let ucFoodC = 0
    // let ucFoodE = 0
    // let ucFoodP = 0
    // for(x of upCEvents){
    //     if(x.category.includes("Food")){
    //         ucFoodR += x.revenues
    //         ucFoodC += x.capacity
    //         ucFoodE += x.estimate
    //         ucFoodP = ((ucFoodE / ucFoodC) * 100).toFixed(2)
    //         food = [x.category,ucFoodR,ucFoodP]
    //     }
    // }
    // // Books
    // let ucBooksR = 0
    // let ucBooksC = 0
    // let ucBooksE = 0
    // let ucBooksP = 0
    // for(x of upCEvents){
    //     if(x.category.includes("Books")){
    //         ucBooksR += x.revenues
    //         ucBooksC += x.capacity
    //         ucBooksE += x.estimate
    //         ucBooksP = ((ucBooksE / ucBooksC) * 100).toFixed(2)
    //         book = [x.category,ucBooksR,ucBooksP]
    //     }
    // }
    // // Party
    // let ucPartyR = 0
    // let ucPartyC = 0
    // let ucPartyE = 0
    // let ucPartyP = 0
    // for(x of upCEvents){
    //     if(x.category.includes("Party")){
    //         ucPartyR += x.revenues
    //         ucPartyC += x.capacity
    //         ucPartyE += x.estimate
    //         ucPartyP = ((ucPartyE / ucPartyC) * 100).toFixed(2)
    //         party = [x.category,ucPartyR,ucPartyP]
    //     }
    // }

    // // Museum
    // let ucMuseumR = 0
    // let ucMuseumC = 0
    // let ucMuseumE = 0
    // let ucMuseumP = 0
    // for(x of upCEvents){
    //     if(x.category.includes("Museum")){
    //         ucMuseumR += x.revenues
    //         ucMuseumC += x.capacity
    //         ucMuseumE += x.estimate
    //         ucMuseumP = ((ucMuseumE / ucMuseumC) * 100).toFixed(2)
    //         museum = [x.category,ucMuseumR,ucMuseumP]
    //     }
    // }

    //---------------------------------------------------------------------------
    // explicacion Miriam

    // Mapeo de categorias
    const upCMapCategorias = upCEvents.map((upccat) => upccat.category)
    // Unificacion de categorias
    const uCCategorias = upCMapCategorias.filter(
    (item, index) => upCMapCategorias.indexOf(item) == index)

    function dataUpCCategory(category) {
        let revUpCC= 0
        let capUpCC= 0
        let estUpCC= 0
        let packUpCC = []
        upCEvents.forEach(event=> {if( event.category == category){
                                revUpCC += event.revenues
                                capUpCC += event.capacity
                                estUpCC += event.estimate
            }
        });
        // Caclcula el porcentaje
        let porcenUpCCate = ((estUpCC / capUpCC) *100).toFixed(2)
        // Juntas los datos de revenues en un array
        packUpCC.push(revUpCC)
        // Juntas los datos de capacidad en un array
        packUpCC.push(porcenUpCCate)
        //devuelve - array de dos dimenciones
        return packUpCC  
    }

    function sumDataUc() {
        uCCategorias.forEach(categoriaUC => { 
        arrayPackUcC.push(dataUpCCategory(categoriaUC))
        })
    }

    let arrayPackUcC= []
    sumDataUc()
    

//----------------

    // Render Tabla 2
    const secondTable = document.getElementById("secondTable")
    secondTable.innerHTML = `
        <tr>
            <td>${uCCategorias[0]}</td>
            <td>$ ${arrayPackUcC[0][0]}</td>
            <td>${arrayPackUcC[0][1]} %</td>
        </tr>
        <tr>
            <td>${uCCategorias[1]}</td>
            <td>$ ${arrayPackUcC[1][0]}</td>
            <td>${arrayPackUcC[1][1]} %</td>
        </tr>
        <tr>
            <td>${uCCategorias[2]}</td>
            <td>$ ${arrayPackUcC[2][0]}</td>
            <td>${arrayPackUcC[2][1]} %</td>
        </tr>
        <tr>
            <td>${uCCategorias[3]}</td>
            <td>$ ${arrayPackUcC[3][0]}</td>
            <td>${arrayPackUcC[3][1]} %</td>
        </tr>
        <tr>
            <td>${uCCategorias[4]}</td>
            <td>$${arrayPackUcC[4][0]}</td>
            <td>${arrayPackUcC[4][1]} %</td>
        </tr>
        <tr>
            <td>${uCCategorias[5]}</td>
            <td>$${arrayPackUcC[5][0]}</td>
            <td>${arrayPackUcC[5][1]} %</td>
        </tr>
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

    // // Race
    // let pasRaceR = 0
    // let pasRaceC = 0
    // let pasRaceA = 0
    // let pasRaceP = 0
    // for(x of pastEvents){
    //     if(x.category.includes("Race")){
    //         pasRaceR += x.revenues
    //         pasRaceC += x.capacity
    //         pasRaceA += x.assistance
    //         pasRaceP = ((pasRaceA / pasRaceC) * 100).toFixed(2)
    //         pasrace = [x.category,pasRaceR,pasRaceP]
    //     }
    // }
    // //Concert
    // let pasConcertR = 0
    // let pasConcertC = 0
    // let pasConcertA = 0
    // let pasConcertP = 0
    // for(x of pastEvents){
    //     if(x.category.includes("Concert")){
    //         pasConcertR += x.revenues
    //         pasConcertC += x.capacity
    //         pasConcertA += x.assistance
    //         pasConcertP = ((pasConcertA / pasConcertC) * 100).toFixed(2)
    //         pasconcert = [x.category,pasConcertR,pasConcertP]
    //     }
    // }
    // // Food
    // let pasucFoodR = 0
    // let pasucFoodC = 0
    // let pasucFoodA = 0
    // let pasucFoodP = 0
    // for(x of pastEvents){
    //     if(x.category.includes("Food")){
    //         pasucFoodR += x.revenues
    //         pasucFoodC += x.capacity
    //         pasucFoodA += x.assistance
    //         pasucFoodP = ((pasucFoodA / pasucFoodC) * 100).toFixed(2)
    //         pasfood = [x.category,pasucFoodR,pasucFoodP]
    //     }
    // }
    // // Books
    // let pasBooksR = 0
    // let pasBooksC = 0
    // let pasBooksA = 0
    // let pasBooksP = 0
    // for(x of pastEvents){
    //     if(x.category.includes("Books")){
    //         pasBooksR += x.revenues
    //         pasBooksC += x.capacity
    //         pasBooksA += x.assistance
    //         pasBooksP = ((pasBooksA / pasBooksC) * 100).toFixed(2)
    //         pasbook = [x.category,pasBooksR,pasBooksP]
    //     }
    // }
    // // Party
    // let pasPartyR = 0
    // let pasPartyC = 0
    // let pasPartyA = 0
    // let pasPartyP = 0
    // for(x of pastEvents){
    //     if(x.category.includes("Party")){
    //         pasPartyR += x.revenues
    //         pasPartyC += x.capacity
    //         pasPartyA += x.assistance
    //         pasPartyP = ((pasPartyA / pasPartyC) * 100).toFixed(2)
    //         pasparty = [x.category,pasPartyR,pasPartyP]
    //     }
    // }

    // // Museum
    // let pasMuseumR = 0
    // let pasMuseumC = 0
    // let pasMuseumA = 0
    // let pasMuseumP = 0
    // for(x of pastEvents){
    //     if(x.category.includes("Museum")){
    //         pasMuseumR += x.revenues
    //         pasMuseumC += x.capacity
    //         pasMuseumA += x.assistance
    //         pasMuseumP = ((pasMuseumA / pasMuseumC) * 100).toFixed(2)
    //         pasmuseum = [x.category,pasMuseumR,pasMuseumP]
    //     }
    // }
    // // Cinema
    // let pasCinemaR = 0
    // let pasCinemaC = 0
    // let pasCinemaA = 0
    // let pasCinemaP = 0
    // for(x of pastEvents){
    //     if(x.category.includes("Cinema")){
    //         pasCinemaR += x.revenues
    //         pasCinemaC += x.capacity
    //         pasCinemaA += x.assistance
    //         pasCinemaP = ((pasCinemaA / pasCinemaC) * 100).toFixed(2)
    //         pascinema = [x.category,pasCinemaR,pasCinemaP]
    //     }
    // }

    // Mapeo de categorias
    const pasCMapCategorias = pastEvents.map((pasccat) => pasccat.category)
    
    // Unificacion de categorias
    const pasCategorias = pasCMapCategorias.filter(
    (item, index) => pasCMapCategorias.indexOf(item) == index)

    function dataPasCCategory(categoriaPas){
        let revPasCC= 0
        let capPasCC= 0
        let asiPasCC= 0
        let packPasCC = []
        pastEvents.forEach(event=> {if( event.category == categoriaPas){
            revPasCC += event.revenues
            capPasCC += event.capacity
            asiPasCC += event.assistance
            }
        });

    // Caclcula el porcentaje
    let porcenPasCCate = ((asiPasCC / capPasCC) *100).toFixed(2)
    // Juntas los datos de revenues en un array
    packPasCC.push(revPasCC)
    // Juntas los datos de capacidad en un array
    packPasCC.push(porcenPasCCate)
    //devuelve - array de dos dimenciones
    return packPasCC  
    }
    
    function sumDataPas() {
        pasCategorias.forEach(categoriaPas => { 
        arrayPackPasC.push(dataPasCCategory(categoriaPas))
        })
    }
    let arrayPackPasC= []
    sumDataPas()

    // Render Tabla 3
    const thirdTable = document.getElementById("thirdTable")
    thirdTable.innerHTML = `
        <tr>
            <td>${pasCategorias[0]}</td>
            <td>$ ${arrayPackPasC[0][0]}</td>
            <td>${arrayPackPasC[0][1]} %</td>
        </tr>
        <tr>
            <td>${pasCategorias[1]}</td>
            <td>$ ${arrayPackPasC[1][0]}</td>
            <td>${arrayPackPasC[1][1]} %</td>
        </tr>
        <tr>
            <td>${pasCategorias[2]}</td>
            <td>$ ${arrayPackPasC[2][0]}</td>
            <td>${arrayPackPasC[2][1]} %</td>
        </tr>
        <tr>
            <td>${pasCategorias[3]}</td>
            <td>$ ${arrayPackPasC[3][0]}</td>
            <td>${arrayPackPasC[3][1]} %</td>
        </tr>
        <tr>
            <td>${pasCategorias[4]}</td>
            <td>$ ${arrayPackPasC[4][0]}</td>
            <td>${arrayPackPasC[4][1]} %</td>
        </tr>
        <tr>
            <td>${pasCategorias[5]}</td>
            <td>$ ${arrayPackPasC[5][0]}</td>
            <td>${arrayPackPasC[5][1]} %</td>
        </tr>
        <tr>
            <td>${pasCategorias[6]}</td>
            <td>$ ${arrayPackPasC[6][0]}</td>
            <td>${arrayPackPasC[6][1]} %</td>
        </tr>
    `

















})
.catch(error => console.log(error))


