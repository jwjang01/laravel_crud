import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../../css/app.css";

const BoardUpdate = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const idx = location.state.idx;

    const handleTitle = (e) => {
        setTitle(e.target.value);
    };

    const handleContent = (e) => {
        setContent(e.target.value);
    };

    const handleAuthor = (e) => {
        setAuthor(e.target.value);
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        // console.log(title, content, author);
        const data = {
            title,
            content,
            author,
        };
        const response = await axios.post(
            `http://localhost:8000/api/board/update/${idx}`,
            data
        );
        // console.log(response.data);
        const { error, updated } = response.data;

        if (!error && updated) {
            alert("게시글이 수정되었습니다.");
            navigate("/");
        }
    };

    useEffect(async () => {
        const response = await axios.get(
            `http://localhost:8000/api/board/single/${idx}`
        );
        // console.log(response.data);
        const { title, content, author } = response.data;
        setTitle(title);
        setContent(content);
        setAuthor(author);
    }, []);

    return (
        <div className="board">
            <h1>Update Page</h1>
            <form onSubmit={submitHandler}>
                <ul>
                    <li>
                        <span>번호 : </span>
                        <span>{idx}</span>
                    </li>
                    <li>
                        <span>제목 : </span>
                        <input
                            type="text"
                            name="title"
                            className="input-box"
                            value={title}
                            onChange={handleTitle}
                        />
                    </li>
                    <li>
                        <span>내용 : </span>
                        <textarea
                            name="content"
                            className="content-box"
                            value={content}
                            onChange={handleContent}
                        />
                    </li>
                    <li>
                        <span>작성자 : </span>
                        <input
                            type="text"
                            name="author"
                            className="input-box"
                            value={author}
                            onChange={handleAuthor}
                        />
                    </li>
                </ul>
                <button type="submit">update</button>
            </form>
        </div>
    );
};

export default BoardUpdate;
