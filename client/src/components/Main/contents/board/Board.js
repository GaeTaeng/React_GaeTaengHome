import React, { useEffect } from 'react';
import "./Board.css";

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';


import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';

const useStyles = makeStyles({
    root: {
        overflowX: "auto",
        maxWidth:'100vh',
    },
    table: {
        minWidth:'100vh',
    }
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
    /*componentDidMount() {
        this.callApi().then(res => this.setState({posts:res}))
        .catch(err => console.log(err));
    }
    */
    console.log("PostList!!");
    useEffect(() => {
        async function callAPI() {
            const response = await fetch('/api/post');
            const body = await response.json();
            console.log("BODY : " + body);
            return body;
        }
        console.log("callAPI. . .");
        callAPI().then(
            (res) => { setPosts(res)}
        );

       // this.callApi().then(res => this.setState({posts:res}))
        //.catch(err => console.log(err));
        /*
        callApi = async () => {
            const response = await fetch('/api/post');
            const body = await response.json();
            return body;
        }.then(
            
        )
        */
    },[]);

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
                    {posts ? posts.map(p => {
                        return (
                            <PostView id={p.id} title={p.title} content={p.content} writer={p.writer} date={p.date} />
                        )
                    }) : console.log("posts is Null")}
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
