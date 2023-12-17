import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './pages/Header';
import Landingpage from './pages/Landingpage';
import Footer from './pages/Footer';
import About from './pages/About';
import Contact from './pages/Contact';

const App=()=>{
    return (
        <div class="app">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

const appRouter=createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Error/>,
        children: [
            {
                path: "/",
                element: <Landingpage/>
            },
            {
                path: "/about",
                element: <About/> 
             },
             {
                path: "/contact",
                element: <Contact/>
             },

        ]
    },

]);


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);