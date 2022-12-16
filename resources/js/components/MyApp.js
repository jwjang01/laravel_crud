import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import BoardView from "./BoardView";
import BoardInput from "./BoardInput";
import BoardSingleView from "./BoardSingleView";
import BoardUpdate from "./BoardUpdate";

const MyApp = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<BoardView />} />
                <Route path="/create" element={<BoardInput />} />
                <Route path="/read/:idx" element={<BoardSingleView />} />
                <Route path="/update/:idx" element={<BoardUpdate />} />
            </Routes>
        </>
    );
};

export default MyApp;

if (document.getElementById("app")) {
    ReactDOM.render(
        <BrowserRouter>
            <MyApp />
        </BrowserRouter>,
        document.getElementById("app")
    );
}
