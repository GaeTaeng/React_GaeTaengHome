import React, { useEffect } from 'react';
import "./Board.css";

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import CircularProgress from '@material-ui/core/CircularProgress';

import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';

const useStyles = makeStyles({
    root: {
        overflowX: "auto",
        maxWidth: '100vh',
    },
    table: {
        minWidth: '100vh',
    },
    progress: {
        //mrgin: theme.spacing.unit * 2,
    },
});
export default function Board() {

    console.log("Board!!");
    return (
        <div id="Board">
            <PostList />
        </div>
    )
}

function PostList() {
    const classes = useStyles();
    const [posts, setPosts] = useState("");
    const [completed, setCompleted] = useState(0);
    const [timer, setTimer] = useState(null);
    async function callAPI() {
        const response = await fetch('/api/contents');
        const body = await response.json();
        console.log("BODY : " + body);
        return body;
    }

    function clear() {
        clearInterval(timer);
        console.log("CLEAR! timer " + timer);
    }
    useEffect(() => {
        function tick() {
            var oldCompleted = completed;
            setCompleted((oldCompleted) => (oldCompleted >= 100 ? 0 : oldCompleted + 1));
        }
        setTimer(setInterval(tick, 20));
        console.log("timer ::: " + timer)
        callAPI().then(setPosts);
         return () => {
             clear();
         }
    }, []);

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>ID!</TableCell>
                        <TableCell>TITLE</TableCell>
                        <TableCell>CONTENT</TableCell>
                        <TableCell>WRITER</TableCell>
                        <TableCell> DATE</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {posts ? console.log(posts) : console.log("posts is Null")}
                    {posts ? posts.map((p, index) => {
                        return (
                            <PostView key={index} id={p.id} title={p.title} content={p.content} writer={p.writer} date={p.date} finish={clear()} />
                        )
                    }) :
                        <TableRow>
                            <TableCell colSpan='5' align="center">
                                <CircularProgress variant="determinate" value={completed} />
                            </TableCell>
                        </TableRow>
                    }
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
