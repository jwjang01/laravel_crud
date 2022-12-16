import React from "react";
import ReactDOM from "react-dom";
import "../../css/app.css";
import { useNavigate } from "react-router-dom";

function BoardInput() {
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        const { title, content, author } = e.target;
        const boardData = {
            title: title.value,
            content: content.value,
            author: author.value,
        };
        // console.log("boardData", boardData);
        alert("게시글이 등록되었습니다.");
        navigate("/");
    };

    return (
        <div className="board">
            <h1>Board Write Page</h1>
            <form onSubmit={submitHandler}>
                <ul>
                    <li>
                        <span>제목 : </span>
                        <input
                            type="text"
                            name="title"
                            className="input-box"
                            placeholder="title"
                        />
                    </li>
                    <li>
                        <span>내용 : </span>
                        <textarea
                            name="content"
                            className="content-box"
                            placeholder="write down your contents"
                        />
                    </li>
                    <li>
                        <span>작성자 : </span>
                        <input
                            type="text"
                            name="author"
                            className="input-box"
                            placeholder="author"
                        />
                    </li>
                </ul>
                <button type="submit">register</button>
            </form>
        </div>
    );
}

export default BoardInput;

if (document.getElementById("boardInput")) {
    ReactDOM.render(<BoardInput />, document.getElementById("boardInput"));
}
