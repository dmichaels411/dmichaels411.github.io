import { RouteObject, createBrowserRouter } from 'react-router-dom';
import App from './layout/App';
import Home from './Home';
import Projects from './Projects';
import Resume from './Resume';
import About from './About';
import Contact from './Contact';


export const routes: RouteObject[] = [
    {
        element: <App />,
        children: [
            { path: '/', element: <Home /> },
            { path: 'projects', element: <Projects /> },
            { path: 'resume', element: <Resume /> },
            { path: 'about', element: <About /> },
            { path: 'contact', element: <Contact /> },
            { path: '*', element: <Home /> }
        ]
    }
]

export const router = createBrowserRouter(routes);