import React, {useState} from 'react'

export default function NewPost(props) {
    const {checkstate} = props;
    const initialFormState = {title: '', contents: '', writer: ''};

    const [post, setPost] = useState(initialFormState);
    function handleInputChange(event) {
        const {title, writer, contents} = event.target;
        setPost({[title]:title, [contents]:contents, [writer]:writer});
    }

async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch('http://gaetaeng.com:5000/api/contents', {
        method: 'POST',
        body:JSON.stringify(post)
    });
    
    setPost(initialFormState)
    checkstate("GITHUB");
    checkstate("BOARD");
}

    function onclickCancle() {
        setPost(initialFormState)
        checkstate("GITHUB");
        checkstate("BOARD");
    }

    return(
        <div>
            <form  onSubmit={handleSubmit}>
            아직 구현 중 !!!! <br />
            제목 : <input value={post.title} type="text" name="title" onChange={handleInputChange}/>
            작성자 : <input value = {post.writer} type="text" name="writer" onChange={handleInputChange}/>
            <br />
            내용 : <input value={post.contents} type="text" name="contents" onChange={handleInputChange}/>
            <br />
            <button onClick={handleSubmit}>등록</button> <button onClick = {onclickCancle}>취소</button>
            </form>
        </div>
    )
}