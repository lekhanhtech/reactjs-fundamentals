import { createBrowserRouter } from "react-router-dom";
import { 
    Root,
    Home,
    Products,
    Counter,
} from './pages';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/home",
                element: <Home />,
                },
            {
            path: "products",
            element: <Products />,
            },
            {
                path: "counter",
                element: <Counter />,
            },
        ]
    },
]);

export default router;
