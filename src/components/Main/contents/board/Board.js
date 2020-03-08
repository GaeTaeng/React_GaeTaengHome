import React from 'react';
import "./Board.css";

const post = [
    {
    'id':1,
    'title':"1 Post",
    'content':"내용1",
    'writer' : "김태훈",
    'date' : Date.now
  },
  {
    'id':2,
    'title':"2 Post",
    'content':"내용2",
    'writer' : "개탱",
    'date' : Date.now
  },
  {
    'id':3,
    'title':"3 Post",
    'content':"내용3",
    'writer' : "탱탱",
    'date' : Date.now
  },
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
            {
                post.map(p => {
                    return(
                        <PostView id={p.id} title={p.title} content={p.content} writer={p.writer} date={p.date} />
                    )
                })
            }
        </div>
    )
}

function PostView(props) {
    return(
        <div>
            <h2>{props.id} {props.title} {props.content} {props.writer} {props.date}</h2>
        </div>
    )
}



export default Board;
