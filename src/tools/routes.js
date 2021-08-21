
import Main from "../pages/Main"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Shop from "../pages/Shop"
import AboutUs from "../pages/AboutUs"
import Contact from "../pages/Contact"
import Cards from "../pages/Cards"
import NotFound from "../pages/NotFound"
import More from "../pages/More"

export const routes = [
        {
            path: "/",
            component: Main
        },
        {
            path: "/login",
            component: Login
        },
        {
            path: "/home",
            component: Home
        },
        {   path: "/home/shop",
            component: Shop  
        },
        {   
            path: "/home/about",
            component: AboutUs
        },
        {
            path: "/home/contact",
            component: Contact
        },
        {
            path: "/cards",
            component: Cards
        },
        {
            path: "/home/shop/:url",
            component: More
        },
        {
            path: "*",
            component: NotFound
        },

]