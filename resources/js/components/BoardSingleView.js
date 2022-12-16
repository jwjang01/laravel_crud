import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "../../css/app.css";

const BoardSingleView = () => {
    const { idx } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState(null);

    const deleteHandler = async () => {
        const response = await axios.get(
            `http://localhost:8000/api/board/delete/${idx}`
        );
        const { error, deleted } = response.data;

        if (!error && deleted) {
            alert("게시글이 삭제되었습니다.");
            navigate("/");
        }
    };

    const updateHandler = () => {
        navigate(`/update/${idx}`, {
            state: {
                idx,
            },
        });
    };

    useEffect(async () => {
        const response = await axios.get(
            `http://localhost:8000/api/board/single/${idx}`
        );
        // console.log(response.data);
        setData(response.data);
    }, []);

    return (
        <>
            <h1>Board View Page</h1>
            <div>
                <ul>
                    <li>
                        <span>번호 : </span>
                        <span>{data?.id}</span>
                    </li>
                    <li>
                        <span>제목 : </span>
                        <span>{data?.title}</span>
                    </li>
                    <li>
                        <span>내용 : </span>
                        <div>{data?.content}</div>
                    </li>
                    <li>
                        <span>작성자 : </span>
                        <span>{data?.author}</span>
                    </li>
                </ul>
            </div>
            <button onClick={deleteHandler}>delete</button>
            <button onClick={updateHandler}>update</button>
        </>
    );
};

export default BoardSingleView;
