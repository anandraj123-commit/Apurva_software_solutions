import { BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import routes from './routes';
import ScrollToTop from './components/ScrollToTop';
function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
     <Routes>
      { routes.map((route,index)=>(
        <Route key={index} path = {route.path} element={route.element} />
      ))}
    </Routes>

    </BrowserRouter>
    
   
      

  );
}

export default App;
