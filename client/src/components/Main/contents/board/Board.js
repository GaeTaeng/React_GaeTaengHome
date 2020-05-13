import React, { useEffect } from 'react';
import "./Board.css";
import "./NewPost"
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import CircularProgress from '@material-ui/core/CircularProgress';

import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import NewPost from './NewPost';

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
    const [checkstate, setcheckState] = useState("BOARD");
    async function callAPI() {
        const response = await fetch('http://gaetaeng.com:5000/api/contents');
        const body = await response.json();
        return body;
    }

    function clearTimer() {
        clearInterval(timer);
        console.log("CLEAR! timer " + timer);
    }
    useEffect(() => {
        function tick() {
            let oldCompleted = completed;
            setCompleted((oldCompleted) => (oldCompleted >= 100 ? 0 : oldCompleted + 1));
        }
        setTimer(setInterval(tick, 20));
        console.log("timer ::: " + timer)
        callAPI().then(setPosts);
         return () => {
            clearTimer();
         }
    }, []);
    function onClickCreatePost() {
        setcheckState("NEW");
    }

    var checkStateval = (SELECTSTATE) => {
        setcheckState(SELECTSTATE);
      }
    return (
        <div>
            {checkstate === "BOARD" ?
        <Paper className={classes.root}>
            <Table>
                <TableHead>
                    <TableRow>Mysql(MariaDB) + Material UI를 사용하였습니다.</TableRow>
                </TableHead>
            </Table>
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
                            <PostView key={index} id={p.id} title={p.title} content={p.content} writer={p.writer} date={p.date} finish={clearTimer()} />
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
            <button onClick = {onClickCreatePost}>글쓰기</button>
        </Paper>
        :
        <NewPost checkstate={checkStateval}/>
        }
        {console.log(checkstate)}
        </div>
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
