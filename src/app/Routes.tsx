import { RouteObject, createBrowserRouter } from 'react-router-dom';
import App from './layout/App';
import Home from './Home';
import Projects from './Projects';
import About from './About';
import Reactivities from './Reactivities';


export const routes: RouteObject[] = [
    {
        element: <App />,
        children: [
            { path: '/', element: <Home /> },
            { path: 'projects', element: <Projects /> },
            { path: 'about', element: <About /> },
            { path: '/projects/reactivities', element: <Reactivities /> },
            { path: '*', element: <Home /> }
        ]
    }
]

export const router = createBrowserRouter(routes);