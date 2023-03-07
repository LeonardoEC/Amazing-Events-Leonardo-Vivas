// Codigos sin uso y de practicas

function filtEvent(info) {

    const event = info.map(e => {
        let i = {
            _id: e._id,
            name: e.name,
            category: e.category,
            date: e.date,
            description: e.description,
            image: e.image,
            place: e.place,
            price: e.price,
            capacity: e.capacity,
            assistance: e.assistance
        }
        return i
    })
    return event
}

function filtName(evento) {
    const namesfilter = evento.map(eventos => eventos.name)
    return namesfilter
}

function filtDate(evento) {
    const datesfilter = evento.map(eventos => eventos.date)

    const date = datesfilter.reduce((c, e) => {
        if (!c.includes(e)) {
            c.push(e)
        }
        return c
    }, [])

    return date
}