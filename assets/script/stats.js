// Variables
/*
const url = "https://mindhub-xj03.onrender.com/api/amazing"
console.log(url)

const GETEVENTS = async () => {
    const reponse = await fetch(url)
    const dataEvents = await reponse.json()
    return dataEvents.events
}

GETEVENTS()
*/
// procesamiento de datos
//forma 1 -> presenta errores
// const datos = () => {
//     fetch(url)
//     .then(res => res.json())
//     .then((dato) => {return dato})
// }

// console.log(datos())

// console.log(events())
//------------------------------------------------------------------------------------------------
// forma 2 -> posible solucion
// fetch(url)
// .then(res => res.json())
// .then(dato => {
//     let events = dato.events
//     let currentDate = dato.currentDate
//     let filtByName = events.map(ename => ename.name)
//     let filtByDate = events.map(edate => edate.date)
//     let eventCategory = events.map(ecategory => ecategory.category)
//     let filtByCategory = eventCategory.reduce((a,e) => {
//         if(!a.includes(e)){
//             a.push(e)
//         }
//         return a
//     },[])
// })
// .catch(error => console.log(error))

//------------------------------------------------------------------------------------------------
// const getUserDato = async () => {
//     const getFetch = await fetch(url)
//     const getdato = await getFetch.json()
//     showdata(getdato)
// }

// const showdata = (dato) => {
//     console.log(dato)
// }
// showdata()
//------------------------------------------------------------------------------------------------




















// filtrar datos




// render de tabla







