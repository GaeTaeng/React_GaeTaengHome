import React from 'react'

export default function PatchNote() {

    return(
        <element id="patchnote">
            <table>
                <thead>
                    <td>날짜</td><td>내용</td>
                </thead>
                <tbody>
                    <tr>
                        <td>2020년 5월 14일</td>
                        <td>Mysql(MariaDB) - node.js Express 연동 에러 해결</td>
                    </tr>
                    <tr>                    
                    <td>2020년 5월 14일</td>
                    <td>게시판 UI 수정 && 글쓰는 공간 만들기만 함.</td>
                    </tr>
                    <tr>
                    <td>2020년 5월 15일</td>
                    <td>패치노트 생성 && 이전까지의 패치노트는 작성 X</td>
                    </tr>
                    <tr>
                    <td>2020년 5월 15일</td>
                    <td>Navigation Bar 화면 크기에 따라 width값 조정</td>
                    </tr>
                </tbody>
            </table>
        </element>
    )
}