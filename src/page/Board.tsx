import React from "react";
import ReactMarkdown from "react-markdown";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
} from "react-router-dom";
interface ParamTypes {
    id: string
}
const Board = () => {
    let {id} = useParams<ParamTypes>();
    const {data} = require(`../markdown/${id}.js`)

    return (
        <div>
            <ReactMarkdown>
                {data.contents}
            </ReactMarkdown>
        </div>

    )
}

export default Board;
