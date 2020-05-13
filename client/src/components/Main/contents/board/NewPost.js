import React from 'react'

export default function NewPost(props) {
    const {checkstate} = props;
    return(
        <div>
            아직 구현 중 !!!! <br />
            제목 : <input /> <br />
            내용 : <input /> <br />
            <button onClick = { () => checkstate("BOARD")}>등록</button> <button onClick = { () => checkstate("BOARD")}>취소</button>
        </div>
    )
}