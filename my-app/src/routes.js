import Home from './pages/Home';
import {Navigate} from 'react-router-dom';
const routes = [
    {
        path:'/',
        element:<Home/>
    },
    {
        path:"*",
        element: <Navigate to="/" replace />
    }
]
export default routes;