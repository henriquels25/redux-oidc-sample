import React from 'react';
import { useHistory } from "react-router-dom";

const Home = () => {
    const history = useHistory();

    return (
        <div>
            <h2>
                Home
            </h2>
            <button onClick={() => history.push("/admin")}>
                Go to Admin page
            </button>
        </div>
    );
}

export default Home;