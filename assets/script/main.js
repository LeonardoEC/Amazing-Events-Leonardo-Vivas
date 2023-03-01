function createCategory(evento){
    
    const categorysfilter = evento.map(eventos =>  eventos.category)

    const category = categorysfilter.reduce((c, e) => {
        if(!c.includes(e)){
            c.push(e)
        }
        return c
    },[])

    const bodyform = document.getElementById("main-form")

    let bform = ""

    for(let check of category){
        bform += ` <label for="${check}"><input type="checkbox" name="" id="${check}">${check}</label> `
    }

    bodyform.innerHTML = bform

}





createCategory(data.events)



