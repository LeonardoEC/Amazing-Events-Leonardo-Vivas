import { createBrowserRouter } from "react-router-dom";

import MAIN from "../layout/Main";

import HOME from "../pages/home/home";
import UPCOMINGEVENTS from "../pages/upcoming-events/upComingEvents";
import PASTEVENT from "../pages/past-events/pastEvent";

const router = createBrowserRouter([
    {
        path:'/',
        element: <MAIN />,
        children:[
            {
                path:'/home',
                element: <HOME />
            },
            {
                path:'/upcomingEvents',
                element: <UPCOMINGEVENTS />
            },
            {
                path:'/pastEvent',
                element: <PASTEVENT />
            }
        ]
    }
])

export default router