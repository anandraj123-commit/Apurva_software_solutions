import Home from './pages/Home';
import {Navigate} from 'react-router-dom';
import Blogs from './pages/blogs';
import HeroServices from './pages/services';
import MobileService from './pages/mobile-service';
import DiscussYourProject from './pages/DiscussYourProject';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import CustomWebApplication from './pages/CustomWebApplication';
import FrontEndDevelopmentService from './pages/FrontEndDevelopmentService';
import FullStackDevelopmentService from './pages/FullStackDevelopmentService';
import MobileAppDevelopment from './pages/MobileAppDevelopment';
import AndroidApplication from './pages/AndroidApplication';
import IosApplication from './pages/IosApplication';
import ReactNative from './pages/ReactNative';
import AllServices from './pages/AllServices';
import DigitalMarketing from './pages/digital-marketing';
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
        path:'full stack development service',
        element:<FullStackDevelopmentService/>
    },

    {
        path:'Android Application',
        element:<AndroidApplication/>
    },
    {
        path:'mobile app development',
        element:<MobileAppDevelopment/>
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
    },
    {
    path:'Ios Application',
    element:<IosApplication/>
    },
    {
        path:'React Native Application',
        element:<ReactNative/>
    },
    {
        path:'Services-We-Offer',
        element:<AllServices/>
    },
    {
        path:'Digital Marketing',
        element:<DigitalMarketing/>
    }
]
export default routes;