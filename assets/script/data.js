const dato =
    fetch("https://mindhub-xj03.onrender.com/api/amazing")
        .then(res => res.json())
        .then(dato => dato)

// Trae todos los datos
async function mainData() {
    const data = await dato;
    return data
}

// Trae la fecha "actual"
async function currentDate() {
    const data = await mainData();
    const currentDate = data.currentDate
    return currentDate
}

// Trae los eventos y les agrega propieades
async function events() {
    const DATA = await mainData();
    const EVENTS = DATA.events
    const CURRENT__EVENTS = await currentDate()

    // Nuevas propiedades
    // propiedades de pasado
    for (let dateEvents of EVENTS) {
        if (dateEvents.date <= CURRENT__EVENTS) {
            dateEvents.time = "past"
            dateEvents.assistancepercentage = Number(((dateEvents.assistance / dateEvents.capacity) * 100).toFixed(2))
            dateEvents.revenues = dateEvents.price * dateEvents.assistance
        }
    }

    // propiedades de futuro
    for (let dateEvents of EVENTS) {
        if (dateEvents.date >= CURRENT__EVENTS) {
            dateEvents.time = "upcoming"
            dateEvents.estimatepercentage = Number(((dateEvents.estimate / dateEvents.capacity) * 100).toFixed(2))
            dateEvents.revenues = dateEvents.price * dateEvents.estimate
        }
    }

    return EVENTS
}

// Trae las categorias unificadas
async function getEventCategory() {
    const EVENT = await events()
    let eventCategory = EVENT.map(e => e.category)

    let getCategory = eventCategory.reduce((add, item) => {
        if (!add.includes(item)) {
            add.push(item)
        }
        return add
    }, [])

    return getCategory;
}

// ordena las capacidades de mayor a menor
async function eventHighesCapacity() {
    const EVENT = await events();

    const capcityOrder = EVENT.sort((a, b) => b.capacity - a.capacity)

    console.log(capcityOrder)
}

// ordena las capacidades de mayor a menor
async function eventLowerCapacity() {
    const EVENT = await events();

    const capcityOrder = EVENT.sort((a, b) => a.capacity - b.capacity)

    console.log(capcityOrder)
}


// Seccion de eventos pasados
// Trae los eventos en tiempo pasado
async function passEvents() {
    const CURRENTDATE = await currentDate();
    const EVENTS = await events();
    let pastEvents = [];

    for (let dateEvents of EVENTS) {
        if (dateEvents.date <= CURRENTDATE) {
            pastEvents.push(dateEvents);
        }
    }
    return pastEvents
}

// ordena el asistencia de mayor a menor
async function highestAsistPorcentaje() {
    const highesPorcentaje = await passEvents();
    const asistOrder = highesPorcentaje.sort((a, b) => b.assistancepercentage - a.assistancepercentage)
    console.log(asistOrder)
}
// ordena el asistencia de menor a mayor
async function lowerAsistPorcentaje() {
    const lowerPorcentaje = await passEvents();
    const asistOrder = lowerPorcentaje.sort((a, b) => a.assistancepercentage - b.assistancepercentage)
    console.log(asistOrder)
}


// Seccion de eventos futuros
// Trae los eventos en tiempo futuro
async function upComingEvents() {
    const CURRENTDATE = await currentDate();
    const EVENTS = await events();
    let upComingEvents = [];

    for (let dateEvents of EVENTS) {
        if (dateEvents.date >= CURRENTDATE) {
            upComingEvents.push(dateEvents);
        }
    }
    return upComingEvents
}


async function highestEspctPorcentaje() {
    const largestToSmallest = await upComingEvents()
    const estimatetOrder = largestToSmallest.sort((a, b) => b.estimatepercentage - a.estimatepercentage)
    console.log(estimatetOrder)
}

async function lowerEspctPorcentaje() {
    const largestToSmallest = await upComingEvents()
    const estimatetOrder = largestToSmallest.sort((a, b) => a.estimatepercentage - b.estimatepercentage)
    console.log(estimatetOrder)
}

async function statisticsPastEventsByCategory() {

    const pass_Events = await passEvents()
    const statistics = {}

    for (let item of pass_Events) {
        if (!statistics[item.category]) {
            statistics[item.category] = {
                totalRevenues: item.revenues,
                totalAssistance: item.assistance,
                totalCapacity: item.capacity
            };
        } else {
            statistics[item.category].totalRevenues += item.revenues;
            statistics[item.category].totalAssistance += item.assistance;
            statistics[item.category].totalCapacity += item.capacity;
        }

        for (let category in statistics) {
            statistics[category].assistancePercentage = Number(((statistics[category].totalAssistance / statistics[category].totalCapacity) * 100).toFixed(2));
        }
    }
}

async function statisticsUpComingEventsByCategory() {

    const pass_Events = await upComingEvents()
    const statistics = {}

    for (let item of pass_Events) {
        if (!statistics[item.category]) {
            statistics[item.category] = {
                totalRevenues: item.revenues,
                totalEstimate: item.estimate,
                totalCapacity: item.capacity
            };
        } else {
            statistics[item.category].totalRevenues += item.revenues;
            statistics[item.category].totalEstimate += item.estimate;
            statistics[item.category].totalCapacity += item.capacity;
        }

        for (let category in statistics) {
            statistics[category].estimatePercentage = Number(((statistics[category].totalEstimate / statistics[category].totalCapacity) * 100).toFixed(2));
        }
    }
}



statisticsPastEventsByCategory()

export { currentDate, events, getEventCategory, passEvents, upComingEvents }
