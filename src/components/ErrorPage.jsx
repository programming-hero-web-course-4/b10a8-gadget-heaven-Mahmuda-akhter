
import { NavLink, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();


    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-700">
            <h1 className="text-6xl font-bold text-red-500">Oops!</h1>
            <p className="text-2xl mt-4">Something went wrong.</p>
            <p className="mt-2 text-center">
                {error?.statusText || error?.message || "An unexpected error occurred."}
            </p>
            <NavLink
                to="/"
                className="mt-6 px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
            >
                Go Back Home
            </NavLink>
        </div>
    );
};

export default ErrorPage;
