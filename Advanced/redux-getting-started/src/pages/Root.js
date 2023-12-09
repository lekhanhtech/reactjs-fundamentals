import { Outlet, Link } from "react-router-dom";

export default function Root(){
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to={`/home`}>Home</Link>
                    </li>
                    <li>
                        <Link to={`products`}>Products</Link>
                    </li>
                    <li>
                        <Link to={`counter`}>Counter</Link>
                    </li>
                </ul>
            </nav>
            <div
                id="detail"
            >
                <Outlet />
            </div>
        </div>
    )
}