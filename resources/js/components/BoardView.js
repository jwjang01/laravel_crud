import React from "react";
import ReactDOM from "react-dom";
import "../../css/app.css";
import { useEffect, useState } from "react";
import axios from "axios";

const BoardView = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const response = axios.get("http://localhost:8000");
        const boardList = response.data;
        setData([...boardList]);
    }, []);

    return <h1>Board Home Page</h1>;
};

export default BoardView;

if (document.getElementById("boardView")) {
    ReactDOM.render(<BoardView />, document.getElementById("boardView"));
}
