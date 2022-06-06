import {useState} from "react";
import logo from './logo.svg';
import {Button, Navbar, Container, Nav} from 'react-bootstrap';
import './App.css';
import data from './data.js';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';
import Detail from './routes/Detail.js'

function App() {

    let [shoes] = useState(data);
    let navigate = useNavigate();

    return (
        <div className="App">

            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
                        <Nav.Link onClick={()=>{navigate('/detail')}}>Detail</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Link to="/">홈</Link>
            <Link to="/detail">상세페이지</Link>
            
            <Routes>
                <Route path="/" element={<div>
                    <div className="main-bg"></div>
                    <div className="container">
                        <div className="row">
                            {shoes.map((a, i)=>{
                                return <Card shoes={shoes[i]} i = {i}></Card>
                            })}
                        </div>
                    </div>
                </div>} />
                <Route path="/detail/:id" element={<Detail shoes={shoes}/>} />
            </Routes>

        </div>
    );
}

function About() {
    return(
        <div>
            <h4>회사 정보임</h4>
            <Outlet></Outlet>
        </div>
    )
}

function Card(props) {
    return(
        <div className="col-md-4">
            <img src={'https://codingapple1.github.io/shop/shoes'+ (props.i+1) +'.jpg'} width="80%"/>
            <h4>{props.shoes.title}</h4>
            <p>{props.shoes.content}</p>
            <p>{props.shoes.price}</p>
        </div>
    )
}

export default App;
