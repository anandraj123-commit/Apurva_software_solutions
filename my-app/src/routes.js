import Home from './pages/Home';
import {Navigate} from 'react-router-dom';
import Blogs from './pages/blogs';
import Blog from './pages/blog';
import HeroServices from './pages/services';
import MobileService from './pages/mobile-service';
import DiscussYourProject from './pages/DiscussYourProject';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import CustomWebApplication from './pages/CustomWebApplication';
import FrontEndDevelopmentService from './pages/FrontEndDevelopmentService';
const routes = [
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'/custom web application',
        element:<CustomWebApplication/>
    },
    {
        path:'front end services',
        element:<FrontEndDevelopmentService/>
    },
    {
        path:'/about',
        element:<AboutUs/>
    },
    {
        path:'/contact',
        element:<ContactUs/>
    },
    {
        path:'blogs',
        element:<Blogs/>
    },
    {
        path:'discussYourProject',
        element:<DiscussYourProject/>
    },
    {
        path: 'blog',          // blog detail with query params
        element: <Blogs />
      },

      {
        path: 'MobileService', 
        element:<MobileService/>
      },
    {
        path:"*",
        element: <Navigate to="/" replace />
    },
    {
        path:'services',
        element:<HeroServices/>
    }
]
export default routes;