/* esLing-disable*/

import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    let [글제목, 글제목변경] =  useState(['남자 코트 추천', '강남 우동 맛집','파이썬 독학']);
    let [따봉, 따봉변경] = useState(0);
    let posts = '고기 맛집'  //서버에서 가져온 데이터라고 치자

    function 제목바꾸기() {
        let newArray = [...글제목]; //deep copy 이건  복사가 아니라 값 공유임, reference data tpye 특징 (참조형 데이터)
        newArray[0] = '여자 코트 추천';
        글제목변경(newArray); //state를 아예 대체하는 함수
    }

    function sortedTitle() {
        let newArray = [...글제목];
        newArray.sort();
        글제목변경(newArray)
    }

    return (
        <div className="App">
            <div className="black-nav">
                <div>개발 Blog</div>
            </div>
            <button onClick={제목바꾸기}>버튼</button>
            <button onClick={sortedTitle}>버튼</button>
            <div className="list">
                <h4> {글제목[0]} <span onClick={() => {
                    따봉변경(따봉 + 1)
                }}>👍</span> {따봉} </h4>
                <p>5월 29일 발행</p>
                <hr/>
            </div>
            <div className="list">
                <h4> {글제목[1]}</h4>
                <p>5월 30일 발행</p>
                <hr/>
            </div>
            <div className="list">
                <h4> {글제목[2]}</h4>
                <p>5월 31일 발행</p>
                <hr/>
            </div>

            <Modal/>

        </div>
    );
}

function Modal() {
    return(
        <div className="modal">
            <h2>제목</h2>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    )
}

export default App;
