import React from "react";
import ReactMarkdown from "react-markdown";
import {useParams} from "react-router-dom";
import Profile from "../molecules/Profile";
import styled from "styled-components";

interface ParamTypes {
    id: string
}

const BoardContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
`
const MarkdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 5%;
  width: 80%;

`

const Board = () => {
    let {id} = useParams<ParamTypes>();
    const {data} = require(`../markdown/${id}.js`)

    return (
        <BoardContainer>
            <Profile/>
            <MarkdownContainer>
                <ReactMarkdown>
                    {data.contents}
                </ReactMarkdown>
            </MarkdownContainer>
        </BoardContainer>

    )
}

export default Board;
