import logo from './logo.svg';
import {Button, Navbar, Container, Nav} from 'react-bootstrap';
import './App.css';


function App() {
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
        </div>
    );
}

export default App;
