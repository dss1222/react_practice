/*eslint-disable*/

import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    let [글제목, 글제목변경] =  useState(['남자 코트 추천', '강남 우동 맛집','파이썬 독학']);
    let [따봉, 따봉변경] = useState([0,0,0]);
    let [modal, setModal] = useState(false);
    let [title, setTitle] = useState(0);
    let [입력값, 입력값변경] = useState('');

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

            {/*<div className="list">*/}
            {/*    <h4> {글제목[0]} <span onClick={() => {*/}
            {/*        따봉변경(따봉 + 1)*/}
            {/*    }}>👍</span> {따봉} </h4>*/}
            {/*    <p>5월 29일 발행</p>*/}
            {/*    <hr/>*/}
            {/*</div>*/}
            {/*<div className="list">*/}
            {/*    <h4> {글제목[1]}</h4>*/}
            {/*    <p>5월 30일 발행</p>*/}
            {/*    <hr/>*/}
            {/*</div>*/}
            {/*<div className="list">*/}
            {/*    <h4 onClick={ () => {setModal(!modal)}}> {글제목[2]}</h4>*/}
            {/*    <p>5월 31일 발행</p>*/}
            {/*    <hr/>*/}
            {/*</div>*/}

            {
                글제목.map(function (a, i){
                    return (
                        <div className="list" key={i}>
                            <h4 onClick={()=>{setModal(!modal); setTitle(i)}}> {글제목[i]} <span onClick={(e)=>{e.stopPropagation();
                                let copy = [...따봉];
                                copy[i] = copy[i]+1;
                                따봉변경(copy)
                            }}>👍</span>{따봉[i]}</h4>
                            <p>5월 30일 발행</p>
                            <button onClick={()=>{
                                let copy = [...글제목];
                                copy.splice(i, 1);
                                글제목변경(copy);
                            }}>삭제</button>
                            <hr/>
                        </div>
                    )
                })
            }

            <input onChange={(e)=>{입력값변경(e.target.value);}}/>
            <button onClick={()=>{
                let copy = [...글제목];
                copy.unshift(입력값)
                글제목변경(copy)
            }}>글발행</button>

            {
                modal == true ? <Modal title={title} 글제목={글제목} 제목바꾸기={제목바꾸기}/> : null
            }

        </div>
    );
}

function Modal(props) {
    return(
        <div className="modal">
            <h2>{props.글제목[props.title]}</h2>
            <p>날짜</p>
            <p>상세내용</p>
            <button onClick={props.제목바꾸기}>글수정</button>
        </div>
    )
}

export default App;
