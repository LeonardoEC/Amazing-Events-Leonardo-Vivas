import { currentDate, events, getEventCategory, passEvents, upComingEvents } from "./data.js";


const nav__container = document.getElementById("nav__container")


async function mainIndex() {

}

const pages = [
    { title: "Home", url: "../../pages/home.html" },
    { title: "Upcoming Events", url: "url" },
    { title: "Past Events", url: "url" },
    { title: "Stats", url: "url" },
    { title: "Contact", url: "url" },
]


for (let nav__page of pages) {

    let btn__page = `
    <a class="nav__btn" href="${nav__page.url}">${nav__page.title}</a>
    `

    nav__container.innerHTML += btn__page;
}


mainIndex()