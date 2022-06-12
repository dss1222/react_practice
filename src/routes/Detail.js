import {useParams} from 'react-router-dom';
import styled from 'styled-components';

import {useState, useEffect} from 'react';

function Detail(props) {

    useEffect(()=>{
        console.log('안녕')
    })

    setTimeout(()=>{}, 2000)

    let[count, setCount] = useState(0)

    let {id} = useParams();
    let 찾은상품 = props.shoes.find(function(x){
        return x.id == id
    });

    return (
        <div className="container">
            <div className="alert alert-warning">2초이내 구매시 할인</div>
            {count}
            <button onClick={()=>{setCount(count+1) }}>버튼</button>
            <div className="row">
                <div className="col-md-6">
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{찾은상품.title}</h4>
                    <p>{찾은상품.content}</p>
                    <p>{찾은상품.price}원</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    )
};

export default Detail;