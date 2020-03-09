import React from 'react';
import "./Board.css";


import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const post = [
    {
        'id': 1,
        'title': "1 Post",
        'content': "내용1",
        'writer': "김태훈",
        'date': Date.now.toString
    },
    {
        'id': 2,
        'title': "2 Post",
        'content': "내용2",
        'writer': "fmldlmdd",
        'date': Date.now.toString
    },
    {
        'id': 3,
        'title': "3 Post",
        'content': "내용3",
        'writer': "탱탱",
        'date': Date.now.toString
    }
]

function Board() {
    return (
        <div>
            <PostList />
        </div>
    )
}



function PostList() {
    return (
        <div>
        <TableHead>
            <TableCell>ID</TableCell>
            <TableCell>TITLE</TableCell>
            <TableCell>CONTENT</TableCell>
            <TableCell>WRITER</TableCell>
            <TableCell>DATE</TableCell>
        </TableHead>
            {
                post.map(p => {
                    return (
                        <PostView id={p.id} title={p.title} content={p.content} writer={p.writer} date={p.date} />

                    )
                })
            }
        </div>
    )
}

function PostView(props) {
    return (
        <div>
            <TableRow>

                <TableCell>{props.id}</TableCell>
                <TableCell>{props.title}</TableCell>
                <TableCell>{props.content}</TableCell>
                <TableCell>{props.writer}</TableCell>
                <TableCell> {props.date}</TableCell>
            </TableRow>
        </div>
    )
}



export default Board;
