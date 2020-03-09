import React from 'react';
import "./Board.css";

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';


import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        width: '100vh',
        overflowX: "auto"
    },
    table: {
        minWidth: "100vh"
    }
});

const post = [
    {
        'id': 1,
        'title': "1 Post",
        'content': "내용1",
        'writer': "ㄱㅌ",
        'date': Date.now.toString
    },
    {
        'id': 2,
        'title': "2 Post",
        'content': "내용2",
        'writer': "힁흐이희잏이ㅣ",
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

export default function Board() {
    return (
        <div id="Board">
            <PostList />
        </div>
    )
}



function PostList() {
    const classes = useStyles();
    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>TITLE</TableCell>
                        <TableCell>CONTENT</TableCell>
                        <TableCell>WRITER</TableCell>
                        <TableCell> DATE</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {post.map(p => {
                        return (
                            <PostView id={p.id} title={p.title} content={p.content} writer={p.writer} date={p.date} />
                        )
                    })}
                </TableBody>

            </Table>
        </Paper>
    )
}

function PostView(props) {
    return (
        <TableRow>
            <TableCell>{props.id}</TableCell>
            <TableCell>{props.title}</TableCell>
            <TableCell>{props.content}</TableCell>
            <TableCell>{props.writer}</TableCell>
            <TableCell>{props.date}</TableCell>
        </TableRow>
    )
}
