import Home from './pages/Home';
import {Navigate} from 'react-router-dom';
import Blogs from './pages/blogs';
import Blog from './pages/blog';
const routes = [
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'blogs',
        element:<Blogs/>
    },
    {
        path: 'blog',          // blog detail with query params
        element: <Blog />
      },
    {
        path:"*",
        element: <Navigate to="/" replace />
    }
]
export default routes;