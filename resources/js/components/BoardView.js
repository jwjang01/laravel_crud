import React from "react";
import ReactDOM from "react-dom";
import "../../css/app.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const BoardView = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const navigator = () => {
        navigate("/create");
    };

    const setBoardList = () => {
        return data.map((v, k) => {
            return (
                <tr key={k}>
                    <td>{v.id}</td>
                    <td>
                        <Link to={`/read/${v.id}`}>{v.title}</Link>
                    </td>
                    <td>{v.author}</td>
                </tr>
            );
        });
    };

    useEffect(async () => {
        const response = await axios.get(
            "http://localhost:8000/api/board/list"
        );
        const boardList = response.data;
        setData([...boardList]);
    }, []);

    return (
        <>
            <h1>Board Home Page</h1>
            <table>
                <thead>
                    <tr>
                        <th>index</th>
                        <th>title</th>
                        <th>author</th>
                    </tr>
                </thead>
                <tbody>{setBoardList()}</tbody>
            </table>
            <button onClick={navigator}>write</button>
        </>
    );
};

export default BoardView;

// if (document.getElementById("boardView")) {
//     ReactDOM.render(<BoardView />, document.getElementById("boardView"));
// }
