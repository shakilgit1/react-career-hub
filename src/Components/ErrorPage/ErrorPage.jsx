import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2>Oops!!!</h2>
            <NavLink to="/">Go back to home</NavLink>
        </div>
    );
};

export default ErrorPage;