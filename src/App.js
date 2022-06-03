import {useState} from "react";
import logo from './logo.svg';
import {Button, Navbar, Container, Nav} from 'react-bootstrap';
import './App.css';
import data from './data.js';

function App() {

    let [shoes] = useState(data);

    return (
        <div className="App">
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <div className="main-bg"></div>

            <div className="container">
                <div className="row">
                    {
                        shoes.map((a, i)=>{
                            return(
                                
                                <Card shoes={shoes[i]} i = {i}></Card>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    );
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
