import { Link } from "react-router-dom";

export default function NotFound() {

    return (
        <>
            <h1>Oops! <br /> 404 Not Found</h1>
            <br />
            <Link to="/" >
                <button >Volver Home</button>
            </Link>
        </>
    )
}